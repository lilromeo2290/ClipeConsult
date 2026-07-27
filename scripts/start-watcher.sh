#!/usr/bin/env bash
# start-watcher.sh — Start the auto-push watcher in the background.

set -euo pipefail

PROJECT_DIR="/home/z/my-project"
PID_FILE="${PROJECT_DIR}/.zscripts/watcher.pid"
LOG_FILE="${PROJECT_DIR}/.zscripts/watcher.log"

mkdir -p "$(dirname "${PID_FILE}")"

# Don't start a second watcher if one is already running
if [[ -f "${PID_FILE}" ]]; then
  EXISTING_PID=$(cat "${PID_FILE}")
  if kill -0 "${EXISTING_PID}" 2>/dev/null; then
    echo "[start-watcher] watcher already running with PID ${EXISTING_PID}"
    exit 0
  fi
  rm -f "${PID_FILE}"
fi

# Launch the watcher in a brand-new session (setsid) so it survives parent
# shell exit. Redirections keep all output in the log file (none on stdout).
setsid bash "${PROJECT_DIR}/scripts/watcher.sh" >> "${LOG_FILE}" 2>&1 &
WATCHER_PID=$!
disown "${WATCHER_PID}" 2>/dev/null || true

echo "${WATCHER_PID}" > "${PID_FILE}"
echo "[start-watcher] watcher started with PID ${WATCHER_PID}"
echo "[start-watcher] log file: ${LOG_FILE}"
echo "[start-watcher] to stop: bash scripts/stop-watcher.sh"
