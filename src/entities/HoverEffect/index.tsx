import { RefObject, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface IHoverEffect {
  text: string;
  ref: RefObject<HTMLDivElement>;
}

export const HoverEffect = forwardRef<HTMLDivElement, IHoverEffect>(
  ({ text }, ref) => {
    const diameter = 200;
    const radius = diameter / 2;
    const startOffset = 16;
    const centerY = 80;

    return (
      <div className={styles.hover_effect} ref={ref}>
        <FontAwesomeIcon className={styles.hover_effect__icon} icon={faPlay} />
        <svg
          width={diameter}
          height={diameter}
          viewBox={`0 0 ${diameter} ${diameter}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path
            id="curve"
            d={`M ${radius}, ${centerY}m -${radius}, 0 a ${radius},${radius} 0 1,0 ${diameter},0 a ${radius},${radius} 0 1,0 -${diameter},0`}
            fill="transparent"
          />
          <text>
            <textPath
              href="#curve"
              startOffset={`${startOffset}%`}
              style={{
                fontSize: "clamp(10px,1.0416vw,40px)",
                fontFamily: "Montserrat",
                fill: "white",
              }}
            >
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    );
  }
);
