import React from "react";
import Button from "@kiwicom/orbit-components/lib/Button";
import Stack from "@kiwicom/orbit-components/lib/Stack";

const Buttons = () => {
  const size = "small";

  return (
    <Stack>
      <Stack direction="row">
        <Stack>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button type="primarySubtle" size={size}>
            Primary subtle
          </Button>
        </Stack>

        <Stack>
          <Button type="critical" size={size}>
            Critical
          </Button>
          <Button type="criticalSubtle" size={size}>
            Critical subtle
          </Button>
        </Stack>

        <Stack>
          <Button type="secondary" size={size}>
            Secondary
          </Button>
          <Button type="white" size={size}>
            White
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Buttons;
