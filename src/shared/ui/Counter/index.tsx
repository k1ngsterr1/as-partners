import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

import styles from "./stlyes.module.scss";

interface CounterProps {
  duration: number;
  end: number;
  text: string;
  marginTop: string;
}

export const Counter: React.FC<CounterProps> = ({
  duration,
  end,
  text,
  marginTop,
}) => {
  const countUpRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${marginTop} ${styles.counter_container}`}
      ref={countUpRef}
    >
      {startCount ? (
        <CountUp
          className={styles.counter_container__counter}
          end={end}
          duration={duration}
        />
      ) : (
        <span className={styles.counter_container__counter}>0</span>
      )}

      <span className={styles.counter_container__text}>{text}</span>
    </div>
  );
};
