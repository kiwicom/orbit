// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { boolean, text, withKnobs } from "@storybook/addon-knobs/react";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

import Table from "./";

setAddon(chaptersAddon);

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default Table", () => ({
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Compact Table", () => ({
    info:
      "This is the compact configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <Table compact>
                <TableHead>
                  <TableRow>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                    <TableCell>Lorem ipsum dolor sit amet</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ),
          },
        ],
      },
    ],
  }))
  .addWithChapters("Playground", () => {
    const compact = boolean("compact", false);
    const children = text("children", "Lorem ipsum dolor sit amet");
    const dataTest = text("dataTest", "test");

    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Table compact={compact} dataTest={dataTest}>
                  <TableHead>
                    <TableRow>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                      <TableCell>{children}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              ),
            },
          ],
        },
      ],
    };
  });
