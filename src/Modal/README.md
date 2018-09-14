# Modal
To implement Modal component into your project you'll need to the import at least the Modal and the [ModalSection](#modalsection):
```jsx
import Modal from "@kiwicom/orbit-components/lib/Modal";
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection";
```

> You might need the Portal also. See it's [docs](../Portal).

After adding import into your project you can use it simply like:
```jsx
<Modal>
  <ModalSection>
    Hello World!
  </ModalSection>
</Modal>
```
## Props
Table below contains all types of the props available in the Modal component.

| Name          | Type                    | Default         | Description                      |
| :------------ | :---------------------- | :-------------- | :------------------------------- |
| children      | `React.Node`            |                 | The content of the Modal. [See Subcomponents](#sub-components)
| fixedFooter   | `boolean`               | `false`         | If `true` the ModalFooter will be fixed to the bottom of window.
| size          | [`enum`](#modalenum)    | `"medium"`      | The maximum width of the Modal on desktop viewport.
| closable      | `boolean`               | `true`          | If `false`, the Close button will not be displayed and it will not be possible to close the Modal.
| onClose       | `func \| Promise<any>`  |                 | Function for handling onClose event.

### Modal enum

| size          |
| :------------ |
| `"small"`     |
| `"normal"`    |
| `"large`      |

---

## Subcomponents
Modal component offers a good flexibility and many variations in its usage. There are three subcomponents which you might use.

### ModalSection
```jsx
import Modal from "@kiwicom/orbit-components/lib/Modal";
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection";
```
#### Usage:
```jsx
<Modal>
  <ModalSection suppressed>
    Hello World!
  </ModalSection>
</Modal>
```

#### Props
Table below contains all types of the props in the ModalSection component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | Content of the ModalSection component.
| suppressed    | `boolean`             | `false`         | If `true` the ModalSection will have cloudy background.

### ModalHeader
```jsx
import Modal from "@kiwicom/orbit-components/lib/Modal";
import ModalHeader from "@kiwicom/orbit-components/lib/Modal/ModalHeader";
```
#### Usage:
```jsx
<Modal>
  <ModalHeader title="Orbit design system">
    Hello World!
  </ModalHeader>
</Modal>
```

#### Props
Table below contains all types of the props in the ModalHeader component.

| Name          | Type                                  | Default         | Description                      |
| :------------ | :------------------------------------ | :-------------- | :------------------------------- |
| children      | `React.Node`                          |                 | The content of the ModalHeader.
| description   | `React.Node`                          |                 | The displayed description of the ModalHeader.
| illustration  | `React.Element<typeof Illustration>`  |                 | The displayed Illustration of the ModalHeader.
| suppressed    | `boolean`                             | `false`         | If `true` the ModalHeader will have cloudy background.
| title         | `React.Node`                          |                 | The displayed title of the ModalHeader.

### ModalFooter
```jsx
import Modal from "@kiwicom/orbit-components/lib/Modal";
import ModalFooter from "@kiwicom/orbit-components/lib/Modal/ModalFooter";

// and probably Button
import Button from "@kiwicom/orbit-components/lib/Button";

```
#### Usage:
```jsx
<Modal>
  <ModalFooter flex={["0 0 auto", "1 1 100%"]} fixed>
    <Button type="secondary" iconLeft={<ChevronLeft />}>Back</Button>
    <Button block>Continue to Payment</Button>
  </ModalFooter>
</Modal>
```

#### Props
Table below contains all types of the props in the ModalFooter component.

| Name          | Type                        | Default         | Description                      |
| :------------ | :-------------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`                |                 | The content of the ModalFooter.
| flex          | `string` or `Array<string>` | `"0 1 auto`     | The flex attribute(s) for children of the ModalFooter. [See Functional specs](#functional-specs)

#### Functional specs
* You can set up different `flex` attribute for every children, or use one for all. See [flex property docs](https://www.w3schools.com/cssref/css3_pr_flex.asp) for more information.
