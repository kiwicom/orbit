import * as React from "react";
import { InputField, Stack } from "@kiwicom/orbit-components";

const InputFields = () => {
  const label = "Text label";
  const placeholder = "e.g. John Doe";

  return (
    <Stack direction="column" spacing="XXLarge">
      <Stack direction="row">
        <InputField label={label} placeholder={placeholder} />
      </Stack>
      <Stack flex>
        <InputField
          label={label}
          placeholder={placeholder}
          help="Help message (Provide more information)"
        />
        <InputField
          label={label}
          placeholder={placeholder}
          error="Error message (explain how to solve it)"
        />
      </Stack>
      <Stack>
        <InputField label={label} placeholder={placeholder} disabled />
      </Stack>
    </Stack>
  );
};

export default InputFields;
