import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Emoji({ children }: Props) {
  return (
    <span className="[@media_not_screen_and_(-webkit-min-device-pixel-ratio:2),not_screen_and_(-o-min-device-pixel-ratio:2/1),not_screen_and_(min-resolution:192dpi),not_screen_and_(min-resolution:2dppx)]:mr-[5px]">
      {children}
    </span>
  );
}
