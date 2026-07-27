#!/usr/bin/env bash
# watcher.sh — Background loop that calls auto-push.sh every 5 minutes.
#
# Started with nohup/setsid so it survives shell exit (lives for the lifetime of
# the sandbox). Stoppable via scripts/stop-watcher.sh.
#
# Usage:
#   bash scripts/watcher.sh           # foreground (for debugging)
#   setsid bash scripts/watcher.sh &  # background (recommended)

set -euo pipefail

PROJECT_DIR="/home/z/my-project"
INTERVAL_SECONDS=300   # 5 minutes
LOG_FILE="${PROJECT_DIR}/.zscripts/watcher.log"

mkdir -p "$(dirname "${LOG_FILE}")"

cleanup() {
  local now
  now="$(date -u +'%Y-%m-%d %H:%M:%S UTC')"
  echo "[watcher] stopping at ${now}" | tee -a "${LOG_FILE}"
  exit 0
}
trap cleanup INT TERM

echo "[watcher] started at $(date -u +'%Y-%m-%d %H:%M:%S UTC'), interval=${INTERVAL_SECONDS}s, log=${LOG_FILE}" | tee -a "${LOG_FILE}"

while true; do
  bash "${PROJECT_DIR}/scripts/auto-push.sh" >> "${LOG_FILE}" 2>&1 || true
  sleep "${INTERVAL_SECONDS}"
done
