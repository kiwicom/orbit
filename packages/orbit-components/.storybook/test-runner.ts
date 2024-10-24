import type { TestRunnerConfig } from "@storybook/test-runner";
import { injectAxe, checkA11y } from "axe-playwright";

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, story) {
    const fileName = story.name.replace(/\s+/g, "");
    await checkA11y(
      page,
      ".story-content",
      {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
      },
      undefined,
      "html",
      {
        reportFileName: `${fileName}-result.html`,
      },
    );
  },
};

export default config;
