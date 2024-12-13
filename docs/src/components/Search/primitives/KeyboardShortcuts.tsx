import React from "react";
import { Stack } from "@kiwicom/orbit-components";

import useOs from "../../../hooks/useOs";

interface ShortcutKeyProps {
  children: React.ReactNode;
  bgColor: string;
}

const ShortcutKey = ({ children, bgColor }: ShortcutKeyProps) => (
  <span
    className={`duration-fast flex justify-center rounded-[3px] p-[3px] px-[5px] transition-colors ${bgColor}`}
  >
    {children}
  </span>
);

interface Props {
  type?: "primary" | "secondary";
}

const KeyboardShortcuts = ({ type = "primary" }: Props) => {
  const os = useOs();
  const bgColor = type === "primary" ? "bg-product-light-active" : "bg-cloud-normal";
  const textColor = type === "primary" ? "text-product-normal" : "text-ink-dark";

  return (
    <div className={textColor}>
      <Stack inline spacing="100" align="center">
        <ShortcutKey bgColor={bgColor}>
          {os === "mac" ? <>&#8984;</> : "Alt"} <span>+</span>
          <span> Shift</span>
        </ShortcutKey>
        <span>+</span>
        <ShortcutKey bgColor={bgColor}>&#75;</ShortcutKey>
      </Stack>
    </div>
  );
};

export default KeyboardShortcuts;
