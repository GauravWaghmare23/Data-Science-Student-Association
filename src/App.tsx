import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; // ✅ ScrollToTop component

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import TechCarnival from "./pages/TechCarnival";
import Committee from "./pages/Committee";
import Events from "./pages/Events";
import Workshops from "./pages/Workshops";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 px-4 text-center min-h-screen">
        <div className="text-cyan-400 text-xl sm:text-4xl font-orbitron animate-pulse">
          Loading your career...
        </div>
        <div className="mt-6 w-11/12 sm:w-2/3 h-4 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-2 text-white font-rajdhani text-base sm:text-xl">
          {progress}%
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> {/* ✅ Scroll to top on route change */}
          <div className="min-h-screen bg-background">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/tech-carnival" element={<TechCarnival />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/events" element={<Events />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
