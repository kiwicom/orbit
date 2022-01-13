// @flow
export const LAYOUT_OPTIONS = {
  SEARCH: "Search",
  BOOKING: "Booking",
  MMB: "MMB",
};

export const LAYOUT_SETTINGS: {|
  Booking: {|
    columnGap: string,
    columns: string,
    rowGap: string,
    desktop: {| columnGap: string |},
    layoutColumns: { ... },
    maxWidth: string,
    tablet: {| columns: string |},
  |},
  MMB: {|
    columnGap: string,
    columns: string,
    desktop: {| columnGap: string |},
    layoutColumns: { ... },
    maxWidth: string,
  |},
  Search: {|
    columnGap: string,
    columns: string,
    desktop: {| columnGap: string |},
    largeDesktop: {| columns: string |},
    layoutColumns: { ... },
    maxWidth: string,
    tablet: {| columns: string |},
  |},
|} = {
  [LAYOUT_OPTIONS.SEARCH]: {
    columns: "1fr",
    columnGap: "16px",
    maxWidth: "1440px",
    tablet: {
      columns: "minmax(256px, 3fr) 7fr",
    },
    desktop: {
      columnGap: "24px",
    },
    largeDesktop: {
      columns: "256px 1fr 288px",
    },
    layoutColumns: {
      // $FlowIssue
      0: {
        hideOn: ["smallMobile", "mediumMobile", "largeMobile"],
        as: "aside",
      },
      // $FlowIssue
      1: {
        as: "main",
      },
      // $FlowIssue
      2: {
        hideOn: ["smallMobile", "mediumMobile", "largeMobile", "tablet", "desktop"],
      },
    },
  },
  [LAYOUT_OPTIONS.BOOKING]: {
    columns: "1fr",
    columnGap: "16px",
    rowGap: "16px",
    maxWidth: "1200px",
    tablet: {
      columns: "7fr minmax(272px, 3fr)",
    },
    desktop: {
      columnGap: "24px",
    },
    layoutColumns: {
      // $FlowIssue
      0: {
        spanEntireRow: true,
      },
      // $FlowIssue
      1: {
        as: "main",
      },
      // $FlowIssue
      2: {
        as: "aside",
      },
    },
  },
  [LAYOUT_OPTIONS.MMB]: {
    columns: "1fr",
    columnGap: "16px",
    maxWidth: "960px",
    desktop: {
      columnGap: "24px",
    },
    layoutColumns: {
      // $FlowIssue
      0: {
        as: "main",
      },
    },
  },
};

export default LAYOUT_SETTINGS;
