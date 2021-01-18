# svg unique ids

Rule prevents id namespace collisions. It often happens, when mask, or any other svg reference refers to id, several elements with the same id cause visual errors.

## Rule details

Example:

```jsx
const Example = () => (
  <svg>
    <path
      opacity="0.3"
      d="M1125.14 1155.73L1374.88 998.066L1598.9 1130.98L851.314 1575.92L643.147 1446.55L1125.14 1155.73Z"
      fill="url(#paint1_linear)"
    />
    <linearGradient
      id="paint1_linear"
      x1="1121.02"
      y1="998.066"
      x2="1121.02"
      y2="1575.92"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#BAC7D5" />
      <stop offset="0.04" stopColor="#BAC7D5" stopOpacity="0.96" />
      <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
    </linearGradient>
    <linearGradient
      id="paint1_linear"
      x1="1368.48"
      y1="592.209"
      x2="413.949"
      y2="1147.06"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#009882" />
      <stop offset="1" stopColor="#01A891" stopOpacity="0" />
    </linearGradient>
  </svg>
);
```

## Rule options

```
"orbit-components/svg-unique-id": <enabled>
```
