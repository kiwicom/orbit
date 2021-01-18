declare module "@kiwicom/orbit-design-tokens/lib/js/createTheme";

import type { Tokens } from "./createTokens";
import type { CustomFoundation } from "./defaultFoundation";

type Overrides = Partial<Tokens>;

export type CreateTheme = (foundation: CustomFoundation, overrides: Overrides) => Tokens;

export default CreateTheme;
