const Blog = () => (
  <div className="min-h-screen relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }} />
      {/* Soft glow for depth */}
      <div className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 blur-lg opacity-40" />
    </div>
    <div className="container mx-auto px-3 sm:px-4 md:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">
        Blog
      </h1>
      <p className="text-gray-200 text-center max-w-2xl mx-auto mb-10 drop-shadow">
        Welcome to the Cyvoria Cybersecurity Blog! Stay tuned for the latest
        updates, tips, and insights on cybersecurity, digital protection, and
        more.
      </p>
      <div className="text-center text-gray-400 text-lg">
        No blog posts yet. Check back soon!
      </div>
    </div>
  </div>
);

export default Blog;
