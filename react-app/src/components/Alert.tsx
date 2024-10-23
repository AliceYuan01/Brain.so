// Alert.tsx
import React from "react";
import styles from "./Alert.module.css"; // Importing the CSS module

type AlertProps = {
  children: React.ReactNode; // Allow any children to be passed
  type?: "success" | "error" | "info"; // Type prop for different alert styles
};

const Alert: React.FC<AlertProps> = ({ children, type = "info" }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {" "}
      {/* Dynamically applying type styles */}
      {children}
    </div>
  );
};

export default Alert;
