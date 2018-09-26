# ClickOutside
To implement ClickOutside component into your project you'll need to add the import:
```jsx
import ClickOutside from "@kiwicom/orbit-components/lib/ClickOutside";
```
After adding import into your project you can use it simply like:
```jsx
<ClickOutside onClickOutside={...} >
  <div>
    Content
  </div>
</ClickOutside>
```
## Props
Table below contains all types of the props available in the ClickOutside component.

| Name            | Type                                        | Default         | Description                      |
| :-------------- | :------------------------------------------ | :-------------- | :------------------------------- |
| children        | `React.Node`                                |                 | The content of the ClickOutside to render.
| dataTest        | `string`                                    |                 | Optional prop for testing purposes.
| onClickOutside  | `(ev: MouseEvent) => void \| Promise<any>`  |                 | Function for handling onClickOutside event.
