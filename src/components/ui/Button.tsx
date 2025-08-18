interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "h-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition focus:ring-4 focus:outline-none";
  const variants = {
    primary:
      "bg-[#7b1926] hover:bg-[#530101] text-white focus:ring-pink-200 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-[#24292F] hover:bg-[#24292F]/90 text-white focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
