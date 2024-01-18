import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import gsap from "gsap";

export const useMenuAnimation = (): {
  menuRef: React.RefObject<HTMLDivElement>;
  logoRef: React.RefObject<HTMLImageElement>;
  linkRefs: React.MutableRefObject<(HTMLAnchorElement | null)[]>;
} => {
  const menuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  useEffect(() => {
    try {
      if (menuRef.current && linkRefs.current) {
        const tl = gsap.timeline();

        if (isOpen) {
          tl.to(menuRef.current, {
            y: "0%",
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }).to(
            linkRefs.current,
            {
              y: "0%",
              autoAlpha: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
              opacity: 1,
              ease: "power3.out",
            },
            "-=0.25"
          );
        } else {
          tl.to(linkRefs.current, {
            y: "2000%", // Move down
            autoAlpha: 0, // Fade out
            scale: 0.95,
            stagger: 0.1, // Stagger the links disappearing
            duration: 0.3,
            ease: "power3.in",
            clearProps: "all", // Clear GSAP properties after animation
          }).to(
            menuRef.current,
            {
              y: "-2000%", // Move up
              autoAlpha: 0, // Fade out
              scale: 0.95,
              duration: 0.5,
              ease: "power3.in",
              clearProps: "all", // Clear GSAP properties after animation
            },
            "+=0.1"
          );
        }
      }
    } catch (error: any) {
      console.log("Animation Error", error);
    }
  }, [isOpen, linkRefs]);

  return { menuRef, linkRefs, logoRef };
};
