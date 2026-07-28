#!/usr/bin/env bash
#
# check-port.sh — Find an available TCP port for the Clipe Consult app on a
# Webuzo VPS where multiple websites may already be using common ports.
#
# Why this matters: Webuzo runs multiple sites per VPS. If you hardcode port
# 3000 and another app is already using it, your deploy will fail — or worse,
# you'll knock the other site offline. This script scans a sensible range and
# suggests a free port.
#
# Usage:
#   bash scripts/check-port.sh               # scan defaults (3000-3020, 8080-8090)
#   bash scripts/check-port.sh 3000 3050     # custom range
#   PORT=3100 bash scripts/check-port.sh     # check a specific port
#
set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# If PORT env var is set, just check that one
if [[ -n "${PORT:-}" ]]; then
  PORT_TO_CHECK="${PORT}"
  if ss -ltn 2>/dev/null | awk '{print $4}' | grep -qE "[:.]${PORT_TO_CHECK}\$"; then
    OWNER=$(ss -ltnp 2>/dev/null | grep -E "[:.]${PORT_TO_CHECK}\$" | head -1 | grep -oE 'users:\(\("[^"]+"' | head -1 || echo "unknown")
    NEXT_PORT=$((PORT_TO_CHECK + 1))
    echo -e "${RED}✗ Port ${PORT_TO_CHECK} is IN USE${NC}  (by: ${OWNER})"
    echo -e "${YELLOW}  Pick a different port and set it in .env, e.g.:${NC}"
    echo -e "  PORT=${NEXT_PORT}"
    echo -e "  Then re-run:  bash scripts/check-port.sh   # to verify ${NEXT_PORT} is free"
    exit 1
  else
    echo -e "${GREEN}✓ Port ${PORT_TO_CHECK} is available${NC}"
    exit 0
  fi
fi

# Otherwise scan a range
START="${1:-3000}"
END="${2:-3020}"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Scanning ports ${START}–${END} for availability${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

FIRST_FREE=""

# Function to check one port
check_one_port() {
  local p="$1"
  if ss -ltn 2>/dev/null | awk '{print $4}' | grep -qE "[:.]${p}\$"; then
    OWNER=$(ss -ltnp 2>/dev/null | grep -E "[:.]${p}\$" | head -1 | grep -oE 'users:\(\("[^"]+"' | sed 's/users:(("//' | head -1 || echo "unknown")
    printf "  %-7s %s  (by: %s)\n" "${p}" "$(echo -e "${RED}✗ IN USE${NC}")" "${OWNER}"
    return 1
  else
    printf "  %-7s %s\n" "${p}" "$(echo -e "${GREEN}✓ free${NC}")"
    [[ -z "${FIRST_FREE}" ]] && FIRST_FREE="${p}"
    return 0
  fi
}

echo -e "${BLUE}Primary range (3000-3020 — typical Next.js apps):${NC}"
for p in $(seq "${START}" "${END}"); do
  check_one_port "${p}" || true
done

echo ""
echo -e "${BLUE}Common alternative ranges:${NC}"
for p in 8080 8081 8082 8083 8084 8085; do
  check_one_port "${p}" || true
done

echo ""
if [[ -n "${FIRST_FREE}" ]]; then
  echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${GREEN}  ✓ Recommended port: ${FIRST_FREE}${NC}"
  echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""
  echo -e "To use it, add to your ${YELLOW}.env${NC} file:"
  echo ""
  echo -e "  PORT=${FIRST_FREE}"
  echo ""
  echo -e "Then update your Nginx/Apache reverse proxy to point at ${YELLOW}http://127.0.0.1:${FIRST_FREE}${NC}"
  echo -e "and run:  ${YELLOW}bash deploy.sh${NC}"
else
  echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${RED}  ✗ No free ports found in the scanned ranges.${NC}"
  echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""
  echo -e "Try a wider range:  ${YELLOW}bash scripts/check-port.sh 9000 9100${NC}"
  exit 1
fi
