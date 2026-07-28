/**
 * PM2 Ecosystem Configuration for Clipe Consult
 *
 * This file tells PM2 (a production process manager for Node.js) how to run
 * the Next.js standalone server on the Webuzo VPS.
 *
 * IMPORTANT: The port is read from the PORT environment variable (or .env
 * file). Run `bash scripts/check-port.sh` BEFORE deploying to find a free
 * port — Webuzo VPS servers often run multiple sites, and hardcoding port
 * 3000 may conflict with another app.
 *
 * Usage (on the VPS, after deploying the code):
 *   bash scripts/check-port.sh         # find a free port first
 *   # add PORT=<chosen-port> to .env
 *   pm2 start ecosystem.config.cjs --env production
 *   pm2 save                           # save the process list so it survives reboots
 *   pm2 startup                        # generate a startup script for the OS
 *
 * Useful commands:
 *   pm2 status                         # see all running processes
 *   pm2 logs clipe-consult             # tail logs in real-time
 *   pm2 restart clipe-consult
 *   pm2 stop clipe-consult
 *   pm2 delete clipe-consult
 */
const PORT = process.env.PORT || 3000;

module.exports = {
  apps: [
    {
      name: "clipe-consult",
      // The standalone build produces a single self-contained server.js
      script: ".next/standalone/server.js",
      cwd: "/home/clipeconsult/public_html", // ← adjust to your Webuzo path
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      max_memory_restart: "512M",

      // Production environment variables.
      // PORT is read from the .env file (or shell env) — set it after running
      // scripts/check-port.sh to avoid conflicts with other Webuzo sites.
      env: {
        NODE_ENV: "production",
        PORT: PORT,
        HOSTNAME: "0.0.0.0",
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://clipeconsult.com",
      },

      // Logs — written to /home/<user>/.pm2/logs/
      error_file: "./logs/clipe-error.log",
      out_file: "./logs/clipe-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,

      // Watch for file changes (disabled in production — use deploy.sh to restart)
      watch: false,
    },
  ],
};
