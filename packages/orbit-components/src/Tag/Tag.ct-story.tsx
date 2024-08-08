import * as React from "react";

import type { Props } from "./types";
import * as Icons from "../icons";

import Tag from ".";

export function TestTag(props: Props) {
  return (
    <div className="p-100 inline-block">
      <Tag {...props} />
    </div>
  );
}

export function DefaultTestStory() {
  return (
    <div className="gap-400 p-100 flex flex-col items-start">
      <h2>Neutral</h2>
      <div className="gap-300 flex flex-wrap">
        <Tag>Non actionable</Tag>
        <Tag iconLeft={<Icons.PlusMinus />}>With icon</Tag>
        <Tag onClick={() => {}}>Default</Tag>
        <Tag selected onClick={() => {}}>
          Selected
        </Tag>
        <Tag onRemove={() => {}}>Removable</Tag>
        <Tag selected onRemove={() => {}} onClick={() => {}}>
          Selected Removable
        </Tag>
        <Tag onRemove={() => {}} iconLeft={<Icons.PlusMinus />}>
          Removable with icon
        </Tag>
      </div>
      <h2>Colored</h2>
      <div className="gap-300 flex flex-wrap">
        <Tag type="colored">Non actionable</Tag>
        <Tag type="colored" iconLeft={<Icons.PlusMinus />}>
          With icon
        </Tag>
        <Tag type="colored" onClick={() => {}}>
          Default
        </Tag>
        <Tag type="colored" selected onClick={() => {}}>
          Selected
        </Tag>
        <Tag type="colored" onRemove={() => {}}>
          Removable
        </Tag>
        <Tag type="colored" selected onRemove={() => {}} onClick={() => {}}>
          Selected Removable
        </Tag>
        <Tag type="colored" onRemove={() => {}} iconLeft={<Icons.PlusMinus />}>
          Removable with icon
        </Tag>
      </div>
      <h2>dateTag</h2>
      <div className="gap-300 flex flex-wrap">
        <Tag dateTag>Neutral dateTag</Tag>
        <Tag dateTag onClick={() => {}}>
          Clickable dateTag
        </Tag>
        <Tag dateTag selected onClick={() => {}}>
          Selected dateTag
        </Tag>
        <Tag type="colored" dateTag>
          Colored dateTag
        </Tag>
        <Tag type="colored" dateTag onClick={() => {}}>
          Clickable colored dateTag
        </Tag>
        <Tag type="colored" dateTag selected onClick={() => {}}>
          Selected colored dateTag
        </Tag>
      </div>
      <h2>Size small</h2>
      <div className="gap-300 flex flex-wrap">
        <Tag size="small">Neutral small</Tag>
        <Tag size="small" iconLeft={<Icons.PlusMinus />}>
          Small w/ icon
        </Tag>
        <Tag size="small" onRemove={() => {}}>
          Small removable
        </Tag>
        <Tag size="small" onRemove={() => {}} iconLeft={<Icons.PlusMinus />}>
          Small removable with icon
        </Tag>
      </div>
    </div>
  );
}
