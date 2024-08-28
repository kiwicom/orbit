import React from "react";

const BorderRadius = () => {
  return (
    <div>
      <div className="rounded-50">50</div>
      <div className="rounded-100">100</div>
      <div className="rounded-150">150</div>
      <div className="rounded-200">200</div>
      <div className="rounded-300">300</div>
      <div className="rounded-400">400</div>
      <div className="rounded-none">none</div>
      <div className="rounded-full">full</div>
      {/* Deprecated values */}
      <div className="rounded-small">small</div>
      <div className="rounded-normal">normal</div>
      <div className="rounded-large">large</div>
      <div className="rounded-circle">circle</div>
    </div>
  );
};

export default BorderRadius;
