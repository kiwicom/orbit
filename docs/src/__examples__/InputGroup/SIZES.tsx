import React from "react";
import { CountryFlag, InputGroup, InputField, Stack, Select } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [country, setCountry] = React.useState("");
    const [country2, setCountry2] = React.useState("");

    const setPrefix = countryCode => {
      let calculatedPrefix;
      switch (countryCode) {
        case "dz":
          calculatedPrefix = "+213";
          break;
        case "bo":
          calculatedPrefix = "+591";
          break;
        case "hr":
          calculatedPrefix = "+385";
          break;
        case "id":
          calculatedPrefix = "+62";
          break;
        case "mx":
          calculatedPrefix = "+52";
          break;
        default:
          calculatedPrefix = "";
      }
      return calculatedPrefix;
    };
    const countryPrefix = setPrefix(country);
    const countryPrefix2 = setPrefix(country2);
    return (
      <Stack>
        <InputGroup label="Phone number">
          <Select
            value={country}
            customValueText={countryPrefix}
            placeholder="Country prefix"
            options={[
              { label: "Algeria +213", value: "dz" },
              { label: "Bolivia +591", value: "bo" },
              { label: "Croatia +385", value: "hr" },
              { label: "Indonesia +62", value: "id" },
              { label: "Mexico +52", value: "mx" },
            ]}
            onChange={event => setCountry(event.currentTarget.value)}
            prefix={<CountryFlag code={country || "anywhere"} />}
          />
          <InputField placeholder="123456789" type="number" inputMode="tel" />
        </InputGroup>
        <InputGroup size="small" label="Phone number">
          <Select
            value={country2}
            customValueText={countryPrefix2}
            placeholder="Country prefix"
            options={[
              { label: "Algeria +213", value: "dz" },
              { label: "Bolivia +591", value: "bo" },
              { label: "Croatia +385", value: "hr" },
              { label: "Indonesia +62", value: "id" },
              { label: "Mexico +52", value: "mx" },
            ]}
            onChange={event => setCountry2(event.currentTarget.value)}
            prefix={<CountryFlag code={country2 || "anywhere"} />}
          />
          <InputField placeholder="123456789" type="number" inputMode="tel" />
        </InputGroup>
      </Stack>
    );
  },
  info: {
    title: "Sizes",
    description:
      "Input groups can be either normal sized or small. Set the size for the group and not for its children.",
  },
};
