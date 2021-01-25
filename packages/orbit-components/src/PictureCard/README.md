# PictureCard

To implement PictureCard component into your project you'll need to add the import:

```jsx
import PictureCard from "@kiwicom/orbit-components/lib/PictureCard";
```

After adding import into your project you can use it simply like:

```jsx
<PictureCard
  image={{
    original: "385x320",
    code: "dubai_ae",
    name: "Dubai Arab Emirates",
    placeholder: "385x320",
  }}
  subTitle="Prague"
  title="Dubai"
/>
```

## Props

Table below contains all types of the props available in PictureCard component.

| Name      | Type                                            | Default | Description                                                       |
| :-------- | :---------------------------------------------- | :------ | :---------------------------------------------------------------- |
| dataTest  | `string`                                        |         | Optional prop for testing purposes.                               |
| title     | `string`                                        |         | The title of PictureCard                                          |
| subTitle  | `string`                                        |         | The subTitle of PictureCard                                       |
| label     | `string`                                        |         | The label of PictureCard                                          |
| children  | `React.Node`                                    |         | The content of PictureCard                                        |
| actions   | `React.Node`                                    |         | Actions - especially Buttons that will be rendered on the bottom. |
| height    | `string`                                        | `"300"` | The height of PictureCard.                                        |
| width     | `string`                                        |         | The width of PictureCard.                                         |
| href      | `string`                                        |         | The link of PictureCard.                                          |
| external  | `boolean`                                       | `false` | If `true`, PictureCard opens link in a new tab                    |
| **image** | [`Image`](#Image) [`ImageCustom`](#ImageCustom) |         | Image of PictureCard [See Functional specs](#functional-specs)    |
| onClick   | `onClick`                                       |         | Function for handling onClick event.                              |
| tabIndex  | `string \| number`                              | `"0"`   | Specifies the tab order of an element                             |

### Image

Table below contains all types of the props available for object in Image

| Name        | Type     | Description                                                              |
| :---------- | :------- | :----------------------------------------------------------------------- |
| original    | `string` | The size of image                                                        |
| name        | `string` | The name of image, defines alt prop for image                            |
| **code**    | `string` | The code of image, defines which image will be rendered.                 |
| placeholder | `string` | The preferred placeholder size [See Functional specs](#functional-specs) |

### ImageCustom

Table below contains all types of the props available for object in Image

| Name | Type     | Description                                                         |
| :--- | :------- | :------------------------------------------------------------------ |
| name | `string` | The name of image, defines alt prop for image                       |
| src  | `string` | The location of an image if you want it to be from your own source. |

## Functional specs

- You don't have to pass entire src of the image. Just `dubai_ae`, `paris_fr` etc. is enough.

- `OnClick` is also called on `Enter` and `Space` keypresses.

- For usage with server-side rendering (SSR), a placeholder can be emitted for it to work correctly. This is a React issue see more on this https://github.com/facebook/react/issues/15446 and https://github.com/zeit/next.js/issues/7047.
  Lastly if you are using Next.js you can do this workaround with dynamic import set to SSR false. https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr

```
const PictureCard = dynamic({
  loader: () => import('PictureCard'),
  loading: () => <Placeholder />,
  ssr: false,
});
```
