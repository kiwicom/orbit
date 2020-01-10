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
    name: "dubai_ae",
    placeholder: "jpg"
  }}
  subTitle="Prague"
  title="Dubai"
/>
```

## Props

Table below contains all types of the props available in PictureCard component.

| Name      | Type             | Default | Description                                                                               |
| :-------- | :--------------- | :------ | :---------------------------------------------------------------------------------------- |
| dataTest  | `string`         |         | Optional prop for testing purposes.                                                       |
| title     | `string`         |         | The title of PictureCard                                                                  |
| subTitle  | `string`         |         | The subTitle of PictureCard                                                               |
| label     | `string`         |         | The label of PictureCard                                                                  |
| children  | `React.Node`     |         | The content of PictureCard                                                                |
| actions   | `React.Node`     |         | Actions - especially Buttons that will be rendered on the bottom.                         |
| height    | `string`         | `"300"` | The height of PictureCard. [See Functional specs](#functional-specs)                      |
| width     | `string`         |         | The width of PictureCard. [See Functional specs](#functional-specs)                       |
| href      | `string`         |         | The link of PictureCard.                                                                  |
| external  | `boolean`        | `false` | If `true`, PictureCard opens link in a new tab. [See Functional specs](#functional-specs) |
| **image** | `Image`(#image)` |         | Image of PictureCard  [See Functional specs](#functional-specs)                           |
| onClick   | `onClick`        |         | Function for handling onClick event.                                                      |
| tabIndex  | `string`         | `"0"`   | Specifies the tab order of an element                                                     |


### Image

Table below contains all types of the props available for object in Image

| Name        | Type     | Description                                              |
| :---------- | :------- | :------------------------------------------------------- |
| original    | `string` | The size of image                                        |
| name        | `string` | The name of image, defines alt prop for image            |
| **code**    | `string` | The code of image, defines which image will be rendered. |
| placeholder | `string` | The preferred placeholder                                |

## Functional specs

- You don't have to pass entire src of the image. Just `dubai_ae`, `paris_fr` etc. is enough.

- `OnClick` is also called on `Enter` and `Space` keypresses.

```jsx
<PictureCard
  image={{
    original: "385x320",
    code: "dubai_ae",
    name: "dubai_ae",
    placeholder: "jpg"
  }}
  subTitle="Prague"
  title="Dubai"
  height="450px"
  width="600px"
  external
>
2000kč
/>
```
