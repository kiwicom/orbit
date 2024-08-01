import * as React from "react";

import { SIZE_OPTIONS, TYPES } from "./consts";

import Seat, { SeatLegend } from ".";

const LABELS = [undefined, "1", "haySTack"] as const;
const PRICES = [undefined, "$1", "CZK 12 453"] as const;
const SELECTED = [true, false] as const;

export default function SeatStory() {
  return (
    <div className="p-400 gap-200 flex flex-wrap">
      {LABELS.map(label =>
        Object.values(TYPES).map(type =>
          Object.values(SIZE_OPTIONS).map(size =>
            PRICES.map(price =>
              SELECTED.map(selected => (
                <div className="bg-cloud-normal">
                  <Seat
                    key={`${label}${type}${size}${price}${selected}`}
                    label={label}
                    type={type}
                    size={size}
                    price={price}
                    selected={selected}
                  />
                </div>
              )),
            ),
          ),
        ),
      )}

      {LABELS.map(label =>
        Object.values(TYPES).map(type => (
          <div className="bg-cloud-normal">
            <SeatLegend key={`${label}${type}`} label={label} type={type} />
          </div>
        )),
      )}
    </div>
  );
}
