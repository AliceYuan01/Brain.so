// Button.tsx
import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick: () => void; // Add the onClick prop
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
