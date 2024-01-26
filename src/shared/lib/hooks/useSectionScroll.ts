import { useEffect, useRef } from "react";

const useCustomScroll = (startElementSelector, endElementSelector) => {
  const observer = useRef(null);
  const startElementRef = useRef(null);
  const endElementRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === startElementRef.current && entry.isIntersecting) {
          document.body.style.overflow = "hidden";
        } else if (
          entry.target === endElementRef.current &&
          entry.isIntersecting
        ) {
          document.body.style.overflow = "";
        }
      });
    };

    observer.current = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });

    startElementRef.current = document.querySelector(startElementSelector);
    endElementRef.current = document.querySelector(endElementSelector);

    if (startElementRef.current) {
      observer.current.observe(startElementRef.current);
    }
    if (endElementRef.current) {
      observer.current.observe(endElementRef.current);
    }

    return () => {
      observer.current.disconnect();
    };
  }, [startElementSelector, endElementSelector]);

  return { startElementRef, endElementRef };
};

export default useCustomScroll;
