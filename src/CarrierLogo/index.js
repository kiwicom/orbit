// @flow
import * as React from "react";
import * as tokens from "orbit-design-token";

const baseURL = "//images.kiwi.com"; // token or const

const directorySizes = {
  small: 16,
  medium: 32,
  large: 32,
};

const renderSizes = {
  small: parseInt(tokens.heightIconSmall, 10),
  medium: parseInt(tokens.heightIconMedium, 10),
  large: parseInt(tokens.heightIconLarge, 10),
};

const retinaSizes = {
  small: 32,
  medium: 64,
  large: 64,
};

type Carrier = { code: string, name: string };

type Props = {
  size: "small" | "medium" | "large",
  carriers: Carrier[],
};

const CarrierLogo = (props: Props) => {
  const { size, carriers } = props;

  let sourceSize = directorySizes[size];
  let imageSize = renderSizes[size];
  let srcSetSize = retinaSizes[size];

  if (carriers.length > 1) {
    sourceSize = directorySizes.small;
    imageSize = renderSizes.small;
    srcSetSize = retinaSizes.small;
  }

  return (
    <div>
      {carriers
        .slice(0, 4)
        .map(carrierImage => (
          <img
            key={carrierImage.code}
            src={`${baseURL}/airlines/${sourceSize}/${carrierImage.code}.png`}
            srcSet={`${baseURL}/airlines/${srcSetSize}/${carrierImage.code}.png 2x`}
            alt={carrierImage.name}
            title={carrierImage.name}
          />
        ))}
      <style jsx>{`
        div {
          border-radius: ${tokens.borderRadiusNormal};
          background-color: ${tokens.backgroundCarrierLogo};
          height: ${carriers.length > 1 ? `${tokens.heightIconLarge}px` : `${renderSizes[size]}px`};
          width: ${carriers.length > 1 ? `${tokens.heightIconLarge}px` : `${renderSizes[size]}px`};
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          position: relative;
        }
        img {
          height: ${imageSize}px;
          width: ${imageSize}px;
          border-radius: ${tokens.borderRadiusNormal};
          background-color: ${tokens.backgroundCarrierLogo};
          position: absolute;
        }
        /* one item */
        img:first-child:nth-last-child(1) {
          max-width: 100%;
          max-height: 100%;
        }
        /* two items */
        img:first-child:nth-last-child(2) ~ img:last-child {
          bottom: 0;
          right: 0;
        }
        /* three items */
        img:first-child:nth-last-child(3),
        img:first-child:nth-last-child(3) ~ img {
          width: ${renderSizes.small - 1}px;
          height: ${renderSizes.small - 1}px;
        }
        img:first-child:nth-last-child(3) ~ img:nth-child(2) {
          top: 0;
          right: 0;
        }
        img:first-child:nth-last-child(3) ~ img:nth-child(3) {
          left: 0;
          bottom: 0;
        }
        /* four items */
        img:first-child:nth-last-child(4),
        img:first-child:nth-last-child(4) ~ img {
          width: ${renderSizes.small - 1}px;
          height: ${renderSizes.small - 1}px;
        }
        img:first-child:nth-last-child(4) ~ img:nth-child(2) {
          top: 0;
          right: 0;
        }
        img:first-child:nth-last-child(4) ~ img:nth-child(3) {
          bottom: 0;
          left: 0;
        }
        img:first-child:nth-last-child(4) ~ img:nth-child(4) {
          bottom: 0;
          right: 0;
        }
      `}</style>
    </div>
  );
};

CarrierLogo.defaultProps = {
  size: "medium",
};

export default CarrierLogo;
