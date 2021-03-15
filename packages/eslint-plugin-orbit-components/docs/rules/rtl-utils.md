# rtl-utils

Prevents bad theme.rtl patterns. Users often make the same mistake, they tend to use `theme.rtl` to apply RTL styles like right/left position, margins, paddings. This rule should prevent such cases and enforce usage of our RTL utility functions.

[Orbit RTL utility functions](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/rtl);

## Rule details

The following patterns are considered errors:

```jsx
import styled from "styled-components";

const DocumentWrapper = styled.div`
  width: 100%;
  position: relative;
  ${({ theme }) => (theme.rtl ? "right:" : "left:")} 7px;
  ${mq.desktop(css`
    width: 30%;
    ${({ theme }) => (theme.rtl ? "right:" : "left:")} 0;
  `)};
`;
```

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  ${({ theme }) => (theme.rtl ? "margin-right:" : "margin-left:")} 7px;
`;
```

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: ${({ theme }) => (theme.rtl ? `0 ${theme.orbit.spaceXLarge}px 0 0` : `0 0 0 ${theme.orbit.spaceXLarge}px)};
`;
```

The following patterns are **not** considered errors:

```jsx
import styled from "styled-components";
import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

const StyledWrapper = styled.div`
  ${right}: 0;
`;
```

```jsx
import styled from "styled-components";
import { right } from "@kiwicom/orbit-components/lib/utils/rtl";

const StyledWrapper = styled.div`
  margin-${right}: ${({ theme }) => theme.orbit.spaceSmall};
`;
```

```jsx
import styled from "styled-components";
import { rtlSpacing } from "@kiwicom/orbit-components/lib/utils/rtl";

const StyledWrapper = styled.div`
  padding: ${({ theme }) => rtlSpacing(`${theme.orbit.spaceSmall} 0 ${theme.orbit.spaceSmall})};
`;
```
