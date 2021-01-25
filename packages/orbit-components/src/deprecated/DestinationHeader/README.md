# DestinationHeader

To implement DestinationHeader component into your project you'll need to add the import:

```jsx
import DestinationHeader from "@kiwicom/orbit-components/lib/DestinationHeader";
```

After adding import into your project you can use it simply like:

```jsx
<DestinationHeader image="dubai_ae" destinationCity="Dubai" />
```

## Props

Table below contains all types of the props available in DestinationHeader component.

| Name            | Type                    | Default | Description                                                                  |
| :-------------- | :---------------------- | :------ | :--------------------------------------------------------------------------- |
| dataTest        | `string`                |         | Optional prop for testing purposes.                                          |
| destinationCity | `Translation`           |         | The name of the destination.                                                 |
| image           | `string`                |         | The image name of the destination. [See Functional specs](#functional-specs) |
| onGoBack        | `() => void \| Promise` |         | Function for handling onGoBack event.                                        |

## Functional specs

- You don't have to pass entire src of the image. Just `dubai_ae`, `paris_fr` etc. is enough.
