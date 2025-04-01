# Dialog

To implement Dialog component into your project you'll need to add the import:

```jsx
import Dialog from "@kiwicom/orbit-components/lib/Dialog";
```

After adding import into your project you can use it simply like:

```jsx
<Dialog
  title="Are you sure you want to log out now?"
  primaryAction={<Button type="critical">Log out</Button>}
/>
```

## Props

Table below contains all types of the props available in Dialog component.

| Name              | Type                                                    | Default | Description                                                                                                                           |
| :---------------- | :------------------------------------------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| dataTest          | `string`                                                |         | Optional prop for testing purposes.                                                                                                   |
| id                | `string`                                                |         | Set `id` for `Dialog`                                                                                                                 |
| renderInPortal    | `boolean`                                               |         | Optional prop, set it to `false` if you're rendering Dialog inside a custom portal, defaults to `true`                                |
| description       | `React.Node`                                            |         | Optional description of the main action that Dialog performs.                                                                         |
| illustration      | `React.Node`                                            |         | Optional illustration of the Dialog.                                                                                                  |
| **primaryAction** | `React.Node`                                            |         | Primary and required action that user can do with the Dialog.                                                                         |
| secondaryAction   | `React.Node`                                            |         | Optional, secondary action that user can perform - possibility to close the Dialog most of the time.                                  |
| lockScrolling     | `boolean`                                               | `true`  | Whether to prevent scrolling of the rest of the page while Dialog is open. This is on by default to provide a better user experience. |
| onClose           | `() => void \| Promise`                                 |         | Callback that is triggered when the dialog is closed.                                                                                 |
| **title**         | `React.Node`                                            |         | The title of the Dialog - preferably the purpose of the main action.                                                                  |
| titleAs           | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "div"` |         | The HTML tag of the title. It **does not** change the visual style of the title. If undefined, it will render as a `div`.             |
| maxWidth          | `number`                                                |         | Set `max-width` for Dialog                                                                                                            |
| triggerRef        | `React.RefObject<HTMLElement>`                          |         | The ref to the element which triggers the Dialog.                                                                                     |
