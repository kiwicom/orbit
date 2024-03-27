import * as React from "react";

import * as Icons from "../icons";

const IconList = () => (
  <div className="rounded-large flex flex-row flex-wrap justify-between">
    {Object.keys(Icons)
      .filter(n => n !== "__namedExportsOrder")
      .map(icon => {
        const Icon = Icons[icon];

        const iconName = `${icon}`;
        return (
          <div
            className="gap-lg bg-white-normal mb-lg rounded-large border-cloud-normal px-lg flex w-full flex-row content-center items-center justify-start border border-solid"
            style={{ minHeight: "80px" }}
            key={icon}
          >
            <Icon size="large" color="primary" />
            <div
              className="leading-small text-ink-dark bg-cloud-light border-cloud-normal py-xxs ps-xs border border-solid"
              style={{
                fontFamily:
                  '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
                fontSize: "12px",
              }}
            >
              {`import ${iconName} from "@kiwicom/orbit-components/lib/icons/${iconName}"`}
            </div>
          </div>
        );
      })}
  </div>
);

export default IconList;
