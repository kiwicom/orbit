import React from "react";
import { Button, Text, Heading, Stack } from "@kiwicom/orbit-components";

export default function TailwindTest() {
  return (
    <div className="p-400 rounded-100 border-blue-normal bg-cloud-light border-2">
      <Stack spacing="400">
        <Heading type="title3">Tailwind + Orbit Test</Heading>

        <Text>
          If you can see this styled correctly, both Tailwind CSS and OrbitProvider are working!
        </Text>

        <div className="mt-300 space-y-200">
          <div className="p-200 rounded-100 bg-green-light">✅ Tailwind utilities working</div>
          <div className="p-200 rounded-100 bg-red-light">
            ✅ Orbit spacing (p-200, mt-300, mb-200) working
          </div>
          <Button type="primary">✅ Orbit components working</Button>
        </div>
      </Stack>
    </div>
  );
}
