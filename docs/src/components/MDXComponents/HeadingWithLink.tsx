import React from "react";
import cx from "clsx";
import { Stack } from "@kiwicom/orbit-components";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";
import * as Common from "@kiwicom/orbit-components/lib/common/types";

import { getTextFromChildren, slugify } from "../../utils/common";

interface HeadingAnchorProps {
  level: number;
  noId?: boolean;
  slug: string;
  headingText: string;
  children: React.ReactNode;
}

const HeadingAnchor = ({ level, noId, slug, headingText, children }: HeadingAnchorProps) => (
  <a
    className={cx(
      "orbit-docs-heading-anchor",
      "block",
      "[&_.orbit-docs-link-icon_svg]:duration-fast [&_.orbit-docs-link-icon_svg]:opacity-0 [&_.orbit-docs-link-icon_svg]:transition-[fill] [&_.orbit-docs-link-icon_svg]:ease-in",
      "hover:[&_.orbit-docs-link-icon_svg]:fill-product-normal hover:outline-none hover:[&_.orbit-docs-link-icon_svg]:opacity-100",
      "active:[&_.orbit-docs-link-icon_svg]:fill-product-normal active:outline-none active:[&_.orbit-docs-link-icon_svg]:opacity-100",
      "focus:[&_.orbit-docs-link-icon_svg]:fill-product-normal focus:outline-none focus:[&_.orbit-docs-link-icon_svg]:opacity-100",
      "[&_+_p]:mt-0",
      "[&_+_&]:!mt-300",
      level === 1 && "[p_+_&]:mt-800",
    )}
    id={noId ? "" : slug}
    href={`#${slug}`}
    title={`Link to heading: ${headingText}`}
  >
    {children}
  </a>
);

interface Props extends Common.SpaceAfter {
  level: number;
  children?: React.ReactNode;
  noId?: boolean;
}

const HeadingWithLink = ({ level, children, noId, spaceAfter = "none" }: Props) => {
  const headingText = getTextFromChildren(children);
  const slug = slugify(headingText);
  return (
    <HeadingAnchor level={level} noId={noId} slug={slug} headingText={headingText}>
      <Stack inline spacing="200" align="center" spaceAfter={spaceAfter}>
        {children}
        <div className="orbit-docs-link-icon">
          <LinkIcon />
        </div>
      </Stack>
    </HeadingAnchor>
  );
};

export default HeadingWithLink;
