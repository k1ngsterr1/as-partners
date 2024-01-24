import { useRef, useCallback } from "react";
import gsap from "gsap";

export const useProjectTabAnimation = () => {
  const hoverRef = useRef<HTMLDivElement>(null);

  const animateOnHover = useCallback(() => {
    if (hoverRef.current) {
      gsap.to(hoverRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "ease.in",
      });
    }
  }, []);

  const animateOnLeave = useCallback(() => {
    console.log(hoverRef.current);

    if (hoverRef.current) {
      console.log(hoverRef.current);
      gsap.to(hoverRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "ease.out",
      });
    }
  }, []);

  return { hoverRef, animateOnHover, animateOnLeave };
};
