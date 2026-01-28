import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: ReactNode;
    className?: string;
    width?: "fit-content" | "100%";
    delay?: number;
}

export const Reveal = ({ children, className, width = "100%", delay = 0 }: RevealProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{ width, transitionDelay: `${delay}ms` }}
            className={cn(
                "relative transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                className
            )}
        >
            {children}
        </div>
    );
};
