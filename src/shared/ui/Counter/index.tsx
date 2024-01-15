import React from "react";
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
  return (
    <div className={`${marginTop} ${styles.counter_container}`}>
      <CountUp
        className={styles.counter_container__counter}
        end={end}
        duration={duration}
      />
      <span className={styles.counter_container__text}>{text}</span>
    </div>
  );
};
