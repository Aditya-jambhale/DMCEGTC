import { useState, useEffect } from "react";
import conferenceLogo from "@/assets/conference-logo.png";
import dmceLogo from "@/assets/website-dmce.png";
import csiLogo from "@/assets/csi-logo.png";
import { cn } from "@/lib/utils";

interface LogoIntroProps {
  onComplete: () => void;
}

export const LogoIntro = ({ onComplete }: LogoIntroProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reveal content after a short delay
    const revealTimer = setTimeout(() => setShowContent(true), 100);

    // Start exit animation after 3 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    // Call onComplete after exit animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-navy transition-all duration-1000 ease-in-out px-4",
        isExiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      )}
    >
      {/* Background Cinematic Effects */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]  rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]" />
      </div> */}

      <div className={cn(
        "relative z-10 w-full max-w-5xl flex flex-col items-center transition-all duration-1000 transform",
        showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}>

        {/* Main Logo Convergence Area */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-16">

          {/* DMCE Logo Section */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-500" />
              <img
                src={dmceLogo}
                alt="DMCE Logo"
                className="w-28 h-28 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-1 font-heading">
                DMCE
              </h2>
              <p className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.2em]">
                Airoli, Navi Mumbai
              </p>
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="hidden md:flex flex-col items-center h-48 justify-center gap-4">
            <div className="w-px h-16 bg-gradient-to-t from-[#FFD700]/50 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
            <div className="w-px h-16 bg-gradient-to-b from-[#FFD700]/50 to-transparent" />
          </div>

          <div className="md:hidden flex items-center w-32 gap-4">
            <div className="h-px flex-1 bg-gradient-to-l from-[#FFD700]/50 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
            <div className="h-px flex-1 bg-gradient-to-r from-[#FFD700]/50 to-transparent" />
          </div>

          {/* GTC Logo Section */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500" />
              <img
                src={conferenceLogo}
                alt="GTC Logo"
                className="w-28 h-28 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-black text-[#FFD700] uppercase tracking-tighter mb-1 font-heading">
                DMCE-GTC 2026
              </h2>
              <p className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.2em]">
                Global Tech Convergence
              </p>
            </div>
          </div>
        </div>

        {/* Association Footer */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
          <p className="text-[9px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-6">
            In Association With
          </p>
          <div className="flex items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-3">
              <img src={csiLogo} alt="CSI Logo" className="h-8 md:h-10 w-auto object-contain brightness-4 " />
              <div className="text-left">
                <p className="text-[10px] md:text-[11px] font-black text-white leading-none">CSI Student Branch</p>
                <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest mt-0.5">DMCE Chapter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent w-full animate-progress-reveal" />
      </div>

      <style>{`
        @keyframes progressReveal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-reveal {
          animation: progressReveal 3.5s linear forwards;
        }
        .font-heading {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </div>
  );
};
