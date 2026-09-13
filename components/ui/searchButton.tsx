import type { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function searchButton({
  className = "",
  type = "text",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={`
        w-full
        min-w-0
        bg-transparent
        text-sm
        text-slate-800
        outline-none
        placeholder:text-slate-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      {...props}
    />
  );
}
