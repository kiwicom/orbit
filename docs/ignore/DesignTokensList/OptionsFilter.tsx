import React from "react";
import { Button, Inline, Stack, Text } from "@kiwicom/orbit-components";

interface Option {
  key: string;
  name: string | null;
}

const OptionsFilter = ({
  value,
  options,
  label,
  onChange,
}: {
  value: string[];
  label?: string;
  options: Option[];
  onChange: (key: string) => void;
}) => {
  return (
    <Stack>
      {label && (
        <Text size="small" weight="bold">
          {label}
        </Text>
      )}
      <Inline spacing="200">
        {options.map(({ key, name }) => {
          return (
            <Button
              size="small"
              type={value.includes(key) ? "primarySubtle" : "secondary"}
              onClick={() => onChange(key)}
              key={key}
            >
              {name}
            </Button>
          );
        })}
      </Inline>
    </Stack>
  );
};

export default OptionsFilter;
