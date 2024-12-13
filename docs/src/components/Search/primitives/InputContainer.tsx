import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function InputContainer({ children }: Props) {
  return (
    <div className="bg-white-normal border-cloud-normal rounded-normal relative flex h-12 w-full items-center border px-4">
      {children}
    </div>
  );
}
