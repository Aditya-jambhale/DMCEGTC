import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import conferenceLogo from "@/assets/conference-logo.png";
import dmceLogo from "@/assets/website-dmce.png";
import csiLogo from "@/assets/csi-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Call for Papers", path: "/call-for-papers" },
  { name: "Important Dates", path: "/important-dates" },
  { name: "Committees", path: "/committees" },
  { name: "Speakers", path: "/speakers" },
  { name: "Registration", path: "/registration" },
  { name: "Paper Submission", path: "/paper-submission" },
  { name: "Publication", path: "/publication" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative  z-50 w-full border-b border-border bg-white/80 backdrop-blur-md transition-all duration-300">
      {/* Top bar with centered DMCE logo */}
      <div className="container flex h-auto min-h-[80px] items-center justify-center border-b border-border/40 py-4 bg-gradient-to-b from-navy/[0.03] to-transparent">
        <Link to="/" className="flex flex-col md:flex-row items-center gap-3 md:gap-6 group transition-all duration-300 hover:scale-[1.01] active:scale-95 text-center md:text-left">
          <div className="relative">
            <img src={dmceLogo} alt="DMCE Logo" className="h-14 md:h-20 w-auto drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -inset-2 bg-navy/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className='text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-0.5 px-1 py-0.5 rounded'>Nagar Yuwak Shikshan Sanstha, Airoli's</h1>
            <h2 className="text-lg md:text-3xl lg:text-4xl font-black leading-tight uppercase tracking-tight ">
              Datta Meghe College of Engineering
            </h2>
          </div>
        </Link>
      </div>

      <div className="container flex h-20 md:h-28 items-center justify-between">
        {/* Left side - Conference branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={conferenceLogo} alt="Logo" className="h-12 md:h-20 lg:h-24 w-auto drop-shadow-md transition-transform group-hover:rotate-3" />
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-accent rounded-full animate-in fade-in slide-in-from-bottom-1 duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side - CSI Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 bg-muted/50 px-4 py-2 rounded-full border border-border/50 hover:bg-muted transition-colors">
            <img src={csiLogo} alt="CSI" className="h-10 md:h-12 w-auto group-hover:grayscale-0 transition-all opacity-90 shadow-sm" />
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-primary/5 text-primary"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full bg-white">
                <div className="p-6 border-b">
                  <img src={conferenceLogo} alt="Logo" className="h-12 w-auto mb-4" />
                </div>
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 text-sm font-bold rounded-xl transition-all",
                            isActive
                              ? "bg-primary text-white shadow-lg shadow-primary/20"
                              : "text-foreground/70 hover:bg-muted"
                          )}
                        >
                          {item.name}
                          <ArrowRight className={cn("h-4 w-4 opacity-0 transition-all", isActive ? "opacity-100" : "")} />
                        </Link>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
