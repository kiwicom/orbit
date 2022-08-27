export enum LAYOUT_OPTIONS {
  SEARCH = "Search",
  BOOKING = "Booking",
  MMB = "MMB",
}

export const LAYOUT_SETTINGS = {
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
      0: {
        hideOn: ["smallMobile", "mediumMobile", "largeMobile"],
        as: "aside",
      },
      1: {
        as: "main",
      },
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
      0: {
        spanEntireRow: true,
      },
      1: {
        as: "main",
      },
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
      0: {
        as: "main",
      },
    },
  },
};

export default LAYOUT_SETTINGS;
