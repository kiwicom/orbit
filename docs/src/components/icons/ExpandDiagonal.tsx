import React from "react";

export default function ExpandDiagonalIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      height="140"
      width="140"
      {...props}
    >
      <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
        <path
          d="M10.5 20.499h-7v-7m17-3v-7h-7m-10 17 17-17"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
