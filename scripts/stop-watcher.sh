#!/usr/bin/env bash
# stop-watcher.sh — Stop the running auto-push watcher (if any).

set -euo pipefail

PID_FILE="/home/z/my-project/.zscripts/watcher.pid"

if [[ -f "${PID_FILE}" ]]; then
  PID=$(cat "${PID_FILE}")
  if kill -0 "${PID}" 2>/dev/null; then
    kill "${PID}"
    echo "[stop-watcher] killed watcher with PID ${PID}"
  else
    echo "[stop-watcher] PID ${PID} no longer running — removing stale pid file"
  fi
  rm -f "${PID_FILE}"
else
  # Fall back to pkill
  PIDS=$(pgrep -f "scripts/watcher.sh" || true)
  if [[ -n "${PIDS}" ]]; then
    pkill -f "scripts/watcher.sh" || true
    echo "[stop-watcher] killed watcher(s): ${PIDS}"
  else
    echo "[stop-watcher] no watcher is running"
  fi
fi
