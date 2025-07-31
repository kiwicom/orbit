"use client";

import * as React from "react";
import cx from "clsx";

import { SIZE_OPTIONS, BASE_URL } from "./consts";
import type { Props, CarrierType, Size, Carrier } from "./types";
import { useRandomIdSeed } from "../hooks/useRandomId";

const WIDTH = {
  [SIZE_OPTIONS.SMALL]: "w-icon-small",
  [SIZE_OPTIONS.MEDIUM]: "w-icon-medium",
  [SIZE_OPTIONS.LARGE]: "w-icon-large",
  reduced: {
    [SIZE_OPTIONS.SMALL]: "w-[calc(theme(width.icon-small)-1px)]",
    [SIZE_OPTIONS.MEDIUM]: "w-[calc(theme(width.icon-medium)-1px)]",
    [SIZE_OPTIONS.LARGE]: "w-[calc(theme(width.icon-large)-1px)]",
  },
};

const HEIGHT = {
  [SIZE_OPTIONS.SMALL]: "h-icon-small",
  [SIZE_OPTIONS.MEDIUM]: "h-icon-medium",
  [SIZE_OPTIONS.LARGE]: "h-icon-large",
  reduced: {
    [SIZE_OPTIONS.SMALL]: "h-[calc(theme(height.icon-small)-1px)]",
    [SIZE_OPTIONS.MEDIUM]: "h-[calc(theme(height.icon-medium)-1px)]",
    [SIZE_OPTIONS.LARGE]: "h-[calc(theme(height.icon-large)-1px)]",
  },
};

const getURLSizes = ({ size }) => {
  const urlSizes = {
    base: {
      [SIZE_OPTIONS.SMALL]: 16,
      [SIZE_OPTIONS.MEDIUM]: 32,
      [SIZE_OPTIONS.LARGE]: 32,
    },
    retina: {
      [SIZE_OPTIONS.SMALL]: 32,
      [SIZE_OPTIONS.MEDIUM]: 64,
      [SIZE_OPTIONS.LARGE]: 64,
    },
  };
  return {
    base: urlSizes.base[size],
    retina: urlSizes.retina[size],
  };
};

interface GetImageSrc {
  carrierType?: CarrierType;
  carriersLength: number;
  size: Size;
  code: string;
  inlineStacked: boolean;
}

const getImgSrc = ({
  carrierType = "airline",
  carriersLength,
  size,
  code,
  inlineStacked,
}: GetImageSrc) => {
  const urlSizes =
    carriersLength > 1 && !inlineStacked
      ? getURLSizes({ size: SIZE_OPTIONS.SMALL })
      : getURLSizes({ size });

  return {
    src: `${BASE_URL}/airlines/${urlSizes.base}x${urlSizes.base}/${code}.png?default=${carrierType}.png`,
    srcSet: `${BASE_URL}/airlines/${urlSizes.retina}x${urlSizes.retina}/${code}.png?default=${carrierType}.png 2x`,
  };
};

type WrapperProps = {
  carriers: Carrier[];
  size: Size;
  inlineStacked?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const CarrierLogoWrapper: React.FC<WrapperProps> = ({
  children,
  carriers,
  size,
  inlineStacked,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        "orbit-carrier-logo",
        "flex place-content-between bg-transparent",
        inlineStacked
          ? "w-min"
          : [
              carriers.length > 2 && "flex-wrap",
              carriers.length > 1 ? "w-800 flex-col" : ["flex-row", WIDTH[size]],
            ],
        !inlineStacked && carriers.length > 1 ? "h-800" : HEIGHT[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # CarrierLogo
 *
 * To implement CarrierLogo component into your project you'll need to add the import:
 *
 * ```jsx
 * import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <CarrierLogo carriers={Carrier} />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in CarrierLogo component.
 *
 * | Name          | Type                    | Default   | Description                                                                                                        |
 * | :------------ | :---------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------- |
 * | **carriers**  | [`Carrier[]`](#carrier) |           | The content of the CarrierLogo, passed as array of objects.                                                        |
 * | dataTest      | `string`                |           | Optional prop for testing purposes.                                                                                |
 * | id            | `string`                |           | Set `id` for `CarrierLogo`.                                                                                        |
 * | size          | [`enum`](#enum)         | `"large"` | The size of the CarrierLogo. [See Functional specs](#functional-specs).                                            |
 * | rounded       | `boolean`               |           | Rounded carrier image.                                                                                             |
 * | inlineStacked | `boolean`               |           | Carrier logos are displayed inline, stacking on top of each other.                                                 |
 * | ariaHidden    | `boolean`               | `false`   | Hide the CarrierLogo from screen readers. Can be used if the logo is used with the name of the Carrier next to it. |
 *
 * ### Carrier
 *
 * Table below contains all types of the props available for object in Carrier array.
 *
 * | Name     | Type            | Description                                                                                   |
 * | :------- | :-------------- | :-------------------------------------------------------------------------------------------- |
 * | **code** | `string`        | The IATA code of the Carrier, defines which logo will be rendered.                            |
 * | **name** | `string`        | The name of the Carrier, used for `alt` and `title` attributes.                               |
 * | type     | [`enum`](#enum) | The preferred placeholder for non-existing carrier. [See Functional specs](#functional-specs) |
 *
 * ### enum
 *
 * | size       | type (Carrier)       |
 * | :--------- | :------------------- |
 * | `"small"`  | `"airline"`          |
 * | `"medium"` | `"bus"`              |
 * | `"large"`  | `"train"`            |
 * |            | `"ferry"`            |
 * |            | `"private_transfer"` |
 * |            | `"kiwicom"`          |
 *
 * ## Functional specs
 *
 * - The `size` prop will be applied when `carriers` prop has defined **only one object** in Carrier array.
 *
 * - The `type` prop in type Carrier determines which placeholder should be used when logo for the requested carrier doesn't exist.
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The CarrierLogo component has been designed with accessibility in mind.
 *
 * It renders carrier images that provide visual recognition of transport companies but may not be accessible to all users. For that reason, it is important to ensure the information conveyed by the logos is also available in a text format.
 *
 * ### Accessibility props
 *
 * The following props are available to improve the accessibility of your CarrierLogo component:
 *
 * | Name       | Type      | Description                                                                                                   |
 * | :--------- | :-------- | :------------------------------------------------------------------------------------------------------------ |
 * | ariaHidden | `boolean` | When set to `true`, hides the CarrierLogo from screen readers. Use when the carrier name is displayed nearby. |
 *
 * Within each carrier object:
 *
 * | Name | Type     | Description                                                                                       |
 * | :--- | :------- | :------------------------------------------------------------------------------------------------ |
 * | name | `string` | Required. Used as the `alt` and `title` attributes for the carrier image for screen reader users. |
 *
 * ### Automatic accessibility features
 *
 * The CarrierLogo component automatically implements the following accessibility features:
 *
 * - Each carrier logo image automatically receives `alt` and `title` attributes with the carrier's name (the `name` property in each carrier object), ensuring screen readers can announce the carrier.
 *
 * ### Best practices
 *
 * Logos can create important context for users, but not everyone sees the logo. So make sure everything necessary is presented in a non-visual form.
 *
 * By including the name of the carrier, anyone who doesn't see the logo still gets the name. If the logo is presented next to some text with its name, make sure to hide the logo from screen readers by using the `ariaHidden` prop. This avoids duplicating the announcement of the carrier from screen readers.
 *
 * ### Examples
 *
 * #### Without text
 *
 * ```jsx
 * <CarrierLogo
 *   carriers={[
 *     {
 *       code: "OK",
 *       type: "airline",
 *       name: "Czech Airlines", // This name becomes the alt and title text
 *     },
 *   ]}
 * />
 * ```
 *
 * #### With visible text
 *
 * ```jsx
 * <Stack direction="row" spacing="100" align="center">
 *   <CarrierLogo
 *     ariaHidden
 *     carriers={[
 *       {
 *         code: "OK",
 *         type: "airline",
 *         name: "Czech Airlines",
 *       },
 *     ]}
 *   />
 *   <Text>Czech Airlines</Text>
 * </Stack>
 * ```
 *
 * #### Multiple carriers
 *
 * ```jsx
 * <Stack spacing="medium">
 *   <Stack direction="row" spacing="none">
 *     <CarrierLogo
 *       inlineStacked
 *       carriers={[
 *         { code: "FR", name: "Ryanair" },
 *         { code: "TO", name: "Transavia France" },
 *       ]}
 *       ariaHidden
 *     />
 *     <Stack direction="column">
 *       <Text>Ryanair</Text>
 *       <Text>Transavia France</Text>
 *     </Stack>
 *   </Stack>
 * </Stack>
 * ```
 *
 *
 * @orbit-doc-end
 */
const CarrierLogo = ({
  size = SIZE_OPTIONS.LARGE,
  carriers,
  dataTest,
  id,
  rounded,
  inlineStacked = false,
  ariaHidden = false,
}: Props) => {
  const randomId = useRandomIdSeed();

  return (
    <CarrierLogoWrapper
      carriers={carriers}
      size={size}
      data-test={dataTest}
      id={id}
      inlineStacked={inlineStacked}
      aria-hidden={ariaHidden}
    >
      {carriers.slice(0, 4).map((carrierImage, idx) => (
        <img
          className={cx(
            "max-w-none bg-transparent",
            rounded ? "rounded-full" : "rounded-100",
            inlineStacked ? "not-first:-ms-200 border border-solid border-white" : "last:self-end",
            carriers.length > 1 && !inlineStacked
              ? [
                  carriers.length > 2
                    ? [HEIGHT.reduced[SIZE_OPTIONS.SMALL], WIDTH.reduced[SIZE_OPTIONS.SMALL]]
                    : [HEIGHT[SIZE_OPTIONS.SMALL], WIDTH[SIZE_OPTIONS.SMALL]],
                ]
              : [
                  carriers.length > 2
                    ? [HEIGHT.reduced[size], WIDTH.reduced[size]]
                    : [HEIGHT[size], WIDTH[size]],
                ],
          )}
          key={randomId(idx.toString())}
          alt={carrierImage.name}
          title={carrierImage.name}
          {...getImgSrc({
            carrierType: carrierImage.type,
            carriersLength: carriers.length,
            size,
            code: carrierImage.code,
            inlineStacked,
          })}
        />
      ))}
    </CarrierLogoWrapper>
  );
};

export default CarrierLogo;
