import * as React from "react";

import * as Icons from "../icons";

const IconList = () => (
  <div className="rounded-150 flex flex-row flex-wrap justify-between">
    {Object.keys(Icons)
      .filter(n => n !== "__namedExportsOrder")
      .map(icon => {
        const Icon = Icons[icon];

        const iconName = `${icon}`;
        return (
          <div
            className="gap-600 bg-white-normal mb-600 rounded-150 border-cloud-normal px-600 flex w-full flex-row content-center items-center justify-start border border-solid"
            style={{ minHeight: "80px" }}
            key={icon}
          >
            <Icon size="large" color="primary" ariaLabel={iconName} />
            <div
              className="leading-small text-ink-dark bg-cloud-light border-cloud-normal py-100 ps-200 border border-solid"
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
