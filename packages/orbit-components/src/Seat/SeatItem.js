// @flow
import React, { useMemo } from "react";

import useTheme from "../hooks/useTheme";
import { TYPES, SIZE_OPTIONS } from "./consts";
import randomID from "../utils/randomID";

import type { Props } from "./index";

const resolveFillColor = ({ type, theme, selected }) => {
  if (type === TYPES.LEGROOM)
    return selected ? theme.orbit.paletteBlueDark : theme.orbit.paletteBlueLight;
  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLight;
  return selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLight;
};

const resolveAccentColor = ({ type, theme }) => {
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueLightActive;
  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLightActive;
  return theme.orbit.paletteProductLightActive;
};

const resolveTextColor = ({ type, theme }) => {
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueDark;
  return theme.orbit.paletteProductDark;
};

const SeatItem = ({ selected, type, label, size, price }: Props) => {
  const theme = useTheme();
  const randomIdSelectedNormal = useMemo(() => randomID("selectedIdNormal"), []);
  const randomIdSelectedSmall = useMemo(() => randomID("selectedIdSmall"), []);

  if (selected && type === TYPES.UNAVAILABLE) return null;

  return size === SIZE_OPTIONS.SMALL ? (
    <>
      <path
        d="M1.94592 17C1.94592 12.0294 5.97536 8 10.9459 8H23.9459C28.9165 8 32.9459 12.0294 32.9459 17V39C32.9459 40.6569 31.6028 42 29.9459 42H4.94592C3.28907 42 1.94592 40.6569 1.94592 39V17Z"
        fill={resolveFillColor({ type, theme, selected })}
        stroke={selected ? "none" : resolveAccentColor({ type, theme })}
        strokeWidth="2"
      />
      {!selected && (
        <path
          d="M0.945923 39H33.9459C33.9459 41.2091 32.1551 43 29.9459 43H4.94592C2.73678 43 0.945923 41.2091 0.945923 39Z"
          fill={resolveAccentColor({ theme, type })}
        />
      )}
      {selected && (
        <g>
          <circle
            cx="29.4699"
            cy="9.99996"
            r="7.89474"
            fill={theme.orbit.paletteWhite}
            stroke={theme.orbit.paletteWhite}
            strokeWidth="4"
          />
          <g>
            <g>
              <mask
                id={randomIdSelectedSmall}
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="21"
                y="1"
                width="17"
                height="18"
              >
                <g>
                  <path d="M29.4697 1.66699C34.053 1.66699 37.803 5.41699 37.803 10.0003C37.803 14.5837 34.053 18.3337 29.4697 18.3337C24.8864 18.3337 21.1364 14.5837 21.1364 10.0003C21.1364 5.41699 24.8864 1.66699 29.4697 1.66699ZM33.3496 6.11094C33.0565 5.81826 32.5816 5.81861 32.2889 6.11172L29.7051 8.69952L29.6524 8.7426C29.5229 8.8279 29.3471 8.81348 29.2333 8.69947L26.6507 6.11172C26.3581 5.81861 25.8832 5.81826 25.5901 6.11094L25.5229 6.18769C25.2989 6.4815 25.321 6.90291 25.5893 7.1716L28.175 9.76202C28.3049 9.89214 28.3049 10.1028 28.175 10.233L25.5893 12.8237C25.2966 13.1168 25.297 13.5917 25.5901 13.8844C25.8832 14.1771 26.3581 14.1767 26.6507 13.8836L29.2333 11.2948C29.3641 11.1643 29.5751 11.1645 29.7052 11.2948L32.2889 13.8836C32.5816 14.1767 33.0565 14.1771 33.3496 13.8844L33.4168 13.8076C33.6407 13.5138 33.6187 13.0924 33.3504 12.8237L30.7643 10.233C30.6344 10.1029 30.6344 9.89213 30.7643 9.762L33.3504 7.1716C33.6431 6.87849 33.6427 6.40361 33.3496 6.11094Z" />
                </g>
              </mask>
              <g mask={`url(#${randomIdSelectedSmall})`}>
                <path d="M29.4697 1.66699C34.053 1.66699 37.803 5.41699 37.803 10.0003C37.803 14.5837 34.053 18.3337 29.4697 18.3337C24.8864 18.3337 21.1364 14.5837 21.1364 10.0003C21.1364 5.41699 24.8864 1.66699 29.4697 1.66699ZM33.3496 6.11094C33.0565 5.81826 32.5816 5.81861 32.2889 6.11172L29.7051 8.69952L29.6524 8.7426C29.5229 8.8279 29.3471 8.81348 29.2333 8.69947L26.6507 6.11172C26.3581 5.81861 25.8832 5.81826 25.5901 6.11094L25.5229 6.18769C25.2989 6.4815 25.321 6.90291 25.5893 7.1716L28.175 9.76202C28.3049 9.89214 28.3049 10.1028 28.175 10.233L25.5893 12.8237C25.2966 13.1168 25.297 13.5917 25.5901 13.8844C25.8832 14.1771 26.3581 14.1767 26.6507 13.8836L29.2333 11.2948C29.3641 11.1643 29.5751 11.1645 29.7052 11.2948L32.2889 13.8836C32.5816 14.1767 33.0565 14.1771 33.3496 13.8844L33.4168 13.8076C33.6407 13.5138 33.6187 13.0924 33.3504 12.8237L30.7643 10.233C30.6344 10.1029 30.6344 9.89213 30.7643 9.762L33.3504 7.1716C33.6431 6.87849 33.6427 6.40361 33.3496 6.11094Z" />
                <g>
                  <path
                    d="M39.47 0H19.47V20.8333H39.47V0Z"
                    fill={resolveFillColor({ type, theme, selected })}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      )}
      {label && type !== TYPES.UNAVAILABLE && (
        <text x="45%" y="48%" dominantBaseline="middle" textAnchor="middle">
          <tspan
            fontWeight="bold"
            fontSize={SIZE_OPTIONS.SMALL ? "14px" : "16px"}
            fill={selected ? theme.orbit.paletteWhite : resolveTextColor({ theme, type })}
          >
            {label}
          </tspan>
        </text>
      )}
      {price && (
        <text y="93%" x="45%" dominantBaseline="middle" textAnchor="middle">
          <tspan fontSize="12px" fill={theme.orbit.colorTextSecondary}>
            {price}
          </tspan>
        </text>
      )}
    </>
  ) : (
    <>
      <path
        d="M1.26392 15C1.26392 10.0294 5.29335 6 10.2639 6H36.2639C41.2345 6 45.2639 10.0294 45.2639 15V47C45.2639 48.6569 43.9208 50 42.2639 50H4.26392C2.60706 50 1.26392 48.6569 1.26392 47V15Z"
        fill={resolveFillColor({ type, theme, selected })}
        stroke={selected ? "none" : resolveAccentColor({ type, theme })}
        strokeWidth="2"
      />
      {!selected && (
        <path
          d="M0.263916 45.8887H46.2639V46.9998C46.2639 49.2089 44.4731 50.9998 42.2639 50.9998H4.26392C2.05478 50.9998 0.263916 49.2089 0.263916 46.9998V45.8887Z"
          fill={resolveAccentColor({ theme, type })}
        />
      )}
      {label && type !== TYPES.UNAVAILABLE && (
        <text x="45%" y={selected ? "48%" : "46%"} dominantBaseline="middle" textAnchor="middle">
          <tspan
            fontWeight="bold"
            fill={selected ? theme.orbit.paletteWhite : resolveTextColor({ theme, type })}
          >
            {label}
          </tspan>
        </text>
      )}
      {selected && (
        <g>
          <circle
            cx="42.2639"
            cy="9.99996"
            r="7.89474"
            fill={theme.orbit.paletteWhite}
            strokeWidth="4"
            stroke={theme.orbit.paletteWhite}
          />
          <g>
            <g>
              <mask
                id={randomIdSelectedNormal}
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="33"
                y="1"
                width="18"
                height="18"
              >
                <g>
                  <path d="M42.2636 1.66699C46.847 1.66699 50.597 5.41699 50.597 10.0003C50.597 14.5837 46.847 18.3337 42.2636 18.3337C37.6803 18.3337 33.9303 14.5837 33.9303 10.0003C33.9303 5.41699 37.6803 1.66699 42.2636 1.66699ZM46.1436 6.11094C45.8504 5.81826 45.3756 5.81861 45.0829 6.11172L42.4991 8.69952L42.4463 8.7426C42.3168 8.8279 42.141 8.81348 42.0272 8.69947L39.4447 6.11172C39.152 5.81861 38.6771 5.81826 38.384 6.11094L38.3168 6.18769C38.0929 6.4815 38.115 6.90291 38.3832 7.1716L40.9689 9.76202C41.0988 9.89214 41.0988 10.1028 40.9689 10.233L38.3832 12.8237C38.0906 13.1168 38.0909 13.5917 38.384 13.8844C38.6771 14.1771 39.152 14.1767 39.4447 13.8836L42.0272 11.2948C42.158 11.1643 42.3691 11.1645 42.4991 11.2948L45.0829 13.8836C45.3756 14.1767 45.8504 14.1771 46.1436 13.8844L46.2107 13.8076C46.4347 13.5138 46.4126 13.0924 46.1443 12.8237L43.5582 10.233C43.4283 10.1029 43.4283 9.89213 43.5582 9.762L46.1443 7.1716C46.437 6.87849 46.4367 6.40361 46.1436 6.11094Z" />
                </g>
              </mask>
              <g mask={`url(#${randomIdSelectedNormal})`}>
                <path d="M42.2636 1.66699C46.847 1.66699 50.597 5.41699 50.597 10.0003C50.597 14.5837 46.847 18.3337 42.2636 18.3337C37.6803 18.3337 33.9303 14.5837 33.9303 10.0003C33.9303 5.41699 37.6803 1.66699 42.2636 1.66699ZM46.1436 6.11094C45.8504 5.81826 45.3756 5.81861 45.0829 6.11172L42.4991 8.69952L42.4463 8.7426C42.3168 8.8279 42.141 8.81348 42.0272 8.69947L39.4447 6.11172C39.152 5.81861 38.6771 5.81826 38.384 6.11094L38.3168 6.18769C38.0929 6.4815 38.115 6.90291 38.3832 7.1716L40.9689 9.76202C41.0988 9.89214 41.0988 10.1028 40.9689 10.233L38.3832 12.8237C38.0906 13.1168 38.0909 13.5917 38.384 13.8844C38.6771 14.1771 39.152 14.1767 39.4447 13.8836L42.0272 11.2948C42.158 11.1643 42.3691 11.1645 42.4991 11.2948L45.0829 13.8836C45.3756 14.1767 45.8504 14.1771 46.1436 13.8844L46.2107 13.8076C46.4347 13.5138 46.4126 13.0924 46.1443 12.8237L43.5582 10.233C43.4283 10.1029 43.4283 9.89213 43.5582 9.762L46.1443 7.1716C46.437 6.87849 46.4367 6.40361 46.1436 6.11094Z" />
                <g>
                  <path
                    id="Rectangle"
                    d="M52.2639 0H32.2639V20.8333H52.2639V0Z"
                    fill={resolveFillColor({ type, theme, selected })}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      )}
      {price && (
        <text y="93%" x="45%" dominantBaseline="middle" textAnchor="middle">
          <tspan fontSize="12px" fill={theme.orbit.colorTextSecondary}>
            {price}
          </tspan>
        </text>
      )}
    </>
  );
};

export default SeatItem;
