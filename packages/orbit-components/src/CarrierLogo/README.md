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

| Name         | Type                    | Default   | Description                                                            |
| :----------- | :---------------------- | :-------- | :--------------------------------------------------------------------- |
| **carriers** | [`Carrier[]`](#carrier) |           | The content of the CarrierLogo, passed as array of objects.            |
| dataTest     | `string`                |           | Optional prop for testing purposes.                                    |
| size         | [`enum`](#enum)         | `"large"` | The size of the CarrierLogo. [See Functional specs](#functional-specs) |
| rounded      | `boolean`               |           | Rounded carrier image                                                  |

### Carrier

Table below contains all types of the props available for object in Carrier array.

| Name     | Type            | Description                                                                                   |
| :------- | :-------------- | :-------------------------------------------------------------------------------------------- |
| **code** | `string`        | The code of the Carrier, defines which logo will be rendered.                                 |
| name     | `string`        | The name of the Carrier, mainly for information.                                              |
| type     | [`enum`](#enum) | The preferred placeholder for non-existing carrier. [See Functional specs](#functional-specs) |

### enum

| size       | type (Carrier)       |
| :--------- | :------------------- |
| `"small"`  | `"airline"`          |
| `"medium"` | `"bus"`              |
| `"large"`  | `"train"`            |
|            | `"ferry"`            |
|            | `"private_transfer"` |
|            | `"kiwicom"`          |

## Functional specs

- The `size` prop will be applied when `carriers` prop has defined **only one object** in Carrier array.

- The `type` prop in type Carrier determines which placeholder should be used when logo for the requested carrier doesn't exist.
