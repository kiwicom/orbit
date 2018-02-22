import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "../src/Select";

const numberOptions =[ 1, 2, 3, 4, 5];
const stringOptions =['one', 'two', 'three'];
const objectOptions =[
  { value: 1, label: 'Uno'},
  { value: 2, label: 'Dos'},
  { value: 3, label: 'Tres'},
  { value: 4, label: 'Cuatro'},
];

const hiddenObjectOptions =[
  { value: 'one', label: 'Uno'},
  { value: 'two', label: 'Dos'},
  { value: 'three', label: 'Tres'},
  { value: 'four', label: 'Cuatro'},
  { value: 'hidden four', label: 'Hidden Cuatro'},
];

storiesOf("Select", module)
  .add("default", () => <Select 
                          value="" 
                          options={objectOptions}
                          onChange={action("onChange")} />)
  .add("default with placeholder", () => {
    const placeholder = 'MyPlaceholder';
    return(
      <Select 
        value="" 
        placeholder={placeholder}
        options={objectOptions}
        onChange={action("onChange")} />
    );
  })
//  .add("default with placeholder", () => <Select 
//                          value="" 
//                          options={objectOptions}
//                          onChange={action("onChange")} />);
  //.add("label", () => (
  //  <Input label="Text label" value="input value" onChange={action("onChange")} />
  //))
  //.add("error", () => (
  //  <Input
  //    label="Text label"
  //    error="Error message"
  //    value="input value"
  //    onChange={action("onChange")}
  //  />
  //));
