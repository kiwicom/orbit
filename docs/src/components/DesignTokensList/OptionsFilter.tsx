import * as React from "react";
import { Button, Inline, Stack, Text } from "@kiwicom/orbit-components";

const OptionsFilter = ({
  value,
  options,
  label,
  onChange,
}: {
  value: string[];
  label?: string;
  options: Array<{ key: string; name: string | null }>;
  onChange: (key: string) => void;
}) => {
  return (
    <Stack>
      {label && (
        <Text size="small" weight="bold">
          {label}
        </Text>
      )}
      <Inline spacing="XSmall">
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
