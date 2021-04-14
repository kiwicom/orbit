import * as React from "react";
import { Airplane } from "@kiwicom/orbit-components/icons";
import { Inline, Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <Stack flex>
          <Stack>
            <Text>Inherited color</Text>
            <Text type="success">
              <Inline>
                <Airplane ariaLabel="Airplane" /> Price alerts
              </Inline>
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack flex>
        <Stack>
          <Text>Primary</Text>
          <Airplane color="primary" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Secondary</Text>
          <Airplane color="secondary" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Teriary</Text>
          <Airplane color="tertiary" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <div />
        </Stack>
      </Stack>
      <Stack flex>
        <Stack>
          <Text>Informational</Text>
          <Airplane color="info" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Success</Text>
          <Airplane color="success" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Warning</Text>
          <Airplane color="warning" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Critical</Text>
          <Airplane color="critical" ariaLabel="Airplane" />
        </Stack>
      </Stack>
      <Stack flex>
        <Stack>
          <Text>Custom color</Text>
          <Airplane customColor="#ffc0cb" ariaLabel="Airplane" />
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Icon colors",
    description:
      "By default, icons inherit the color of their parent. You can also set the color to one of our three ink colors, one of our four status colors, or any other color you want.",
  },
};
