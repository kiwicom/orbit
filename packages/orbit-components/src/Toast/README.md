# Toast

To implement Toast component into your project you'll need to add the import:

```jsx
import ToastInit, { createToast } from "@kiwicom/orbit-components/lib/Toast";
```

It's better to use ToastInit at the root of your application once and you can use `createToast` from anywhere after

```jsx
import Notification from "@kiwicom/orbit-components/lib/icons/Notification";

const notify = () => createToast("Here is your toast", { icon: <Notification /> });

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <ToastInit />
    </div>
  );
};
```

You can also use `createPromiseToast` function, notification will be updated automatically, when promise will be resolved or rejected

```jsx
const notify = () =>
  createPromiseToast(promise, {
    icon: <Notification />,
    loading: "...Loading",
    success: "Got the data",
    error: "Error when fetching",
  });
```

## Props

Table below contains all types of the props available for `ToastInit` component

| Name           | Type                      | Default | Description                           |
| :------------- | :------------------------ | :------ | :------------------------------------ |
| dataTest       | `string`                  |         | optional prop for testing purposes.   |
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
