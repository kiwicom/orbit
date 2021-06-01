import React from "react";

export default function TypographyIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 140 100" height="24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M4.5,3.5v-2a1,1,0,0,1,1-1h12a1,1,0,0,1,1,1v2"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 0.498L11.5 16.498"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 16.498L15 16.498"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
