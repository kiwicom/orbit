# Tile expandable
To implement Tile expandable component into your project you'll need to import the TileExpandable, [TileExpandableHeader](#TileExpandableHeader) and the [TileExpandableContent](#TileExpandableContent):
```jsx
import TileExpandable from "@kiwicom/orbit-components/lib/TileExpandable";
import TileExpandableHeader from "@kiwicom/orbit-components/lib/Tile/TileExpandableHeader";
import TileExpandableContent from "@kiwicom/orbit-components/lib/Tile/TileExpandableContent";
```
After adding import into your project you can use it simply like:
```jsx
<TileExpandable>
  <TileExpandableHeader title="Title" subTitle="Description of the component" />
  <TileExpandableContent>
    Hello World!
  </TileExpandableContent>
</TileExpandable>
```

## Subcomponents
Tile component offers a good flexibility and many variations in its usage. There are four subcomponents which you may use.

### TileExpandableHeader
#### Usage:
```jsx
<TileExpandable>
  <TileExpandableHeader title="Hello World!" subTitle="Description of the component" />
  <TileExpandableContent>
    ...
  </TileExpandableContent>
</TileExpandable>
```
or you can use the `TileExpandableHeader` without any additional props, just pass the content as children. [See more in Functional specs](#functional-specs).
```jsx
<TileExpandable>
  <TileExpandableHeader>
    ...
  </TileExpandableHeader>
  <TileExpandableContent>
    ...
  </TileExpandableContent>
</TileExpandable>
```

#### Props
Table below contains all types of the props available in TileExpandableHeader component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| children      | `React.Node`          |                 | The content of the TileExpandableHeader. [See Functional specs](#functional-specs)
| title         | `string`              |                 | The title of the TileExpandableHeader.
| subTitle      | `string`              |                 | The description of the TileExpandableHeader.
| icon          | `React.Node`          |                 | The icon of the TileExpandableHeader.

#### Functional specs
* If you want to render **custom content** into `TileExpandableHeader`, you just need to pass it as a `children` prop. This will override all of the content which is taken from props like `title`, `subTitle` or `icon`. 

### TileExpandableContent
#### Usage:
```jsx
<TileExpandable>
  <TileExpandableHeader title="Hello World!" subTitle="Description of the component" />
  <TileExpandableContent>
    ...
  </TileExpandableContent>
</TileExpandable>
```

#### Props
Table below contains all types of the props in TileContent component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the TileExpandableContent.
