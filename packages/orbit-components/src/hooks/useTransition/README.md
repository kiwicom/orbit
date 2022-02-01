# useTransition

Similar to the CSSTransition component in [React Transition Group](https://reactcommunity.org/react-transition-group/), the `useTransition` hook provides a way to animate adding and removing elements from the DOM.

To implement the `useTranstiion` hook in your component, add the import:

```jsx
import useTransition from "@kiwicom/orbit-components/lib/hooks/useTransition";
```

Then you can use it like this:

```jsx
import { useState } from "react";
import styled, { css } from "styled-components";

const StyledAnimated = styled.div`
  ${({ $enter }) => css`
    transition: opacity 0.5s ease-in-out;
    opacity: ${$state === "enter" ? 1 : 0};
  `};
`;

const Component = (props: Props) => {
  const [show, setShow] = useState(true);
  const transition = useTransition({ show, appear: true });

  return (
    <>
      <button type="button" onClick={() => setShow(prev => !prev)}>
        Toggle
      </button>
      <StyledAnimated ref={transition.ref} $state={transition.state}>
        Hello world!
      </StyledAnimated>
    </>
  );
};
```

## Options

The table below contains all options available to the `useTransition` hook.

| Name   | Type      | Description                                                                                                             |
| :----- | :-------- | :---------------------------------------------------------------------------------------------------------------------- |
| show   | `boolean` | Whether to animate the element in or out of the DOM. The duration is defined by the `transition-duration` CSS property. |
| appear | `boolean` | Whether to show the enter animation right away if `show` is initially set to `true`.                                    |

## Return

The table below contains all properties of the object returned by the `useTransition` hook.

| Name    | Type                                   | Description                                                          |
| :------ | :------------------------------------- | :------------------------------------------------------------------- |
| ref     | `{\| current: HTMLElement \| null \|}` | Ref object that should be passed to the HTML element being animated. |
| mounted | `boolean`                              | Whether the component is mounted.                                    |
| state   | `"enter" \| "leave"`                   | Whether the element is entering or leaving the DOM.                  |
| done    | `boolean`                              | Whether the element is done transitioning.                           |
