# Deployment Guide

This guide covers multiple deployment options for your cybersecurity portfolio project.

## 🎯 Quick Deployment Options

### Option 1: GitHub Pages (Frontend Only) - FREE ⭐ RECOMMENDED
**Best for**: Static portfolio showcase

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Wait for GitHub Actions to complete

3. **Access your site**: `https://harkirat-singh2.github.io/Cybersecurity-project`

### Option 2: Vercel (Full-Stack) - FREE
**Best for**: Full-stack with backend functionality

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Set Environment Variables** in Vercel dashboard:
   - `MONGODB_URI`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_SECURE`

### Option 3: Netlify (Frontend + Functions) - FREE
**Best for**: JAMstack deployment

1. **Connect GitHub repo** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**

## 🔧 Environment Setup

### For Backend Deployment
Create these environment variables in your deployment platform:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password
EMAIL_HOST=smtp.domain.com
EMAIL_PORT=587
EMAIL_SECURE=false
PORT=5000
```

### MongoDB Setup (Required for contact form)
1. **Create MongoDB Atlas account** (free)
2. **Create cluster** and database
3. **Get connection string**
4. **Add to environment variables**

## 🚀 Advanced Deployment

### Docker Deployment
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Railway Deployment
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### DigitalOcean App Platform
1. Create new app from GitHub
2. Configure build settings
3. Add environment variables
4. Deploy

## 📊 Deployment Comparison

| Platform | Cost | Backend | Database | Custom Domain | SSL |
|----------|------|---------|----------|---------------|-----|
| GitHub Pages | Free | ❌ | ❌ | ✅ | ✅ |
| Vercel | Free/Paid | ✅ | External | ✅ | ✅ |
| Netlify | Free/Paid | Functions | External | ✅ | ✅ |
| Railway | Paid | ✅ | ✅ | ✅ | ✅ |
| DigitalOcean | Paid | ✅ | ✅ | ✅ | ✅ |

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Node.js version (use 18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **404 on Refresh**:
   - Configure redirects (already done in config files)
   - Ensure SPA routing is handled

3. **API Not Working**:
   - Check CORS configuration
   - Verify environment variables
   - Check API endpoints

4. **3D Elements Not Loading**:
   - Ensure WebGL support
   - Check Three.js dependencies
   - Verify build optimization

### Performance Optimization

1. **Enable Gzip compression**
2. **Use CDN for assets**
3. **Optimize images**
4. **Enable caching headers**

## 📱 Testing Deployment

### Local Testing
```bash
# Test production build locally
npm run build
npm run preview
```

### Cross-browser Testing
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector
- Edge DevTools

## 🔐 Security Checklist

- [ ] Environment variables secured
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] Input validation on forms
- [ ] Rate limiting on API endpoints
- [ ] Database connection secured

## 📈 Monitoring

### Analytics Setup
1. **Google Analytics**: Add tracking code
2. **Vercel Analytics**: Enable in dashboard
3. **Netlify Analytics**: Enable in settings

### Error Monitoring
1. **Sentry**: For error tracking
2. **LogRocket**: For user sessions
3. **Console logs**: For debugging

---

Choose the deployment option that best fits your needs. GitHub Pages is perfect for showcasing your portfolio, while Vercel/Netlify provide full-stack capabilities for the contact form functionality.