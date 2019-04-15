# Layout
To implement the Layout component into your project you'll need to add the import:
```jsx
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
```
After adding import into your project you can use it simply like:
```jsx
<Layout type="MMB">
  <LayoutColumn>
    This is the main section.
  </LayoutColumn>
</Layout>
```

## Props
Table below contains all types of the props available in the Layout component.
    
| Name          | Type                        | Default         | Description                      |
| :------------ | :-------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                |                 | The content of the Layout. Use [`LayoutColumn`](#layoutcolumn) as top-wrapper.
| dataTest      | `string`                    |                 | Optional prop for testing purposes.
| **type**      | [`enum`](#layouts)          |                 | The type of the Layout.

### LayoutColumn
