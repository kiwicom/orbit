# Table
To implement Table component into your project you'll need to add the import:
```jsx
import Table, { TableHead, TableBody, TableRow, TableCell } from "@kiwicom/orbit-components/lib/Table";

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
| **children**  | `React.Node`                    |              | The content of the Table, normally [`TableHead`](#tablehead) or [`TableHead`](#TableHead).
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
| :------------ | :-------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the TableHead, normally [`TableRow`](#tablerow).

### TableBody
```jsx
import TableBody from "@kiwicom/orbit-components/lib/Table/TableBody";
```

#### Props
Table below contains all types of the props in TableBody component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :-------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the TableBody, normally [`TableRow`](#tablerow).

### TableRow
```jsx
import TableRow from "@kiwicom/orbit-components/lib/Table/TableRow";
```

#### Props
Table below contains all types of the props in TableRow component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :-------------------- | :-------------- | :------------------------------- |
| **children**  | `React.Node`          |                 | The content of the TableRow, normally [`TableCell`](#tablecell).

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
