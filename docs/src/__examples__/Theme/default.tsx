import React from "react";
import { Button, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return (
      <Stack>
        {/* Default Orbit styling using Tailwind classes */}
        <div className="bg-white-normal rounded-large p-4">
          <Button type="primary">Default Theme Button</Button>
        </div>

        {/* Custom themed section using Tailwind classes */}
        <div className="bg-product-light rounded-large p-4">
          <p className="text-product-dark mb-2">Using Orbit Tailwind preset colors</p>
          <Button type="primary">Themed Button</Button>
        </div>

        {/* Responsive design example */}
        <div className="bg-white-normal sm:bg-product-light md:bg-blue-light rounded-large p-4">
          <p className="text-product-dark mb-2">Responsive theming with Tailwind</p>
          <Button type="primary">Responsive Theme</Button>
        </div>
      </Stack>
    );
  },
};
