import { QUERIES } from "./consts";

export const rangeAppend = ({ middle, callback, idx, arr }) => {
  const offset = idx > middle ? idx - middle : middle - idx;
  const els = arr.slice();

  els.fill(1, middle, middle + offset + 1);
  els.fill(1, middle - offset, middle);

  callback(els);
};

export const updateViewportName = (size: number) => {
  if (size <= QUERIES.mediumMobile) return `Mobile small ${size}`;
  if (size <= QUERIES.largeMobile) return `Mobile medium ${size}`;
  if (size <= QUERIES.tablet) return `Mobile large ${size}`;
  if (size <= QUERIES.desktop) return `Tablet ${size}`;
  if (size <= QUERIES.largeDesktop) return `Desktop ${size}`;

  return `Full width`;
};
