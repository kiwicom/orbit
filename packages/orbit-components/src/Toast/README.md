# Toast

Toast shows a brief message that’s clear & understandable.
It’s shown temporarily, which means that it shouldn’t be used for error messages that block the user in continuing the flow.
Toast component is used for feedback from the app to the users for informing or warning them about different states.
Toast should only be used if there are no other ways of providing the feedback.

```jsx
import { Toast } from "@kiwicom/orbit-components";
```

After adding import into your project you can use it simply like:

```jsx
<Toast iconLeft={<CheckCircle customColor="white" size="small" />}>
  <Text>Some text</Text>
</Toast>
```

## Props

| Name       | Type                                                                              | Required           | Default | Description                                                                                                                                                    |
| ---------- | --------------------------------------------------------------------------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children   | `React.ReactNode`                                                                 | :heavy_check_mark: |         | Content of Toast component                                                                                                                                     |
| iconLeft   | `React.ReactNode`                                                                 |                    |         | Optional prop to add icon on the left side of Toast                                                                                                            |
| animate    | `boolean`                                                                         |                    |         | Optional prop to turn off / on animation                                                                                                                       |
| offsetX    | `string`                                                                          |                    |         | Optional prop to change horizontal position of Toast                                                                                                           |
| offsetY    | `string`                                                                          |                    |         | Optional prop to change vertical position of Toast                                                                                                             |
| dataTest   | `string`                                                                          |                    |         | Optional prop for testing purposes                                                                                                                             |
| spaceAfter | `"none" \| "smallest" \| "small" \| "normal" \| "medium" \| "large" \| "largest"` |                    |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |
