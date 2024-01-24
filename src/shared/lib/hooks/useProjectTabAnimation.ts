import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import gsap from "gsap";

export const useProjectTabAnimation = (): {
  hoverRef: React.RefObject<HTMLDivElement>;
} => {
  const isHover = useSelector((state: RootState) => state.hover.isHover);
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoverRef.current) {
      const tl = gsap.timeline();

      if (isHover) {
        tl.to(hoverRef.current, {
          opacity: 1,
          duration: 0,
          ease: "power3.out",
        });
      } else {
        tl.to(hoverRef.current, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  }, [isHover, hoverRef]);

  return { hoverRef };
};
