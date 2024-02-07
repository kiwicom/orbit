import { defineConfig, devices } from "@playwright/experimental-ct-react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "src",
  testMatch: "**/*.ct.tsx",
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: process.env.CI != null,
  retries: process.env.CI == null ? 0 : 2,
  workers: process.env.CI == null ? undefined : 1,
  reporter: process.env.CI == null ? "list" : "blob",
  expect: {
    toHaveScreenshot: {
      threshold: 0.01, // default is 0.2 and that is way too lax, gives false negatives
      maxDiffPixels: 10, // default is 0 and was causing problems with icons that were off by a single pixel
    },
  },
  use: {
    trace: "on-first-retry",
    testIdAttribute: "data-test",
    ctPort: 3100,
  },
  projects: [
    {
      name: "Small Mobile",
      use: {
        ...devices["iPhone SE"],
        viewport: {
          ...devices["iPhone SE"].viewport,
          width: 320, // no breakpoint for this
        },
      },
    },
    {
      name: "Medium Mobile",
      use: {
        ...devices["iPhone 14"],
        viewport: {
          ...devices["iPhone 14"].viewport,
          width: defaultTokens.breakpointMediumMobile,
        },
      },
    },
    {
      name: "Large Mobile",
      use: {
        ...devices["iPhone 14 Plus"],
        viewport: {
          ...devices["iPhone 14 Plus"].viewport,
          width: defaultTokens.breakpointLargeMobile,
        },
      },
    },
    {
      name: "Tablet",
      use: {
        ...devices["iPad (gen 7)"],
        viewport: {
          ...devices["iPad (gen 7)"].viewport,
          width: defaultTokens.breakpointTablet,
        },
      },
    },
    {
      name: "Desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: {
          ...devices["Desktop Chrome"].viewport,
          width: defaultTokens.breakpointDesktop,
        },
      },
    },
    {
      name: "Large Desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: {
          ...devices["Desktop Chrome"].viewport,
          width: defaultTokens.breakpointLargeDesktop,
        },
      },
    },
  ],
});
