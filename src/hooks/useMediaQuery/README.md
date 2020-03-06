# useMediaQuery

The `useMediaQuery` hook lets you use media queries in your functional component and differentiate its render for different viewports.

To implement the useMediaQuery hook into your project, add the import:

```jsx
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";
```

Then you can use it in your functional component:

```jsx
const Component = () => {
  const { isDesktop } = useMediaQuery();
  return <div>{isDesktop ? "We are on desktop" : "We are on mobile or tablet"}</div>;
};
```

Because Orbit aims to be mobile-first, you should consider your base return without conditional rendering to be the mobile one. Therefore, the `useMediaQuery` hook returns only an object of booleans according to the possible breakpoints you might know from normal CSS media queries or dynamic media properties on components.

## Return

The `useMediaQuery` hook returns an object with boolean values depending on which viewport the user is currently on.

| Name           | Type      | Description                                        |
| :------------- | :-------- | :------------------------------------------------- |
| isMediumMobile | `boolean` | `true` if viewport equals or is more than `414px`  |
| isLargeMobile  | `boolean` | `true` if viewport equals or is more than `576px`  |
| isTablet       | `boolean` | `true` if viewport equals or is more than `768px`  |
| isDesktop      | `boolean` | `true` if viewport equals or is more than `992px`  |
| isLargeDesktop | `boolean` | `true` if viewport equals or is more than `1200px` |
