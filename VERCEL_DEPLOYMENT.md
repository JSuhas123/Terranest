# Vercel Deployment Guide for Terranest

## Prerequisites
- GitHub repository: https://github.com/JSuhas123/Terranest.git
- Vercel account: https://vercel.com

## Quick Deploy
1. **Connect GitHub Repository**
   - Go to https://vercel.com/new
   - Import your GitHub repository: JSuhas123/Terranest
   - Choose "Next.js" as framework preset

2. **Environment Variables** (Optional)
   Add these in Vercel dashboard under Project Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=Terranest
   NEXT_PUBLIC_SITE_DESCRIPTION=Create beautiful, sustainable terrarium ecosystems
   ```

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically detect Next.js and use optimal settings

## Build Settings (Auto-configured)
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

## Performance Optimizations Included
✅ Next.js 16 with optimizations
✅ Image optimization (WebP/AVIF)
✅ Automatic static optimization
✅ Performance headers
✅ SEO metadata
✅ Sitemap generation
✅ Web Vitals tracking
✅ Gzip compression
✅ Cache optimization

## Custom Domain (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update NEXT_PUBLIC_SITE_URL environment variable

## Analytics Setup (Optional)
1. Add Google Analytics ID: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
2. Add Hotjar ID: `NEXT_PUBLIC_HOTJAR_ID=XXXXXXX`
3. Deploy to apply changes

## Monitoring
- Vercel provides built-in analytics
- Web Vitals are automatically tracked
- Error reporting in Vercel dashboard

## Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs