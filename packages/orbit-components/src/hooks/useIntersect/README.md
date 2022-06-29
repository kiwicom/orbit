# useIntersect

Note: This hook uses `Intersection Observer API` and it's not supported in [IE 10 and 11](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

To implement the `useIntersect` hook in your component, add the import:

```jsx
import useIntersect from "@kiwicom/orbit-components/lib/hooks/useIntersect";
```

Then you can use it:

```jsx
const LazyLoaded = ({ alt, src, placeholder, ...props }: Props) => {
  const [source, setSource] = React.useState(placeholder);
  const [loaded, setLoaded] = React.useState(false);

  const { ref, entry, observer } = useIntersect({
    threshold: 0.01,
    rootMargin: "150px",
  });

  React.useEffect(() => {
    if (entry?.isIntersecting) {
      setSource(src);
      setLoaded(true);
    }
  }, [src, entry]);

  return <StyledImage alt={alt} blur={!loaded} src={source} ref={ref} {...props} />;
};
```

## Props

The table below contains all parameters available to the `useIntersect` hook.

| Name    | Type                  | Description                  |
| :------ | :-------------------- | :--------------------------- |
| Options | [`Options`](#Options) | IntersectionObserver options |

### Options

| key          | type                  |
| :----------- | :-------------------- |
| `root`       | `null \| HTMLElement` |
| `threshold`  | `number`              |
| `rootMargin` | `string`              |

### Examples of usage

- Lazy-loading of images or other content as a page is scrolled.
- Implementing "infinite scrolling" web sites, where more and more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.
- Reporting of visibility of advertisements in order to calculate ad revenues.
- Deciding whether or not to perform tasks or animation processes based on whether or not the user will see the result.
