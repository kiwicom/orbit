# useFocusTrap

To implement useFocusTrap hook into your component you'll need to add the import:

```jsx
import useFocusTrap from "@kiwicom/orbit-components/lib/hooks/useFocusTrap";
```

After adding import into your project you can use it simply like:

```jsx
const Component = (props: Props) => {
  const ref = React.useRef(null);
  useFocusTrap(ref);

  return <OtherComponent ref={ref}>...etc</OtherComponent>;
};
```

## Props

Table below contains all types of the parameters available in the useFocusTrap hook.

| Name | Type   | Description           |
| :--- | :----- | :-------------------- |
| ref  | `func` | component's reference |
