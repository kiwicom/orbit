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

| Name            | Type                                  | Default         | Description                     |
| :-------------- | :------------------------------------ | :-------------- | :------------------------------ |
| dataTest        | `string`                              |                 | Optional prop for testing purposes.
| min             | `number`                              | `1`             | The minimum value of the Slider.
| max             | `number`                              | `100`           | The maximum value of the Slider.
| step            | `number`                              | `1`             | Value that should be added or subtracted when Handle moves. The `max` and `min` should be divisible by this number.
| defaultValue    | `[Value](#value)`                     | `1`             | Initial value of the Slider when it mounts. See [functional specs](#functional-specs) for advanced usage.
| onChange        | `[Value](#value) => void \| Promise`  |                 | Callback for handling onChange event. See [functional specs](#functional-specs) for advanced usage.
| onBeforeChange  | `[Value](#value) => void \| Promise`  |                 | Callback for handling onBeforeChhange event. See [functional specs](#functional-specs) for advanced usage.
| onChangeAfter   | `[Value](#value) => void \| Promise`  |                 | Calback for handling onChangeAfter event. See [functional specs](#functional-specs) for advanced usage.
| **label**       | `Translation`                         |                 | Optional prop for testing purposes.
| description     | `Translation`                         |                 | Optional prop for testing purposes.
| histogramData   | `[Histogram](#histogram)`             |                 | Optional prop for testing purposes.
| leftDescription | `Translation`                         |                 | Optional prop for testing purposes.

## Functional specs
* Histogram appears on desktop devices only when the slider is focused.
