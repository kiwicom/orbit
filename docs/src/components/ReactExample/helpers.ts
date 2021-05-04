import { QUERIES, DEFAULT_ACTIVE, BASE_ACTIVE } from "./consts";

export const isAllActive = (items: number[]) =>
  items.filter(Boolean).length === DEFAULT_ACTIVE.length;

export const rangeAppend = ({ middle, callback, idx, arr }) => {
  const offset = idx > middle ? idx - middle : middle - idx;
  const els = arr.slice();

  els.fill(1, middle, middle + offset + 1);
  els.fill(1, middle - offset, middle);

  callback(els);
};

export const rangeDelete = ({ middle, callback, idx, arr }) => {
  if (idx === middle) return callback(BASE_ACTIVE);
  const offset = idx > middle ? idx - middle : middle - idx;
  const newArr = arr.map((el, i) => {
    if (i <= middle - offset) return 0;
    if (i > middle && i >= middle + offset) return 0;

    return el;
  });

  return callback(newArr);
};

export const updateViewportName = (size: number, isFull: boolean) => {
  if (isFull) return "FullWidth";
  if (size <= QUERIES.mediumMobile) return `Mobile small`;
  if (size <= QUERIES.largeMobile) return `Mobile medium`;
  if (size <= QUERIES.tablet) return `Mobile large`;
  if (size <= QUERIES.desktop) return `Tablet`;

  return `Desktop`;
};
