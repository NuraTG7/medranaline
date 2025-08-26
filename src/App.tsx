import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
);

export default App;
