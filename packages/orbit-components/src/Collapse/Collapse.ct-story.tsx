import React from "react";

import Badge from "../Badge";
import TextLink from "../TextLink";

import Collapse from ".";

export default function CollapseStory() {
  return (
    <>
      <Collapse
        label="Collapsed"
        customLabel={<Badge>Custom Label - Collapsed</Badge>}
        actions={
          <TextLink type="secondary" size="small">
            Action
          </TextLink>
        }
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <p>Collapsed content</p>
      </Collapse>
      <Collapse
        label="Expanded"
        initialExpanded
        expandButtonLabel="Expand"
        collapseButtonLabel="Collapse"
      >
        <p>Expanded content</p>
      </Collapse>
    </>
  );
}
