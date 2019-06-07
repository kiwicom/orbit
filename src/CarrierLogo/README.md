# CarrierLogo
To implement CarrierLogo component into your project you'll need to add the import:
```jsx
import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo";
```
After adding import into your project you can use it simply like:
```jsx
<CarrierLogo carriers={Carrier} />
```
## Props
Table below contains all types of the props available in CarrierLogo component.

| Name          | Type                             | Default         | Description                      |
| :------------ | :------------------------------- | :-------------- | :------------------------------- |
| **carriers**  | [`Carrier[]`](#carrier)          |                 | The content of the CarrierLogo, passed as array of objects.
| customSource  | [`Object`](#custom-source)        |                 | Optional object property for using different source of images.
| dataTest      | `string`                         |                 | Optional prop for testing purposes.
| size          | [`enum`](#enum)                  | `"large"`       | The size of the CarrierLogo. [See Functional specs](#functional-specs)

### Carrier
Table below contains all types of the props available for object in Carrier array.

| Name     | Type             | Description                      |
| :------- | :--------------- | :------------------------------- |
| **code** | `string`         | The code of the Carrier, defines which logo will be rendered.
| name     | `string`         | The name of the Carrier, mainly for information.
| type     | [`enum`](#enum)  | The preferred placeholder for non-existing carrier. [See Functional specs](#functional-specs)

### enum

| size       | type (Carrier) |
| :--------- | :------------- | 
| `"small"`  | `"airline"`    |
| `"medium"` | `"bus"`        |
| `"large"`  | `"train"`      |

## Custom source
If you want to use different source for images, you can use `customSource` property that expects these property inside:
| Name          | Type                             | Default         | Description                      |
| :------------ | :------------------------------- | :-------------- | :------------------------------- |
| **url**       | `string`                         |                 | The content of the CarrierLogo, passed as array of objects.
| src           | `Object`                         |                 | Object for passing query variables for `src` url of the image. [See Functional specs](#functional-specs)
| srcSet        | `Object`                         |                 | Object for passing query variables for `srcSet` url of the image. [See Functional specs](#functional-specs)

## Functional specs
* The `size` prop will be applied when `carriers` prop has defined **only one object** in Carrier array.

* The `type` prop in type Carrier determines which placeholder should be used when logo for the requested carrier doesn't exist.

* If you need to use different source for the images, you can use `customSource` and it usage would like this:
```jsx
<CarrierLogo
  customSource={{
    url: "//images.whatever.com/",
    src: {
      height: 64,
      width: 64,
      background: "transparent"
    },
    src: {
      height: 128,
      width: 128,
      background: "transparent"
    },
  }}
  carriers={[{ code: "carrierCode", name: "Carrier Name" }]}
/>  
```
