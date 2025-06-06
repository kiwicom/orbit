import React, { type ReactNode } from "react";
import cx from "classnames";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import type { Props } from "@theme/MDXContent";

export default function MDXContent({ children }: Props): ReactNode {
  return (
    <div
      className={cx(
        "text-normal",
        "tb:rounded-400",
        "[&>*+*]:mt-400",
        "[&>*+h1]:mt-600 [&>*+h2]:mt-600 [&>*+h3]:mt-600 [&>*+h4]:mt-600 [&>*+h5]:mt-600",
        "[&>h1+*]:mt-300 [&>h2+*]:mt-300 [&>h3+*]:mt-300 [&>h4+*]:mt-300 [&>h5+*]:mt-300",
        "[&>p]:text-large",
        "[&_p]:leading-[1.5]",
        "[&_ul>li+li]:mt-300",
        "[&_ol>li+li]:mt-300",
        "[&>.orbit-docs-heading-anchor]:mt-600 [&>.orbit-docs-heading-anchor+*]:mt-0",
        "[&>h2:first-child]:mt-0",
        "[&>div+h2:nth-child(2)]:mt-0",
      )}
    >
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </div>
  );
}
