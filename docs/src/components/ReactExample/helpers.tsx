import * as Components from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

import { QUERIES, DEFAULT_ACTIVE, BASE_ACTIVE } from "./consts";

interface Scope {
  path: string;
  name: string;
  default: boolean;
}

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
  const offset = idx > middle ? idx + 1 - middle : middle - idx + 1;

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

export const getModules = (scope: Scope[]) =>
  scope.reduce((acc, { name: moduleName, path }) => {
    if (path.match(/@kiwicom\/orbit-components\/icons/)) {
      return {
        ...acc,
        [moduleName]: Icons[moduleName],
      };
    }

    return {
      ...acc,
      [moduleName]: Components[moduleName],
    };
  }, {});

export const copyImports = (scope: Scope[]) =>
  scope
    .map(({ path, name: moduleName, default: isDefault }) => {
      if (isDefault) return `import ${moduleName} from ${path}`;
      return `import { ${moduleName} } from "${path}"`;
    })
    .join("\n");
