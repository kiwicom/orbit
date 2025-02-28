# Toast

The Toast component consists of `ToastRoot` and `createToast`/`createToastPromise`:

```jsx
import { ToastRoot, createToast } from "@kiwicom/orbit-components/lib/Toast";
```

It's better to use ToastRoot once at the root of your application with your other context providers and you can use `createToast` from anywhere after. The `createToast` function accepts two arguments. The first is required and is the message to be displayed on the toast. The second is an object. This object contains the `icon` key that receives the icon to be rendered on the toast as well as the `ariaProps` key that receives another object, with the `role` and `aria-live` keys and corresponding attributes as values.

```jsx
import React from "react";
import { ToastRoot, createToast } from "@kiwicom/orbit-components/lib/Toast";
import Notification from "@kiwicom/orbit-components/lib/icons/Notification";

const notify = () =>
  createToast("Here is your toast", {
    icon: <Notification />,
    ariaProps: {
      role: "alert",
      "aria-live": "assertive",
    },
  });
const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <ToastRoot />
    </div>
  );
};
```

You can also use the `createToastPromise` function. The notification toast will be updated automatically, when the promise is resolved or rejected. The function receives two mandatory arguments and one optional. The first is the promise, the second is the message on the different statuses and the third one controls the icon displayed on each status (or all).

```jsx
const notify = () =>
  createPromiseToast(
    promise,
    {
      loading: "...Loading",
      success: "Got the data",
      error: "Error when fetching",
    },
    {
      success: {
        icon: <Notification />,
      },
    },
  );
```

## Props

Table below contains all types of the props available for `ToastRoot` component

| Name           | Type                      | Default | Description                           |
| :------------- | :------------------------ | :------ | :------------------------------------ |
| dataTest       | `string`                  |         | optional prop for testing purposes.   |
| id             | `string`                  |         | Set `id` for `Toast` wrapper          |
| topOffset      | `number`                  | `8`     | top offset for toast container        |
| leftOffset     | `number`                  | `8`     | left offset for toast container       |
| rightOffset    | `number`                  | `8`     | right offset for toast container      |
| bottomOffset   | `number`                  | `8`     | bottom offset for toast container     |
| gutter         | `number`                  | `8`     | distance between toast notifications  |
| dismissTimeout | `number`                  | `5000`  | timeout until toast will be dismissed |
| placement      | [`Placement`](#Placement) |         | position for toast container          |

### Placement

| Placement       |
| :-------------- |
| "top-left"      |
| "top-center"    |
| "top-right"     |
| "bottom-left"   |
| "bottom-center" |
| "bottom-right"  |
