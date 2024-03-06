import React from "react";

import IllustrationPrimitive from ".";

const IllustrationPrimitiveList = (props: { images: string[]; nameOfComponent: string }) => {
  return (
    <div>
      {props.images.map(illustration => {
        return (
          <div
            className="bg-white-normal mb-lg rounded-large border-cloud-normal p-lg lm:flex-row flex min-h-[80px] w-full flex-col items-center border border-solid"
            key={illustration}
          >
            <IllustrationPrimitive name={illustration} />
            <code className="border-cloud-normal mt-md lm:mt-0 py-xxs px-xs leading-small text-ink-normal bg-cloud-light border border-solid text-[12px]">
              {`<${props.nameOfComponent} name="${illustration}" />`}
            </code>
          </div>
        );
      })}
    </div>
  );
};

export default IllustrationPrimitiveList;
