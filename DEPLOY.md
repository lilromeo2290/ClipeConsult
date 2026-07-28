# Deploying Clipe Consult to a Webuzo VPS

This guide walks you through deploying the Clipe Consult Next.js website to a Webuzo VPS server, step by step. No prior Webuzo experience needed.

---

## 📋 Prerequisites (what you need before starting)

1. **A Webuzo VPS** with:
   - Root or sudo access via SSH
   - Webuzo softaculous panel installed (it usually is by default)
   - A domain name pointed at the VPS IP (DNS A record)

2. **On your local machine:**
   - Git installed
   - SSH access to the VPS

3. **The GitHub repo** — already set up at:
   `https://github.com/lilromeo2290/ClipeConsult.git`

---

## 🔍 Step 0: Check available ports (do this FIRST!)

Webuzo VPS servers typically host multiple websites on the same machine. If you blindly use port 3000, you may collide with another app and **take that other site offline**. Always scan for an available port before deploying.

SSH into your VPS as root:

```bash
ssh root@YOUR_VPS_IP
```

### Install `ss` (socket statistics — usually pre-installed)

```bash
apt-get install -y iproute2   # Debian/Ubuntu
# OR
yum install -y iproute        # CentOS/RHEL
```

### Scan for a free port

After cloning the repo (Step 3 below), run this from the project directory:

```bash
bash scripts/check-port.sh
```

You'll see output like:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Scanning ports 3000–3020 for availability
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary range (3000-3020 — typical Next.js apps):
  3000     ✗ IN USE  (by: node)
  3001     ✗ IN USE  (by: apache2)
  3002     ✓ free
  3003     ✓ free
  ...

Common alternative ranges:
  8080     ✗ IN USE  (by: nginx)
  8081     ✓ free
  ...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ✓ Recommended port: 3002
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To use it, add to your .env file:

  PORT=3002

Then update your Nginx/Apache reverse proxy to point at http://127.0.0.1:3002
and run:  bash deploy.sh
```

### Or check a specific port

```bash
PORT=3000 bash scripts/check-port.sh     # is 3000 free?
bash scripts/check-port.sh 9000 9100     # scan a wider range
```

**Remember the chosen port** — you'll set it in `.env` (Step 4) and use it in the Nginx/Apache config (Step 7).

> 💡 **Tip:** The `deploy.sh` script will also auto-detect a free port if you forget to set one, but it's better to pick one explicitly so it stays stable across restarts.

---

## 🚀 Step 1: Install Node.js, Bun, and PM2 on the VPS

SSH into your VPS as root (if you haven't already from Step 0):

```bash
ssh root@YOUR_VPS_IP
```

### Install Node.js 20 LTS (required by Next.js 16)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
node --version   # should print v20.x.x
```

### Install Bun (faster than npm — used by this project)

```bash
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
bun --version
```

### Install PM2 (process manager — keeps the app running forever)

```bash
npm install -g pm2
pm2 --version
```

### Install Git (usually already installed)

```bash
apt-get install -y git
```

---

## 📂 Step 2: Set up the project directory on the VPS

Webuzo serves websites from `/home/<username>/public_html/`. We'll create a system user for the app:

### Option A: Use an existing Webuzo user's home directory

If you already created a user/domain in Webuzo (e.g. `clipe`), the path is `/home/clipe/public_html/`.

### Option B: Create a dedicated user

```bash
# Create a system user for the app
useradd -m -s /bin/bash clipeconsult
mkdir -p /home/clipeconsult/public_html
chown -R clipeconsult:clipeconsult /home/clipeconsult
```

### Edit `ecosystem.config.cjs` to match your path

Open the file in the repo (`ecosystem.config.cjs`) and update the `cwd` line:

```js
cwd: "/home/clipeconsult/public_html",  // ← your actual path
```

---

## 📥 Step 3: Clone the repo onto the VPS

Switch to the app user:

```bash
su - clipeconsult
cd ~/public_html
```

Clone the repository:

```bash
git clone https://github.com/lilromeo2290/ClipeConsult.git .
```

> **Note:** If the repo is private, you'll need to use a Personal Access Token in the URL:
> ```bash
> git clone https://lilromeo2290:YOUR_TOKEN@github.com/lilromeo2290/ClipeConsult.git .
> ```

Verify the clone worked:

```bash
ls -la
# Should see: package.json, next.config.ts, src/, public/, etc.
```

---

## 🔑 Step 4: Configure environment variables

Copy the example file and edit it:

```bash
cp .env.example .env
nano .env
```

Set at minimum:

```bash
# The public URL of your site
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"

# The port your app will listen on (use the one you found in Step 0)
# If you skip this, deploy.sh will auto-detect a free port on each deploy
PORT=3002

# Database (SQLite for now — switch to MySQL later)
DATABASE_URL="file:./dev.db"

# Where the contact form sends enquiries
CONTACT_FORM_TO_EMAIL="info@clipeconsult.com"
CONTACT_FORM_CC_EMAIL="clipeconsult@gmail.com"
```

Save (`Ctrl+O`, `Enter`) and exit (`Ctrl+X`).

> ⚠️ **Important:** The `PORT` you set here MUST match the port you use in your Nginx/Apache reverse proxy config (Step 7). If you change `PORT` later, update the reverse proxy too and reload.

---

## 🏗️ Step 5: Install dependencies and build

```bash
cd ~/public_html
bash deploy.sh
```

This script will:
1. Run `bun install --frozen-lockfile` (or `npm ci` if bun isn't available)
2. Run `bun run build` (creates `.next/standalone/server.js`)
3. Copy static assets and `public/` into the standalone folder
4. Restart PM2

When it finishes, you should see:

```
✓ Deployment complete!
  App URL:      http://localhost:3000
  PM2 logs:     pm2 logs clipe-consult
```

Test that the app is responding locally on the VPS:

```bash
curl http://localhost:3000
# Should return HTML
curl http://localhost:3000/api/health
# Should return JSON: {"status":"ok","service":"clipe-consult",...}
```

---

## 🔁 Step 6: Make PM2 auto-start on boot

```bash
# Generate the startup script
pm2 startup
# PM2 will print a command — copy and run it. It looks like:
#   sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u clipeconsult --hp /home/clipeconsult

# Save the current PM2 process list so clipe-consult auto-starts on reboot
pm2 save
```

---

## 🌐 Step 7: Configure the Webuzo reverse proxy

The Next.js app is now running on the **port you chose in Step 0** (let's call it `$PORT`) inside the VPS. You need Webuzo (Nginx/Apache) to forward incoming traffic from port 80/443 to that port.

> 💡 Throughout this step, **replace `$PORT` with the actual port number** you set in your `.env` file (e.g. `3002`).

### Option A: Use Webuzo's "Proxy" feature (easiest)

1. Log in to your **Webuzo admin panel** (usually `http://YOUR_VPS_IP:2002`)
2. Go to **Webuzo Admin → Web Services → Proxy**
3. Add a new proxy:
   - **Domain:** `yourdomain.com`
   - **Target URL:** `http://127.0.0.1:$PORT` (e.g. `http://127.0.0.1:3002`)
   - **Forward headers:** enable
4. Save and restart the web service

### Option B: Manual Nginx config (more control)

Edit the domain's Nginx config:

```bash
nano /usr/local/apps/nginx/etc/conf.d/common/yourdomain.com.conf
```

Add a location block that proxies to your port (replace `3002` with your `$PORT`):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Proxy all traffic to the Next.js standalone server
    location / {
        proxy_pass http://127.0.0.1:3002;     # ← your $PORT
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Test and reload Nginx:

```bash
nginx -t
nginx -s reload
```

### Option C: Use Apache (if you're on Apache instead of Nginx)

Edit your Apache vhost config and add (replace `3002` with your `$PORT`):

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    ServerAlias www.yourdomain.com

    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3002/      # ← your $PORT
    ProxyPassReverse / http://127.0.0.1:3002/
    RequestHeader set X-Forwarded-Proto "http"
</VirtualHost>
```

Enable required modules and restart:

```bash
a2enmod proxy proxy_http headers
systemctl restart apache2
```

---

## 🔒 Step 8: Enable HTTPS (free SSL via Let's Encrypt)

Webuzo has built-in Let's Encrypt support:

1. In the **Webuzo admin panel**, go to **Webuzo Admin → SSL → Let's Encrypt**
2. Select your domain and click **Install**
3. Webuzo will install the certificate and auto-renew it

OR run certbot manually:

```bash
apt-get install -y certbot python3-certbot-nginx   # for Nginx
# OR
apt-get install -y certbot python3-certbot-apache  # for Apache

certbot --nginx -d yourdomain.com -d www.yourdomain.com   # Nginx
# OR
certbot --apache -d yourdomain.com -d www.yourdomain.com  # Apache
```

After SSL is enabled, update your `.env` file:

```bash
nano ~/public_html/.env
# Change: NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

Then restart PM2:

```bash
cd ~/public_html
bash deploy.sh --no-build   # just restart, no rebuild
```

---

## ✅ Step 9: Verify everything works

1. **Visit your site** in a browser:
   - `https://yourdomain.com` → should load the homepage
   - `https://yourdomain.com/api/health` → should return JSON `{"status":"ok"...}`

2. **Test the navigation menus, contact form, and Projects carousel**

3. **Set up uptime monitoring** (free with UptimeRobot):
   - Go to https://uptimerobot.com
   - Add an HTTP monitor for `https://yourdomain.com/api/health`
   - You'll get an email/SMS if the site goes down

---

## 🔄 How to update the site after deploying

Every time you want to push updates from your local machine:

1. **From your local machine** (or this sandbox):
   - Make changes
   - The auto-push watcher commits + pushes to GitHub every 5 minutes
   - OR trigger an immediate push: `bash scripts/auto-push.sh`

2. **On the VPS** (SSH in and pull):
   ```bash
   ssh root@YOUR_VPS_IP
   su - clipeconsult
   cd ~/public_html
   git pull origin main
   bash deploy.sh
   ```

3. **Or automate it** with a webhook — see "Auto-deploy on push" below.

---

## 🛠️ Useful PM2 commands (cheat sheet)

```bash
pm2 status                      # see all running apps
pm2 logs clipe-consult          # tail logs in real-time
pm2 logs clipe-consult --lines 100  # show last 100 log lines
pm2 restart clipe-consult       # restart the app
pm2 reload clipe-consult        # zero-downtime reload
pm2 stop clipe-consult          # stop the app
pm2 delete clipe-consult        # remove from PM2
pm2 monit                       # interactive dashboard
```

---

## 🆘 Troubleshooting

### "Port already in use" / "EADDRINUSE"

Another process (probably another Webuzo site) is already listening on the port you chose. Find a new one and switch:

```bash
# 1. Find what's using the port
ss -ltnp | grep :3000        # or whichever port you tried

# 2. Find a new free port
bash scripts/check-port.sh

# 3. Update .env with the new port
nano .env
# change: PORT=<new-port>

# 4. Update your Nginx/Apache reverse proxy to point at the new port, then reload:
nginx -t && nginx -s reload      # for Nginx
# OR
systemctl restart apache2        # for Apache

# 5. Restart PM2 with the new port
bash deploy.sh --no-build
```

> ⚠️ **Never `kill -9` a process you don't recognize** — on a Webuzo VPS it might be another website. Always switch to a different port instead.

### "Build failed: out of memory"

Webuzo VPS plans often have ≤1GB RAM. Add swap space:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

Then re-run `bash deploy.sh`.

### "502 Bad Gateway" after deploy

PM2 probably crashed. Check the logs:

```bash
pm2 logs clipe-consult --lines 50
```

Common cause: missing `.env` file. Make sure `~/public_html/.env` exists and has `NEXT_PUBLIC_SITE_URL` set.

### "Cannot GET /" but `/api/health` works

The `public/` folder wasn't copied into the standalone output. Re-run:

```bash
cd ~/public_html
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/
pm2 restart clipe-consult
```

### Site loads but images / logos are broken

Make sure the `public/` folder is fully copied (it contains `logo-icon.png`, `favicon.svg`, `og-image.svg`, and the `projects/` screenshots):

```bash
ls ~/public_html/.next/standalone/public/
# Should see: favicon.svg  logo-icon.png  logo.png  og-image.svg  projects/  robots.txt
```

If missing, copy manually:

```bash
cp -r ~/public_html/public ~/public_html/.next/standalone/
pm2 restart clipe-consult
```

---

## 🚀 Auto-deploy on push (optional — advanced)

To skip the manual `git pull` + `bash deploy.sh` step, set up a webhook:

1. **On the VPS**, create a webhook receiver:
   ```bash
   npm install -g webhook
   webhook -hooks /home/clipeconsult/webhook.json -port 9000
   ```

2. Create `/home/clipeconsult/webhook.json`:
   ```json
   {
     "source": "github",
     "trigger-rule": {
       "match": { "type": "value", "value": "YOUR_SECRET", "parameter": { "source": "header", "name": "X-Hub-Signature-256" } }
     },
     "command": "cd /home/clipeconsult/public_html && git pull origin main && bash deploy.sh"
   }
   ```

3. **In GitHub**: Repo → Settings → Webhooks → Add webhook
   - Payload URL: `http://YOUR_VPS_IP:9000/hooks/github`
   - Content type: `application/json`
   - Secret: `YOUR_SECRET`

Now every push to `main` will auto-deploy within ~30 seconds.

---

## 📞 Getting help

- **Logs are your friend:** `pm2 logs clipe-consult` will tell you 90% of what's wrong
- **Test locally first:** run `bash scripts/auto-push.sh` from the sandbox, then pull on the VPS
- **Check the Webuzo docs:** https://www.webuzo.com/docs
