# useLockScrolling

The `useLockScrolling` hook is useful when you want to lock scrolling to a given element, for example when a modal is open you want only its content to be scrollable, not the entire page (i.e. the "content in the background").

<Warning>

Locking scrolling is a global functionality – there is only one `<body>` element, so you should use `useLockScrolling` for all your (page) lock scrolling needs. It's keeping track of how many components are using it at the moment to know when to actually unlock scrolling, so if your application is using this hook alongside other implementations of locking scrolling, you might run into bugs where scrolling is not locked when it should be, or much worse, locked when it shouldn't be!

</Warning>

To implement the `useLockScrolling` hook in your component, add the import:

```jsx
import useLockScrolling from "@kiwicom/orbit-components/lib/hooks/useLockScrolling";
```

Then you can use it:

```jsx
const Component = (props: Props) => {
  const scrollableElementRef = (useRef < HTMLElement) | (null > null);

  // locks the scrolling only to ScrollableContainer
  useLockScrolling(scollableElementRef);

  return <ScrollableContainer ref={scrollableElementRef}>Hello world!</ScrollableContainer>;
};
```

## Props

The table below contains all parameters available to the `useLockScrolling` hook.

| Name         | Type                               | Default | Description                                                                                                     |
| :----------- | :--------------------------------- | ------- | :-------------------------------------------------------------------------------------------------------------- |
| ref          | `{ current: HTMLElement \| null }` |         | Reference object of the scrollable container.                                                                   |
| lock         | `boolean`                          | `true`  | Whether to lock scrolling or not. This is useful for example if locking scrolling depends on a breakpoint.      |
| dependencies | `any[]`                            | `[]`    | Dependencies that affect the value of `ref.current`, in case it's not always assigned to the same HTML element. |
