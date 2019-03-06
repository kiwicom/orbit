// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import { TYPE_OPTIONS } from "./consts";
import * as Icons from "../icons";
import CardHeader from "../Card/CardHeader";
import CardSection from "../Card/CardSection";
import Card from "../Card";
import Illustration from "../Illustration";
import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Loading from "./index";

storiesOf("Loading", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => <Loading />)
  .add("Button loading", () => <Button loading>Default button</Button>)
  .add("Card loading", () => {
    const title = text("Title", "Card with title");
    const description = text("Description");
    const loading = boolean("Loading", true);
    const loadingText = text("Text", "Please wait, Card content is loading...");
    return (
      <Card>
        <Loading loading={loading} type="boxLoader" text={loadingText}>
          <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
          <CardSection>
            <Illustration name="EnjoyApp" size="medium" />
          </CardSection>
        </Loading>
      </Card>
    );
  })
  .add("Inline loader", () => {
    const loadingText = text("Text", "Please wait, content of the page is loading...");

    return <Loading type={TYPE_OPTIONS.INLINE_LOADER} text={loadingText} />;
  })
  .add("Playground", () => {
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PAGE_LOADER);
    const loadingText = text("Text", "Please wait, content of the page is loading...");
    const loading = boolean("Loading", true);
    const dataTest = text("dataTest", "test");

    return <Loading loading={loading} type={type} text={loadingText} dataTest={dataTest} />;
  })
  .add("RTL", () => (
    <RenderInRtl>
      <Loading loading type="pageLoader" text="Please wait, content of the page is loading..." />
    </RenderInRtl>
  ));
