import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is no hash, scroll to top instantly
        if (!hash) {
            window.scrollTo({ top: 0, behavior: "auto" });
        } else {
            // If there is a hash, scroll to the element smoothly
            // Small timeout to ensure the element is rendered in case of cross-page navigation
            setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
