import React from "react";
import { Radio, Stack, Separator } from "@kiwicom/orbit-components";
import { camelCase, trim } from "lodash";

import { Variant } from "../Example";

interface Props {
  onChange: (code: string) => void;
  exampleVariants: Variant[];
}

const Variants = ({ onChange, exampleVariants }: Props) => {
  const [values, setValues] = React.useState(() => {
    return exampleVariants.reduce((acc, { name }, idx) => {
      const fieldName = camelCase(trim(name));
      if (idx === 0) acc[fieldName] = true;
      else acc[fieldName] = false;
      return acc;
    }, {});
  });

  return (
    <Stack direction="column">
      {exampleVariants.map(({ name, code: c }, i) => {
        const fieldName = camelCase(trim(name));
        return (
          <Stack direction="column" key={fieldName}>
            <Radio
              key={name}
              name={fieldName}
              label={name}
              checked={values[fieldName]}
              onChange={() => {
                setValues(() => ({ [fieldName]: true }));
                onChange(c);
              }}
            />
            {i !== exampleVariants.length - 1 && <Separator />}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Variants;
