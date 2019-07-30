# Slider
To implement Slider component into your project you'll need to add the import:
```jsx
import Slider from "@kiwicom/orbit-components/lib/Slider";
```

After adding import into your project you can use it simply like:
```jsx
<Slider defaultValue={5} onChange={(value) => doSomething(value)} />
```

## Props
Table below contains all types of the props available in the Slider component.

| Name                  | Type                                  | Default         | Description                     |
| :-------------------- | :------------------------------------ | :-------------- | :------------------------------ |
| ariaLabel             | `string or string[]`                  |                 | `aria-label` attribute or attributes for handles. See [functional specs](#functional-specs).
| ariaValueText         | `string`                              |                 | Readable text alternative of current value. See [accessibility](#accessibility).
| dataTest              | `string`                              |                 | Optional prop for testing purposes.
| defaultValue          | [`Value`](#value)                     | `1`             | Initial value of the Slider when it mounts. See [value type](#value) for advanced usage.
| histogramData         | `number[]`                            |                 | Property for passing the histogram's data. See [Histogram](#histogram) for more info.
| histogramDescription  | `Translation`                         |                 | Text property where you should display the total count of displayed data. See [Histogram](#histogram) for more info.
| histogramLoading      | `boolean`                             | `false`         | If `true` the Loading component will replace the Histogram. See [Histogram](#histogram) for more info.
| histogramLoadingText  | `Translation`                         |                 | The text of the Histogram when it's loading. See [Histogram](#histogram) for more info.
| label                 | `Translation`                         |                 | The label of the Slider. Should communicate what is the purpose of it.
| max                   | `number`                              | `100`           | The maximum value of the Slider.
| min                   | `number`                              | `1`             | The minimum value of the Slider.
| onChange              | `Value => void \| Promise`            |                 | Callback for handling onChange event. See [functional specs](#functional-specs) for advanced usage.
| onChangeAfter         | `Value => void \| Promise`            |                 | Calback for handling onChangeAfter event. See [functional specs](#functional-specs) for advanced usage.
| onChangeBefore        | `Value => void \| Promise`            |                 | Callback for handling onChangeBefore event. See [functional specs](#functional-specs) for advanced usage.
| step                  | `number`                              | `1`             | Value that should be added or subtracted when Handle moves. The `max` and `min` should be divisible by this number and it should be integer.
| valueDescription      | `Translation`                         |                 | Text property where you should display the selected value range.

## Value
The `Slider` component supports usage with one handle and also with multiple handles.

If you want to use `Slider` with range possibility, just simply pass array of numbers to the `defaultValue` property, for instance `[1, 12]`.
The exact same type will be then returned with all callbacks. e.g.:
```jsx
<Slider
  defaultValue={[1, 12]}
  onChange={value => {
    console.log(value); // [X, Y]
  }}
/>
```

## Histogram
* If you need to use `Slider` component together with `Histogram`, use property `histogramData` for that.
* You need pass the same amount of data that is possible to select by definition of `min`, `max` and `step` property. The total count of columns should be `(max - min + step) / step`.
* The Histogram won't be visible on desktop devices until the user focuses one of the handles. On mobile devices is the Histogram always shown.
* By default, the `histogramLoadingText` is null and only glyph of `inlineLoader` will appear.
* With Histogram, it's recommended to use also `histogramDescription` property, where you should display the total count of selected data from the array. For it, you can use the [`calculateCountOf`](#calculatecountof) function.

## Functional specs
* When you use range type of the `Slider` component, you should specify `ariaLabel` property as array of labels. For instance: `["First handle", "Second handle]`. If you use simple `Slider`, just one string (not array) is enough.
* In every case of using the `Slider` component on **mobile devices**, the `Slider` should be wrapped in the [`Popover`](../Popover). For instance like this:
```jsx
const MobileSlider = () => {
  const [value, setValue] = React.useState([1, 24]);
  return (
    <Popover
      content={
        <Slider defaultValue={[1, 24]} min={1} max={24} onChange={val => setValue(val)} />
      }
    >
      <Tag selected={!!value}>Time of departure</Tag>
    </Popover>
  )
}
```

## Accessibility
* You should use `ariaValueText` only for cases when the value cannot be accurately represented as a number. For instance, when you use the Slider for selection of time range, you should dynamically change the `ariaValueText` to current selection e.g. `00:00 to 13:00` every time when `onChange` triggers.
```jsx
const SliderExample = () => {
  const [value, setValue] = React.useState(12);
  const ariaValueText = React.useMemo(() => `from midnight to ${value}`, [value]);
  return <Slider defaultValue={12} min={1} max={24} onChange={val => setValue(val)} ariaValueText={ariaValueText} />
}
```

## calculateCountOf
Function `calculateCountOf` will help you to count the total number of selected data and total number of all columns. You can then use these returned values for displaying the `histogramDescription` property to the user, properly.

For using it, you can use this reference:
```jsx
import calculateCountOf from "@kiwicom/orbit-components/lib/Slider/utils/calculateCountOf"

const histogramData = [0, 10, 14, 40, 0, 11];
const value = [1, 3]; // can be just number also
const minValue = 1;
const [selectedCount, totalCount] = calculateCountOf(histogramData, value, minValue);

console.log(`Showing ${selectedCount} of ${totalCount}`); // Showing 24 of 75 flights
```
