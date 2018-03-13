import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { Alert } from "@kiwicom/icons";
import chaptersAddon from "react-storybook-addon-chapters";
import { action } from "@storybook/addon-actions";

import Cell from "./Cell";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Table from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

const IconButton = () => (
  <div onClick={action("action")}>
    <Alert />
    <style jsx>
      {`
        div {
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

storiesOf("Table", module).addWithChapters("Table", {
  info: "Table Example",
  chapters: [
    {
      title: "Basic Table",
      sections: [
        {
          options,
          sectionFn: () => (
            <Table>
              <Header>
                <Header.Row>
                  <Cell isBold style={{ width: "150px" }}>
                    Header 1 left
                  </Cell>
                  <Cell isBold align="center" style={{ width: "150px" }}>
                    Header 2 center
                  </Cell>
                  <Cell isBold align="right" style={{ width: "150px" }}>
                    Header 3 right
                  </Cell>
                </Header.Row>
              </Header>
              <Body>
                <Body.Row>
                  <Cell>Text left</Cell>
                  <Cell align="center">Text center</Cell>
                  <Cell align="right">Text right</Cell>
                  <Cell>
                    <IconButton />
                  </Cell>
                </Body.Row>
                <Body.Row>
                  <Cell>Text left</Cell>
                  <Cell align="center">Text center</Cell>
                  <Cell align="right">Text right</Cell>
                  <Cell>
                    <IconButton />
                  </Cell>
                </Body.Row>
                <Body.Row>
                  <Cell>Text left</Cell>
                  <Cell align="center">Text center</Cell>
                  <Cell align="right">Text right</Cell>
                  <Cell>
                    <IconButton />
                  </Cell>
                </Body.Row>
              </Body>
              <Footer>
                <Footer.Row>
                  <Cell isBold>Footer left</Cell>
                  <Cell isBold align="center">
                    Footer center
                  </Cell>
                  <Cell isBold align="right">
                    Footer rigth
                  </Cell>
                  <Cell />
                </Footer.Row>
              </Footer>
            </Table>
          ),
        },
      ],
    },
  ],
});
