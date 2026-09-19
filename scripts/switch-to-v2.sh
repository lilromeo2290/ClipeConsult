#!/usr/bin/env bash
#
# switch-to-v2.sh — Switch the live domain from VERSION 1 to VERSION 2
#
# This script:
#   1. Verifies VERSION 2 exists and is built
#   2. Creates a backup record of the current version
#   3. Updates the Nginx proxy config to point to V2's port
#   4. Reloads Nginx (zero downtime — no restart)
#   5. Runs a health check
#   6. Reports success/failure
#
# Usage:  sudo /home/clipeconsult/v2/scripts/switch-to-v2.sh
#
set -euo pipefail

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

V1_DIR="/home/clipeconsult/public_html"
V2_DIR="/home/clipeconsult/v2"
V1_PORT=3005
V2_PORT=3006
NGINX_CONF="/var/webuzo-data/nginx/custom/domains/clipeconsult.com.conf"
BACKUP_DIR="/home/clipeconsult/backups"
TIMESTAMP=$(date +%Y-%m-%d-%H%M%S)

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  RACLIPE CONSULT — Switch to VERSION 2${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# 1. Verify V2 exists
echo -e "${GREEN}→ [1/6] Verifying VERSION 2...${NC}"
if [[ ! -d "$V2_DIR" ]]; then
  echo -e "${RED}✗ V2 directory not found: $V2_DIR${NC}"
  exit 1
fi
if [[ ! -f "$V2_DIR/.next/standalone/server.js" ]]; then
  echo -e "${RED}✗ V2 build not found${NC}"
  echo -e "  Build V2 first: cd $V2_DIR && bash deploy.sh"
  exit 1
fi
if ! su - clipeconsult -c "pm2 status" 2>/dev/null | grep -q "clipe-consult-v2.*online"; then
  echo -e "${RED}✗ PM2 process 'clipe-consult-v2' is not running${NC}"
  exit 1
fi
echo -e "  ${GREEN}✓${NC} V2 verified"
echo ""

# 2. Test V2 health
echo -e "${GREEN}→ [2/6] Testing V2 health...${NC}"
if ! curl -s --max-time 5 "http://localhost:$V2_PORT/api/health" | grep -q '"status":"ok"'; then
  echo -e "${RED}✗ V2 health check failed on port $V2_PORT${NC}"
  exit 1
fi
echo -e "  ${GREEN}✓${NC} V2 health OK"
echo ""

# 3. Backup current Nginx config
echo -e "${GREEN}→ [3/6] Backing up current Nginx config...${NC}"
mkdir -p "$BACKUP_DIR"
cp "$NGINX_CONF" "$BACKUP_DIR/clipeconsult.com.conf.v1-backup-$TIMESTAMP"
echo -e "  ${GREEN}✓${NC} Backup saved"
echo ""

# 4. Update Nginx config
echo -e "${GREEN}→ [4/6] Updating Nginx config (port $V1_PORT → $V2_PORT)...${NC}"
sed -i "s/proxy_pass http:\/\/127.0.0.1:$V1_PORT/proxy_pass http:\/\/127.0.0.1:$V2_PORT/g" "$NGINX_CONF"
sed -i "s/proxy_pass http:\/\/153.75.247.4:$V1_PORT/proxy_pass http:\/\/153.75.247.4:$V2_PORT/g" "$NGINX_CONF"
if grep -q "proxy_pass.*:$V2_PORT" "$NGINX_CONF"; then
  echo -e "  ${GREEN}✓${NC} Config updated"
else
  echo -e "${RED}✗ Failed to update config — restoring backup${NC}"
  cp "$BACKUP_DIR/clipeconsult.com.conf.v1-backup-$TIMESTAMP" "$NGINX_CONF"
  exit 1
fi
echo ""

# 5. Test + reload Nginx
echo -e "${GREEN}→ [5/6] Testing + reloading Nginx...${NC}"
if ! nginx -t 2>&1; then
  echo -e "${RED}✗ Nginx test failed — restoring backup${NC}"
  cp "$BACKUP_DIR/clipeconsult.com.conf.v1-backup-$TIMESTAMP" "$NGINX_CONF"
  exit 1
fi
nginx -s reload
sleep 3
echo -e "  ${GREEN}✓${NC} Nginx reloaded"
echo ""

# 6. Final health check
echo -e "${GREEN}→ [6/6] Final health check...${NC}"
if curl -s -o /dev/null -w "%{http_code}" --max-time 10 "https://clipeconsult.com/" | grep -q "200"; then
  echo -e "  ${GREEN}✓ https://clipeconsult.com/ → HTTP 200${NC}"
else
  echo -e "  ${RED}✗ Site not responding — run rollback${NC}"
  exit 1
fi

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  ✓ VERSION 2 IS NOW LIVE at https://clipeconsult.com/${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  Rollback:  ${YELLOW}sudo /home/clipeconsult/v2/scripts/rollback-to-v1.sh${NC}"
