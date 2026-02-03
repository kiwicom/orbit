"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types";
import TYPE_OPTIONS from "./consts";
import useTheme from "../hooks/useTheme";

const CircleLoader = ({ animationDelay }: { animationDelay?: string }) => {
  return (
    <div
      className="animate-loader bg-cloud-dark size-200 me-150 rounded-full [&:nth-child(3)]:m-0"
      style={{ animationDelay }}
    />
  );
};

const Loader = ({ type, customSize, title, ariaHidden }) => {
  const theme = useTheme();
  const isCircledIcon =
    type === TYPE_OPTIONS.BOX_LOADER ||
    type === TYPE_OPTIONS.SEARCH_LOADER ||
    type === TYPE_OPTIONS.INLINE_LOADER;

  if (customSize) {
    return (
      <svg
        viewBox={`0 0 ${customSize} ${customSize}`}
        className="orbit-loading-spinner animate-spinner"
        style={{ height: `${customSize}px`, width: `${customSize}px` }}
        role="img"
        aria-hidden={ariaHidden}
      >
        <title>{title}</title>
        <circle
          cx="50%"
          cy="50%"
          fill="transparent"
          strokeWidth="3px"
          stroke={type === TYPE_OPTIONS.BUTTON_LOADER ? "current" : theme.orbit.paletteCloudDark}
          strokeLinecap="round"
          strokeDasharray={`${customSize * 3 + 8}px`}
          strokeDashoffset={`${Number(customSize) + 24}px`}
          r={customSize / 2 - 2}
        />
      </svg>
    );
  }

  if (isCircledIcon) {
    return (
      <div
        className="flex items-center justify-center"
        aria-hidden={ariaHidden}
        role="img"
        aria-label={title}
      >
        <CircleLoader />
        <CircleLoader animationDelay="0.1s" />
        <CircleLoader animationDelay="0.2s" />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 40 40"
      className="orbit-loading-spinner animate-spinner size-1000"
      stroke={type === TYPE_OPTIONS.BUTTON_LOADER ? "currentColor" : theme.orbit.paletteCloudDark}
      role="img"
      aria-hidden={ariaHidden}
    >
      <title>{title}</title>
      <circle
        cx="50%"
        cy="50%"
        fill="transparent"
        strokeWidth="3px"
        stroke={type === TYPE_OPTIONS.BUTTON_LOADER ? "current" : theme.orbit.paletteCloudDark}
        strokeLinecap="round"
        r="18"
        strokeDasharray="128px"
        strokeDashoffset="64px"
      />
    </svg>
  );
};

/**
 * @orbit-doc-start
 * README
 * ----------
 * # Loading
 *
 * To implement Loading component into your project you'll need to add the import:
 *
 * ```jsx
 * import Loading from "@kiwicom/orbit-components/lib/Loading";
 * ```
 *
 * After adding import into your project you can use it simply like:
 *
 * ```jsx
 * <Loading title="Loading" />
 * ```
 *
 * ## Props
 *
 * Table below contains all types of the props available in the Loading component.
 *
 * | Name        | Type                      | Default        | Description                                                                                                                                                   |
 * | :---------- | :------------------------ | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | children    | `React.Node`              |                | The content that is shown when `loading` is **not** `true`.                                                                                                   |
 * | dataTest    | `string`                  |                | Optional prop for testing purposes.                                                                                                                           |
 * | id          | `string`                  |                | Set `id` for `Loading`.                                                                                                                                       |
 * | loading     | `boolean`                 | `false`        | If `true`, the Loading will be displayed. Loading which doesn't have children is always shown, even if `loading` prop is set to `false`.                      |
 * | type        | [`enum`](#enum)           | `"pageLoader"` | The type of the Loading.                                                                                                                                      |
 * | customSize  | `number`                  |                | Allows you to define custom size for circle loader.                                                                                                           |
 * | asComponent | `string \| React.Element` | `"div"`        | The component used for the root node.                                                                                                                         |
 * | text        | `Translation`             |                | Text to be displayed below the loader image. Cannot be used with `title` or `ariaHidden`. See Accessibility tab.                                              |
 * | title       | `string`                  |                | Provides an accessible name for the loading indicator that is announced by screen readers. Cannot be used with `text` or `ariaHidden`. See Accessibility tab. |
 * | ariaHidden  | `boolean`                 |                | If `true`, hides the loading indicator from screen readers. Cannot be used with `text` or `title`. See Accessibility tab.                                     |
 *
 * ### enum
 *
 * | type             |
 * | :--------------- |
 * | `"buttonLoader"` |
 * | `"searchLoader"` |
 * | `"boxLoader"`    |
 * | `"pageLoader"`   |
 * | `"inlineLoader"` |
 *
 *
 * Accessibility
 * -------------
 * ## Accessibility
 *
 * The Loading component has been designed with accessibility in mind, providing features that enhance the experience for users of assistive technologies.
 *
 * ### Accessibility Props
 *
 * The following props are available to improve the accessibility of your Loading component:
 *
 * | Name        | Type                      | Description                                                                                                             |
 * | :---------- | :------------------------ | :---------------------------------------------------------------------------------------------------------------------- |
 * | title       | `string`                  | Provides an accessible name for the loading indicator that is announced by screen readers but not visually displayed.   |
 * | ariaHidden  | `boolean`                 | When `true`, hides the entire component from screen readers. Useful when loading state is conveyed through other means. |
 * | text        | `Translation`             | Text displayed below the loader image. When provided, this text is announced by screen readers instead of the `title`.  |
 * | asComponent | `string \| React.Element` | Allows rendering the loading indicator with a different HTML element to maintain semantic structure.                    |
 *
 * One of these props must be provided: `text`, `title`, or `ariaHidden={true}`. They are mutually exclusive and cannot be used together.
 *
 * ### Automatic Accessibility Features
 *
 * The Loading component automatically implements the following accessibility features:
 *
 * - Uses semantic SVG elements with proper ARIA attributes for the loading indicator
 * - Automatically adjusts announcements based on the presence of `text` or `title` props:
 *   - When `text` is provided, the visual loading indicator is hidden from screen readers and only the text is announced
 *   - When `title` is provided, it serves as an accessible name for the loading indicator
 *   - When `ariaHidden` is `true`, the entire component is hidden from screen readers
 * - Always renders as a `div` when `text` is provided to ensure proper structure
 *
 * ### Best Practices
 *
 * - Always provide either `text`, `title`, or `ariaHidden={true}` to ensure proper accessibility:
 *
 *   - Use `text` when you want both visible and announced text
 *   - Use `title` for loading indicators without visible text
 *   - Use `ariaHidden={true}` when:
 *     - Loading state is conveyed through other visible text on the page
 *     - Multiple loading indicators are present and only one should be announced
 *   - Always ensure both `title` and `text` are properly translated
 *
 * - When using `asComponent`:
 *
 *   - By default, Loading renders as a `div` element
 *   - Use `asComponent` when the Loading component is wrapped by another component that requires a [phrasing element](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories) as children
 *   - Ensure the chosen element maintains proper semantic structure:
 *
 *   ```jsx
 *   <Button>
 *     <Loading title="Title of the button is loading" asComponent="span" />
 *   </Button>
 *   ```
 *
 * ### Examples
 *
 * #### Basic loading with accessible name
 *
 * ```jsx
 * <Loading title="Loading page content" type="pageLoader" />
 * ```
 *
 * Screen reader announces: "Loading page content, image"
 *
 * #### Loading with visible text
 *
 * ```jsx
 * <Loading text="Please wait while we process your request" type="boxLoader" />
 * ```
 *
 * Screen reader announces: "Please wait while we process your request"
 *
 * #### Multiple loaders with controlled announcements
 *
 * ```jsx
 * <Stack>
 *   <Loading type="searchLoader" title="Loading search results" />
 *   <Loading
 *     type="inlineLoader"
 *     ariaHidden={true} // This loader won't be announced
 *   />
 * </Stack>
 * ```
 *
 * Screen reader only announces: "Loading search results, image"
 *
 *
 * @orbit-doc-end
 */
const Loading = ({
  loading = false,
  asComponent = "div",
  type = TYPE_OPTIONS.PAGE_LOADER,
  text,
  children,
  dataTest,
  customSize,
  title,
  id,
  ariaHidden,
}: Props) => {
  const Element = (text ? "div" : asComponent) as React.ElementType;

  return (
    <>
      {Boolean(children) && !loading ? (
        children
      ) : (
        <Element
          className={cx([
            "items-center",
            "overflow-hidden",
            "box-border",
            type === TYPE_OPTIONS.BUTTON_LOADER &&
              "[&_.orbit-loading-spinner]:size-icon-medium absolute start-0 top-0 size-full justify-center",
            type === TYPE_OPTIONS.SEARCH_LOADER && "h-1000 justify-start",
            type === TYPE_OPTIONS.INLINE_LOADER && "inline-flex min-h-[19px] justify-center",
            type !== TYPE_OPTIONS.INLINE_LOADER && "flex",
            type === TYPE_OPTIONS.BOX_LOADER && "h-[80px] justify-center",
            type === TYPE_OPTIONS.PAGE_LOADER && "h-[120px] flex-col justify-center",
          ])}
          style={{ height: customSize }}
          data-test={dataTest}
          id={id}
          aria-hidden={ariaHidden ? "true" : undefined}
        >
          <Loader
            title={title}
            type={type}
            customSize={customSize}
            ariaHidden={text ? "true" : undefined}
          />
          {type !== TYPE_OPTIONS.BUTTON_LOADER && Boolean(text) && (
            <div
              className={cx([
                "font-base text-normal text-cloud-dark leading-normal",
                type === TYPE_OPTIONS.PAGE_LOADER ? "mt-400" : "ms-300",
              ])}
            >
              {text}
            </div>
          )}
        </Element>
      )}
    </>
  );
};

Loading.displayName = "Loading";

export default Loading;
