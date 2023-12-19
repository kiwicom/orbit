import React from "react";

const Buttons = () => {
  return (
    <div className="flex flex-col space-y-4">
      <button className="bg-button-primary-background text-button-primary-foreground" type="button">
        primary
      </button>
      <button
        className="bg-button-secondary-background text-button-secondary-foreground"
        type="button"
      >
        secondary
      </button>
      <button className="bg-button-warning-background text-button-warning-foreground" type="button">
        warning
      </button>
      <button className="bg-button-success-background text-button-success-foreground" type="button">
        success
      </button>
      <button
        className="bg-button-critical-background text-button-critical-foreground"
        type="button"
      >
        critical
      </button>
      <button className="bg-button-info-background text-button-info-foreground" type="button">
        info
      </button>
    </div>
  );
};

export default Buttons;
