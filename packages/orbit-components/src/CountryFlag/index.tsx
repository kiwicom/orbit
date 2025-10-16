"use client";

import React from "react";
import cx from "clsx";

import { baseURL, CODES, SIZE_WIDTHS, SIZES } from "./consts";
import type { Props } from "./types";

function getCountryProps(code?: string) {
  const codeNormalized = code ? code.toUpperCase().replace("-", "_") : "UNDEFINED";
  const countryCodeExists = codeNormalized in CODES;

  if (!countryCodeExists) console.warn(`Country code not supported: ${code}`);

  const countryCode = countryCodeExists ? CODES[codeNormalized] : CODES.UNDEFINED;
  return { code: countryCode };
}

/**
 * @orbit-doc-start
 * README
 * ----------
 * # CountryFlag
 *
 * To implement CountryFlag component into your project you'll need to add the import:
 *
 * ```jsx
 * import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <CountryFlag code="cz" name="Czech Republic" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in CountryFlag component.
 *
 * | Name     | Type                                             | Default       | Description                                |
 * | :------- | :----------------------------------------------- | :------------ | :----------------------------------------- |
 * | code     | [`enum`](#enum)                                  | `"undefined"` | Code for the displayed country flag.       |
 * | dataTest | `string`                                         |               | Optional prop for testing purposes.        |
 * | id       | `string`                                         |               | Set `id` for `CountryFlag`.                |
 * | name     | `string`                                         | `""`          | Defines the `alt` attribute for the image. |
 * | role     | `React.HTMLAttributes<HTMLImageElement>["role"]` |               | ARIA role for the flag image.              |
 * | size     | [`enum`](#enum)                                  | `"medium"`    | The size of the CountryFlag.               |
 *
 * ### enum
 *
 * If code doesn't exist "undefined" will be used.
 *
 * | code          | size       |
 * | :------------ | :--------- |
 * | `"ad"`        | `"small"`  |
 * | `"ae"`        | `"medium"` |
 * | `"af"`        |
 * | `"ag"`        |
 * | `"ai"`        |
 * | `"al"`        |
 * | `"am"`        |
 * | `"an"`        |
 * | `"anywhere"`  |
 * | `"ao"`        |
 * | `"aq"`        |
 * | `"ar"`        |
 * | `"as"`        |
 * | `"at"`        |
 * | `"au"`        |
 * | `"aw"`        |
 * | `"ax"`        |
 * | `"az"`        |
 * | `"ba"`        |
 * | `"bb"`        |
 * | `"bd"`        |
 * | `"be"`        |
 * | `"bf"`        |
 * | `"bg"`        |
 * | `"bh"`        |
 * | `"bi"`        |
 * | `"bj"`        |
 * | `"bl"`        |
 * | `"bm"`        |
 * | `"bn"`        |
 * | `"bo"`        |
 * | `"bq"`        |
 * | `"br"`        |
 * | `"bs"`        |
 * | `"bt"`        |
 * | `"bv"`        |
 * | `"bw"`        |
 * | `"by"`        |
 * | `"bz"`        |
 * | `"ca-fr"`     |
 * | `"ca"`        |
 * | `"cc"`        |
 * | `"cd"`        |
 * | `"cf"`        |
 * | `"cg"`        |
 * | `"ch"`        |
 * | `"ci"`        |
 * | `"ck"`        |
 * | `"cl"`        |
 * | `"cm"`        |
 * | `"cn"`        |
 * | `"co"`        |
 * | `"cr"`        |
 * | `"cs"`        |
 * | `"ct"`        |
 * | `"cu"`        |
 * | `"cv"`        |
 * | `"cw"`        |
 * | `"cx"`        |
 * | `"cy"`        |
 * | `"cz"`        |
 * | `"de"`        |
 * | `"dj"`        |
 * | `"dk"`        |
 * | `"dm"`        |
 * | `"do"`        |
 * | `"dz"`        |
 * | `"ec"`        |
 * | `"ee"`        |
 * | `"eg"`        |
 * | `"eh"`        |
 * | `"er"`        |
 * | `"es"`        |
 * | `"et"`        |
 * | `"eu"`        |
 * | `"fi"`        |
 * | `"fj"`        |
 * | `"fk"`        |
 * | `"fm"`        |
 * | `"fo"`        |
 * | `"fr"`        |
 * | `"ga"`        |
 * | `"gb"`        |
 * | `"gd"`        |
 * | `"ge"`        |
 * | `"gf"`        |
 * | `"gg"`        |
 * | `"gh"`        |
 * | `"gi"`        |
 * | `"gl"`        |
 * | `"gm"`        |
 * | `"gn"`        |
 * | `"gp"`        |
 * | `"gq"`        |
 * | `"gr"`        |
 * | `"gs"`        |
 * | `"gt"`        |
 * | `"gu"`        |
 * | `"gw"`        |
 * | `"gy"`        |
 * | `"hk"`        |
 * | `"hm"`        |
 * | `"hn"`        |
 * | `"hr"`        |
 * | `"ht"`        |
 * | `"hu"`        |
 * | `"ic"`        |
 * | `"id"`        |
 * | `"ie"`        |
 * | `"il"`        |
 * | `"im"`        |
 * | `"in"`        |
 * | `"io"`        |
 * | `"iq"`        |
 * | `"ir"`        |
 * | `"is"`        |
 * | `"it"`        |
 * | `"je"`        |
 * | `"jm"`        |
 * | `"jo"`        |
 * | `"jp"`        |
 * | `"ke"`        |
 * | `"kg"`        |
 * | `"kh"`        |
 * | `"ki"`        |
 * | `"km"`        |
 * | `"kn"`        |
 * | `"kp"`        |
 * | `"kr"`        |
 * | `"kw"`        |
 * | `"ky"`        |
 * | `"kz"`        |
 * | `"la"`        |
 * | `"lb"`        |
 * | `"lc"`        |
 * | `"li"`        |
 * | `"lk"`        |
 * | `"lr"`        |
 * | `"ls"`        |
 * | `"lt"`        |
 * | `"lu"`        |
 * | `"lv"`        |
 * | `"ly"`        |
 * | `"ma"`        |
 * | `"mc"`        |
 * | `"md"`        |
 * | `"me"`        |
 * | `"mf"`        |
 * | `"mg"`        |
 * | `"mh"`        |
 * | `"mk"`        |
 * | `"ml"`        |
 * | `"mm"`        |
 * | `"mn"`        |
 * | `"mo"`        |
 * | `"mp"`        |
 * | `"mq"`        |
 * | `"mr"`        |
 * | `"ms"`        |
 * | `"mt"`        |
 * | `"mu"`        |
 * | `"mv"`        |
 * | `"mw"`        |
 * | `"mx"`        |
 * | `"my"`        |
 * | `"mz"`        |
 * | `"na"`        |
 * | `"nc"`        |
 * | `"ne"`        |
 * | `"nf"`        |
 * | `"ng"`        |
 * | `"ni"`        |
 * | `"nl"`        |
 * | `"no"`        |
 * | `"np"`        |
 * | `"nr"`        |
 * | `"nu"`        |
 * | `"nz"`        |
 * | `"om"`        |
 * | `"pa"`        |
 * | `"pe"`        |
 * | `"pf"`        |
 * | `"pg"`        |
 * | `"ph"`        |
 * | `"pk"`        |
 * | `"pl"`        |
 * | `"pm"`        |
 * | `"pn"`        |
 * | `"pr"`        |
 * | `"ps"`        |
 * | `"pt"`        |
 * | `"pw"`        |
 * | `"py"`        |
 * | `"qa"`        |
 * | `"re"`        |
 * | `"ro"`        |
 * | `"rs"`        |
 * | `"ru"`        |
 * | `"rw"`        |
 * | `"sa"`        |
 * | `"sb"`        |
 * | `"sc"`        |
 * | `"sd"`        |
 * | `"se"`        |
 * | `"sg"`        |
 * | `"sh"`        |
 * | `"si"`        |
 * | `"sj"`        |
 * | `"sk"`        |
 * | `"sl"`        |
 * | `"sm"`        |
 * | `"sn"`        |
 * | `"so"`        |
 * | `"sr"`        |
 * | `"ss"`        |
 * | `"st"`        |
 * | `"sv"`        |
 * | `"sx"`        |
 * | `"sy"`        |
 * | `"sz"`        |
 * | `"tc"`        |
 * | `"td"`        |
 * | `"tf"`        |
 * | `"tg"`        |
 * | `"th"`        |
 * | `"tj"`        |
 * | `"tk"`        |
 * | `"tl"`        |
 * | `"tm"`        |
 * | `"tn"`        |
 * | `"to"`        |
 * | `"tr"`        |
 * | `"tt"`        |
 * | `"tv"`        |
 * | `"tw"`        |
 * | `"tz"`        |
 * | `"ua"`        |
 * | `"ug"`        |
 * | `"um"`        |
 * | `"undefined"` |
 * | `"us"`        |
 * | `"uy"`        |
 * | `"uz"`        |
 * | `"va"`        |
 * | `"vc"`        |
 * | `"ve"`        |
 * | `"vg"`        |
 * | `"vi"`        |
 * | `"vn"`        |
 * | `"vu"`        |
 * | `"wf"`        |
 * | `"ws"`        |
 * | `"xk"`        |
 * | `"ye"`        |
 * | `"yt"`        |
 * | `"za"`        |
 * | `"zm"`        |
 * | `"zw"`        |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The CountryFlag component has been designed with accessibility in mind, providing flexible options for screen reader support depending on the context in which the flag is used.
 *
 * ### Accessibility Props
 *
 * **CountryFlag props:**
 *
 * | Name | Type                                             | Description                                                                                                                                                      |
 * | :--- | :----------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | name | `string`                                         | Defines the `alt` attribute for the flag image. Defaults to an empty string `""`, making the flag invisible to screen readers when no accessible name is needed. |
 * | role | `React.HTMLAttributes<HTMLImageElement>["role"]` | ARIA role for the flag image. The `name` prop should be used instead as it provides better screen reader support.                                                |
 *
 * ### Automatic Accessibility Features
 *
 * - The component automatically applies the `name` prop value as the `alt` attribute on the flag image.
 * - When `name` is empty (default), the flag is treated as decorative and is not announced by screen readers.
 * - Focus management is not applicable as the component is not interactive.
 *
 * ### Best Practices
 *
 * - Use the `name` prop to provide an accessible name when the flag conveys important information.
 * - Leave `name` empty when the flag is purely decorative or when country information is provided by adjacent text.
 * - Avoid providing a `name` value that duplicates text content placed immediately next to the flag, as this creates redundant announcements for screen reader users.
 * - Prefer using the `name` prop over the `role` prop for better cross-platform screen reader support.
 * - When displaying multiple flags in a list or grid, ensure each flag has a meaningful and unique accessible name when necessary.
 * - Always localize country names in the `name` prop to match the user's language preferences for proper screen reader pronunciation and comprehension.
 *
 * ### Keyboard Navigation
 *
 * The CountryFlag component is not interactive and does not receive keyboard focus. No keyboard navigation is applicable.
 *
 * ### Examples
 *
 * _Note: Country names in examples are shown in English for demonstration purposes. In production, always use localized country names appropriate for your user's language._
 *
 * #### Flag with accessible name
 *
 * ```jsx
 * <CountryFlag code="cz" name="Czech Republic" />
 * ```
 *
 * Screen reader announces: "Czech Republic, image"
 *
 * #### Decorative flag next to text label
 *
 * ```jsx
 * <Stack direction="row" spacing="100" align="center">
 *   <CountryFlag code="cz" />
 *   <Text>Czech Republic</Text>
 * </Stack>
 * ```
 *
 * Screen reader announces: "Czech Republic" (only the text is announced)
 *
 * #### Flag in a list context
 *
 * ```jsx
 * <Stack direction="column">
 *   <CountryFlag code="us" name="United States" />
 *   <CountryFlag code="ca" name="Canada" />
 *   <CountryFlag code="mx" name="Mexico" />
 * </Stack>
 * ```
 *
 * Screen reader announces: "United States, image", "Canada, image", "Mexico, image"
 *
 * #### Flag without accessible name (decorative)
 *
 * ```jsx
 * <CountryFlag code="gb" />
 * ```
 *
 * Screen reader announces: (nothing - flag is treated as decorative)
 *
 *
 * @orbit-doc-end
 */
const CountryFlag = ({ dataTest, size = SIZES.MEDIUM, id, role, name = "", ...props }: Props) => {
  const { code } = getCountryProps(props.code);

  const width = SIZE_WIDTHS[size];
  const src = `${baseURL}/flags/${width}x0/flag-${code.toLowerCase()}.jpg`;
  const srcSet = `${baseURL}/flags/${width * 2}x0/flag-${code.toLowerCase()}.jpg 2x`;

  return (
    <div
      className={cx(
        "orbit-country-flag",
        "rounded-50 bg-country-flag-background relative shrink-0 overflow-hidden",
        {
          "h-country-flag-small w-country-flag-small": size === SIZES.SMALL,
          "h-country-flag-medium w-country-flag-medium": size === SIZES.MEDIUM,
        },
      )}
    >
      <img
        className="block size-full shrink-0"
        key={code}
        alt={name}
        id={id}
        data-test={dataTest}
        src={src}
        srcSet={srcSet}
        role={role}
      />
      <div className="rounded-50 shadow-country-flag absolute inset-0 block size-full" />
    </div>
  );
};

export default CountryFlag;
