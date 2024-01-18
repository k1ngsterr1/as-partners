import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import gsap from "gsap";

export const useLoaderAnimation = (): {
  loaderRef: React.RefObject<HTMLDivElement>;
  lineTopRef: React.RefObject<HTMLImageElement>;
  lineBottomRef: React.RefObject<HTMLImageElement>;
  lineLeftRef: React.RefObject<HTMLImageElement>;
  lineRightRef: React.RefObject<HTMLImageElement>;
} => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLImageElement>(null);
  const lineBottomRef = useRef<HTMLImageElement>(null);
  const lineLeftRef = useRef<HTMLImageElement>(null);
  const lineRightRef = useRef<HTMLImageElement>(null);

  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    if (
      loaderRef.current &&
      lineTopRef.current &&
      lineBottomRef.current &&
      lineLeftRef.current &&
      lineRightRef.current
    ) {
      const tl = gsap.timeline();

      if (isLoading) {
        tl.to(lineTopRef.current, {
          width: "100%",
          duration: 0.5,
          ease: "power3.inOut",
        });
        tl.to(lineBottomRef.current, {
          width: "100%",
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(lineRightRef.current, {
            height: "100%",
            duration: 0.5,
            ease: "power3.inOut",
          })
          .to(lineLeftRef.current, {
            height: "100%",
            duration: 0.5,
            ease: "power3.inOut",
          });
      } else {
        tl.to(loaderRef.current, {
          y: "1000",
        });
      }
    }
  }, [isLoading, lineTopRef, lineBottomRef, lineLeftRef, lineRightRef]);
  return { loaderRef, lineTopRef, lineBottomRef, lineLeftRef, lineRightRef };
};
