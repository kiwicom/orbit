**Props**
| Name | Type | Default | Description |
| --------------- | ----------------------------- | ------- | ----------- |
| children | `React$Node` | | |
| title | `React$Node` | | |
| titleAs | `[`enum`](#enum)` | | |
| description | `React$Node` | | |
| icon | `React$Node` | | |
| actions | `React$Node` | | |
| onClose | `() => void \| Promise<any>;` | | |
| loading | `boolean` | | |
| header | `React$Node` | | |
| dataA11ySection | `string` | | |
| dataTest | `string` | | |
| spaceAfter | `[`enum`](#enum)` | | |

| **spaceAfter**                                                            |
| ------------------------------------------------------------------------- |
| "none" , "smallest" , "small" , "normal" , "medium" , "large" , "largest" |

**CardSection**

| Name            | Type                          | Default | Description |
| --------------- | ----------------------------- | ------- | ----------- |
| title           | `React$Node`                  |         |             |
| titleAs         | `[`enum`](#enum)`             |         |             |
| icon            | `React$Node`                  |         |             |
| description     | `React$Node`                  |         |             |
| children        | `React$Node`                  |         |             |
| expandable      | `boolean`                     |         |             |
| initialExpanded | `boolean`                     |         |             |
| actions         | `React$Node`                  |         |             |
| expanded        | `boolean`                     |         |             |
| noSeparator     | `boolean`                     |         |             |
| onClose         | `() => void \| Promise<any>;` |         |             |
| onExpand        | `() => void \| Promise<any>;` |         |             |
| header          | `React$Node`                  |         |             |
| dataTest        | `string`                      |         |             |

**CardWrapper**

| Name            | Type         | Default | Description |
| --------------- | ------------ | ------- | ----------- |
| children        | `React$Node` |         |             |
| bottomBorder    | `boolean`    |         |             |
| roundedBottom   | `boolean`    |         |             |
| roundedTop      | `boolean`    |         |             |
| expanded        | `boolean`    |         |             |
| noPadding       | `boolean`    |         |             |
| dataTest        | `string`     |         |             |
| noBorderTop     | `boolean`    |         |             |
| expandable      | `boolean`    |         |             |
| initialExpanded | `boolean`    |         |             |

**Header**

| Name            | Type                          | Default | Description |
| --------------- | ----------------------------- | ------- | ----------- |
| description     | `React$Node`                  |         |             |
| icon            | `React$Node`                  |         |             |
| actions         | `React$Node`                  |         |             |
| onClose         | `() => void \| Promise<any>;` |         |             |
| title           | `React$Node`                  |         |             |
| titleAs         | `[`enum`](#enum)`             |         |             |
| isSection       | `boolean`                     |         |             |
| dataA11ySection | `string`                      |         |             |
| expandable      | `boolean`                     |         |             |
| expanded        | `boolean`                     |         |             |
| header          | `React$Node`                  |         |             |
