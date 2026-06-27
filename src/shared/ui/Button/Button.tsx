import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  variant?: "liquid" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  variant = "liquid",
  size = "md",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={[
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : "",
      ].join(" ")}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      <span className={styles.content}>{children}</span>
      <span className={styles.glass} />
      <span className={styles.gloss} />
    </button>
  );
};
