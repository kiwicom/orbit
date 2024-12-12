# OrbitProvider

orbit-components has theming support via our own `<OrbitProvider>` which adds you the possibility to add your own theme.

```jsx
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
```

After adding import please wrap your application into `OrbitProvider` and you can provide your own [`theme`](https://github.com/kiwicom/orbit/blob/master/.github/theming.md).

```jsx
<OrbitProvider useId={React.useId} theme={ownTheme} colorScheme="system">
  <App />
</OrbitProvider>
```

## Props

Table below contains all types of the props available in the OrbitProvider component.

| Name         | Type                            | Default   | Description                                                                                                                           |
| :----------- | :------------------------------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **children** | `React.Node`                    |           | Your app                                                                                                                              |
| theme        | `[Object]`                      |           | See [`theming`](https://github.com/kiwicom/orbit/blob/master/.github/theming.md)                                                      |
| useId        | `[Object]`                      |           | If using React 18 or above, use `React.useId`. If not, use `useRandomId` from [`react-uid`](https://www.npmjs.com/package/react-uid). |
| colorScheme  | `"light" \| "dark" \| "system"` | `"light"` | Controls the color scheme of the application. Use "system" to follow the user's system preferences.                                   |
