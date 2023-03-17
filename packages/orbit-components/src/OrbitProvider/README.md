# OrbitProvider

orbit-components has theming support via our own `<OrbitProvider>` which adds you the possibility to add your own theme.

```jsx
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
```

After adding import please wrap your application into `OrbitProvider` and you can provide your own [`theme`](https://github.com/kiwicom/orbit/blob/master/.github/theming.md).

```jsx
<OrbitProvider theme={ownTheme}>
  <App />
</OrbitProvider>
```

## Props

Table below contains all types of the props available in the OrbitProvider component.

| Name         | Type         | Default | Description                                                                      |
| :----------- | :----------- | :------ | :------------------------------------------------------------------------------- |
| **children** | `React.Node` |         | Your app                                                                         |
| theme        | `[Object]`   |         | See [`theming`](https://github.com/kiwicom/orbit/blob/master/.github/theming.md) |
