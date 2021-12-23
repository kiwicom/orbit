import path from "path";
import os from "os";

import { Scope } from "./interfaces";

export const PROJECTS: Record<Scope, string> = {
  booking: "3993",
  frontend: "104",
  search: "1483",
  account: "2127",
  mmb: "2788",
  core: "3371",
  balkan: "616",
  "smart-faq": "1399",
};

export const SCOPE = Object.keys(PROJECTS) as Scope[];

export const TMP_FOLDER = path.join(os.tmpdir(), "orbit-tracking-temp", "temp");

export const BASE_URL = `https://gitlab.skypicker.com/api/graphql/`;

export const CATEGORIES = {
  ACTION: ["Button", "ButtonGroup", "ButtonLink", "ButtonMobileStore", "SocialButton", "TextLink"],
  STRUCTURE: [
    "Accordion",
    "AccordionSection",
    "Card",
    "CardHeader",
    "CardSection",
    "List",
    "ListItem",
    "PricingTable",
    "PricingTableItem",
    "Separator",
    "Table",
    "TableRow",
    "TableSection",
    "TableFooter",
    "TableBody",
    "TableCell",
    "TableHead",
    "Tabs",
    "Tile",
    "TileGroup",
  ],
  INFORMATION: ["Alert", "Badge", "BadgeList", "BadgeListItem", "NotificationBadge", "Toast"],
  OVERLAY: [
    "Dialog",
    "Drawer",
    "Modal",
    "ModalHeader",
    "ModalSection",
    "ModalFooter",
    "Popover",
    "Tooltip",
  ],
  INPUT: [
    "Checkbox",
    "ChoiceGroup",
    "InputField",
    "InputFile",
    "InputGroup",
    "InputStepper",
    "ListChoice",
    "Radio",
    "Select",
    "Textarea",
  ],
  ACCESSIBILITY: ["SkipLink", "SkipNavigation"],
  INTERACTION: ["Collapse", "Slider", "Stepper", "Switch", "Tag"],
  VISUALS: [
    "AirportIllustration",
    "CallOutBanner",
    "CarrierLogo",
    "CountryFlag",
    "Coupon",
    "FeatureIcon",
    "Icon",
    "Illustration",
    "PictureCard",
    "RatingStars",
    "Seat",
    "ServiceLogo",
    "StopoverArrow",
  ],
  TEXT: ["Heading", "Text"],
  PROGRESS_INDICATORS: [
    "EmptyState",
    "Loading",
    "Skeleton",
    "Timeline",
    "TimelineStep",
    "Wizard",
    "WizardStep",
  ],
  NAVIGATION: ["Breadcrumbs", "LinkList", "NavigationBar", "Pagination"],
  LAYOUT: ["Box", "Grid", "HorizontalScroll", "Inline", "Layout", "LayoutColumn", "Stack"],
  RESPONSIVE: ["Desktop", "Hide", "Mobile"],
  UTILITY: ["Portal", "Sticky", "Truncate"],
  PRIMITIVES: ["BadgePrimitive", "ButtonPrimitive", "IllustrationPrimitive"],
};
