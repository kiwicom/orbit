import React from "react";
import { Radio, Stack, Separator } from "@kiwicom/orbit-components";
import { camelCase, trim } from "lodash";

import { Variant } from "../Example";

interface Props {
  currentVariant: string | null;
  onChange: (variant: string) => void;
  exampleVariants: Variant[];
}

const Variants = ({ currentVariant, onChange, exampleVariants }: Props) => {
  return (
    <Stack direction="column">
      {exampleVariants.map((variant, i) => {
        const fieldName = camelCase(trim(variant.name));
        return (
          <Stack direction="column" key={fieldName}>
            <Radio
              key={variant.name}
              name={fieldName}
              label={variant.name}
              checked={variant.name === currentVariant}
              onChange={() => onChange(variant.name)}
            />
            {i !== exampleVariants.length - 1 && <Separator />}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Variants;
