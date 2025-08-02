# Cybersecurity Portfolio Project

A modern cybersecurity portfolio website built with React, TypeScript, and Three.js, featuring 3D animations and interactive elements.

## 🚀 Live Demo

Visit the live site: [https://harkirat-singh2.github.io/Cybersecurity-project](https://harkirat-singh2.github.io/Cybersecurity-project)

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Three.js** with React Three Fiber for 3D graphics
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **React Router** for navigation

### Backend
- **Node.js** with Express
- **MongoDB** for database
- **Nodemailer** for email functionality
- **CORS** enabled for cross-origin requests

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB database (local or cloud)

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/harkirat-singh2/Cybersecurity-project.git
cd Cybersecurity-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your configuration
# MONGODB_URI=your_mongodb_connection_string
# EMAIL_USER=your_email@domain.com
# EMAIL_PASS=your_email_password
# EMAIL_HOST=your_smtp_host
# EMAIL_PORT=587
# EMAIL_SECURE=false

# Start backend server
npm start
```

## 🚀 Deployment

### GitHub Pages (Frontend)
The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. Push your code to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Enable GitHub Pages in repository settings if not already enabled

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Backend Deployment
For backend deployment, you can use services like:
- **Heroku**: Easy deployment with MongoDB Atlas
- **Vercel**: Serverless functions
- **Railway**: Simple deployment
- **DigitalOcean**: VPS hosting

## 📁 Project Structure

```
cybersecurity/
├── src/
│   ├── components/          # React components
│   │   ├── 3DBackground.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Services.jsx
│   ├── App.jsx             # Main app component
│   ├── AppRouter.jsx       # Routing configuration
│   └── main.jsx           # Entry point
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
└── package.json          # Frontend dependencies
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password
EMAIL_HOST=smtp.domain.com
EMAIL_PORT=587
EMAIL_SECURE=false
PORT=5000
```

### Vite Configuration
The project is configured for GitHub Pages deployment with the correct base path in `vite.config.ts`.

## 🎨 Features

- **3D Interactive Background** using Three.js
- **Responsive Design** with Tailwind CSS
- **Smooth Animations** with Framer Motion
- **Contact Form** with backend integration
- **Modern UI/UX** with cybersecurity theme
- **SEO Optimized** with proper meta tags
- **Fast Loading** with Vite optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Harkirat Singh**
- GitHub: [@harkirat-singh2](https://github.com/harkirat-singh2)
- Portfolio: [Cybersecurity Portfolio](https://harkirat-singh2.github.io/Cybersecurity-project)

## 🙏 Acknowledgments

- Three.js community for amazing 3D capabilities
- React team for the excellent framework
- Vite team for the fast build tool
- All open-source contributors

---

⭐ Star this repository if you found it helpful!