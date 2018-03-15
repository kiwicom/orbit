// @flow

import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { action } from "@storybook/addon-actions";

import Alert from "../icons/Alert";
import Cell from "./Cell";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Row from "./Row";

import Table from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

/*eslint-disable */
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
/* eslint-enable */

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
                <Row>
                  <Cell isBold style={{ width: "150px" }}>
                    Header 1 left
                  </Cell>
                  <Cell isBold align="center" style={{ width: "150px" }}>
                    Header 2 center
                  </Cell>
                  <Cell isBold align="right" style={{ width: "150px" }}>
                    Header 3 right
                  </Cell>
                </Row>
              </Header>
              <Body>
                <Row>
                  <Cell>Text left</Cell>
                  <Cell align="center">Text center</Cell>
                  <Cell align="right">Text right</Cell>
                  <Cell>
                    <IconButton />
                  </Cell>
                </Row>
                <Row>
                  <Cell>Text left</Cell>
                  <Cell align="center">Text center</Cell>
                  <Cell align="right">Text right</Cell>
                  <Cell>
                    <IconButton />
                  </Cell>
                </Row>
                <Row>
                  <Cell>Text left</Cell>
                  <Cell align="center">Text center</Cell>
                  <Cell align="right">Text right</Cell>
                  <Cell>
                    <IconButton />
                  </Cell>
                </Row>
              </Body>
              <Footer>
                <Row>
                  <Cell isBold>Footer left</Cell>
                  <Cell isBold align="center">
                    Footer center
                  </Cell>
                  <Cell isBold align="right">
                    Footer rigth
                  </Cell>
                  <Cell />
                </Row>
              </Footer>
            </Table>
          ),
        },
      ],
    },
  ],
});
