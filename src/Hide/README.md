# Hide
To implement Hide component into your project you'll need to add the import:
```jsx
import Hide from "@kiwicom/orbit-components/lib/Hide";

// and Button for example
import Button from "@kiwicom/orbit-components/lib/Button";
```
After adding import into your project you can use it simply like:
```jsx
<Hide on={["smallMobile", "mediumMobile"]}>
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
| **on**        | [`enum`](#enum)   | Array of devices - viewports to hide the children on.
  
### enum
| on                | Applies from to width |
| :---------------- | :-------------------- |
| `"largeDesktop"`  | `1400px - ∞`          |
| `"desktop"`       | `1200px - 1399px`     |
| `"tablet"`        | `992px - 1199px`      |
| `"largeMobile"`   | `600px - 991px`       |
| `"mediumMobile"`  | `414px - 599px`       |
| `"smallMobile"`   | `0px - 413px`         |
