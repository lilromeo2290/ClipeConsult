# Clipe Consult — Auto-push scripts

Periodic commit & push to GitHub (every 5 minutes) for the lifetime of the sandbox session.

## Files

- **`auto-push.sh`** — Single-run script. Stages changes, commits with a timestamped message, pushes to `origin/main`, and appends a row to `WORKLOG.md`. Exits silently if there are no changes.
- **`watcher.sh`** — Long-running loop that calls `auto-push.sh` every 5 minutes. Started in the background by `start-watcher.sh`.
- **`stop-watcher.sh`** — Stops the running watcher.
- **`start-watcher.sh`** — Starts the watcher in the background (nohup).

## Quick start

```bash
bash scripts/start-watcher.sh   # start the periodic push
bash scripts/stop-watcher.sh    # stop it
```

## Manual one-off push

```bash
bash scripts/auto-push.sh
```

## Where things live

| File | In repo? | Purpose |
|------|----------|---------|
| `scripts/auto-push.sh` | ✅ Yes | The actual commit/push logic |
| `scripts/watcher.sh` | ✅ Yes | Background loop |
| `scripts/start-watcher.sh` | ✅ Yes | Starts watcher in background |
| `scripts/stop-watcher.sh` | ✅ Yes | Stops watcher |
| `WORKLOG.md` | ✅ Yes | Audit trail of every push |
| `.zscripts/watcher.log` | ❌ No (gitignored) | Watcher output log |
| `.zscripts/watcher.pid` | ❌ No (gitignored) | Watcher PID file |
| `~/.git-credentials` | ❌ No (outside repo) | GitHub token — chmod 600 |

## Security

The GitHub Personal Access Token is stored in `~/.git-credentials` (outside the repo, chmod 600) and is referenced by git via `credential.helper store`. **The token is NEVER committed to the repository** — verify with:

```bash
git log --all -p | grep -i "ghp_"   # should return nothing
```

If the token ever leaks (e.g. was shared in a chat), **regenerate it immediately** at https://github.com/settings/tokens and update `~/.git-credentials`.
