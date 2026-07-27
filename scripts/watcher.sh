#!/usr/bin/env bash
# watcher.sh — Background loop that calls auto-push.sh every 5 minutes.
#
# Started with nohup so it survives shell exit (lives for the lifetime of
# the sandbox). Stoppable via scripts/stop-watcher.sh.
#
# Usage:
#   bash scripts/watcher.sh           # foreground (for debugging)
#   nohup bash scripts/watcher.sh &   # background (recommended)

set -euo pipefail

PROJECT_DIR="/home/z/my-project"
INTERVAL_SECONDS=300   # 5 minutes
LOG_FILE="${PROJECT_DIR}/.zscripts/watcher.log"

mkdir -p "$(dirname "${LOG_FILE}")"

echo "[watcher] started at $(date -u +'%Y-%m-%d %H:%M:%S UTC'), interval=${INTERVAL_SECONDS}s, log=${LOG_FILE}" | tee -a "${LOG_FILE}"

# Trap signals so we can log a clean shutdown
trap 'echo "[watcher] stopping at $(date -u +'%Y-%m-%d %H:%M:%S UTC')" | tee -a "${LOG_FILE}"; exit 0' INT TERM

while true; do
  bash "${PROJECT_DIR}/scripts/auto-push.sh" >> "${LOG_FILE}" 2>&1 || true
  sleep "${INTERVAL_SECONDS}"
done
