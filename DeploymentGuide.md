# Deployment Guide: Vercel

The portfolio is optimized for Vercel, the native platform for Next.js. Follow these steps for a zero-config deployment.

## Prerequisites

1. A GitHub, GitLab, or Bitbucket account.
2. The code pushed to a remote repository.

## Steps

1. **Import Project:**
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your repository.

2. **Configure Project:**
   - **Framework Preset:** Next.js (Auto-detected).
   - **Root Directory:** `./`.
   - **Build Command:** `npm run build`.
   - **Output Directory:** `.next`.

3. **Deploy:**
   - Click **Deploy**.
   - Vercel will automatically provision an SSL certificate and assign a production URL.

4. **Environment Variables (Optional):**
   - If you add a real contact form later, add your API keys in the Vercel Dashboard under **Settings > Environment Variables**.

## Performance Optimization

The site is built using **Static Site Generation (SSG)** where possible. Vercel's Edge Network will serve the site with sub-100ms latency worldwide.
