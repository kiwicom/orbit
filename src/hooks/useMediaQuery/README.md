# useMediaQuery

useMediaQuery hook makes it super easy to use media queries in your functional component and differentiate it's render for different viewports.

To implement useMediaQuery hook into your project you'll need to add the import:

```jsx
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
```

After adding import, you can use it simply in your functional component:

```jsx
const Component = () => {
  const { isDesktop } = useMediaQuery();
  return <div>{isDesktop ? "We are on desktop" : "We are on mobile or tablet"}</div>;
};
```

Because Orbit aims to be mobile-first, you should consider your base return without conditional rendering as the mobile one. Therefore, `useMediaQuery` hook returns only object of booleans according to possible breakpoints you might know from normal CSS media queries or dynamic media properties on components.

## Return

useMediaQuery hook returns object of boolean values depending of which viewport is user currently on.

| Name           | Type      | Description                                        |
| :------------- | :-------- | :------------------------------------------------- |
| isMediumMobile | `boolean` | `true` if viewport equals or is more than `414px`  |
| isLargeMobile  | `boolean` | `true` if viewport equals or is more than `576px`  |
| isTablet       | `boolean` | `true` if viewport equals or is more than `768px`  |
| isDesktop      | `boolean` | `true` if viewport equals or is more than `992px`  |
| isLargeDesktop | `boolean` | `true` if viewport equals or is more than `1200px` |
