// @flow
import * as React from "react";
import Typography from "./../Typography";

type Props = {
  error: ?string,
};

const MaybeError = (props: Props) =>
  props.error ? (
    <Typography size="small" type="error">
      {props.error}
    </Typography>
  ) : null;

export default MaybeError;
