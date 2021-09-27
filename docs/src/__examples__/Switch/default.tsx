import React from "react";
import { defaultTheme, Stack, Switch, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const handleChange = () => {
      setDarkMode(!darkMode);
    };
    return (
      <div
        style={{
          padding: defaultTheme.orbit.spaceMedium,
          backgroundColor: darkMode
            ? defaultTheme.orbit.paletteInkNormal
            : defaultTheme.orbit.paletteCloudLight,
        }}
      >
        <Stack align="center">
          <Switch ariaLabelledby="darkmode" checked={darkMode} onChange={handleChange} />
          <Text id="darkmode" type={darkMode ? "white" : "primary"}>
            Dark mode
          </Text>
        </Stack>
      </div>
    );
  },
  exampleKnobs: [
    {
      component: "Switch",
      knobs: [
        { name: "icon", type: "icon", defaultValue: "" },
        { name: "checked", type: "boolean", defaultValue: false },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "ariaLabelledby", type: "text", defaultValue: "darkmode" },
      ],
    },
  ],
};
