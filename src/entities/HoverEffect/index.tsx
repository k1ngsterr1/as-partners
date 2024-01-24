import React from "react";
import ReactCurvedText from "react-curved-text";

import styles from "./styles.module.scss";
interface IHoverEffect {
  text: string;
}

// export const HoverEffect: React.FC<IHoverEffect> = ({ text }) => {
//     const diameter = 200;
//     const radius = diameter / 2;
//     const centerY = radius + 20; // Adjust the 20 to whatever number you need to move the text down by

//     return (
//       <div className={styles.hover_effect}>
//         <svg
//           width={diameter}
//           height={diameter}
//           viewBox={`0 0 ${diameter} ${diameter}`}
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* ... */}
//           <path
//             id="curve"
//             d={`M ${radius}, ${centerY} m -${radius}, 0 a ${radius},${radius} 0 1,0 ${diameter},0 a ${radius},${radius} 0 1,0 -${diameter},0`}
//             fill="transparent"
//             // ...
//           />
//           {/* ... */}
//         </svg>
//       </div>
//     );
//   };

export const HoverEffect: React.FC<IHoverEffect> = ({ text }) => {
  const diameter = 200;
  const radius = diameter / 2;
  const startOffset = 17;

  return (
    <div className={styles.hover_effect}>
      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>{/* Define your blur filter here if needed */}</defs>
        <path
          id="curve"
          d={`M ${radius}, ${radius} m -${radius}, 0 a ${radius},${radius} 0 1,0 ${diameter},0 a ${radius},${radius} 0 1,0 -${diameter},0`}
          fill="transparent"
        />
        <text>
          <textPath
            href="#curve"
            startOffset={`${startOffset}%`}
            style={{
              fontSize: "18px",
              fontFamily: "Montserrat",
              fill: "white",
            }}
          >
            Проверка
          </textPath>
        </text>
      </svg>
    </div>
  );
};
