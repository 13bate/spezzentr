import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "liquid" | "primary" | "secondary";
  size?: "xxs" | "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  className,
  variant = "liquid",
  size = "md",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={clsx(styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : "",
        className,
      )}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      <span className={styles.content}>{children}</span>
      <span className={styles.glass} />
      <span className={styles.gloss} />
    </button >
  );
};
