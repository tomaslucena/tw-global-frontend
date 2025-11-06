import React from "react";
import Link from "next/link";
import styles from "./button.module.scss";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
};

export default function Button({
  outlined = false,
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const btnClass = [
    styles.btn,
    outlined ? styles.outlined : "",
    size ? styles[`btn-${size}`] : styles["btn-md"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={btnClass}>{children}</Link>
    );
  }

  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  );
}
