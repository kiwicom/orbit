import React from "react";
import Gps from "@kiwicom/orbit-components/lib/icons/GpsFixed";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";

const ListChoices = () => {
  const title = "Choice Title";
  const description = "Further description";
  const icon = <Gps />;

  return (
    <>
      <ListChoice title={title} description={description} icon={icon} selectable />
      <ListChoice title={title} description={description} icon={icon} selectable selected />
    </>
  );
};

export default ListChoices;
