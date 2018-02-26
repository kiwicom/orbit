// @flow
import * as React from "react";
import spinnerImage from "./spinner@2x.png";

const Loader = () => (
  <div>
    <img alt="" src={spinnerImage} />
    <style jsx>{`
      img {
        animation spin 1.5s infinite linear;
        animation-direction normal;
      }
      @keyframes spin {
        from {
          transform rotate(0deg)
        }
        to {
          transform rotate(359deg)
        }
      }
      `}</style>
  </div>
);

export default Loader;
