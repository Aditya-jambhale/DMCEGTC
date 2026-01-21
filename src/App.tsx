import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogoIntro } from "@/components/LogoIntro";
import Index from "./pages/Index";
import About from "./pages/About";
import CallForPapers from "./pages/CallForPapers";
import ImportantDates from "./pages/ImportantDates";
import Committees from "./pages/Committees";
import Speakers from "./pages/Speakers";
import Registration from "./pages/Registration";
import PaperSubmission from "./pages/PaperSubmission";
import Publication from "./pages/Publication";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showIntro && <LogoIntro onComplete={() => setShowIntro(false)} />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/important-dates" element={<ImportantDates />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/paper-submission" element={<PaperSubmission />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
