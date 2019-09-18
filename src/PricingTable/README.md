# PricingTable
To implement PricingTable component into your project you'll need to the import at least the PricingTable and the [PricingTableItem](#pricingTableItem):
```jsx
import PricingTable, { PricingTableItem } from "@kiwicom/orbit-components/lib/PricingTable";
```

After adding import into your project you can use it simply like:
```jsx
  <PricingTable>
    <PricingTableItem>
      content
    </PricingTableItem>
    <PricingTableItem>
      content
    </PricingTableItem>
  </PricingTable>
```

## Props
Table below contains all types of the props available in the PricingTable component.

| Name                  | Type                        | Default         | Description                      |
| :-------------------- | :-------------------------- | :-------------- | :------------------------------- |
| children              | `React.Node`                |                 | The content of the PricingTable. [See Subcomponents](#sub-components)
| dataTest              | `string`                    |                 | Optional prop for testing purposes.
| defaultActiveElement  | `number`                    | `0`             | Sets default active element on mobile view 


---

## Subcomponents
PricingTable component needs to be used with it's subcomponent PricingTableItem

### PricingTableItem
```jsx
import PricingTable, { PricingTableItem } from "@kiwicom/orbit-components/lib/PricingTable";
```

#### Props
Table below contains all types of the props in the PricingTableItem component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| action        | `React$Node`          |                 | Area for action elements, like Button.
| badge         | `string | React$Node`|                 | Area for action elements, like Button.

| **children**  | `React.Node`          |                 | Content of the PricingTableItem component.
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| action        | `React$Node`          |                 | 


?? +active?: boolean,

  +badge?: React$Node,
  +basis?: number,

  +compact?: boolean,
  +featureIcon?: React$Node,
  +mobileDescription?: Translation,
  +name?: Translation,
  +onClick?: () => void | Promise<any>,
  +price?: Translation,
  +priceBadge?: React$Node,


