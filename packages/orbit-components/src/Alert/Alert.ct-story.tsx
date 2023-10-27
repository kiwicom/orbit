import * as React from "react";

import * as Icons from "../icons";
import type { Type } from "./types";

import { AlertButton } from ".";

export function TestLeftIcon({ type }: { type: Type }) {
  return (
    <div className="p-xxs inline-block">
      <AlertButton iconLeft={<Icons.Airplane />} type={type} dataTest="button">
        Button
      </AlertButton>
    </div>
  );
}
