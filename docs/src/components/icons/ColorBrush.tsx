import React from "react";

export default function ColorBrushIcon(props: React.ComponentProps<"svg">) {
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
          d="M12.263 3.5a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.763 10.5h-5.5l.7-7.015a2.715 2.715 0 1 0-5.4 0l.7 7.015h-5.5a2 2 0 0 0-2 2V14a.5.5 0 0 0 .5.5h18a.5.5 0 0 0 .5-.5v-1.5a2 2 0 0 0-2-2zm1 7.3v-3.3h-17v3.3a9.128 9.128 0 0 1-1.447 4.93.5.5 0 0 0 .42.77h1.495a3 3 0 0 0 2.5-1.335C7.622 20.826 8.763 19 8.763 19v4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5zm-3 5.7v-4m-3 4v-3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
