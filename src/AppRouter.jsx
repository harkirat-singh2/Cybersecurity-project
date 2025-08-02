import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services.jsx";
import Blog from "./components/Blog.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Header3D from "./components/Header3D.jsx";
import Hero3D from "./components/Hero3D.jsx";
import About3D from "./components/About3D.jsx";
import Contact3D from "./components/Contact3D.jsx";
import Footer3D from "./components/Footer3D.jsx";
import Background3D from "./components/3DBackground.jsx";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Loader = () => <div className="w-full text-center py-10 text-lg text-cyan-400">Loading...</div>;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="app" className="min-h-screen relative">
            <Background3D />
            <Header3D />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero3D />
                    <Services />
                    <About3D />
                    <Contact3D />
                    <Footer3D />
                  </>
                }
              />
              <Route
                path="/blog"
                element={
                  <>
                    <Blog />
                    <Footer3D />
                  </>
                }
              />
            </Routes>
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
