import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode, useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 p-3 rounded-2xl bg-primary text-white shadow-2xl transition-all duration-300 hover:bg-navy hover:-translate-y-1 active:scale-95 group",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover:scale-100 transition-transform" />
      </button>
    </div>
  );
};
