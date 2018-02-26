// @flow

import * as React from "react";
import Typography from "../Typography";

type Props = {
  title: string,
  description?: string,
};

const Header = ({ title, description }: Props) => (
  <div className="header">
    <h3>
      <Typography>{title}</Typography>
    </h3>
    {description && <Typography>{description}</Typography>}
    <style jsx>{`
      .header {
        margin-bottom: 1em;
      }
      h3 {
        font-size: 22px;
        font-weight: 500;
        line-height: 1.18;
        margin-top: 0;
        margin-bottom: 7px;
      }
    `}</style>
  </div>
);

Header.defaultProps = {
  description: "",
};

export default Header;
