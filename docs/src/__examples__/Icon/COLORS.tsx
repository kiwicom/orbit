import * as React from "react";
import * as Icons from "@kiwicom/orbit-components/lib/icons";
import { Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <Stack flex>
          <Stack>
            <Text>Inherited color</Text>
            <Text type="success">
              <Icons.Airplane ariaLabel="Airplane" /> Price alerts
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack flex>
        <Stack>
          <Text>Primary</Text>
          <Icons.Airplane color="primary" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Secondary</Text>
          <Icons.Airplane color="secondary" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Teriary</Text>
          <Icons.Airplane color="tertiary" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <div />
        </Stack>
      </Stack>
      <Stack flex>
        <Stack>
          <Text>Informational</Text>
          <Icons.Airplane color="info" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Success</Text>
          <Icons.Airplane color="success" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Warning</Text>
          <Icons.Airplane color="warning" ariaLabel="Airplane" />
        </Stack>
        <Stack>
          <Text>Critical</Text>
          <Icons.Airplane color="critical" ariaLabel="Airplane" />
        </Stack>
      </Stack>
      <Stack flex>
        <Stack>
          <Text>Custom color</Text>
          <Icons.Airplane customColor="#ffc0cb" ariaLabel="Airplane" />
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
