#!/usr/bin/env bash
#
# deploy.sh — One-command deployment for Clipe Consult on the Webuzo VPS.
#
# Run this on the VPS after `git pull` to:
#   1. Install dependencies (bun install --frozen-lockfile)
#   2. Run the production build (next build)
#   3. Copy static assets and public/ into the standalone output
#   4. Restart PM2 so the new build is live
#
# Usage:
#   bash deploy.sh             # full deploy
#   bash deploy.sh --no-build  # restart only (skip install + build)
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

echo -e "${GREEN}→ [4/4] Restarting PM2 process...${NC}"
if command -v pm2 >/dev/null 2>&1; then
  pm2 restart ecosystem.config.cjs --env production --update-env
  sleep 2
  pm2 status clipe-consult
  echo ""
  echo -e "${GREEN}✓ Deployment complete!${NC}"
  echo ""
  echo -e "  App URL:      http://localhost:3000"
  echo -e "  PM2 logs:     pm2 logs clipe-consult"
  echo -e "  PM2 status:   pm2 status"
else
  echo -e "${YELLOW}⚠  PM2 not installed.${NC}"
  echo -e "   Install it with:  npm install -g pm2"
  echo -e "   Then run:         pm2 start ecosystem.config.cjs --env production"
  echo ""
  echo -e "${GREEN}✓ Build complete — start the server manually with:${NC}"
  echo -e "   NODE_ENV=production node .next/standalone/server.js"
fi
