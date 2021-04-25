# use-rtl

This rule aim is to prevent RTL mistakes. User can forget about RTL and use only static values, this rule should help to avoid that.

[Orbit RTL utility functions](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/utils/rtl);

## Rule details

The following patterns are considered errors:

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-right: 15px;
`;
```

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  right: 0;
`;
```

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  border-radius: 3px 5px 4px 5px;
`;
```

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  text-align: left;
`;
```

```jsx
import styled from "styled-components";

const StyledWrapper = styled.div`
  transform: translate3d("400px, 0, 0");
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
  margin-${right}: 15px;
`;
```

```jsx
import styled from "styled-components";
import { textAlign } from "@kiwicom/orbit-components/lib/utils/rtl";

const StyledWrapper = styled.div`
  text-align: ${textAlign("left")};
`;
```

```jsx
import styled from "styled-components";
import { borderRadius } from "@kiwicom/orbit-components/lib/utils/rtl";

const StyledWrapper = styled.div`
  border-radius: ${borderRadius("3px 5px 6px 4px")};
`;
```

```jsx
import styled from "styled-components";
import { translate3d } from "@kiwicom/orbit-components/lib/utils/rtl";

const StyledWrapper = styled.div`
  transform: ${translate3d("400px, 0, 0")};
`;
```
