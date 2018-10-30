# Stack
To implement Table component into your project you'll need to add the import:
```jsx
import Table from "@kiwicom/orbit-components/lib/Table";
import TableHead from "@kiwicom/orbit-components/lib/Table/TableHead";
import TableBody from "@kiwicom/orbit-components/lib/Table/TableBody";
import TableRow from "@kiwicom/orbit-components/lib/Table/TableRow";
import TableCell from "@kiwicom/orbit-components/lib/Table/TableCell";

```
After adding import into your project you can use it simply like:
```jsx
<Table>
  <TableHead>
    <TableRow>
      <TableCell>Content</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      <TableRow>
        <TableCell>Content</TableCell>
      </TableRow>
  </TableBody>
</Table>
```
## Props
Table below contains all types of the props available in the Table component.

| Name          | Type                            | Default      | Description                      |
| :------------ | :------------------------------ | :----------- | :------------------------------- |
| **children**  | `Array<TableHead or TableHead>` |              | The content of the Table.
| compact       | `boolean`                       | `false`      | If `true`, the Table will have more compact styles.
| dataTest      | `string`                        |              | Optional prop for testing purposes.

## Subcomponents
There are four subcomponents which you need to use.

### TableHead
```jsx
import TableHead from "@kiwicom/orbit-components/lib/Table/TableHead";
```

#### Props
Table below contains all types of the props in TableHead component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `Array<TableRow>`     |                 | The content of the TableHead.

### TableBody
```jsx
import TableBody from "@kiwicom/orbit-components/lib/Table/TableBody";
```

#### Props
Table below contains all types of the props in TableBody component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `Array<TableRow>`     |                 | The content of the TableBody.

### TableRow
```jsx
import TableRow from "@kiwicom/orbit-components/lib/Table/TableRow";
```

#### Props
Table below contains all types of the props in TableRow component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| **children**  | `Array<TableCell>`    |                 | The content of the TableRow.

### TableCell
```jsx
import TableCell from "@kiwicom/orbit-components/lib/Table/TableCell";
```

#### Props
Table below contains all types of the props in TableCell component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :---------------------| :-------------- | :------------------------------- |
| align         | [`enum`](#enum)       | `"left"`        | The align of text in the TableCell.
| children      | `React.Node`          |                 | The content of the TableCell.

#### enum

| align      |
| :--------- |
| `"left"`   |
| `"center"` |
| `"right"`  |
