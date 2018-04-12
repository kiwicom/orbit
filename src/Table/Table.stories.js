// @flow

import React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import chaptersAddon from "react-storybook-addon-chapters";

import { Table, TableRow, TableBody, TableFooter, TableCell, TableHeader } from "../index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

const HeaderLabels = [
  { title: "Header 1 left", align: "left" },
  { title: "Header 2 center", align: "center" },
  { title: "Header 3 right", align: "right" },
];

const data = [
  [
    { title: "Text 1 left", align: "left" },
    { title: "Text 2 center", align: "center" },
    { title: "Text 3 right", align: "right" },
  ],
  [
    { title: "Text 1 left", align: "left" },
    { title: "Text 2 center", align: "center" },
    { title: "Text 3 right", align: "right" },
  ],
  [
    { title: "Text 1 left", align: "left" },
    { title: "Text 2 center", align: "center" },
    { title: "Text 3 right", align: "right" },
  ],
];

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
                  {HeaderLabels.map(col => (
                    <TableCell style={{ width: "150px" }} key={col.title} isBold align={col.align}>
                      {col.title}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map(row => (
                  <TableRow>
                    {row.map(item => <TableCell align={item.align}>{item.title}</TableCell>)}
                  </TableRow>
                ))}
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
                </TableRow>
              </TableFooter>
            </Table>
          ),
        },
      ],
    },
  ],
});
