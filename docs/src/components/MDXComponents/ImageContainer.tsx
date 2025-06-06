import React from "react";
import cx from "clsx";

interface Props {
  align?: "left" | "center" | "right";
  border?: boolean;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

const ImageContainer = ({ align = "center", border, size = "large", children }: Props) => {
  return (
    <div
      className={cx(
        "w-full",
        border && "border-px border-cloud-dark border-solid",
        size === "small" && "max-w-[200px]",
        size === "medium" && "max-w-[400px]",
        size !== "small" && size !== "medium" && "max-w-[650px]",
        align === "right" && "m-0 ml-auto",
        align === "left" && "m-0",
        align !== "right" && align !== "left" && "mx-auto my-0",
      )}
    >
      {children}
    </div>
  );
};

export default ImageContainer;
