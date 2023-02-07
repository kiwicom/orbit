const DESKTOP_USERAGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36";

const throttling = {
  rttMs: 40,
  throughputKbps: 10 * 1024,
  cpuSlowdownMultiplier: 1,
  requestLatencyMs: 0, // 0 means unset
  downloadThroughputKbps: 0,
  uploadThroughputKbps: 0,
};

const screenEmulation = {
  mobile: false,
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  disabled: false,
};

export default {
  extends: "lighthouse:default",
  // plugins: ["lighthouse-plugin-field-performance"],
  settings: {
    formFactor: "desktop",
    screenEmulation,
    maxWaitForLoad: 60 * 2000,
    // psiToken: "AIzaSyDjl1UeUUDec38ueLIrMXUYg1XDJeENThI",
    throttling,
    noErrorReporting: true,
    // emulatedUserAgent: DESKTOP_USERAGENT,
    disableFullPageScreenshot: true,
    onlyAudits: [
      "first-contentful-paint",
      "first-meaningful-paint",
      "interactive",
      "total-blocking-time",
      "max-potential-fid",
      "speed-index",
      "largest-contentful-paint",
      "cumulative-layout-shift",
    ],
  },
};
