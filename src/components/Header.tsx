import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top bar with centered DMCE logo */}
      <div className="container flex h-12 items-center justify-center border-b border-border/50">
        <Link to="/" className="flex items-center gap-2">
          <img src={dmceLogo} alt="DMCE Logo" className="h-10 w-auto" />
        </Link>
      </div>
      
      <div className="container flex h-14 items-center justify-between">
        {/* Left side - Conference branding with globe logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={conferenceLogo} alt="DMCE-GTC 2026 Conference Logo" className="h-10 w-auto" />
          <div className="flex-col hidden sm:flex">
            <span className="font-heading text-lg font-bold text-primary">
              DMCE-GTC 2026
            </span>
            <span className="text-xs text-muted-foreground">
              Global Tech Convergence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side - CSI Logo and Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <img src={csiLogo} alt="CSI Logo" className="h-10 w-auto" />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-card p-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
