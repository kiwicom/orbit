import React from "react";

import IllustrationPrimitive from ".";

const IllustrationPrimitiveList = (props: { images: string[]; nameOfComponent: string }) => {
  return (
    <div>
      {props.images.map(illustration => {
        return (
          <div
            className="bg-white-normal mb-600 rounded-150 border-cloud-normal p-600 lm:flex-row flex min-h-[80px] w-full flex-col items-center border border-solid"
            key={illustration}
          >
            <IllustrationPrimitive name={illustration} />
            <code className="border-cloud-normal mt-400 lm:mt-0 py-100 px-200 leading-small text-ink-normal bg-cloud-light border border-solid text-[12px]">
              {`<${props.nameOfComponent} name="${illustration}" />`}
            </code>
          </div>
        );
      })}
    </div>
  );
};

export default IllustrationPrimitiveList;
