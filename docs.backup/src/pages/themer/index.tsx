import React from "react";
import Themer from "@kiwicom/orbit-themer";

import ThemerLayout from "../../components/ThemerLayout";

export default ({ location }) => {
  return (
    <ThemerLayout
      title="Themer"
      location={location}
      noElevation
      path="/themer"
      description="Tool to customize and preview themes for Orbit."
    >
      <Themer />
    </ThemerLayout>
  );
};
