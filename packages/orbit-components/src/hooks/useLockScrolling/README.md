# useLockScrolling

The `useLockScrolling` hook is useful when you want to lock scrolling to a given element, for example when a modal is open you want only its content to be scrollable, not the entire page.

To implement the `useLockScrolling` hook in your component, add the import:

```jsx
import useLockScrolling from "@kiwicom/orbit-components/lib/hooks/useLockScrolling";
```

Then you can use it:

```jsx
const Component = (props: Props) => {
  const scrollableElementRef = (useRef < HTMLELement) | (null > null);

  // locks the scrolling only to ScrollableContainer
  useLockScrolling(scollableElementRef);

  return <ScrollableContainer ref={scrollableElementRef}>Hello world!</ScrollableContainer>;
};
```

## Props

The table below contains all parameters available to the `useLockScrolling` hook.

| Name | Type                          | Default | Description                                                                                                |
| :--- | :---------------------------- | ------- | :--------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| ref  | `React.ElementRef<HTMLELement | null>`  |                                                                                                            | Reference object of the scrollable container. |
| lock | `boolean`                     | `true`  | Whether to lock scrolling or not. This is useful for example if locking scrolling depends on a breakpoint. |
