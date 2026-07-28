#!/usr/bin/env bash
#
# deploy.sh — One-command deployment for Clipe Consult on the Webuzo VPS.
#
# Run this on the VPS after `git pull` to:
#   1. Check / find an available port (avoid conflicts with other Webuzo sites)
#   2. Install dependencies (bun install --frozen-lockfile)
#   3. Run the production build (next build)
#   4. Copy static assets and public/ into the standalone output
#   5. Restart PM2 so the new build is live
#
# Usage:
#   bash deploy.sh             # full deploy
#   bash deploy.sh --no-build  # restart only (skip install + build)
#   PORT=3100 bash deploy.sh   # use a specific port (skips auto-detect)
#
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${PROJECT_DIR}"

# Colors for nicer output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Clipe Consult — Deploying to Webuzo VPS${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

NO_BUILD=false
[[ "${1:-}" == "--no-build" ]] && NO_BUILD=true

if [[ ! -f ".env" && ! -f ".env.local" ]]; then
  echo -e "${YELLOW}⚠  Warning:${NC} no .env file found."
  echo -e "   Copy .env.example to .env and fill in real values before deploying."
  echo ""
fi

# ─────────────────────────────────────────────────────────────────────────────
# PORT CHECK — find an available port to avoid conflicts with other Webuzo sites
# ─────────────────────────────────────────────────────────────────────────────
# Load PORT from .env if it's set there
if [[ -f ".env" ]]; then
  # shellcheck disable=SC1091
  set -a; source .env 2>/dev/null || true; set +a
fi

if [[ -z "${PORT:-}" ]]; then
  echo -e "${GREEN}→ [0/4] No PORT set — scanning for an available port...${NC}"
  # Try common Next.js ports first
  for p in 3000 3001 3002 3003 3004 3005 3006 3007 3008 3009 3010; do
    if ! ss -ltn 2>/dev/null | awk '{print $4}' | grep -qE "[:.]${p}\$"; then
      PORT="${p}"
      break
    fi
  done

  if [[ -z "${PORT:-}" ]]; then
    # Try alternative ranges
    for p in 8080 8081 8082 8083 8084 8085; do
      if ! ss -ltn 2>/dev/null | awk '{print $4}' | grep -qE "[:.]${p}\$"; then
        PORT="${p}"
        break
      fi
    done
  fi

  if [[ -z "${PORT:-}" ]]; then
    echo -e "${RED}✗ No free port found in the default range (3000-3010, 8080-8085).${NC}"
    echo -e "${YELLOW}  Run: bash scripts/check-port.sh 9000 9100${NC} to scan a wider range,"
    echo -e "  then add PORT=<chosen-port> to your .env file and re-run this script."
    exit 1
  fi

  echo -e "  ${GREEN}✓${NC} Using port ${GREEN}${PORT}${NC}"
  echo -e "  ${YELLOW}⚠${NC} To make this permanent, add to .env:"
  echo -e "     PORT=${PORT}"
  echo ""
  # Export for this run so PM2 picks it up
  export PORT
else
  # Verify the chosen port is actually free
  if ss -ltn 2>/dev/null | awk '{print $4}' | grep -qE "[:.]${PORT}\$"; then
    # If it's our own PM2 process, that's fine — we'll restart it
    if ! pm2 status 2>/dev/null | grep -q "clipe-consult.*online"; then
      echo -e "${RED}✗ Port ${PORT} is already in use by another process.${NC}"
      echo -e "${YELLOW}  Run: bash scripts/check-port.sh${NC} to find a free port."
      exit 1
    fi
  fi
  echo -e "${GREEN}→ [0/4] Using PORT=${PORT} (from .env or shell env)${NC}"
  echo ""
fi

if [[ "${NO_BUILD}" == "false" ]]; then
  echo -e "${GREEN}→ [1/4] Installing dependencies...${NC}"
  if command -v bun >/dev/null 2>&1; then
    bun install --frozen-lockfile
  elif command -v npm >/dev/null 2>&1; then
    npm ci
  else
    echo -e "${RED}✗ Neither bun nor npm is installed.${NC}"
    exit 1
  fi
  echo ""

  echo -e "${GREEN}→ [2/4] Building Next.js (production)...${NC}"
  if command -v bun >/dev/null 2>&1; then
    bun run build
  else
    npm run build
  fi
  echo ""

  echo -e "${GREEN}→ [3/4] Verifying standalone output...${NC}"
  if [[ ! -f ".next/standalone/server.js" ]]; then
    echo -e "${RED}✗ Build failed: .next/standalone/server.js not found.${NC}"
    exit 1
  fi
  # The build script already copies static + public into standalone (see package.json),
  # but we re-copy just to be safe across Next.js versions.
  cp -r .next/static .next/standalone/.next/ 2>/dev/null || true
  cp -r public .next/standalone/ 2>/dev/null || true
  echo -e "   ✓ standalone server ready at .next/standalone/server.js"
  echo ""
fi

echo -e "${GREEN}→ [4/4] Restarting PM2 process on port ${PORT}...${NC}"
if command -v pm2 >/dev/null 2>&1; then
  # Pass PORT explicitly so PM2 uses it even if .env loading is flaky
  PORT="${PORT}" pm2 restart ecosystem.config.cjs --env production --update-env 2>/dev/null \
    || PORT="${PORT}" pm2 start ecosystem.config.cjs --env production
  sleep 2
  pm2 status clipe-consult
  echo ""
  echo -e "${GREEN}✓ Deployment complete!${NC}"
  echo ""
  echo -e "  App URL:      http://localhost:${PORT}"
  echo -e "  Health check: curl http://localhost:${PORT}/api/health"
  echo -e "  PM2 logs:     pm2 logs clipe-consult"
  echo -e "  PM2 status:   pm2 status"
  echo ""
  echo -e "${YELLOW}⚠  Don't forget:${NC} point your Nginx/Apache reverse proxy at"
  echo -e "  ${BLUE}http://127.0.0.1:${PORT}${NC} for your domain."
else
  echo -e "${YELLOW}⚠  PM2 not installed.${NC}"
  echo -e "   Install it with:  npm install -g pm2"
  echo -e "   Then run:         PORT=${PORT} pm2 start ecosystem.config.cjs --env production"
  echo ""
  echo -e "${GREEN}✓ Build complete — start the server manually with:${NC}"
  echo -e "   PORT=${PORT} NODE_ENV=production node .next/standalone/server.js"
fi
