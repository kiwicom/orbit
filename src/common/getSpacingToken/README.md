# getSpacingToken
The function `getSpacingToken` is used for additional `margin-bottom` for some components.

## Usage with styled-components
```jsx
import styled from "styled-components";

import getSpacingToken from "@kiwicom/orbit-components/lib/common/getSpacingToken";

const MyComponent = styled.div`
  margin-bottom: ${getSpacingToken};
  // It's not necessary do destructure props
  // margin-bottom: ${() => getSpacingToken({ spaceAfter, theme }};
`

MyComponent.defaultProps = {
  theme: defaultTheme,
};

const App = () => <MyComponent spaceAfter="small" />
```

## Parameter
This function receives one parameter - object. With usage in `styled-components` it can receive it *automatically*.

| Name         | Type                     | Default       | Description                      |
| :-------     | :----------------------- | :------------ | :------------------------------- |
| spaceAfter   | [`enum`](#enum)          | `"none"`      | The value to be applied.
| theme        | `typeof defaultTheme`    |               | Theme object with tokens and rtl.

> Please note that the *token value* in the documentation may not be up to date. Check [orbit.kiwi](https://orbit.kiwi/design-tokens/).

### enum
| name              | used token      | token value |
| :---------------- | :-------------- | :---------- |
| `"none"`          | `spaceXXSmall`  | `null`      |
| `"smallest"`      | `spaceXXSmall`  | `4px`       |
| `"small"`         | `spaceXSmall`   | `8px`       |
| `"normal"`        | `spaceSmall`    | `12px`      |
| `"medium"`        | `spaceMedium`   | `16px`      |
| `"large"`         | `spaceLarge`    | `24px`      |
| `"largest"`       | `spaceXLarge`   | `32px`      |
