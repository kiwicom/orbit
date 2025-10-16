"use client";

import React from "react";
import cx from "clsx";

import { SIZE_OPTIONS, baseURL } from "./consts";
import type { Props, Size } from "./types";

const heightClasses = {
  [SIZE_OPTIONS.SMALL]: "h-300",
  [SIZE_OPTIONS.MEDIUM]: "h-600",
  [SIZE_OPTIONS.LARGE]: "h-1200",
} as const;

const getColorUrlParam = (greyScale: boolean) => (greyScale ? "logos-grayscale" : "logos");

const getSizeUrlParams = (size: Size) => {
  const sizes = {
    [SIZE_OPTIONS.SMALL]: [12, 24],
    [SIZE_OPTIONS.MEDIUM]: [24, 48],
    [SIZE_OPTIONS.LARGE]: [48, 96],
  } as const;

  return {
    lowRes: `0x${sizes[size][0]}`,
    highRes: `0x${sizes[size][1]}`,
  } as const;
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # ServiceLogo
 *
 * To implement ServiceLogo component into your project you'll need to add the import:
 *
 * ```jsx
 * import ServiceLogo from "@kiwicom/orbit-components/lib/ServiceLogo";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <ServiceLogo name="Visa" size="large" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in ServiceLogo component.
 *
 * | Name      | Type            | Default    | Description                                                                 |
 * | :-------- | :-------------- | :--------- | :-------------------------------------------------------------------------- |
 * | dataTest  | `string`        |            | Optional prop for testing purposes.                                         |
 * | id        | `string`        |            | Set `id` for `ServiceLogo`                                                  |
 * | grayScale | `boolean`       |            | If `true`, logo will be in gray scale.                                      |
 * | **name**  | [`enum`](#enum) |            | The name for the displayed service logo.                                    |
 * | size      | [`enum`](#enum) | `"medium"` | The size of the displayed service logo.                                     |
 * | alt       | `string`        |            | Optional property for passing own `alt` attribute to the DOM image element. |
 *
 * ### enum
 *
 * | code                    | size       |
 * | :---------------------- | :--------- |
 * | `"AirHelp"`             | `"small"`  |
 * | `"AirHelpNew"`          | `"medium"` |
 * | `"AirHelpPlus"`         | `"large"`  |
 * | `"Alipay"`              |
 * | `"Amex"`                |
 * | `"Axa"`                 |
 * | `"AxaAssistance"`       |
 * | `"AxaWhite"`            |
 * | `"Booking"`             |
 * | `"BusinessInsider"`     |
 * | `"ChinaUnionPay"`       |
 * | `"DailyExpress"`        |
 * | `"DinersClub"`          |
 * | `"Discover"`            |
 * | `"Elo"`                 |
 * | `"GetYourGuide"`        |
 * | `"JCB"`                 |
 * | `"MailOnline"`          |
 * | `"Maestro"`             |
 * | `"MasterCard"`          |
 * | `"MIR"`                 |
 * | `"Mirror"`              |
 * | `"NewYorkTimes"`        |
 * | `"NortonSecured"`       |
 * | `"PayPal"`              |
 * | `"RentalCars"`          |
 * | `"Sherpa"`              |
 * | `"Simtex"`              |
 * | `"Sofort"`              |
 * | `"TravelPulse"`         |
 * | `"Trustly"`             |
 * | `"UsaToday"`            |
 * | `"Visa"`                |
 * | `"VisaHQ"`              |
 * | `"Zooz"`                |
 * | `"KiwiGuarantee"`       |
 * | `"KiwiGuaranteeFull"`   |
 * | `"KiwiGuaranteeInline"` |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The ServiceLogo component has been designed with accessibility in mind, providing flexible display options for service and payment provider logos that can be either decorative or semantic depending on context.
 *
 * ### Accessibility Props
 *
 * The following prop is available to improve the accessibility of your ServiceLogo component:
 *
 * | Name | Type     | Description                                                                                                          |
 * | :--- | :------- | :------------------------------------------------------------------------------------------------------------------- |
 * | alt  | `string` | Specifies the alternative text for the image to provide context about the service logo component for screen readers. |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically manages ARIA attributes:
 *   - When `alt` is **not** provided, default role of `"presentation"` is set. This makes the logo decorative and hidden from screen readers.
 *   - When `alt` is provided, the role is set to `"img"` and the logo becomes accessible to assistive technologies.
 * - Grayscale mode applies visual styling without affecting accessibility (except for the color contrast)
 *
 * ### Best Practices
 *
 * - If descriptive text should be provided, fill in the `alt` prop. Role of the ServiceLogo component is automatically set to `"img"`, otherwise it is set to `"presentation"` by default.
 * - For payment logos, include the payment method name in the alt text (e.g., "Visa", "PayPal", "American Express").
 * - For service logos, include the service name and context if relevant (e.g., "Kiwi.com guarantee", "AirHelp assistance").
 * - The `alt` text should always be translated to the user’s language.
 * - Avoid redundant `alt` text when the logo appears next to visible text containing the same information.
 * - Ensure sufficient color contrast when using `grayScale` mode, especially against non-white backgrounds.
 *
 * ### Examples
 *
 * #### Decorative logo alongside text
 *
 * ```jsx
 * <Stack>
 *   <ServiceLogo name="Visa" />
 *   <Text>Pay with Visa</Text>
 * </Stack>
 * ```
 *
 * Screen reader announces: "Pay with Visa".
 *
 * #### Semantic logo with descriptive text
 *
 * ```jsx
 * <ServiceLogo name="PayPal" role="img" alt="PayPal payment method" />
 * ```
 *
 * Screen reader announces: "PayPal payment method, image".
 *
 * #### Multiple payment methods (decorative)
 *
 * ```jsx
 * <Stack>
 *   <ServiceLogo name="Visa" />
 *   <ServiceLogo name="MasterCard" />
 *   <ServiceLogo name="Amex" />
 *   <Text>Visa, MasterCard, and American Express accepted</Text>
 * </Stack>
 * ```
 *
 * Screen reader announces: "Visa, MasterCard, and American Express accepted".
 *
 *
 * @orbit-doc-end
 */
const ServiceLogo = ({
  name,
  size = SIZE_OPTIONS.MEDIUM,
  grayScale = false,
  dataTest,
  alt = "",
  id,
}: Props) => {
  const color = getColorUrlParam(grayScale);
  const { lowRes, highRes } = getSizeUrlParams(size);

  return (
    <img
      className={cx("orbit-service-logo w-auto bg-transparent", heightClasses[size])}
      src={`${baseURL}/${color}/${lowRes}/${name}.png`}
      srcSet={`${baseURL}/${color}/${highRes}/${name}.png 2x`}
      alt={alt}
      id={id}
      data-test={dataTest}
    />
  );
};

export default ServiceLogo;
