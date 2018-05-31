// @flow

import * as React from "react";

import Typography from "../Typography/Typography";

type Props = {
  icon?: React.Node,
  title: string,
  description?: string,
};

const Header = ({ icon, title, description }: Props) => (
  <div className="header">
    <h3>
      {icon && <span className="icon">{icon}</span>}
      <Typography size="header">{title}</Typography>
    </h3>
    {description && <Typography>{description}</Typography>}
    <style jsx>{`
      .header {
        margin-bottom: 1em;
      }
      .icon {
        margin-right: 8px;
      }
      h3 {
        display: flex;
        align-items: center;
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
