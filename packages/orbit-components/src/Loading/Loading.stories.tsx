import * as React from "react";

import TYPE_OPTIONS from "./consts";
import Card from "../Card";
import CardSection from "../Card/CardSection";
import Illustration from "../Illustration";
import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Loading from ".";

export default {
  title: "Loading",
};

export const Default = () => <Loading />;

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const ButtonLoading = () => <Button loading>Default button</Button>;

ButtonLoading.story = {
  name: "Button loading",

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardLoading = ({ title, description, loading, loadingText }) => {
  return (
    <Card loading={loading} title={title} description={description}>
      <Loading loading={loading} type="boxLoader" text={loadingText}>
        <CardSection>
          <Illustration name="EnjoyApp" size="medium" />
        </CardSection>
      </Loading>
    </Card>
  );
};

CardLoading.story = {
  name: "Card loading",

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CardLoading.args = {
  title: "Card with title",
  description: "",
  loading: true,
  loadingText: "Please wait, Card content is loading...",
};

export const InlineLoader = ({ loadingText }) => {
  return <Loading type={TYPE_OPTIONS.INLINE_LOADER} text={loadingText} />;
};

InlineLoader.story = {
  name: "Inline loader",

  parameters: {
    info: "This configuration of this component is without any height, width or paddings. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

InlineLoader.args = {
  loadingText: "Please wait, content of the page is loading...",
};

export const CustomLoader = ({ customSize }) => {
  return <Loading customSize={customSize} />;
};

CustomLoader.args = {
  customSize: 50,
};

export const Playground = ({ type, loadingText, loading, dataTest }) => {
  return <Loading loading={loading} type={type} text={loadingText} dataTest={dataTest} />;
};

Playground.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Playground.args = {
  type: TYPE_OPTIONS.PAGE_LOADER,
  loadingText: "Please wait, content of the page is loading...",
  loading: true,
  dataTest: "test",
};

Playground.argTypes = {
  type: {
    options: Object.values(TYPE_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Loading loading type="pageLoader" text="Please wait, content of the page is loading..." />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
