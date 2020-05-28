**Props**
| Name | Type | Default | Description |
| --------------- | ------------- | ------- | ----------- |
| title | `React$Node` | | |
| description | `React$Node` | | |
| icon | `React$Node` | | |
| header | `React$Node` | | |
| children | `React$Node` | | |
| external | `boolean` | | |
| href | `string` | | |
| onClick | `TileOnClick` | | |
| expandable | `boolean` | | |
| initialExpanded | `boolean` | | |
| noPadding | `boolean` | | |
| htmlTitle | `string` | | |
| noHeaderIcon | `boolean` | | |
| dataTest | `string` | | |

**TileContent**

| Name        | Type         | Default | Description |
| ----------- | ------------ | ------- | ----------- |
| children    | `React$Node` |         |             |
| noPadding   | `boolean`    |         |             |
| withPointer | `boolean`    |         |             |
| withBorder  | `boolean`    |         |             |
| useMargins  | `boolean`    |         |             |

**TileExpandable**

| Name            | Type                                                                                                  | Default | Description |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | ----------- |
| dataTest        | `string`                                                                                              |         |             |
| initialExpanded | `boolean`                                                                                             |         |             |
| noPadding       | `boolean`                                                                                             |         |             |
| children        | `React$Node`                                                                                          |         |             |
| onClick         | `(e: SyntheticEvent<HTMLDivElement> \| SyntheticKeyboardEvent<HTMLElement>) => void \| Promise<any>;` |         |             |
| title           | `React$Node`                                                                                          |         |             |
| description     | `React$Node`                                                                                          |         |             |
| header          | `React$Node`                                                                                          |         |             |
| icon            | `React$Node`                                                                                          |         |             |
| htmlTitle       | `string`                                                                                              |         |             |

**TileHeader**

| Name         | Type                                                                                                  | Default | Description |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------- | ----------- |
| icon         | `React$Node`                                                                                          |         |             |
| title        | `React$Node`                                                                                          |         |             |
| description  | `React$Node`                                                                                          |         |             |
| expandable   | `boolean`                                                                                             |         |             |
| expanded     | `boolean`                                                                                             |         |             |
| external     | `boolean`                                                                                             |         |             |
| onClick      | `(e: SyntheticEvent<HTMLDivElement> \| SyntheticKeyboardEvent<HTMLElement>) => void \| Promise<any>;` |         |             |
| onKeyDown    | `(e: SyntheticEvent<HTMLDivElement> \| SyntheticKeyboardEvent<HTMLElement>) => void \| Promise<any>;` |         |             |
| header       | `React$Node`                                                                                          |         |             |
| role         | `string`                                                                                              |         |             |
| ariaExpanded | `boolean`                                                                                             |         |             |
| ariaControls | `string`                                                                                              |         |             |
| id           | `string`                                                                                              |         |             |
| tabIndex     | `string`                                                                                              |         |             |
| noHeaderIcon | `boolean`                                                                                             |         |             |

**TileWrapper**

| Name         | Type         | Default | Description |
| ------------ | ------------ | ------- | ----------- |
| dataTest     | `string`     |         |             |
| href         | `string`     |         |             |
| external     | `boolean`    |         |             |
| onClick      | `any`        |         |             |
| onKeyDown    | `any`        |         |             |
| children     | `React$Node` |         |             |
| as           | `string`     |         |             |
| tabIndex     | `string`     |         |             |
| role         | `?string`    |         |             |
| ariaExpanded | `boolean`    |         |             |
| ariaControls | `string`     |         |             |
| htmlTitle    | `string`     |         |             |
| id           | `string`     |         |             |
