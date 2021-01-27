# TooltipPrimitive

To implement TooltipPrimitive component into your project you'll need to add the import:

```jsx
import TooltipPrimitive from "@kiwicom/orbit-components/lib/primitives/TooltipPrimitive";
```

After adding import into your project you can use it simply like:

```jsx
<TooltipPrimitive content="Your content">
  <Airplane />
</TooltipPrimitive>
```

## Props

Table below contains all types of the props available in the TooltipPrimitive component.

| Name                 | Type               | Default | Description                                                                                                                |
| :------------------- | :----------------- | :------ | :------------------------------------------------------------------------------------------------------------------------- |
| **children**         | `React.Node`       |         | The reference element where the TooltipPrimitive will appear.                                                              |
| **content**          | `React.Node`       |         | The content to display in the TooltipPrimitive.                                                                            |
| dataTest             | `string`           |         | Optional prop for testing purposes.                                                                                        |
| enabled              | `boolean`          | `true`  | Enable render of tooltipPrimitive                                                                                          |
| preferredAlign       | [`enum`](#enum)    |         | The preferred align to choose [See Functional specs](#functional-specs)                                                    |
| preferredPosition    | [`enum`](#enum)    |         | The preferred position to choose [See Functional specs](#functional-specs)                                                 |
| removeUnderlinedText | `boolean`          |         | Removes underline on child component, when underline is not desired.                                                       |
| size                 | [`enum`](#enum)    |         | The maximum possible size of the TooltipPrimitive.                                                                         |
| stopPropagation      | `boolean`          |         | If `true` the click event on children won't bubble. Useful when you use TooltipPrimitive inside another clickable element. |
| tabIndex             | `string \| number` | `"0"`   | Specifies the tab order of an element                                                                                      |

## enum

| preferredPosition | preferredAlign | size       |
| :---------------- | :------------- | :--------- |
| `"right"`         | `"center"`     | `"small"`  |
| `"left"`          | `"start"`      | `"medium"` |
| `"top"`           | `"end"`        |
| `"bottom"`        |

## Functional specs

- Whenever event `onMouseEnter`, `onFocus` or `onClick` fires, the script inside this component will calculate possible positions that can be applied and the first possible will be applied.

- You can prefer one position and one align that will be used if possible, otherwise the default order in [`enum`](#enum) table will be used for both position and align.

- For mobile devices, the user needs to click on the children to open the TooltipPrimitive.

- The TooltipPrimitive component supports rendering of many different components inside its children. You can use combination of e.g. Text, Stack, List and custom image to show information to user about the CVV code. All rendered text inside the automatically:

```jsx
<TooltipPrimitive
  content={
    <Stack>
      <CustomImage />
      <Text>You can find the CVV in the right corner of your credit card.</Text>
      <List>
        <ListItem>Additional information</ListItem>
      </List>
    </Stack>
  }
>
  <InformationCircle />
</TooltipPrimitive>
```

- If you use Tooltip inside Alert, the Text should be automatically underlined with dotted line colored into the color of Alert.

- For ensuring that Tooltip component will work properly, add `div` with `id` set to `tooltips`. If not, the Tooltip will be rendered into the end of your DOM.
