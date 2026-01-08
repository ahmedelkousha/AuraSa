// import { useState } from 'react';
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FloatingWhatsApp from "./components/FloatingWhatsapp";
// // import { AnimatePresence } from 'framer-motion';
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ServicePage from "./pages/ServicePage";
// import PortfolioPage from "./pages/PortfolioPage";
// import ProfilePage from "./pages/ProfilePage";
// import BlogPage from "./pages/BlogPage";
// import SuccessStoryPage from "./pages/SuccessStoryPage";
// import TermsPage from "./pages/TermsPage";
// import PrivacyPage from "./pages/PrivacyPage";
// import LanguageProvider from "./components/LanguageProvider";
// import ThemeProvider from "./components/ThemeProvider";
// import ScrollToTop from "./components/ScrollToTop";
// // import Preloader from "./components/Preloader";
// import ScrollToTopButton from './components/ScrollToTopButton';
// import '@/i18n';

// const queryClient = new QueryClient();

// const App = () => {
//   // const [isLoading, setIsLoading] = useState(true);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <ThemeProvider>
//         <LanguageProvider>
//           {/* <AnimatePresence mode="wait">
//             {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
//           </AnimatePresence> */}
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <ScrollToTop />
//             <ScrollToTopButton />
//             <FloatingWhatsApp />
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/services/:service" element={<ServicePage />} />
//               <Route path="/portfolio" element={<PortfolioPage />} />
//               <Route path="/profile" element={<ProfilePage />} />
//               <Route path="/portfolio" element={<PortfolioPage />} />

//               <Route path="/blog/:slug" element={<BlogPage />} />

//               <Route path="/success-story" element={<SuccessStoryPage />} />
//               <Route path="/terms" element={<TermsPage />} />
//               <Route path="/privacy" element={<PrivacyPage />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </LanguageProvider>
//         </ThemeProvider>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;

//New Code

import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import LanguageProvider from "./components/LanguageProvider";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "@/i18n";
import { useTranslation } from "react-i18next";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const SuccessStoryPage = lazy(() => import("./pages/SuccessStoryPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground">
          {isRTL ? "جارٍ التحميل..." : "Loading..."}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <ScrollToTopButton />
              <FloatingWhatsApp />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services/:service" element={<ServicePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/blog/:slug" element={<BlogPage />} />
                  <Route path="/success-story" element={<SuccessStoryPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
