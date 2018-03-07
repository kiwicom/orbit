// @flow

import * as React from "react";
import Typography from "./../Typography";

type Props = {
  error?: string,
  help?: string,
};

const FieldFeedback = (props: Props) => {
  if (props.error) {
    return (
      <Typography size="small" type="error">
        {props.error}
      </Typography>
    );
  } else if (props.help) {
    return (
      <Typography size="small" type="help">
        {props.help}
      </Typography>
    );
  }
  return null;
};

export default FieldFeedback;
