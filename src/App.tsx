import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing the component you want to display on all pages
import ParticlesBackground from './components/ParticlesBackground';

// Your existing page imports
import Index from "./pages/Index";
import Workshops from "./pages/Workshops";
import Quiz from "./pages/Quiz";
import OtherEvents from "./pages/OtherEvents";
import Accommodation from "./pages/Accommodation";
import PrevEditions from "./pages/PrevEditions";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  // The outer div acts as a container for both the background and the main content.
  // We recommend using a CSS file for these styles in a real project.
  <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

    {/* The ParticlesBackground component is placed here, outside of the BrowserRouter,
        so that it is rendered on every page regardless of the route. */}
    <ParticlesBackground />

    {/* This container holds all your router-based content. Its position and z-index
        will ensure that it appears on top of the ParticlesBackground. */}
    <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/other-events" element={<OtherEvents />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/prev-editions" element={<PrevEditions />} />
              <Route path="/contact" element={<ContactUs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  </div>
);

export default App;
