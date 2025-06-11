import React from "react";

interface Props {
  height?: number;
  maxWidth: number;
}

const FigmaIframe = ({ maxWidth, height = 400 }: Props) => {
  return (
    <iframe
      style={{
        height: height ? `${height}px` : undefined,
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        width: "100%",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
      allowFullScreen
      loading="lazy"
    />
  );
};

export default FigmaIframe;
