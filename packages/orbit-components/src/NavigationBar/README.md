# NavigationBar

To implement NavigationBar component into your project you'll need to add the import:

```jsx
import NavigationBar from "@kiwicom/orbit-components/lib/NavigationBar";
import LinkList from "@kiwicom/orbit-components/lib/LinkList";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
```

After adding import into your project you can use it simply like:

```jsx
<NavigationBar onMenuOpen={handleDrawerOpen}>
  <LinkList direction="row">
    <TextLink> Link 1 </TextLink>
    <TextLink> Link 2 </TextLink>
    <TextLink> Link 3 </TextLink>
  </LinkList>
</NavigationBar>
```

## Props

Table below contains all types of the props available in the NavigationBar component.

| Name               | Type                    | Default                  | Description                                                                                                 |
| :----------------- | :---------------------- | :----------------------- | :---------------------------------------------------------------------------------------------------------- |
| **children**       | `React.Node`            |                          | The content of the NavigationBar.                                                                           |
| dataTest           | `string`                |                          | Optional prop for testing purposes.                                                                         |
| id                 | `string`                |                          | Set `id` for `NavigationBar`.                                                                               |
| onMenuOpen         | `() => void \| Promise` |                          | Function for handling onClick event on HamburgerMenu icon. If `null`, the HamburgerMenu won't appear.       |
| onHide             | `() => void \| Promise` |                          | Function for handling event when the NavigationBar disappears.                                              |
| onShow             | `() => void \| Promise` |                          | Function for handling event when the NavigationBar appears.                                                 |
| hideOnScroll       | `boolean`               | `true`                   | Turn on or off hiding navigation bar on scroll                                                              |
| openTitle          | `string`                | `"Open navigation menu"` | Property for passing translation string to open Button.                                                     |
| bottomStyle        | `"shadow" \| "border"`  | `"shadow"`               | Property for setting bottom style of NavigationBar.                                                         |
| ariaLabel          | `string`                | `"navigation"`           | Optional prop for `aria-label` value (accessibility).                                                       |
| transparentBgAtTop | `boolean`               | `false`                  | Property for setting the background to be transparent when the NavigationBar is at the top of the viewport. |

## Accessibility

- The `ariaLabel` prop allows you to specify an `aria-label` attribute for the component. This attribute provides additional information to screen readers, enhancing the accessibility of the component. By using `ariaLabel`, you can ensure that users who rely on assistive technologies receive the necessary context and information about the component's purpose and functionality.
