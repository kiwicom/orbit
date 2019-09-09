# NavigationGroup
To implement NavigationGroup component into your project you'll need to add the import:
```jsx
import NavigationGroup from "@kiwicom/orbit-components/lib/NavigationGroup";
```
After adding import into your project you can use it simply like:
```jsx
<NavigationGroup>
  <NavigationLink>About us</NavigationLink>
  <NavigationLink>Careers</NavigationLink>
</NavigationGroup>
```
## Props
Table below contains all types of the props available in the NavigationGroup component.

| Name          | Type                              | Default         | Description                      |
| :------------ | :-------------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                      |                 | The content of the NavigationGroup.
| dataTest      | `string`                          |                 | Optional prop for testing purposes.
| title         | `Translation`                     |                 | Additional title of the NavigationGroup that will appear above its children.
