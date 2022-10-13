# OrbitProvider

orbit-components has theming support via our own `<OrbitProvider>` which adds you possibilities to add your own theme and dictionary.

```jsx
import OrbitProvider from "@kiwicom/orbit-components/lib/OrbitProvider";
```

After adding import please wrap your application into `OrbitProvider` and you can provide your own [`theme`](https://github.com/kiwicom/orbit/blob/master/.github/theming.md) and [`dictionary`](https://github.com/kiwicom/orbit/blob/master/docs/src/documentation/05-development/01-guides/02-dictionary.mdx)

```jsx
<OrbitProvider theme={ownTheme} dictionary={ownDictionary}>
  <App />
</OrbitProvider>
```

## Props

Table below contains all types of the props available in the OrbitProvider component.

| Name         | Type         | Default | Description                                                                                                                         |
| :----------- | :----------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| **children** | `React.Node` |         | Your app                                                                                                                            |
| theme        | `[Object]`   |         | See [`theming`](https://github.com/kiwicom/orbit/blob/master/.github/theming.md)                                                    |
| dictionary   | `[Object]`   |         | See [`dictionary`](https://github.com/kiwicom/orbit/blob/master/docs/src/documentation/05-development/01-guides/02-dictionary.mdxd) |
