# ThemeProvider
orbit-components has theming support via our own `<ThemeProvider>` which adds you possibilities to add your own theme and dictionary.
```jsx
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";
```
After adding import please wrap your application into `ThemeProvider` and you can provide your own [`theme`](https://github.com/kiwicom/orbit-components/blob/master/.github/theming.md) and [`dictionary`](https://github.com/kiwicom/orbit-components/blob/master/.github/dictionary.md)

```jsx
<ThemeProvider theme={...} dictionary={...}>
  <App />
</ThemeProvider>
```
## Props
Table below contains all types of the props available in the ThemeProvider component.

| Name          | Type                      | Default         | Description                      |
| :------------ | :------------------------ | :-------------- | :------------------------------- |
| **children**  | `React.Node`              |                 | Your app
| theme         | `[Object]`                |                 | See [`theming`](https://github.com/kiwicom/orbit-components/blob/master/.github/theming.md)
| dictionary    | `[Object]`                |                 | See [`dictionary`](https://github.com/kiwicom/orbit-components/blob/master/.github/dictionary.md)
