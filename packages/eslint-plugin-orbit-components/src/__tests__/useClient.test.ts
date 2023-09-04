import dedent from "dedent";

import ruleTester from "../ruleTester";
import useClient from "../rules/useClient";

describe("use-client-directive", () => {
  ruleTester.run("use-client-directive", useClient, {
    valid: [
      {
        code: dedent`
          "use client";
          import React from "react";
          import styled from 'styled-components';
          `,
      },
    ],
    invalid: [
      {
        code: dedent`
        import React from "react";
        import styled from 'styled-components';
      `,
        errors: [{ messageId: "error" }],
        output: dedent`
        "use client";
        import React from "react";
        import styled from 'styled-components';
        `,
      },
    ],
  });
});
