# NavigationBar
To implement NavigationBar component into your project you'll need to add the import:
```jsx
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
```
After adding import into your project you can use it simply like:
```jsx
<NavigationBar onMenuOpen={handleDrawerOpen}>
  <NavigationLink>About us</NavigationLink>
</NavigationLink>
```
## Props
Table below contains all types of the props available in the NavigationBar component.

| Name          | Type                              | Default         | Description                      |
| :------------ | :-------------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                      |                 | The content of the NavigationBar.
| dataTest      | `string`                          |                 | Optional prop for testing purposes.
| onMenuOpen    | `() => void \| Promise`           |                 | Function for handling onClick event on HamburgerMenu icon. If `null`, the HamburgerMenu won't appear.
