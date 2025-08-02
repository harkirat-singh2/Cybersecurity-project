#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Check if git is initialized
try {
  execSync('git status', { stdio: 'ignore' });
} catch (error) {
  console.log('📦 Initializing git repository...');
  execSync('git init');
  execSync('git branch -M main');
}

// Install dependencies if node_modules doesn't exist
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
}

// Build the project
console.log('🔨 Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!\n');
} catch (error) {
  console.error('❌ Build failed. Please fix the errors and try again.');
  process.exit(1);
}

// Check if gh-pages is installed
try {
  require.resolve('gh-pages');
} catch (error) {
  console.log('📦 Installing gh-pages...');
  execSync('npm install --save-dev gh-pages', { stdio: 'inherit' });
}

// Add and commit changes
console.log('📝 Committing changes...');
try {
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy: Update project for GitHub Pages"', { stdio: 'inherit' });
} catch (error) {
  console.log('ℹ️  No changes to commit or already committed.');
}

// Deploy to GitHub Pages
console.log('🚀 Deploying to GitHub Pages...');
try {
  execSync('npm run deploy', { stdio: 'inherit' });
  console.log('\n✅ Deployment successful!');
  console.log('🌐 Your site will be available at: https://harkirat-singh2.github.io/Cybersecurity-project');
  console.log('⏰ It may take a few minutes for changes to appear.');
} catch (error) {
  console.error('❌ Deployment failed. Please check the error messages above.');
  process.exit(1);
}

console.log('\n🎉 Deployment complete!');
console.log('\n📋 Next steps:');
console.log('1. Push your changes to GitHub: git push origin main');
console.log('2. Enable GitHub Pages in your repository settings');
console.log('3. Wait for GitHub Actions to complete');
console.log('4. Visit your live site!');