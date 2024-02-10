import React, { Children } from "react";
type ButtonsType = {
  labelStyle?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
  actionButton: React.MouseEventHandler;
};
export const Buttons = ({
  ariaLabel,
  actionButton,
  labelStyle,
  children,
  ...props
}: ButtonsType) => {
  return (
    <button
      aria-label={ariaLabel}
      className={labelStyle}
      onClick={actionButton}
    >
      {children}
    </button>
  );
};
