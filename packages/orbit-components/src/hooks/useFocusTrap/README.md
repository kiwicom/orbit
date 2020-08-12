# useFocusTrap

To implement the `useFocusTrap` hook in your component, add the import:

```jsx
import useFocusTrap from "@kiwicom/orbit-components/lib/hooks/useFocusTrap";
```

Then you can use it:

```jsx
const Component = (props: Props) => {
  const ref = React.useRef(null);
  useFocusTrap(ref);

  return <OtherComponent ref={ref}>...etc</OtherComponent>;
};
```

## Props

The table below contains all parameters available to the `useFocusTrap` hook.

| Name | Type   | Description         |
| :--- | :----- | :------------------ |
| ref  | `func` | Component reference |
