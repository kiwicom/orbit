# Table

To implement Table component into your project you'll need to add the import:

```jsx
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "@kiwicom/orbit-components/lib/Table";
```

After adding import into your project you can use it simply like:

```jsx
<Table>
  <TableHead>
    <TableRow>
      <TableCell>Header</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Content</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell>Footer</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

## Props

Table below contains all types of the props available in the Table component.

| Name         | Type            | Default     | Description                                                                                |
| :----------- | :-------------- | :---------- | :----------------------------------------------------------------------------------------- |
| **children** | `React.Node`    |             | The content of the Table, normally [`TableHead`](#tablehead) or [`TableHead`](#TableHead). |
| compact      | `boolean`       | `false`     | If `true`, the Table will have more compact styles.                                        |
| dataTest     | `string`        |             | Optional prop for testing purposes.                                                        |
| id           | `string`        |             | Set `id` for `Table`                                                                       |
| striped      | `boolean`       | `true`      | Functionality of table where every second line is grey                                     |
| type         | [`enum`](#enum) | `"primary"` | The type of Table.                                                                         |

### enum

| type          |
| :------------ |
| `"primary"`   |
| `"secondary"` |

## Subcomponents

There are four subcomponents which you need to use.

### TableHead

```jsx
import TableHead from "@kiwicom/orbit-components/lib/Table/TableHead";
```

#### Props

Table below contains all types of the props in TableHead component.

| Name         | Type         | Default | Description                                                     |
| :----------- | :----------- | :------ | :-------------------------------------------------------------- |
| **children** | `React.Node` |         | The content of the TableHead, normally [`TableRow`](#tablerow). |
| dataTest     | `string`     |         | Optional prop for testing purposes.                             |

### TableBody

```jsx
import TableBody from "@kiwicom/orbit-components/lib/Table/TableBody";
```

#### Props

Table below contains all types of the props in TableBody component.

| Name         | Type         | Default | Description                                                     |
| :----------- | :----------- | :------ | :-------------------------------------------------------------- |
| **children** | `React.Node` |         | The content of the TableBody, normally [`TableRow`](#tablerow). |
| dataTest     | `string`     |         | Optional prop for testing purposes.                             |

### TableRow

```jsx
import TableRow from "@kiwicom/orbit-components/lib/Table/TableRow";
```

#### Props

Table below contains all types of the props in TableRow component.

| Name         | Type         | Default | Description                                                      |
| :----------- | :----------- | :------ | :--------------------------------------------------------------- |
| **children** | `React.Node` |         | The content of the TableRow, normally [`TableCell`](#tablecell). |
| dataTest     | `string`     |         | Optional prop for testing purposes.                              |

### TableCell

```jsx
import TableCell from "@kiwicom/orbit-components/lib/Table/TableCell";
```

#### Props

Table below contains all types of the props in TableCell component.

| Name          | Type            | Default  | Description                                                                                                                                                         |
| :------------ | :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| align         | [`enum`](#enum) | `"left"` | The align of text in the TableCell.                                                                                                                                 |
| as            | [`enum`](#enum) | `"td"`   | possibility to render TableCell in different HTML                                                                                                                   |
| children      | `React.Node`    |          | The content of the TableCell.                                                                                                                                       |
| dataTest      | `string`        |          | Optional prop for testing purposes.                                                                                                                                 |
| scope         | [`enum`](#enum) |          | The scope attribute identifies whether a table header is a column header or a row header. More about a11y reasons [here](https://webaim.org/techniques/tables/data) |
| verticalAlign | [`enum`](#enum) |          | The vertical align of the content in the TableCell.                                                                                                                 |
| whiteSpace    | [`enum`](#enum) |          | The white-space setting of text in the TableCell.                                                                                                                   |

#### enum

| align      | whiteSpace   | VerticalAlign | as     | scope        |
| :--------- | :----------- | ------------- | :----- | :----------- |
| `"left"`   | `"nowrap"`   | `"baseline"`  | `"th"` | `"col"`      |
| `"center"` | `"pre"`      | `"middle"`    | `"td"` | `"row"`      |
| `"right"`  | `"pre-line"` | `"top"`       |        | `"colgroup"` |
|            | `"normal"`   | `"bottom"`    |        | `"rowgroup"` |

### TableFooter

```jsx
import TableFooter from "@kiwicom/orbit-components/lib/Table/TableFooter";
```

#### Props

Table below contains all types of the props in TableFooter component.

| Name         | Type         | Default | Description                                                       |
| :----------- | :----------- | :------ | :---------------------------------------------------------------- |
| **children** | `React.Node` |         | The content of the TableFooter, normally [`TableRow`](#tablerow). |
| dataTest     | `string`     |         | Optional prop for testing purposes.                               |
