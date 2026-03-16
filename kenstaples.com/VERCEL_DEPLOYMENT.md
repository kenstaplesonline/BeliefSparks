# Vercel Deployment Guide - KenStaples.com

## 📋 Overview

This project is set up for deployment on Vercel as a separate project from Belief Sparks. The website is hosted at `https://kenstaples.com`.

## 🚀 Quick Deploy Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Authenticate with Vercel:**
   ```bash
   vercel login
   ```

3. **Navigate to the project directory:**
   ```bash
   cd kenstaples.com
   ```

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

   This will:
   - Build the project
   - Deploy to Vercel
   - Assign a domain (e.g., `kenstaples.vercel.app`)
   - Update DNS to point to Vercel

5. **Add your custom domain:**
   - Go to Vercel Dashboard → Your Project → Domains
   - Add `kenstaples.com`
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel Dashboard

1. **Push this repository to GitHub:**
   ```bash
   cd kenstaples.com
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/kenstaplesonline/kenstaples.com.git
   git push -u origin main
   ```

2. **Go to Vercel Dashboard:**
   - Sign in at [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository `kenstaples.com`

3. **Configure Project:**
   - Framework Preset: Next.js
   - Root Directory: `.` (current directory)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Click "Visit Site"

5. **Add Custom Domain:**
   - Go to "Settings" → "Domains"
   - Add `kenstaples.com`
   - Follow DNS configuration (CNAME record)

## 🔧 Project Configuration

### vercel.json Settings

The project includes a `vercel.json` configuration file with:

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Framework:** Next.js
- **Regions:** `iad1` (US East - Northern Virginia)
- **Headers:** Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SITE_URL=https://kenstaples.com
```

## 🌐 Domain Configuration

### For Custom Domain (kenstaples.com)

1. **Add Domain in Vercel:**
   - Vercel Dashboard → Your Project → Domains
   - Add `kenstaples.com`

2. **Configure DNS:**

   If using Cloudflare:
   - Go to your domain DNS settings
   - Create a CNAME record:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
   - Create a CNAME record:
     - Name: `@`
     - Value: `cname.vercel-dns.com`

   If using Namecheap (example):
   - Go to Advanced DNS
   - Add CNAME record:
     - Type: CNAME
     - Host: `www`
     - Value: `cname.vercel-dns.com`

   If using GoDaddy (example):
   - Go to DNS Management
   - Add CNAME:
     - Name: `www`
     - Value: `cname.vercel-dns.com`

3. **Wait for DNS Propagation:**
   - DNS changes typically take 5-30 minutes
   - Verify propagation at [vercel.com/dns-check](https://vercel.com/dns-check)

### For GitHub Pages

1. **Create GitHub Pages settings:**
   - Go to your GitHub repository
   - Settings → Pages
   - Under "Build and deployment" → "Branch":
     - Select `main` branch
     - Select `/root` folder
   - Click "Save"

2. **Update vercel.json (if using GitHub Pages):**
   - Remove `regions` setting
   - Update framework preset to GitHub Pages

## 📊 Analytics (Optional)

Add Google Analytics:

1. **Get GA ID:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create a new property
   - Get your Measurement ID (e.g., `G-XXXXXXXXXX`)

2. **Add to .env.local:**
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Create `app/layout.tsx` component:**
   ```tsx
   import { useEffect } from 'react'
   import Script from 'next/script'

   export default function RootLayout({ children }) {
     useEffect(() => {
       window.dataLayer = window.dataLayer || []
       function gtag() { dataLayer.push(arguments) }
       gtag('js', new Date())
       gtag('config', process.env.NEXT_PUBLIC_GA_ID)
     }, [])

     return (
       <html>
         <head>
           <Script
             strategy="afterInteractive"
             src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           />
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

## 🔍 Post-Deployment Checklist

- [ ] Verify site loads at `https://kenstaples.com`
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form (if implemented)
- [ ] Add social media links
- [ ] Add analytics (optional)
- [ ] Set up redirects (if needed)
- [ ] Add 404 page (optional)

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
vercel --prod
```

**Error: Out of memory**
- Increase Node.js memory limit in vercel.json:
  ```json
  {
    "buildCommand": "NODE_OPTIONS='--max-old-space-size=4096' npm run build"
  }
  ```

### Domain Not Working

1. Check DNS propagation
2. Verify CNAME record is correct
3. Check Vercel domain settings
4. Clear browser cache

### Deploy Fails

1. Check Vercel build logs
2. Verify environment variables
3. Check for syntax errors in code
4. Ensure all dependencies are in package.json

## 📞 Support

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues:** [github.com/vercel/vercel/issues](https://github.com/vercel/vercel/issues)

## 🎯 Next Steps

After deployment:

1. **Add your photo:**
   - Place in `public/` folder
   - Update `app/page.tsx` with your photo

2. **Update content:**
   - Edit `app/page.tsx` to match your details
   - Update metadata in `app/layout.tsx`

3. **Add social links:**
   - Update contact section with your social media

4. **Set up form handling (optional):**
   - Use Formspree, Netlify Forms, or custom backend

5. **Add SEO optimization:**
   - Update meta tags
   - Add structured data
   - Submit sitemap to search engines

---

Happy deploying! 🚀
