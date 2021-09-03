import React from "react";

import { InputField, TextLink } from "../../..";

export default function ErrorForms() {
  return (
    <InputField
      size="normal"
      type="text"
      name="name"
      label="Label"
      value="value"
      placeholder="placeholder"
      dataTest="test"
      readOnly
      autoComplete="off"
      spaceAfter="normal"
      error={
        <div data-test="error">
          <TextLink>Some error message</TextLink>?
        </div>
      }
    />
  );
}
