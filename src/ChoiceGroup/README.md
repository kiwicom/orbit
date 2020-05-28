**Props**
| Name | Type | Default | Description |
| ----------------- | ------------------------------------------------------------------ | ------- | ----------- |
| dataTest | `string` | | |
| children | `React$Node` | | |
| label | `React$Element<React$ComponentType<any>> \| string` | | |
| labelSize | `LabelSize` | | |
| labelAs | `LabelAs` | | |
| error | `React$Element<React$ComponentType<any>> \| string` | | |
| onlySelectionText | `React$Element<React$ComponentType<any>> \| string` | | |
| filter | `boolean` | | |
| onOnlySelection | `(SyntheticEvent<HTMLButtonElement>, {}) => void \| Promise<any>;` | | |
| onChange | `(SyntheticInputEvent<HTMLInputElement>) => void \| Promise<any>;` | | |

| **LabelSize**      |
| ------------------ |
| "normal" , "large" |

| **LabelAs**                      |
| -------------------------------- |
| "h2" , "h3" , "h4" , "h5" , "h6" |
