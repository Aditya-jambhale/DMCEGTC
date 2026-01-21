import { useState, useEffect } from "react";
import conferenceLogo from "@/assets/conference-logo.png";
import dmceLogo from "@/assets/dmce-logo.jpg";
import { cn } from "@/lib/utils";

interface LogoIntroProps {
    onComplete: () => void;
}

export const LogoIntro = ({ onComplete }: LogoIntroProps) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Start exit animation after 2.5 seconds
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 2500);

        // Call onComplete after exit animation finishes
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3200);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out",
                isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
        >
            <div className="container max-w-4xl px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                {/* Left Logo: GTC */}
                <div className="animate-slide-in-left flex flex-col items-center gap-4">
                    <img
                        src={conferenceLogo}
                        alt="GTC Logo"
                        className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl"
                    />
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading">
                            GTC 2026
                        </h2>
                        <p className="text-sm text-muted-foreground font-medium">
                            Global Tech Convergence
                        </p>
                    </div>
                </div>

                {/* Vertical Divider (Hidden on mobile) */}
                <div className="hidden md:block h-32 w-px bg-border animate-fade-in" />

                {/* Right Logo: Datta Meghe */}
                <div className="animate-slide-in-right flex flex-col items-center gap-4">
                    <img
                        src={dmceLogo}
                        alt="DMCE Logo"
                        className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl"
                    />
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary font-heading">
                            DMCE
                        </h2>
                        <p className="text-sm text-muted-foreground font-medium">
                            Datta Meghe College
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out 0.5s forwards;
          opacity: 0;
        }
      `}</style>
        </div>
    );
};
