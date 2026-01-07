import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
// import { AnimatePresence } from 'framer-motion';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPage from "./pages/BlogPage";
import SuccessStoryPage from "./pages/SuccessStoryPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import LanguageProvider from "./components/LanguageProvider";
import ScrollToTop from "./components/ScrollToTop";
// import Preloader from "./components/Preloader";
import ScrollToTopButton from './components/ScrollToTopButton';
import '@/i18n';


const queryClient = new QueryClient();

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          {/* <AnimatePresence mode="wait">
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
          </AnimatePresence> */}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <ScrollToTopButton />
            <FloatingWhatsApp />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/:service" element={<ServicePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />

              <Route path="/blog/:slug" element={<BlogPage />} />

              <Route path="/success-story" element={<SuccessStoryPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
