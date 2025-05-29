import React from "react";

import Airplane from "../icons/Airplane";
import { TYPE_OPTIONS } from "./consts";

import Badge from ".";

export default function BadgeVisualTest() {
  return (
    <div className="gap-500 flex flex-wrap">
      {Object.values(TYPE_OPTIONS).map(type => (
        <Badge type={type} icon={<Airplane />}>
          Badge
        </Badge>
      ))}
    </div>
  );
}
