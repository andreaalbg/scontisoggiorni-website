# Quick Start Guide

Get your website running in 5 minutes! ⚡

## 🚀 Installation

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and more.

### 2. Setup Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values (optional for development).

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

## 📝 First Steps

### 1. Add Your Logo
- Place your logo in `/public/logo.png`
- Recommended size: 200x60px, PNG format

### 2. Add Product Images
Place images in `/public/images/`:
- `shabby-chic.jpg` (800x600px)
- `rustico.jpg` (800x600px)
- `moderno.jpg` (800x600px)

### 3. Update Company Info

**Edit `components/home/WhoWeAre.tsx`:**
- Update company description
- Modify feature texts

**Edit `lib/structured-data.ts`:**
- Add business address
- Add phone number
- Update coordinates
- Set opening hours

### 4. Customize Colors (Optional)

**Edit `tailwind.config.ts`:**
```typescript
colors: {
  primary: {
    DEFAULT: '#d4282a',  // Your brand color
    // ...
  }
}
```

### 5. Setup Contact Form

Choose an email service:

**Option A: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option B: Resend (Recommended)**
```bash
npm install resend
```

Create `app/api/contact/route.ts` (see CUSTOMIZATION.md for details)

## 🎨 Customization

### Quick Changes

1. **Hero Slides**: Edit `components/home/HeroCarousel.tsx`
2. **Products**: Edit `components/home/ProductShowcase.tsx`
3. **Services**: Edit `components/home/ServicesGrid.tsx`
4. **Testimonials**: Edit `components/home/Testimonials.tsx`
5. **Footer**: Edit `components/layout/Footer.tsx`

### Content Updates

All text content is in the component files. Search for the text you want to change and update it directly.

## 🔍 SEO Setup

### 1. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Get verification code
4. Add to `app/layout.tsx`:
```typescript
verification: {
  google: 'YOUR_VERIFICATION_CODE',
}
```

### 2. Google Analytics
1. Create GA4 property
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🚀 Deploy to Vercel

### Method 1: CLI
```bash
npm install -g vercel
vercel
```

### Method 2: Git
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy! ✨

Your site will be live at: `https://your-project.vercel.app`

## 📱 Test Your Site

### Development Checklist
- [ ] All sections visible
- [ ] Forms working
- [ ] Images loading
- [ ] Links working
- [ ] Mobile responsive
- [ ] No console errors

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test on slow connection

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run lint
npm run build
```

### Images Not Showing
- Check images are in `/public` directory
- Use correct paths (e.g., `/images/logo.png`)
- Verify image formats are supported

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🎯 Next Steps

1. ✅ Get the site running locally
2. ✅ Add your content and images
3. ✅ Customize colors and branding
4. ✅ Setup contact form
5. ✅ Configure SEO
6. ✅ Deploy to Vercel
7. ✅ Add custom domain
8. ✅ Submit to search engines

## 💡 Tips

- Keep your `node_modules` out of Git (already in .gitignore)
- Always test locally before deploying
- Use environment variables for sensitive data
- Keep dependencies updated
- Monitor site performance regularly

## 🤝 Need Help?

- Check documentation files (README.md, CUSTOMIZATION.md, etc.)
- Review the code comments
- Search the [Next.js discussions](https://github.com/vercel/next.js/discussions)
- Check [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

## 🎉 You're Ready!

Your high-performance, SEO-optimized website is ready to go. Good luck! 🚀

