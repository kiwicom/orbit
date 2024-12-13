import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

export default function Input({ ref, ...props }: Props) {
  return (
    <input
      ref={ref}
      className="text-ink-dark placeholder:text-ink-light size-full border-none bg-transparent outline-none"
      {...props}
    />
  );
}
