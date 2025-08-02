#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up backend environment...\n');

// Check if .env exists
if (!fs.existsSync('.env')) {
  if (fs.existsSync('.env.example')) {
    fs.copyFileSync('.env.example', '.env');
    console.log('✅ Created .env file from .env.example');
    console.log('⚠️  Please edit .env file with your actual configuration values');
  } else {
    console.log('❌ .env.example not found. Creating basic .env file...');
    const envContent = `MONGODB_URI=mongodb://localhost:27017/cybersecurity
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password
EMAIL_HOST=smtp.domain.com
EMAIL_PORT=587
EMAIL_SECURE=false
PORT=5000`;
    fs.writeFileSync('.env', envContent);
    console.log('✅ Created basic .env file');
  }
} else {
  console.log('ℹ️  .env file already exists');
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing backend dependencies...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Backend dependencies installed');
  } catch (error) {
    console.error('❌ Failed to install dependencies');
    process.exit(1);
  }
} else {
  console.log('ℹ️  Backend dependencies already installed');
}

console.log('\n🎉 Backend setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Edit .env file with your MongoDB URI and email settings');
console.log('2. Run "npm start" to start the backend server');
console.log('3. Test the API at http://localhost:5000/api/health');