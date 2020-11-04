// @flow
import * as React from "react";

import Badge from "../../Badge";
import CountryFlag from "../../CountryFlag";
import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";
import Tile from "../index";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Tile
      icon={<Icons.GenderWoman ariaLabel="Woman" />}
      header={
        <Stack align="center" direction="row" justify="between" shrink>
          <Stack direction="column" shrink spacing="none">
            <Stack align="center" direction="row" spacing="XSmall">
              <Heading as="h4" type="title4">
                Thoa Phan
              </Heading>
              <CountryFlag code="th" />
            </Stack>
            <Text type="secondary">+1 704 555 8756</Text>
          </Stack>
          <Stack align="center" basis="0%">
            <Badge type="info">You</Badge>
          </Stack>
        </Stack>
      }
    />
  ),
  info: {
    title: "Tile with custom header",
    description:
      "If you need a different header layout than title and description, you can add it as a custom header.",
  },
};
