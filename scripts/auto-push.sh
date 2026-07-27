#!/usr/bin/env bash
# auto-push.sh — Periodic commit & push for the Clipe Consult repo.
#
# This script is invoked by a Linux cron job every 5 minutes.
# It stages any uncommitted changes, commits them with a timestamped message,
# and pushes to origin/main. If there are no changes, it exits silently.
#
# Token is NEVER stored in this file — git uses ~/.git-credentials (chmod 600)
# configured via `git config credential.helper store`.

set -euo pipefail

PROJECT_DIR="/home/z/my-project"
WORKLOG_FILE="${PROJECT_DIR}/WORKLOG.md"
REMOTE="origin"
BRANCH="main"
TIMESTAMP="$(date -u +'%Y-%m-%d %H:%M:%S UTC')"

cd "${PROJECT_DIR}"

# Make sure we're on main
git checkout "${BRANCH}" 2>/dev/null || true

# Check for changes (staged, unstaged, or untracked)
if git status --porcelain | grep -q .; then
  # Build a short summary of what changed
  CHANGED_FILES=$(git status --porcelain | wc -l | tr -d ' ')
  SUMMARY=$(git status --porcelain | head -3 | awk '{print $2}' | tr '\n' ',' | sed 's/,$//')

  git add -A
  git commit -m "auto: ${TIMESTAMP} — ${CHANGED_FILES} file(s) changed (${SUMMARY})" >/dev/null 2>&1

  # Push to remote (uses stored credentials)
  if git push "${REMOTE}" "${BRANCH}" >/dev/null 2>&1; then
    PUSH_STATUS="pushed"
  else
    PUSH_STATUS="push-failed"
  fi
else
  PUSH_STATUS="no-changes"
fi

# Append a row to WORKLOG.md so we have an audit trail.
# Only append when we actually committed something.
if [[ "${PUSH_STATUS}" == "pushed" ]]; then
  COMMIT_HASH=$(git rev-parse --short HEAD)
  COMMIT_MSG=$(git log -1 --pretty=%s)
  # Short timestamp for the worklog table (YYYY-MM-DD HH:MM)
  SHORT_TS="$(date -u +'%Y-%m-%d %H:%M')"
  # Insert a new row at the end of the markdown table (before any trailing blank lines)
  printf "| %s | \`%s\` | %s |\n" "${SHORT_TS}" "${COMMIT_HASH}" "${COMMIT_MSG}" >> "${WORKLOG_FILE}"

  # Commit the worklog update too (so the worklog itself stays in sync on GitHub)
  git add "${WORKLOG_FILE}"
  git commit -m "docs: update WORKLOG.md — ${COMMIT_HASH}" >/dev/null 2>&1
  git push "${REMOTE}" "${BRANCH}" >/dev/null 2>&1 || true
fi

# Echo a status line for any log aggregator
echo "[${TIMESTAMP}] ${PUSH_STATUS}"
