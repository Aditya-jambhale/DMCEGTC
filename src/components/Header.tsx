import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import conferenceLogo from "@/assets/conference-logo.png";
import dmceLogo from "@/assets/dmce-logo.jpg";
import csiLogo from "@/assets/csi-logo.jpg";

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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md transition-all duration-300">
      {/* Top bar with centered DMCE logo */}
      <div className="container flex h-14 items-center justify-center border-b border-border/40 py-2">
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
          <img src={dmceLogo} alt="DMCE Logo" className="h-10 w-auto drop-shadow-sm" />
          <div className="flex flex-col">
            <span className="text-xs font-bold leading-none text-navy uppercase tracking-widest bg-navy/5 px-2 py-1 rounded">
              Datta Meghe College of Engineering
            </span>
            <span className="text-[10px] text-muted-foreground text-center font-medium">Airoli, Navi Mumbai</span>
          </div>
        </Link>
      </div>

      <div className="container flex h-20 items-center justify-between">
        {/* Left side - Conference branding */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={conferenceLogo} alt="Logo" className="h-14 w-auto drop-shadow-md transition-transform group-hover:rotate-3" />
            <div className="absolute -inset-1 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-extrabold text-navy tracking-tight leading-tight">
              GTC <span className="text-primary tracking-normal">2026</span>
            </span>
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
              Global Tech Convergence
            </span>
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
          <div className="hidden sm:flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
            <img src={csiLogo} alt="CSI" className="h-7 w-auto grayscale group-hover:grayscale-0 transition-all opacity-70" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">CSI Student Branch</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/5 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-white p-6 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between px-5 py-3 text-sm font-bold rounded-xl transition-all",
                  location.pathname === item.path
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-foreground/70 hover:bg-muted"
                )}
              >
                {item.name}
                <ArrowRight className={cn("h-4 w-4 opacity-0 transition-all", location.pathname === item.path ? "opacity-100" : "")} />
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
