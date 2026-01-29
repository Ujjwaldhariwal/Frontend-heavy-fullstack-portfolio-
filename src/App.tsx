import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { config } from "./constants/config";

// Lazy load stars to unblock main thread
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* REMOVED SmoothScroll WRAPPER - Native scrolling is faster */}
      <div className="relative min-h-screen bg-[#050505]">
        <div className="relative z-10">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          
          <div className="relative">
            <Contact />
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;