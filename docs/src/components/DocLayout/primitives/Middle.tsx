import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Middle({ children }: Props) {
  return (
    <div className="border-l-cloud-normal largeDesktop:[&>*+*]:ml-space-600 mx-auto box-content flex w-full flex-col border-l">
      {children}
    </div>
  );
}
