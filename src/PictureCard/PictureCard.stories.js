// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, object, boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import PictureCard from "./index";

const image = object("image", {
  original: "385x320",
  code: "moscow_ru",
  name: "moscow_ru",
  placeholder: "385x320",
});

storiesOf("PictureCard", module)
  .add(
    "Default",
    () => {
      return (
        <PictureCard
          subTitle="Prague"
          title="Moscow"
          label="Family Fun"
          image={image}
          width="328px"
          onClick={action("onClick")}
        >
          from 2,563 Kč
        </PictureCard>
      );
    },
    {
      info:
        "PictureCard is a component which is used on the landing page and also on the search page.",
    },
  )
  .add(
    "with Actions",
    () => {
      const tabIndex = text("TabIndex", "0");

      return (
        <PictureCard
          subTitle="Prague"
          title="Moscow"
          tabIndex={tabIndex}
          label="Family Fun"
          href="link"
          width="400px"
          actions={<Button type="secondary">Action</Button>}
          image={image}
          onClick={action("onClick")}
        >
          from 2,563 Kč
        </PictureCard>
      );
    },
    {
      info:
        "PictureCard is a component which is used on the landing page and also on the search page.",
    },
  )
  .add(
    "Plain",
    () => {
      return <PictureCard image={image} />;
    },
    {
      info:
        "PictureCard is a component which is used on the landing page and also on the search page.",
    },
  )
  .add(
    "Playground",
    () => {
      const title = text("title", "Moscow");
      const dataTest = text("dataTest", "test");
      const height = text("height", "300px");
      const width = text("width", "400px");
      const subTitle = text("subTitle", "Prague");
      const children = text("children", "5,563 Kč");
      const tabIndex = text("TabIndex", "0");
      const actions = boolean("actions", false);
      const external = boolean("external", false);
      const href = text("href", "");
      const label = text("label", "Family fun");

      return (
        <PictureCard
          dataTest={dataTest}
          subTitle={subTitle}
          title={title}
          image={image}
          href={href}
          label={label}
          external={external}
          actions={actions ? <Button type="secondary">Action</Button> : null}
          height={height}
          width={width}
          onClick={action("onClick")}
          tabIndex={tabIndex}
        >
          {children}
        </PictureCard>
      );
    },
    {
      info:
        "PictureCard is a component which is used on the landing page and also on the search page.",
    },
  )
  .add(
    "RTL",
    () => {
      const title = text("title", "Paris");
      const dataTest = text("dataTest", "test");
      const height = text("height", "300px");
      const subTitle = text("subTitle", "Prague");
      const children = text("children", "5,563 Kč");
      const tabIndex = text("TabIndex", "0");
      const actions = boolean("actions", false);
      const external = boolean("external", false);
      const href = text("href", "");
      const label = text("label", "Family fun");

      return (
        <RenderInRtl>
          <PictureCard
            dataTest={dataTest}
            subTitle={subTitle}
            title={title}
            image={image}
            href={href}
            label={label}
            external={external}
            actions={actions ? <Button>Action</Button> : null}
            height={height}
            onClick={action("onClick")}
            tabIndex={tabIndex}
          >
            {children}
          </PictureCard>
        </RenderInRtl>
      );
    },
    {
      info: "This is a preview of PictureCard in RTL setup.",
    },
  );
