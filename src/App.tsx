import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Nashville from "./pages/Nashville";
import Franklin from "./pages/Franklin";
import Brentwood from "./pages/Brentwood";
import ServicePage from "./pages/ServicePage";
import ServicesPage from "./pages/ServicesPage";
import ScheduleVisit from "./pages/ScheduleVisit";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nashville" element={<Nashville />} />
            <Route path="/franklin" element={<Franklin />} />
            <Route path="/brentwood" element={<Brentwood />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/schedule-visit" element={<ScheduleVisit />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
