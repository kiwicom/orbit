# Modal

To implement Modal component into your project you'll need to the import at least the Modal and the [ModalSection](#modalsection):

```jsx
import Modal, { ModalSection } from "@kiwicom/orbit-components/lib/Modal";
```

> You might need the Portal also. See it's [docs](https://orbit.kiwi/utilities/portal/).

After adding import into your project you can use it simply like:

```jsx
<Modal>
  <ModalSection>Hello World!</ModalSection>
</Modal>
```

The Modal component has big variety of usage, please check examples for usage [below](#use-cases).

## Props

Table below contains all types of the props available in the Modal component.

| Name                | Type                       | Default    | Description                                                                                                                                                          |
| :------------------ | :------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children            | `React.Node`               |            | The content of the Modal. [See Subcomponents](#subcomponents)                                                                                                        |
| dataTest            | `string`                   |            | Optional prop for testing purposes.                                                                                                                                  |
| fixedFooter         | `boolean`                  | `false`    | If `true` the ModalFooter will be fixed to the bottom of window.                                                                                                     |
| isMobileFullPage    | `boolean`                  | `false`    | If `true` the Modal will look like a page on mobile devices.                                                                                                         |
| size                | [`enum`](#modal-enum)      | `"normal"` | The maximum width of the Modal on desktop viewport.                                                                                                                  |
| onClose             | `event => void \| Promise` |            | Function for handling onClose event. If you don't pass any function the Close button will not be displayed and it will not be possible to close the Modal.           |
| preventOverlayClose | `boolean`                  |            | Property for preventing closing of modal when there is a action on overlay. BEWARE: This should be used only in very specials edge-cases! It breaks user experience. |

### Modal enum

| size       |
| :--------- |
| `"small"`  |
| `"normal"` |
| `"large`   |

## Subcomponents

Modal component offers a good flexibility and many variations in its usage. There are three subcomponents which you might use.

### ModalSection

```jsx
import Modal, { ModalSection } from "@kiwicom/orbit-components/lib/Modal";
```

#### Usage:

```jsx
<Modal>
  <ModalSection suppressed>Hello World!</ModalSection>
</Modal>
```

#### Props

Table below contains all types of the props in the ModalSection component.

| Name         | Type         | Default | Description                                             |
| :----------- | :----------- | :------ | :------------------------------------------------------ |
| **children** | `React.Node` |         | Content of the ModalSection component.                  |
| dataTest     | `string`     |         | Optional prop for testing purposes.                     |
| suppressed   | `boolean`    | `false` | If `true` the ModalSection will have cloudy background. |

### ModalHeader

```jsx
import Modal, { ModalHeader } from "@kiwicom/orbit-components/lib/Modal";
```

#### Usage:

```jsx
<Modal>
  <ModalHeader title="Orbit design system">Hello World!</ModalHeader>
</Modal>
```

#### Props

Table below contains all types of the props in the ModalHeader component.

| Name         | Type                                 | Default | Description                                            |
| :----------- | :----------------------------------- | :------ | :----------------------------------------------------- |
| children     | `React.Node`                         |         | The content of the ModalHeader.                        |
| dataTest     | `string`                             |         | Optional prop for testing purposes.                    |
| description  | `React.Node`                         |         | The displayed description of the ModalHeader.          |
| illustration | `React.Element<typeof Illustration>` |         | The displayed Illustration of the ModalHeader.         |
| suppressed   | `boolean`                            | `false` | If `true` the ModalHeader will have cloudy background. |
| title        | `React.Node`                         |         | The displayed title of the ModalHeader.                |

### ModalFooter

```jsx
import Modal, { ModalFooter } from "@kiwicom/orbit-components/lib/Modal";

// and probably Button
import Button from "@kiwicom/orbit-components/lib/Button";
```

#### Usage:

```jsx
<Modal>
  <ModalFooter flex={["0 0 auto", "1 1 100%"]} fixed>
    <Button type="secondary" iconLeft={<ChevronLeft />}>
      Back
    </Button>
    <Button block>Continue to Payment</Button>
  </ModalFooter>
</Modal>
```

#### Props

Table below contains all types of the props in the ModalFooter component.

| Name         | Type                        | Default     | Description                                                                                      |
| :----------- | :-------------------------- | :---------- | :----------------------------------------------------------------------------------------------- |
| **children** | `React.Node`                |             | The content of the ModalFooter.                                                                  |
| dataTest     | `string`                    |             | Optional prop for testing purposes.                                                              |
| flex         | `string` or `Array<string>` | `"0 1 auto` | The flex attribute(s) for children of the ModalFooter. [See Functional specs](#functional-specs) |
