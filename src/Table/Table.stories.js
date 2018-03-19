// @flow

import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";
import { action } from "@storybook/addon-actions";

import Alert from "../icons/Alert";

import { Table, TableRow, TableBody, TableFooter, TableCell, TableHeader } from "../index";

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
              <TableHeader>
                <TableRow>
                  <TableCell isBold style={{ width: "150px" }}>
                    Header 1 left
                  </TableCell>
                  <TableCell isBold align="center" style={{ width: "150px" }}>
                    Header 2 center
                  </TableCell>
                  <TableCell isBold align="right" style={{ width: "150px" }}>
                    Header 3 right
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Text left</TableCell>
                  <TableCell align="center">Text center</TableCell>
                  <TableCell align="right">Text right</TableCell>
                  <TableCell>
                    <IconButton />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Text left</TableCell>
                  <TableCell align="center">Text center</TableCell>
                  <TableCell align="right">Text right</TableCell>
                  <TableCell>
                    <IconButton />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Text left</TableCell>
                  <TableCell align="center">Text center</TableCell>
                  <TableCell align="right">Text right</TableCell>
                  <TableCell>
                    <IconButton />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell isBold>Footer left</TableCell>
                  <TableCell isBold align="center">
                    Footer center
                  </TableCell>
                  <TableCell isBold align="right">
                    Footer rigth
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableFooter>
            </Table>
          ),
        },
      ],
    },
  ],
});
