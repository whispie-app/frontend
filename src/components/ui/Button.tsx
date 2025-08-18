import React from "react";

type ButtonBaseProps = {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 justify-center px-5 py-3 text-sm font-medium rounded-lg transition-all duration-200";
  const variants = {
    primary: "bg-[#7b1926] hover:bg-[#530101] text-white disabled:opacity-50",
    secondary: "bg-[#24292F] hover:bg-[#1d1f23] text-white",
  };
  const width = fullWidth ? "w-full" : "";

  if (props.as === "a") {
    return (
      <a
        className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
