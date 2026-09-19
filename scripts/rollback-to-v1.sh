#!/usr/bin/env bash
#
# rollback-to-v1.sh — Immediately restore VERSION 1
#
# Usage:  sudo /home/clipeconsult/v2/scripts/rollback-to-v1.sh
#
set -euo pipefail

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

V1_PORT=3005
V2_PORT=3006
NGINX_CONF="/var/webuzo-data/nginx/custom/domains/clipeconsult.com.conf"
BACKUP_DIR="/home/clipeconsult/backups"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  RACLIPE CONSULT — Rollback to VERSION 1${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# 1. Find + restore V1 config
echo -e "${GREEN}→ [1/4] Restoring V1 Nginx config...${NC}"
LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/clipeconsult.com.conf.v1-backup-* 2>/dev/null | head -1)
if [[ -n "$LATEST_BACKUP" ]]; then
  cp "$LATEST_BACKUP" "$NGINX_CONF"
  echo -e "  ${GREEN}✓${NC} Restored from: $LATEST_BACKUP"
else
  echo -e "  ${YELLOW}⚠  No backup — swapping port manually${NC}"
  sed -i "s/proxy_pass http:\/\/127.0.0.1:$V2_PORT/proxy_pass http:\/\/127.0.0.1:$V1_PORT/g" "$NGINX_CONF"
  sed -i "s/proxy_pass http:\/\/153.75.247.4:$V2_PORT/proxy_pass http:\/\/153.75.247.4:$V1_PORT/g" "$NGINX_CONF"
fi
echo ""

# 2. Ensure V1 PM2 is running
echo -e "${GREEN}→ [2/4] Ensuring V1 PM2 process is running...${NC}"
if ! su - clipeconsult -c "pm2 status" 2>/dev/null | grep -q "clipe-consult.*online"; then
  echo -e "  ${YELLOW}⚠  Starting V1...${NC}"
  su - clipeconsult -c "cd ~/public_html && PORT=$V1_PORT pm2 start ecosystem.config.cjs --env production" 2>/dev/null
  sleep 3
  su - clipeconsult -c "pm2 save" 2>/dev/null
fi
echo ""

# 3. Test + reload Nginx
echo -e "${GREEN}→ [3/4] Testing + reloading Nginx...${NC}"
nginx -t 2>&1
nginx -s reload
sleep 3
echo -e "  ${GREEN}✓${NC} Nginx reloaded"
echo ""

# 4. Health check
echo -e "${GREEN}→ [4/4] Final health check...${NC}"
if curl -s -o /dev/null -w "%{http_code}" --max-time 10 "https://clipeconsult.com/" | grep -q "200"; then
  echo -e "  ${GREEN}✓ https://clipeconsult.com/ → HTTP 200${NC}"
else
  echo -e "  ${RED}✗ Site not responding${NC}"
  exit 1
fi

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  ✓ VERSION 1 IS NOW LIVE at https://clipeconsult.com/${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
