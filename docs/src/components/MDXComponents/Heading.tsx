import { Heading } from "@kiwicom/orbit-components";
import { SpaceAfter } from "@kiwicom/orbit-components/lib/common/types";
import { Type } from "@kiwicom/orbit-components/lib/Heading/types";

import HeadingWithLink from "./HeadingWithLink";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

function createHeadingComponent(
  tag: HeadingTag,
  { type, spaceAfter }: { type: Type } & SpaceAfter,
) {
  function HeadingComponent({ noId, children }: { noId?: boolean; children: React.ReactNode }) {
    const level = Number(tag.slice(1)) - 2;

    return (
      <HeadingWithLink level={level} noId={noId} spaceAfter={spaceAfter}>
        <Heading as={tag} type={type}>
          {children}
        </Heading>
      </HeadingWithLink>
    );
  }

  HeadingComponent.displayName = `TOC(${tag})`;
  return HeadingComponent;
}

export const h1 = createHeadingComponent("h1", { type: "title0", spaceAfter: "small" });
export const h2 = createHeadingComponent("h2", { type: "title2", spaceAfter: "small" });
export const h3 = createHeadingComponent("h3", { type: "title3", spaceAfter: "normal" });
export const h4 = createHeadingComponent("h4", { type: "title4", spaceAfter: "smallest" });
export const h5 = createHeadingComponent("h5", { type: "title5" });
export const h6 = createHeadingComponent("h6", { type: "title5" });
