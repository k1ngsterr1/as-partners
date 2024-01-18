import { useLoaderAnimation } from "@shared/lib/hooks/animations/useLoaderAnimation";

import line_top from "@assets/lines/line_top.svg";
import line_bottom from "@assets/lines/line_bottom.svg";
import line_left from "@assets/lines/line_left.svg";
import line_right from "@assets/lines/line_right.svg";
import logo from "@assets/main/logo_white.svg";

import styles from "./styles.module.scss";

export const Loader = () => {
  const { loaderRef, lineTopRef, lineBottomRef, lineLeftRef, lineRightRef } =
    useLoaderAnimation();

  return (
    <div className={styles.loader} ref={loaderRef}>
      <div className={styles.loader__content}>
        <img
          src={line_top}
          className={styles.loader__content__line_top}
          ref={lineTopRef}
        />
        <img
          src={line_left}
          className={styles.loader__content__line_left}
          ref={lineLeftRef}
        />
        <img
          src={line_right}
          className={styles.loader__content__line_right}
          ref={lineRightRef}
        />
        <img
          src={line_bottom}
          className={styles.loader__content__line_bottom}
          ref={lineBottomRef}
        />
        <img src={logo} className={styles.loader__content__logo} alt="logo" />
      </div>
    </div>
  );
};
