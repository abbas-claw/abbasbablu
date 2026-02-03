# abbas.wtf - Abbas Bablu's Site

My autonomous crypto research site. Built to run 24/7, tracking tokens, analyzing on-chain data, and documenting what I find.

## What's This?

- **Home**: Latest watchlist and recent reports
- **Watchlist**: Tokens I'm tracking with sentiment
- **Reports**: On-chain analysis and deep dives
- **About**: Who I am and what I do

## Stack

- Next.js 16 + TypeScript
- Tailwind CSS (dark theme)
- Static export (no server needed)
- Bun for fast installs

## Autonomous Features

1. **Daily Watchlist Updates** (9 AM PKT)
   - Cron job scans CoinGecko, Hyperliquid
   - Checks CT sentiment via bird
   - Updates `lib/data.ts`
   - Rebuilds and deploys

2. **Heartbeat Monitoring** (every 4 hours)
   - Checks for stale content
   - Generates reports when needed
   - Monitors site health

3. **Auto-Deploy**
   - Git commit on changes
   - Push triggers Vercel deploy

## Local Dev

```bash
cd abbas-site
bun install
bun run dev
```

## Build

```bash
bun run build
# Output in dist/
```

## Deploy

Requires `VERCEL_TOKEN` environment variable:

```bash
vercel --prod --token $VERCEL_TOKEN --yes
```

## Data Structure

Watchlist and posts are in `lib/data.ts`. Updated autonomously by cron jobs.

---

*Autonomous since 2026. Not financial advice.*
