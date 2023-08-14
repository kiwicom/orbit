# useClickOutside

The `useClickOutside` executes a certain action whenever there is a click outside of a given component.

To implement the `useClickOutside` hook in your component, add the import:

```jsx
import useClickOutside from "@kiwicom/orbit-components/lib/hooks/useClickOutside";
```

Then you can use it in your functional component:

```tsx
const App = () => {
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const handleClickOutside = ev => console.log(`The following event was detected: ${ev}`);

  useClickOutside(elementRef, handleClickOutside);

  return (
    <div ref={elementRef}>
      <span>Any click outside the parent div will trigger a log of the event.</span>
    </div>
  );
};
```
