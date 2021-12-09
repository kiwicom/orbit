import { DefaultTheme } from "styled-components";

import { TAB_ACTIVE_SHADOW_TOKEN } from "./consts";

function parseBoxShadow(boxShadow: string): number[][] {
  return boxShadow
    .split(",")
    .map(s => s.trim())
    .map(s => s.split(" "))
    .map(s => s.map(v => parseInt(v, 10)));
}

export function getTabShadowReachTop({ theme }: { theme: DefaultTheme }) {
  const result = parseBoxShadow(theme.orbit[TAB_ACTIVE_SHADOW_TOKEN])
    .map(s => {
      const [, offsetY = 0, blurRadius = 0, spreadRadius = 0] = s;
      const reachTop = blurRadius + spreadRadius - offsetY;
      return reachTop;
    })
    .reduce((previous, current) => {
      return Math.max(previous, current);
    }, 0);

  return `${result}px`;
}

export function getTabShadowReachLeft({ theme }: { theme: DefaultTheme }) {
  const result = parseBoxShadow(theme.orbit[TAB_ACTIVE_SHADOW_TOKEN])
    .map(s => {
      const [offsetX = 0, , blurRadius = 0, spreadRadius = 0] = s;
      const reachLeft = blurRadius + spreadRadius - offsetX;
      return reachLeft;
    })
    .reduce((previous, current) => {
      return Math.max(previous, current);
    }, 0);

  return `${result}px`;
}

export function getTabShadowReachRight({ theme }: { theme: DefaultTheme }) {
  const result = parseBoxShadow(theme.orbit[TAB_ACTIVE_SHADOW_TOKEN])
    .map(s => {
      const [offsetX = 0, , blurRadius = 0, spreadRadius = 0] = s;
      const reachRight = blurRadius + spreadRadius + offsetX;
      return reachRight;
    })
    .reduce((previous, current) => {
      return Math.max(previous, current);
    }, 0);

  return `${result}px`;
}
