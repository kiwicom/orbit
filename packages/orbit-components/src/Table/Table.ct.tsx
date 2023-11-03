import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import Table, { TableBody, TableCell, TableHead, TableRow } from ".";

test.describe("visual", () => {
  test("screenshot", async ({ mount }) => {
    const component = await mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    await expect(component).toHaveScreenshot();
  });

  test("screenshot long", async ({ mount }) => {
    const component = await mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
            <TableCell>Badger badger badger badger</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    await expect(component).toHaveScreenshot();
  });

  test("screenshot hover", async ({ mount }) => {
    const component = await mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell dataTest="hover">Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
            <TableCell>Default</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    await component.getByTestId("hover").hover();

    await expect(component).toHaveScreenshot();
  });

  test("screenshot compact", async ({ mount }) => {
    const component = await mount(
      <Table compact>
        <TableHead>
          <TableRow>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
            <TableCell>Compact</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    await expect(component).toHaveScreenshot();
  });

  test("screenshot secondary", async ({ mount }) => {
    const component = await mount(
      <Table type="secondary">
        <TableHead>
          <TableRow>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
            <TableCell>Secondary</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    await expect(component).toHaveScreenshot();
  });

  test("screenshot non-striped", async ({ mount }) => {
    const component = await mount(
      <Table striped={false}>
        <TableHead>
          <TableRow>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
            <TableCell>No stripes</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    await expect(component).toHaveScreenshot();
  });
});
