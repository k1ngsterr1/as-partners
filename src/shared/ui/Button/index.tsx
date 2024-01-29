import React from "react";
import { Link as NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { toggleOnLoader } from "@redux/loaderSlice";

interface ButtonProps {
  text: string;
  type?: string | any;
  margin: string;
  size?: string;
  to: any;
  onClick?: () => void;
}

export const ButtonRegular: React.FC<ButtonProps> = ({
  text,
  margin,
  size,
  type,
}) => {
  return (
    <button className={`${styles.button}  ${margin} ${size}`} type={type}>
      {text}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = ({ text, margin, size, to }) => {
  return (
    <Link className={`${styles.button}  ${margin} ${size}`} to={to} smooth>
      {text}
    </Link>
  );
};

export const ButtonWhite: React.FC<ButtonProps> = ({
  text,
  margin,
  size,
  to,
}) => {
  return (
    <Link className={`${styles.white}  ${margin} ${size}`} to={to} smooth>
      {text}
    </Link>
  );
};

export const ButtonNavigation: React.FC<ButtonProps> = ({
  text,
  margin,
  size,
  to,
}) => {
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(toggleOnLoader());
  };

  return (
    <NavLink
      onClick={() => handleNavigate()}
      className={`${styles.button}  ${margin} ${size}`}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export const ButtonWhiteNavigation: React.FC<ButtonProps> = ({
  text,
  margin,
  size,
  to,
}) => {
  const dispatch = useDispatch();
  const handleNavigate = () => {
    dispatch(toggleOnLoader());
  };

  return (
    <NavLink
      onClick={() => handleNavigate()}
      className={`${styles.white}  ${margin} ${size}`}
      to={to}
    >
      {text}
    </NavLink>
  );
};
