import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services.jsx";
import Blog from "./components/Blog.jsx";
import React, { Suspense, lazy } from "react";

const Header3D = React.memo(lazy(() => import("./components/Header3D.jsx")));
const Hero3D = React.memo(lazy(() => import("./components/Hero3D.jsx")));
const About3D = React.memo(lazy(() => import("./components/About3D.jsx")));
const Contact3D = React.memo(lazy(() => import("./components/Contact3D.jsx")));
const Footer3D = React.memo(lazy(() => import("./components/Footer3D.jsx")));
const Background3D = React.memo(lazy(() => import("./components/3DBackground.jsx")));

const Loader = () => <div className="w-full text-center py-10 text-lg text-gray-400">Loading...</div>;

const App = () => (
  <Router>
    <div className="min-h-screen relative">
      <Suspense fallback={<Loader />}>
        <Background3D />
        <Header3D />
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Suspense fallback={<Loader />}>
                <Hero3D />
              </Suspense>
              <Services />
              <Suspense fallback={<Loader />}>
                <About3D />
                <Contact3D />
                <Footer3D />
              </Suspense>
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
              <Suspense fallback={<Loader />}>
                <Footer3D />
              </Suspense>
            </>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;
