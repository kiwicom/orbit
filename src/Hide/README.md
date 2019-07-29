# Hide
To implement Hide component into your project you'll need to add the import:
```jsx
import Hide from "@kiwicom/orbit-components/lib/Hide";

// and Button for example
import Button from "@kiwicom/orbit-components/lib/Button";
```
After adding import into your project you can use it simply like:
```jsx
<Hide on={["smallMobile"]}>
  <Button>
    Hello World!
  </Button>
</Hide>
```
## Props
Table below contains all types of the props available in the Hide component.

| Name          | Type              | Description                     |
| :------------ | :---------------- |:------------------------------- |
| **children**  | `React.Node`      | The children to hide. 
| **on**        | [`enum[]`](#enum) | Array of devices - viewports to hide the children on.
| **block**     | `boolean`         | If `true`, the Hide component will be `display: block` when visible.
  
### enum
| on                | Applies from to width |
| :---------------- | :-------------------- |
| `"largeDesktop"`  | `1200px - ∞`          |
| `"desktop"`       | `992px - 1199px`      |
| `"tablet"`        | `768px - 991px`       |
| `"largeMobile"`   | `576px - 767px`       |
| `"mediumMobile"`  | `414px - 575px`       |
| `"smallMobile"`   | `0px - 413px`         |

## Functional specs
In case `Separator` is used inside `Hide`, `block` property has to be set to `true` to display.
