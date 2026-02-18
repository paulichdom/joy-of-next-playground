import React from "react";
import styles from "./MaxWidthWrapper.module.css";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  as: Tag = "div",
  className = "",
  ...delegated
}) => {
  return (
    <Tag {...delegated} className={`${styles.wrapper} ${className}`}>
      {children}
      <div></div>
    </Tag>
  );
};

