import * as React from "react";
import cx from "clsx";

import type { Value } from "../../types";
import type { Translation } from "../../../common/types";
import Loading from "../../../Loading";

interface Props {
  data?: number[];
  value: Value;
  min: number;
  step: number;
  loading?: boolean;
  loadingText?: Translation;
}

const Histogram = ({ data, value, min, loading = false, loadingText, step }: Props) => {
  const maxValue = !!data && Math.max(...data);
  const highlightFrom = Array.isArray(value) ? value[0] : 0;
  const highlightTo = Array.isArray(value) ? value[value.length - 1] : value;
  return (
    <div
      className="h-xxxl flex items-end justify-start gap-px overflow-hidden pb-[3px]"
      role="presentation"
    >
      {loading ? (
        <div className="flex size-full items-center justify-center">
          <Loading type="inlineLoader" text={loadingText} />
        </div>
      ) : (
        data &&
        data.map((column, index) => {
          const properIndex = (index + min) * step;
          const active = properIndex >= highlightFrom && properIndex <= highlightTo;
          const height = maxValue ? `${((column / maxValue) * 100).toFixed(2)}%` : 0;
          return (
            <div
              key={encodeURIComponent(properIndex.toString())}
              className={cx(
                "relative flex-auto rounded-[1px]",
                active ? "bg-blue-normal" : "bg-blue-light-active",
              )}
              style={{ height }}
            >
              <div className="absolute bottom-[-3px] h-px w-full rounded-[1px] bg-inherit" />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Histogram;
