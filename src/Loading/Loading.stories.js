// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs/react";

import TYPE_OPTIONS from "./consts";
import * as Icons from "../icons";
import CardHeader from "../Card/CardHeader";
import CardContent from "../Card/CardContent";
import Card from "../Card";
import Illustration from "../Illustration";
import Button from "../Button";

import Loading from "./index";

setAddon(chaptersAddon);

storiesOf("Loading", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <Loading />,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Button loading", () => ({
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <Button loading>Default button</Button>,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Card loading", () => {
    const title = text("Title", "Card with title");
    const description = text("Description");
    const loading = boolean("Loading", true);
    const loadingText = text("Text", "Please wait, Card content is loading...");
    return {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <Loading loading={loading} type="boxLoader" text={loadingText}>
                    <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
                    <CardContent>
                      <Illustration name="EnjoyApp" size="medium" />
                    </CardContent>
                  </Loading>
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PAGE_LOADER);
    const loadingText = text("Text", "Please wait, content of the page is loading...");
    const loading = boolean("Loading", true);
    return {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Loading loading={loading} type={type} text={loadingText} />,
            },
          ],
        },
      ],
    };
  });
