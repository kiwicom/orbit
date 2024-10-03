

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [17.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@16.2.0...@kiwicom/orbit-components@17.0.0) (2024-10-03)

#### Bug Fixes

*   **Accordion:** spacing with no actions was wrong ([255b322](https://github.com/kiwicom/orbit/commit/255b3223125ee0e4e62eb6f05ed09a3f1c7f2ba3))

#### Features

*   **icons:** add X icon ([21a8cba](https://github.com/kiwicom/orbit/commit/21a8cbaba1d4d6c5fec9ea21253933b6cac95e21))
*   **icons:** remove ColoredTwitter icon ([d039f15](https://github.com/kiwicom/orbit/commit/d039f15549f13da336ee65839642d84af9e600f0))
*   **icons:** remove Twitter icon ([879cb0c](https://github.com/kiwicom/orbit/commit/879cb0cc7cf2b783b972364d03da96d64a3a434c))
*   **SocialButton:** replace twitter type by X ([dbeca13](https://github.com/kiwicom/orbit/commit/dbeca13f0c584277b7cde2ae16431dd8a2e51bf7))

#### BREAKING CHANGES

*   **SocialButton:** SocialButton's type prop no longer accepts "twitter".
    "X" type is now accepted.
*   **icons:** Twitter icon was removed. X icon should be used instead.
*   **icons:** The `ColoredTwitter` icon was removed.
    Use the `Twitter` icon instead.

## [16.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@16.1.0...@kiwicom/orbit-components@16.2.0) (2024-09-19)

#### Bug Fixes

*   **Alert:** displayed icons for some types were incorrect ([b86b3a6](https://github.com/kiwicom/orbit/commit/b86b3a6c51b8735c5e16f5d7af023ee387c6d810))
*   **ButtonPrimitive:** make button text non-selectable ([baa1777](https://github.com/kiwicom/orbit/commit/baa177780856a42aa3dd76a2024bd1c5344e1d4e))
*   **Checkbox:** make checkmark icon always visible for checked state ([3faa9b8](https://github.com/kiwicom/orbit/commit/3faa9b88ec7b1380df351d7981234330f4cd2991))
*   **FormLabel:** ensure correct color ([21a1ae2](https://github.com/kiwicom/orbit/commit/21a1ae2f4ff9f00db010e5866a56e75b9074b093))
*   **Tabs:** ensure correct color when not active ([3a5bcd1](https://github.com/kiwicom/orbit/commit/3a5bcd1686a9b6aa739aeb66d8d23f66526f3bc8))

#### Features

*   **icons:** update icons from figma ([82b651f](https://github.com/kiwicom/orbit/commit/82b651ff56efe0508786cd7fdb02fd86bec261fa))

## [16.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@16.0.1...@kiwicom/orbit-components@16.1.0) (2024-09-05)

#### Bug Fixes

*   **ErrorFormTooltip:** align text and close button ([aa0f4fa](https://github.com/kiwicom/orbit/commit/aa0f4fae2bdba933b0caf361f8657726a6452960))

#### Features

*   **Box:** add new value for borderRadius 200 prop ([09a409e](https://github.com/kiwicom/orbit/commit/09a409e51579ee8daa796a4b7d645efe56a7fe01))
*   **icons:** update icons from figma ([e7e27d5](https://github.com/kiwicom/orbit/commit/e7e27d523092705a05b3720e84874147cc05f3e0))

### [16.0.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@16.0.0...@kiwicom/orbit-components@16.0.1) (2024-08-22)

#### Bug Fixes

*   **InputSelect:** ensure consistent options when titles are repeated ([6eb0d75](https://github.com/kiwicom/orbit/commit/6eb0d75f65bd98a66e71c456e607e04e312ed83c))

## [16.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.11.0...@kiwicom/orbit-components@16.0.0) (2024-08-14)

#### Features

*   add shadow transformations to codemod ([5779fcf](https://github.com/kiwicom/orbit/commit/5779fcfb563f1e58baf253244d3bfd1384e85771))
*   **Box:** add new values for borderRadius prop and deprecate others ([3afe158](https://github.com/kiwicom/orbit/commit/3afe158d9ac902408eb5a64a5413fe3a1d98499a))
*   **Box:** add new values for elevation prop and deprecate others ([6102a6d](https://github.com/kiwicom/orbit/commit/6102a6ddf0f00f998d6935c58005bb40c34bf85e))
*   **Box:** add new values to margin and padding props, and deprecate old ones ([5b3b418](https://github.com/kiwicom/orbit/commit/5b3b41881c87a8eb541823c7985732e60eea9294))
*   create codemod for new tokens and tailwind classes ([643dcc5](https://github.com/kiwicom/orbit/commit/643dcc50ae169840dee6c13c3c2a9e915e167055))
*   **Heading:** add title0 type ([1f79dd7](https://github.com/kiwicom/orbit/commit/1f79dd7c8ad3c85f2ecd5b20f050f53c8d761f91))
*   **HorizontalScroll:** add new values to spacing prop and deprecate old ones ([8cb2d2e](https://github.com/kiwicom/orbit/commit/8cb2d2ee7547a5f6e2e064f2eccd30155b167e43))
*   **icons:** add 3 new seat light icons ([67cd7a8](https://github.com/kiwicom/orbit/commit/67cd7a8e1709de1fcbf2611dca80d601c1510fd8))
*   **Inline:** add new values to spacing prop and deprecate old ones ([cb8d86d](https://github.com/kiwicom/orbit/commit/cb8d86d13d3764e0441b5ec3f3ac09bb9b745cd8))
*   **LinkList:** add new values to spacing prop and deprecate old ones ([0a60262](https://github.com/kiwicom/orbit/commit/0a60262760b2e5a8f19a6fab70c86b8ebd2b96f3))
*   **Separator:** add new values to sideOffset prop and deprecate old ones ([008317b](https://github.com/kiwicom/orbit/commit/008317beb222e2c08961b9e0971052a46540e62d))
*   **Stack:** add new values to spacing prop and deprecate old ones ([a2a207a](https://github.com/kiwicom/orbit/commit/a2a207ae9a1c26a7b81d90916c2a8c1afd00cf35))
*   **Tabs:** add new values to spacing prop and deprecate old ones ([528aa68](https://github.com/kiwicom/orbit/commit/528aa68e196808950adccac279f8e4cae07f32cf))

#### BREAKING CHANGES

*   **Heading:** `type="title1"` should be replaced by `type="title0"` to avoid visual breaking change.

## [15.11.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.10.1...@kiwicom/orbit-components@15.11.0) (2024-08-08)

#### Bug Fixes

*   **Alert:** adjust styles when closable is true and inlineActions is set ([2a9e765](https://github.com/kiwicom/orbit/commit/2a9e765829f49716dbaeacf03947dc9b778066b2))

#### Features

*   **icons:** add MenuCircle icon ([5427052](https://github.com/kiwicom/orbit/commit/5427052fdfcbfdd970db65e489fcce2b59e39909))

### [15.10.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.10.0...@kiwicom/orbit-components@15.10.1) (2024-08-01)

#### Bug Fixes

*   **InputField:** adjust styles when readOnly is true ([af858b2](https://github.com/kiwicom/orbit/commit/af858b29645a68d4b0f2814cc0a41cdf2555c339))
*   **InputSelect:** adjust styles and functionality when readOnly is true ([f84e257](https://github.com/kiwicom/orbit/commit/f84e257fb4e80cc394d3fd66229632065a035946))
*   **SegmentedSwitch:** fix border radius in RTL ([f10068c](https://github.com/kiwicom/orbit/commit/f10068c098be77e3042cbcf3c9743f54baab6a89))
*   **Tag:** fix padding for iconLeft on RTL ([e901a03](https://github.com/kiwicom/orbit/commit/e901a03c2a5e00793eecc33fe47887d610e3cc06))

## [15.10.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.9.0...@kiwicom/orbit-components@15.10.0) (2024-07-25)

#### Bug Fixes

*   **SegmentedSwitch:** use blue normal text when selected ([e7f9158](https://github.com/kiwicom/orbit/commit/e7f9158f699b4ac0cf913e00b5f346fa0075b99c))

#### Features

*   **TextLink:** add support for data and aria attributes ([b22b858](https://github.com/kiwicom/orbit/commit/b22b8586fe7fca057f5848b567e4ac892195482e))

## [15.9.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.8.0...@kiwicom/orbit-components@15.9.0) (2024-07-18)

#### Features

*   **icons:** update twitter icon to 'X' design ([52ae537](https://github.com/kiwicom/orbit/commit/52ae5371bbbc9e17d7cac4a19d33626cd4e9514a))

## [15.8.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.7.0...@kiwicom/orbit-components@15.8.0) (2024-07-11)

#### Bug Fixes

*   **ButtonLink:** handle hover state on mobile ([f1820c7](https://github.com/kiwicom/orbit/commit/f1820c7e763be25824897319f17417156ae001e7))

#### Features

*   **icons:** update icons from figma ([4f5f6c2](https://github.com/kiwicom/orbit/commit/4f5f6c2cafec104a3a4954488c39537596c97602))
*   update minimum tailwindcss version to 3.4.4 ([e5a34ca](https://github.com/kiwicom/orbit/commit/e5a34ca86e790409b35b3ece2d3f99865899880b))

## [15.7.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.6.0...@kiwicom/orbit-components@15.7.0) (2024-07-04)

#### Bug Fixes

*   **Icon:** remove defaultProps in favour of default values ([4448925](https://github.com/kiwicom/orbit/commit/44489251d341085955a2288ffacd3ae7ec11e185))

#### Features

*   **Itinerary:** add onExpand and onCollapse props to ItinerarySegment ([df0c31b](https://github.com/kiwicom/orbit/commit/df0c31bff5cad0424925d4ca8c5be6ff0563e16a))

## [15.6.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.5.0...@kiwicom/orbit-components@15.6.0) (2024-06-28)

#### Bug Fixes

*   **Itinerary:** add type check for key prop in ItinerarySegmentDetail ([fbce4aa](https://github.com/kiwicom/orbit/commit/fbce4aa4c098d9053cd546d2e46e71f4b20b77fb))
*   **ItinerarySegmentStop:** simplify useWidth to only keep max value ([5a95105](https://github.com/kiwicom/orbit/commit/5a9510526218b51cd331292f13ce14f067388da7))

#### Features

*   **icons:** update icons from figma ([cf12467](https://github.com/kiwicom/orbit/commit/cf12467a20a279cc20610ea4e5a4b733f3313d28))

## [15.5.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.4.0...@kiwicom/orbit-components@15.5.0) (2024-06-13)

#### Bug Fixes

*   **Checkbox:** prevent changes on readOnly ([7d16638](https://github.com/kiwicom/orbit/commit/7d16638df0e2a889815b86a4ca302c7a106afd74))

#### Features

*   **icons:** update icons from figma ([57833af](https://github.com/kiwicom/orbit/commit/57833affaaaac10e6b05c10fc152ca3f852749cd))

## [15.4.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.3.1...@kiwicom/orbit-components@15.4.0) (2024-06-06)

#### Features

*   **Radio:** update component visually to match latest Figma ([4ff0c15](https://github.com/kiwicom/orbit/commit/4ff0c15214af2a59bacf41c661e56ffe033d22f3))

### [15.3.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.3.0...@kiwicom/orbit-components@15.3.1) (2024-05-31)

#### Bug Fixes

*   **ItinerarySegment:** ensure text wraps instead of being truncated ([1cddf73](https://github.com/kiwicom/orbit/commit/1cddf732f9f3dd08d3cfc085ed93a3f36054e93e))

## [15.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.2.0...@kiwicom/orbit-components@15.3.0) (2024-05-23)

#### Features

*   **icons:** update icons from figma ([3e5821d](https://github.com/kiwicom/orbit/commit/3e5821d0ebfcc208f6e438ff2cbd583643653516))
*   **ServiceLogo:** add Simtex logo ([1de2603](https://github.com/kiwicom/orbit/commit/1de2603135bec2d7a624b3ae7308d98689001a84))

## [15.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.1.1...@kiwicom/orbit-components@15.2.0) (2024-05-16)

#### Bug Fixes

*   **Itinerary:** clickable area is now more accurate ([1c50583](https://github.com/kiwicom/orbit/commit/1c5058331eabb4fd0c258c2cf63e1ed79b14624b))

#### Features

*   **ServiceLogo:** add GetYourGuideLong logo ([ace0a71](https://github.com/kiwicom/orbit/commit/ace0a713c1513fe4293370a2fc480cbb034ae28b))

### [15.1.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.1.0...@kiwicom/orbit-components@15.1.1) (2024-04-25)

#### Bug Fixes

*   **InputSelect:** it now filters options when they change via props ([681634a](https://github.com/kiwicom/orbit/commit/681634a9a6ae05e985d8b9d5aaa26fe730b70520))

## [15.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@15.0.0...@kiwicom/orbit-components@15.1.0) (2024-04-18)

#### Bug Fixes

*   **Modal:** overflow now works correctly on large mobile and bigger ([6645070](https://github.com/kiwicom/orbit/commit/6645070fc869e6b819644cfe2d9dc3e4d628ada6))

#### Features

*   **ServiceLogo:** add Sherpa logo ([4c9d318](https://github.com/kiwicom/orbit/commit/4c9d318485e1256efa92e818abae9acdfa3180f2))

## [15.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@14.1.0...@kiwicom/orbit-components@15.0.0) (2024-04-04)

#### Features

*   **OrbitProvider:** replace ThemeProvider from SC by a custom one ([db0d8f4](https://github.com/kiwicom/orbit/commit/db0d8f44162e0fa6f3ca6b92f0162a384cb9ef6d))
*   remove mediaQueries ([8861191](https://github.com/kiwicom/orbit/commit/88611916dbc9fac9bb2774f8e12e4fd96e91811e))
*   remove rtl utils ([e76c186](https://github.com/kiwicom/orbit/commit/e76c1862a6fb008080a14e0cc7b495e360020193))
*   remove styled-components dependency ([6b1277c](https://github.com/kiwicom/orbit/commit/6b1277c8acda5b296c9f788468e7e342dc56e33f))

#### BREAKING CHANGES

*   **OrbitProvider:** Styled-Components' ThemeProvider is no longer used in OrbitProvider.
    If you still need styled-components capabilities, you should add the ThemeProvider from styled-components to your app and pass it the same theme.
*   rtl styled-components utils removed.
*   mediaQueries function is no longer available.
    This was a styled-components util function that is now no longer meant to be used.
    Tokens and breakpoint values are still accessible.

## [14.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@14.0.0...@kiwicom/orbit-components@14.1.0) (2024-04-04)

#### Bug Fixes

*   **Icon:** icon components props are now correctly typed ([33cecc8](https://github.com/kiwicom/orbit/commit/33cecc87bfb1ec41c2e8449d0339e996ad60b381))
*   **Itinerary:** fix dates alignment in RTL ([6034467](https://github.com/kiwicom/orbit/commit/603446744ef51c35a757d7b9b63996e3b8d7d452))
*   **Itinerary:** text now wraps instead of overflowing ([482636f](https://github.com/kiwicom/orbit/commit/482636fa89d8096643ebd505b95d5cbd1289b4bd))
*   **Modal:** ensure the Modal body can scroll ([7b1ac0b](https://github.com/kiwicom/orbit/commit/7b1ac0b564acdb76f358b528a54a4ba159375452))

#### Features

*   **Wizard:** migrate to tailwind ([fe12927](https://github.com/kiwicom/orbit/commit/fe129276114da710da0be22a336b3ce60b616570))

## [14.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@13.1.0...@kiwicom/orbit-components@14.0.0) (2024-03-14)

#### Bug Fixes

*   **Modal:** fix bottom border radius when isMobileFullPage ([4a402f9](https://github.com/kiwicom/orbit/commit/4a402f986c079f87fbc0911b024073046ac20e14))

#### Features

*   **CallOutBanner:** migrate to tailwind ([047158b](https://github.com/kiwicom/orbit/commit/047158bec7c941b10423f0684bd000a112678144))
*   delete BaggageStepper component ([74d8f55](https://github.com/kiwicom/orbit/commit/74d8f55ffd044e675784305246129e283b344fc9))
*   deprecate toggleUp and toggleDown utilities ([fe2ed30](https://github.com/kiwicom/orbit/commit/fe2ed3024a4f61c0ae08ed6273f30926fdd118c8))
*   **Inline:** migrate to tailwind ([22464a6](https://github.com/kiwicom/orbit/commit/22464a6f85e26f5a03e5a26c0833c9c70a2b621b))
*   **InputSelect:** migrate to tailwind ([3b6617b](https://github.com/kiwicom/orbit/commit/3b6617b96e850726be2ea03b7a5dc6da8dc8f741))
*   **Itinerary:** migrate to Tailwind ([4628d1c](https://github.com/kiwicom/orbit/commit/4628d1cd650892837ea0cca445c4f0e1d41db2b6))
*   **Pagination:** migrate to tailwind ([c440d74](https://github.com/kiwicom/orbit/commit/c440d74669fa74505827790add9bbe581b6187cb))
*   remove deprecated components ([277724d](https://github.com/kiwicom/orbit/commit/277724d5e1fdefcf33e4da6421beaf2bb3abc9a3))
*   **Seat:** migrate to tailwind ([079105b](https://github.com/kiwicom/orbit/commit/079105b5b6b6055d0dc1c35a9eb65024ba192f53))
*   **ServiceLogo:** migrate to tailwind ([357c5fc](https://github.com/kiwicom/orbit/commit/357c5fc9d7212bdf3ebf9e738ca651b76fd9bdab))
*   **SkipLink:** migrate to tailwind ([a2eb45f](https://github.com/kiwicom/orbit/commit/a2eb45f4787eda5fcac735e71813f0ac17457c09))
*   **SkipNavigation:** migrate to tailwind ([e89fe8c](https://github.com/kiwicom/orbit/commit/e89fe8ca95938168e92c271fde319fcdba3656e1))
*   **Timeline:** migrate to tailwind ([6fdc700](https://github.com/kiwicom/orbit/commit/6fdc700fabcb4d43908964bd1557a94948135caf))

#### BREAKING CHANGES

*   deprecated components were removed: ClickOutside, Desktop, Mobile and KeyValue
*   remove BaggageStepper component

The BaggageStepper component has been removed as it was not being used.
Please use the Stepper component instead.

## [13.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@13.0.0...@kiwicom/orbit-components@13.1.0) (2024-03-07)

#### Features

*   **Coupon:** migrate to tailwind ([6827ccb](https://github.com/kiwicom/orbit/commit/6827ccbfd4b37f4b7e0b41b853d0d962fd8b8c8f))
*   **Slide:** migrate to tailwind ([aa55f45](https://github.com/kiwicom/orbit/commit/aa55f45a107c021905a964f2018b576f0847b6aa))
*   **StopoverArrow:** migrate to tailwind ([e676cc0](https://github.com/kiwicom/orbit/commit/e676cc0f7f4ede7083edfcafc8fcb5e8f77b6566))

## [13.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.4.0...@kiwicom/orbit-components@13.0.0) (2024-02-29)

#### Features

*   **Accordion:** migrate to tailwind ([b378203](https://github.com/kiwicom/orbit/commit/b378203f0768641a27f2b1744a8ddfe39f8d5aec))
*   **Illustration:** add FlightChange illustration ([b90bcab](https://github.com/kiwicom/orbit/commit/b90bcab400e5e215494df203e7b4a03799a95e84))
*   **LayoutColumn:** migrate to tailwind ([db69d5d](https://github.com/kiwicom/orbit/commit/db69d5df0ecd247ae60aa506c0a8e6085056f629))
*   **ServiceLogo:** add AxaWhite logo ([3c0b3c9](https://github.com/kiwicom/orbit/commit/3c0b3c982f8f4a00c64dccfe595f161e33e9135f))

#### BREAKING CHANGES

*   **LayoutColumn:** removed hideOn prop from LayoutColumn

## [12.4.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.3.0...@kiwicom/orbit-components@12.4.0) (2024-02-19)

#### Bug Fixes

*   **Modal:** fix border radius on isMobileFullPage ([5f71d77](https://github.com/kiwicom/orbit/commit/5f71d773d5a7aac2d97a04151815d94f5b103023))
*   **Wizard:** don't wrap progress label ([0374d19](https://github.com/kiwicom/orbit/commit/0374d1977a05e02e78c34c2ee3908c86181ee38c))

#### Features

*   **HorizontalScroll:** migrate to tailwind ([b80eef4](https://github.com/kiwicom/orbit/commit/b80eef42ad3545acc77ed427fb8d9cbcec415ed5))
*   **Slider:** migrate to tailwind ([7b29005](https://github.com/kiwicom/orbit/commit/7b290058dd32f1211db3a653f4d418a1f0ed9345))

## [12.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.2.0...@kiwicom/orbit-components@12.3.0) (2024-02-08)

#### Features

*   **Icon:** migrate to Tailwind ([6ac12ec](https://github.com/kiwicom/orbit/commit/6ac12ecda9fd63e308ae67296d71160302b38fe5))
*   **ServiceLogo:** add ApplePay and GooglePay logos ([4cd14aa](https://github.com/kiwicom/orbit/commit/4cd14aaa9417dd76e451118b71717848c64c0762))
*   **Tag:** migrate to Tailwind ([436d54f](https://github.com/kiwicom/orbit/commit/436d54fddb7f9517b18e2a6da442ee4d002d7cfc))

## [12.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.1.2...@kiwicom/orbit-components@12.2.0) (2024-01-25)

#### Features

*   **FeatureIcon:** migrate to Tailwind ([0ed3ae6](https://github.com/kiwicom/orbit/commit/0ed3ae61475c9d62269453b0c2ae42195a920c67))
*   **Illustration:** add DepartureBoard, DepartureBoardBadge and DepartureBoardLounge illustrations ([cae7bd7](https://github.com/kiwicom/orbit/commit/cae7bd7eb0bd29f99938adde13d771a8a001f018))

### [12.1.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.1.1...@kiwicom/orbit-components@12.1.2) (2024-01-18)

#### Bug Fixes

*   **Card:** remove loosy equality check for children in CardSection ([8eb5e6f](https://github.com/kiwicom/orbit/commit/8eb5e6f7d36c33fd7169cbaa119759f8625a3ee9))

### [12.1.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.1.0...@kiwicom/orbit-components@12.1.1) (2024-01-16)

#### Bug Fixes

*   **Itinerary:** add overflow:hidden to ItinerarySegmentDetail ([c4f2e3c](https://github.com/kiwicom/orbit/commit/c4f2e3ce22735123ef83b374a77139caa5af18be))
*   **Itinerary:** icon sizes were incorrect inside SegmentDetail ([7658f45](https://github.com/kiwicom/orbit/commit/7658f456c328faea6fefa35ee658e64014929d51))
*   **Loading:** remove redundant padding and get back icon 20px size ([3f17fcd](https://github.com/kiwicom/orbit/commit/3f17fcd3a608f2f732c8e1554a62785020e57540))
*   **Modal:** check if e.target.className exists ([4d33c99](https://github.com/kiwicom/orbit/commit/4d33c991d46782b4d4304dc36b524486d2a7ac24))
*   **Modal:** remove modal header transition on mobile ([7c10d8d](https://github.com/kiwicom/orbit/commit/7c10d8deaa81c1e02886842849fdb8aa7fda6b22))

## [12.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.0.1...@kiwicom/orbit-components@12.1.0) (2024-01-11)

#### Bug Fixes

*   **Breadcrumbs:** remove extra top spacing on mobile ([007b1c2](https://github.com/kiwicom/orbit/commit/007b1c2fd18cb2f5ce985e6b0a96a067b78f10f4))
*   **Card:** border radius incorrectly set on mobile ([ed222eb](https://github.com/kiwicom/orbit/commit/ed222ebbf8637fec6f6332555c0c65d09dd7c921))

#### Features

*   **ButtonPrimitive:** improve accessibility by using type and role ([ca2e5d9](https://github.com/kiwicom/orbit/commit/ca2e5d9606a0a60c459ea0da72e2de9ac7c97e0f))

### [12.0.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@12.0.0...@kiwicom/orbit-components@12.0.1) (2024-01-05)

#### Bug Fixes

*   **ButtonPrimitive:** add missing flex-auto ([70dcfcd](https://github.com/kiwicom/orbit/commit/70dcfcdc2dc82204ddfd5040f729507f95bd31e9))

## [12.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@11.3.2...@kiwicom/orbit-components@12.0.0) (2024-01-04)

#### Features

*   remove flow types ([336137a](https://github.com/kiwicom/orbit/commit/336137a49847531824c4edca61265b5ade58da5b))

#### BREAKING CHANGES

*   deprecated flow types removed. Typescript is the only typing solution supported now.

### [11.3.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@11.3.1...@kiwicom/orbit-components@11.3.2) (2024-01-04)

#### Bug Fixes

*   **BadgePrimitive:** fix min height ([13fa300](https://github.com/kiwicom/orbit/commit/13fa30046afa8b81b4cf9931e2116dafb8203149))
*   **ButtonPrimitive:** add missing shrink-0 and grow-0 ([1b1444c](https://github.com/kiwicom/orbit/commit/1b1444ca5eb5284f45e76793a5f081c04bcbc164))
*   **ButtonPrimitive:** width prop now works as expected ([88b5047](https://github.com/kiwicom/orbit/commit/88b5047eaee3de9ab639ce49d38afd55ea9c7b3f))
*   **Itinerary:** some text wasn't truncating properly ([e6157ea](https://github.com/kiwicom/orbit/commit/e6157ea6131c7a00790fead9de1780b4ef5a2be9))
*   **Layout:** get back correct spacing for Card on Mobile ([e0d4e50](https://github.com/kiwicom/orbit/commit/e0d4e50ae2039805937321d1b0a40df1b2b40975))
*   **Popover:** fix max-height when content has actions ([798d7c4](https://github.com/kiwicom/orbit/commit/798d7c4d92532c882e4fc5dd70bfc0f362f80b27))
*   **TimelineStep:** move subLabel below timeline ([660387a](https://github.com/kiwicom/orbit/commit/660387a338320f5401be1f49e27da8cb1292a444))

### [11.3.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@11.3.0...@kiwicom/orbit-components@11.3.1) (2023-12-14)

#### Bug Fixes

*   **ButtonPrimitive:** do not force icon sizes in children ([5b865ae](https://github.com/kiwicom/orbit/commit/5b865ae5c914df7436d80dae60f575ec7bf282ab))
*   **Drawer:** noPadding should affect only wrapper ([11c2ce0](https://github.com/kiwicom/orbit/commit/11c2ce0eaefffa7012c39b7031e4bccaa0a1c054))
*   **Hide:** fix "smallMobile" for screens of size 0-320px ([af5a84c](https://github.com/kiwicom/orbit/commit/af5a84ca3c7ea8a5eba60a503edfbcb8df7c5fa9))
*   **List:** fix ListItem centering bug ([ff172eb](https://github.com/kiwicom/orbit/commit/ff172ebd85e654d4491df0b4a6de98a4c905ee91))
*   **OrbitProvider:** be more defensive when transforming palette colors to RGBA ([0209a65](https://github.com/kiwicom/orbit/commit/0209a656c0c5c43de11999b08e98a4840130666c))
*   **Popover:** remove redundant max-w-fit class ([8247324](https://github.com/kiwicom/orbit/commit/8247324c5070106f3e383d9ba8caa7c8ba70d32e))
*   **Stepper:** fix disabled background color ([4a61be6](https://github.com/kiwicom/orbit/commit/4a61be6e934dd1baf0ff2491fb6f6e30a947d594))
*   **Switch:** cursor not applied on input ([edfc88b](https://github.com/kiwicom/orbit/commit/edfc88b8abade5053f1710a2f0a1a71575b3994d))

## [11.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@11.2.0...@kiwicom/orbit-components@11.3.0) (2023-12-05)

#### Bug Fixes

*   **TimelineStep:** remove redundant spaceAfter ([f6fcd90](https://github.com/kiwicom/orbit/commit/f6fcd904d34ad9e19e07489478446cb362388c29))
*   **Timeline:** timeline and subLabel height issue ([afc018a](https://github.com/kiwicom/orbit/commit/afc018a2059b2063dc33f48f60ff35808c0b0e02))

#### Features

*   **ServiceLogo:** add GetYourGuide logo ([c883823](https://github.com/kiwicom/orbit/commit/c8838239009c753ddfe147dca6057f4eece059fb))
*   **TimelineStep:** make children optional ([59d03fc](https://github.com/kiwicom/orbit/commit/59d03fc27685028ae1067038a46f00347fd5c3f7))

## [11.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@11.1.1...@kiwicom/orbit-components@11.2.0) (2023-12-04)

#### Bug Fixes

*   **Layout:** remove accidental props pass to Grid ([e7f47d2](https://github.com/kiwicom/orbit/commit/e7f47d25f16ca5cda5d07a308245e87b823185b5))
*   **List:** fix ListItem icon size ([6afd3b9](https://github.com/kiwicom/orbit/commit/6afd3b9bdbe0f83fad13db7532023a5db1029f2a))
*   **Popover:** links inside tooltips inside content are now clickable ([b7114a6](https://github.com/kiwicom/orbit/commit/b7114a65c0a44f4538df2e7d1dc3a3b715dd4e68))
*   **Stepper:** fix icon circle accoring to Figma ([9411b3e](https://github.com/kiwicom/orbit/commit/9411b3ed06e073d11de199c2c6820294b2a5e361))

#### Features

*   **Illustration:** add PassportUpdate ([e1d021d](https://github.com/kiwicom/orbit/commit/e1d021df047f8bcf2b7d835ac5bfa3ea5059fe9f))

### [11.1.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@11.1.0...@kiwicom/orbit-components@11.1.1) (2023-11-27)

#### Bug Fixes

*   **Popover:** use useRandomId hook instead of React.useId directly ([3b49d18](https://github.com/kiwicom/orbit/commit/3b49d1890826229f76f6041da4d9f268962e6d33))
*   **Stack:** remove height: 100% for justify and column ([c119130](https://github.com/kiwicom/orbit/commit/c1191306a477fecc2c35ed7eac0428ec43f74c26))

## [11.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@11.0.0...@kiwicom/orbit-components@11.1.0) (2023-11-23)

#### Bug Fixes

*   **Breadcrumbs:** the spaceAfter prop ([87f574a](https://github.com/kiwicom/orbit/commit/87f574ad1316d7fafd90ae296c7547880da9c193))
*   **Hide:** use native tailwind breakpoint range ([39aedd9](https://github.com/kiwicom/orbit/commit/39aedd9b6d3bc1fe78f77dde9821f0e36bcc2e36))
*   **InputField:** add white background ([a0b40a8](https://github.com/kiwicom/orbit/commit/a0b40a809f594e18f521403a309c73dc36aae340))
*   **ModalHeader:** mobile scroll header background ([93efe38](https://github.com/kiwicom/orbit/commit/93efe38ba30a3875b2eb6ac2d2c76a314e46ef23))
*   **Radio:** background only on circle, not label ([564ee17](https://github.com/kiwicom/orbit/commit/564ee17bdf3e7cfdb60fbb3c1ce6fe177a7da0f7))
*   **Stack:** do not apply flex styles, when not needed ([56983c1](https://github.com/kiwicom/orbit/commit/56983c1165afd0953394b6f9168cb30e9fae5734))

#### Features

*   **Popover:** migrate to Tailwind ([49a619f](https://github.com/kiwicom/orbit/commit/49a619f6c5cf15e88dbd71290f391e1b04568087))
*   **Tabs:** migrate to Tailwind ([b5fa16d](https://github.com/kiwicom/orbit/commit/b5fa16dab6fb713d397191adbf88ad8ca1a6626e))

## [11.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@10.3.0...@kiwicom/orbit-components@11.0.0) (2023-11-16)

#### Bug Fixes

*   **Card:** add missing w-full ([552e1d4](https://github.com/kiwicom/orbit/commit/552e1d410d919066a91455efd1ca8f344e69dbb3))
*   **Card:** only capture keys on expandable sections ([d536470](https://github.com/kiwicom/orbit/commit/d53647018cfd6bb95e9651bdfeac5f3a0d9139f4))
*   **TextLink:** add missing line-height ([58079b6](https://github.com/kiwicom/orbit/commit/58079b6a7321ab2611aee3b0d1b13018baed9664))
*   update the browserlist in package.json ([d692f47](https://github.com/kiwicom/orbit/commit/d692f47bd413705d7145ed7c5db8c36b25048e08))

#### Features

*   **ButtonMobileStore:** migrate to Tailwind ([74b5e27](https://github.com/kiwicom/orbit/commit/74b5e2744eb004ec4723d3daf049df2944b44652))
*   **Checkbox:** migrate to Tailwind ([1e1b944](https://github.com/kiwicom/orbit/commit/1e1b94401511489fb59cd49488fe9eb94d932bc5))
*   **ChoiceGroup:** migrate to Tailwind ([ee340dc](https://github.com/kiwicom/orbit/commit/ee340dce492b668a54f405fbde133c21057109b9))
*   **InputField:** migrate to Tailwind ([37a5719](https://github.com/kiwicom/orbit/commit/37a57198e698a696463a07028dc7af8b7197f3f4))
*   **InputGroup:** migrate to Tailwind ([b4aa75c](https://github.com/kiwicom/orbit/commit/b4aa75cc3061fc11774586e3c653577f140ec003))
*   **Radio:** migrate to Tailwind ([4178852](https://github.com/kiwicom/orbit/commit/4178852c615480a55ae4a44774bec651c8cac918))
*   **SegmentedSwitch:** migrate to Tailwind ([5930ffd](https://github.com/kiwicom/orbit/commit/5930ffdc37271832f15d6a80b192f02c45423cf1))
*   **Select:** migrate to Tailwind ([5b731ab](https://github.com/kiwicom/orbit/commit/5b731ab4382a9c21f246485510e64e54e2288cdd))
*   **Separator:** migrate to Tailwind ([23474b3](https://github.com/kiwicom/orbit/commit/23474b3156e22a17aec21317aa1185beef0b3757))
*   **Skeleton:** migrate to Tailwind ([dbdd6cc](https://github.com/kiwicom/orbit/commit/dbdd6cc81772df9f21420649ca1ea81929bd5944))
*   **Switch:** migrate to Tailwind ([5a3f3cc](https://github.com/kiwicom/orbit/commit/5a3f3cc23a9ac05bb78b9f9cbdf9dd4139546a1d))
*   **Table:** migrate TableBody to Tailwind ([0663ffb](https://github.com/kiwicom/orbit/commit/0663ffb65083a7888dc9ca4a9b52dbb9198872d7))
*   **Table:** migrate TableCell to Tailwind ([e0b16cb](https://github.com/kiwicom/orbit/commit/e0b16cb2a7044143a102a4245a05c0f6846d6e89))
*   **Table:** migrate TableFooter to Tailwind ([f18a75c](https://github.com/kiwicom/orbit/commit/f18a75c7cb7c853c4685d58e918d2eb050b0cd51))
*   **Table:** migrate TableHead to Tailwind ([ef0a54e](https://github.com/kiwicom/orbit/commit/ef0a54e2ce7641497a2e2c5ab5a58926a32ebe8f))
*   **Table:** migrate TableRow to Tailwind ([89b9576](https://github.com/kiwicom/orbit/commit/89b95763fe69086ceb208ddd42a1030fae58e022))
*   **Table:** migrate to Tailwind ([3cce4e2](https://github.com/kiwicom/orbit/commit/3cce4e2c584c710c4a7a1ca082fb833a88984268))
*   **Textarea:** migrate to Tailwind ([14d6abc](https://github.com/kiwicom/orbit/commit/14d6abc045cea374b74dd478dc3709860dfaae7c))
*   **Textarea:** remove size prop ([370e768](https://github.com/kiwicom/orbit/commit/370e768ebafd300b7974cb53b87a62a61448871b))
*   **Toast:** migrate ToastMessage to Tailwind ([fdef9fb](https://github.com/kiwicom/orbit/commit/fdef9fb20cae4a24a7d13f1c8b87d75478a32861))
*   **Toast:** migrate ToastRoot to Tailwind ([541336e](https://github.com/kiwicom/orbit/commit/541336e01c4965332585db10bb54e0fa3e625116))
*   **Truncate:** migrate to Tailwind ([af04dd4](https://github.com/kiwicom/orbit/commit/af04dd4d060cdecbcfd1a11d74bf495abb546bd4))

#### BREAKING CHANGES

*   **Textarea:** Textarea component no longer has the `size` prop.
*   **Select:** Select component no longer has the `readOnly` prop.
    The `readOnly` prop was passed directly to the native HTML select element as an
    attribute, which is not supported.

> The attribute is not supported or relevant to select or input types that ...

https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly

*   **Separator:** 'color' prop now accepts Tailwind classname instead of a token,
    e.g. 'paletteBlueNormal' -> 'border-blue-normal'

'indent' prop renamed to 'sideOffset'

'type' prop now by default is 'solid', instead of 'none'

## [10.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@10.2.0...@kiwicom/orbit-components@10.3.0) (2023-11-03)

#### Bug Fixes

*   **InputSelect:** make root label block ([9326e59](https://github.com/kiwicom/orbit/commit/9326e59a1e477b986059fd53c7afcea30fae7c4f))
*   **Loading:** use correct font family class ([7e53285](https://github.com/kiwicom/orbit/commit/7e53285219f1ddafb9e73eb1c996d176529e1068))
*   **Stack:** flex prop by default false ([e68297b](https://github.com/kiwicom/orbit/commit/e68297bc710e74edb2b40ec81a230e2446d59537))

#### Features

*   **BadgeList:** migrate to Tailwind ([4a28842](https://github.com/kiwicom/orbit/commit/4a288428402ac9518626fc2e4550b090162e2064))
*   **CarrierLogo:** migrate to Tailwind ([7fa5aff](https://github.com/kiwicom/orbit/commit/7fa5affc84a08db2e4ff148b5476fe3e192a0b94))
*   **Collapse:** migrate to tailwind ([969ac40](https://github.com/kiwicom/orbit/commit/969ac407b18c3ef2f35a33c3db19b64f2bcc3a42))
*   **LinkList:** migrate to tailwind ([84be8c2](https://github.com/kiwicom/orbit/commit/84be8c2c3d9e7a7473d0074f6e8c87cc4aae4030))
*   **ListChoice:** migrate to Tailwind ([bf449fa](https://github.com/kiwicom/orbit/commit/bf449fab534721cdb7fe9f06a065b514f172fe1f))
*   **Modal:** migrate to Tailwind ([4dcd634](https://github.com/kiwicom/orbit/commit/4dcd63459926ef0d4aff1fc6ee959f3641434ca8))
*   **NotificationBadge:** migrate to Tailwind ([2f2344d](https://github.com/kiwicom/orbit/commit/2f2344da4e14813f14fce351fcc22d2c23037178))
*   **Stepper:** migrate to Tailwind ([e305def](https://github.com/kiwicom/orbit/commit/e305defd606a0b8afeac16725e173a9a8d9d0cf2))
*   **TileGroup:** migrate to Tailwind ([368bc76](https://github.com/kiwicom/orbit/commit/368bc7629b54514751d3d608709d6aea7e7af3f0))
*   **Tile:** migrate TileContent to Tailwind ([9e8914b](https://github.com/kiwicom/orbit/commit/9e8914bb13e4ed5bac4cf662dbf54a09369de12f))
*   **Tile:** migrate TileHeader to Tailwind ([31151ff](https://github.com/kiwicom/orbit/commit/31151fff0075a5c4cd1d8341fa5c2baaa0692080))
*   **Tile:** migrate TileWrapper to Tailwind ([bf14d59](https://github.com/kiwicom/orbit/commit/bf14d59a4fc525fe31f3f2653fe3b48daf78de31))

## [10.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@10.1.0...@kiwicom/orbit-components@10.2.0) (2023-10-20)

#### Bug Fixes

*   **OrbitProvider:** use style tag directly without useEffect ([26a6ac5](https://github.com/kiwicom/orbit/commit/26a6ac5223aa6c68f0558673cdeb813f49ca2127))

#### Features

*   **Alert:** migrate to Tailwind ([ec3d104](https://github.com/kiwicom/orbit/commit/ec3d10433497b34cd728ce7e81c8c071a52372f3))
*   **Illustration:** add FlightDisruptions illustration ([37ad131](https://github.com/kiwicom/orbit/commit/37ad13101c22c2dc0ec227fe1db78a6146ea2f52))

## [10.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@10.0.0...@kiwicom/orbit-components@10.1.0) (2023-10-19)

#### Bug Fixes

*   **Card:** add missing white background ([ec18790](https://github.com/kiwicom/orbit/commit/ec1879068e6f7921fd3706b41b54d52074c0570d))
*   **Dialog:** hide scroll bar, but keep scrolling behaviour ([73fc50e](https://github.com/kiwicom/orbit/commit/73fc50ec9e86948a5530527d7ba017501b46489c))
*   **ErrorFormTooltip:** arrow was misplaced ([e346e90](https://github.com/kiwicom/orbit/commit/e346e90b13a830818ee1e9d041e93537976c1ce7))
*   **ItinerarySegmentDetail:** fix overflowing content issue ([bac87db](https://github.com/kiwicom/orbit/commit/bac87db66a7f55e6c8661b2e34c2660c6f467d7d))
*   **OrbitProvider:** fix whitelables themingissue with css variables ([6ee3bee](https://github.com/kiwicom/orbit/commit/6ee3bee21ef334bc2a01368cf80302b33f132faa))

#### Features

*   **Grid:** add classname prop ([036eb85](https://github.com/kiwicom/orbit/commit/036eb85e036d57b5e597b1d26a55d69f88f1183f))
*   **Hide:** migrate to Tailwind ([302e0dd](https://github.com/kiwicom/orbit/commit/302e0dd259c1eac3a14853298f03605399da2cd7))
*   **Layout:** migrate to Tailwind ([26e85ec](https://github.com/kiwicom/orbit/commit/26e85ece508e054747066d70b8dcac0d30d8a4d4))

## [10.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@9.3.0...@kiwicom/orbit-components@10.0.0) (2023-10-02)

#### Bug Fixes

*   **tailwind:** fix animation-loader class ([c33ea88](https://github.com/kiwicom/orbit/commit/c33ea883f835f326d620d142bbaa12e5e5b65518))
*   **tailwind:** remove redundant classes ([6fe0c97](https://github.com/kiwicom/orbit/commit/6fe0c979fb9fd74f15163f30146dcef34ae32a31))

#### Features

*   **Badge:** migrate to Tailwind ([1e67630](https://github.com/kiwicom/orbit/commit/1e6763063187d72d20873788d22ee24ca9e4c77a))
*   **BadgePrimitive:** migrate to Tailwind ([85de2df](https://github.com/kiwicom/orbit/commit/85de2df41b9aeb97d8c8cdce67caaead269ace90))
*   **Box:** migrate to Tailwind ([08a68ed](https://github.com/kiwicom/orbit/commit/08a68ed39a30b2ab9d732971294519e2f7fc842d))
*   **Breadcrumbs:** migrate to Tailwind ([c2c7935](https://github.com/kiwicom/orbit/commit/c2c7935f7a85205c0be1a4857ddd0fe7b2739bc7))
*   **ButtonGroup:** migrate to Tailwind ([2510a42](https://github.com/kiwicom/orbit/commit/2510a42b2f36532d12a30c764dd267c4aabbddc3))
*   **ButtonLink:** migrate to Tailwind ([8787569](https://github.com/kiwicom/orbit/commit/8787569a7c5a1d471e5a358974a5ea96d1b841d8))
*   **Button:** migrate to Tailwind ([25687b3](https://github.com/kiwicom/orbit/commit/25687b363aa9b6a26b2528433b48b791410ea710))
*   **ButtonPrimitive:** migrate to Tailwind ([4ea8178](https://github.com/kiwicom/orbit/commit/4ea817824fe89dd7ea08c2b48673065c5a2f1ebf))
*   **Card:** remove icon prop ([332f58e](https://github.com/kiwicom/orbit/commit/332f58e4b4ba0d8b274ec7409f25e78f9e8adfa8))
*   **Card:** rewrite to Tailwind ([1e19342](https://github.com/kiwicom/orbit/commit/1e19342427f934701d90480f19a01ce08b90b56a))
*   **CarrierLogo:** add orbit-carrier-logo class ([95eb530](https://github.com/kiwicom/orbit/commit/95eb530424f0cfecf1e214bed8ed77a92325127f))
*   **CountryFlag:** migrate to Tailwind ([e054877](https://github.com/kiwicom/orbit/commit/e05487761e984a8fae3709798316fd965c741617))
*   **Desktop:** deprecate component ([9102bfb](https://github.com/kiwicom/orbit/commit/9102bfb72341065ff50b3307c70843d2d63eaa91))
*   **Dialog:** refactor to tailwind ([4f3525d](https://github.com/kiwicom/orbit/commit/4f3525d84dd3bda89ec5b4f5523bf04268f2729f))
*   **Drawer:** refactor to tailwind ([b59a328](https://github.com/kiwicom/orbit/commit/b59a3281de93ce9c362f0edd49c010ccf0e8fedf))
*   **ErrorFormTooltip:** migrate to Tailwind ([7067f3c](https://github.com/kiwicom/orbit/commit/7067f3ca3a52e14835610ce6329070415524f509))
*   **FormLabel:** migrate to Tailwind ([95aaa6b](https://github.com/kiwicom/orbit/commit/95aaa6bb4eca17e12f23f0f5adea74dfcfca0d5c))
*   **Grid:** migrate Grid to tailwind ([#3965](https://github.com/kiwicom/orbit/issues/3965)) ([e19c2ae](https://github.com/kiwicom/orbit/commit/e19c2ae0d85a250606dc7840dc2586aa6055a2e6))
*   **Heading:** migrate to Tailwind ([8244913](https://github.com/kiwicom/orbit/commit/82449133c564eff65f0dceadd73fd10b56e3539b))
*   **icons:** update icons from Figma ([eabe36e](https://github.com/kiwicom/orbit/commit/eabe36ee734c1a72fb28c36211084cfd08249ebd))
*   **IllustrationPrimitive:** migrate to Tailwind ([e436905](https://github.com/kiwicom/orbit/commit/e4369055308ce8c0238e4bc546d1efe2dcec6c3c))
*   **InputFile:** migrate to Tailwind ([960c846](https://github.com/kiwicom/orbit/commit/960c84660f033d3cfb067cff72be27390f7a6ebb))
*   **KeyValue:** deprecate component ([8b30a98](https://github.com/kiwicom/orbit/commit/8b30a98a8af5c0dddf2e07aa49c2c9727dbdc8c3))
*   **List:** rewrite to Tailwind ([b8790bc](https://github.com/kiwicom/orbit/commit/b8790bc18f2b84ec10914f846466c8f8cd995463))
*   **Loading:** migrate to Tailwind ([53aa0df](https://github.com/kiwicom/orbit/commit/53aa0dfc69a58b5bb1503c2b69ffaf3aea36b52d))
*   **Mobile:** deprecate component ([24c834c](https://github.com/kiwicom/orbit/commit/24c834c92c34fbaa88a76ea71ed49d17c415ad86))
*   **NavigationBar:** migrate to Tailwind ([70ca749](https://github.com/kiwicom/orbit/commit/70ca7492ebceee5f972eee6a1bce64b1b31fbe43))
*   **Stack:** rewrite Stack to tailwind ([401b264](https://github.com/kiwicom/orbit/commit/401b2644a9a94da4a858680d63cda89076ecd92b))
*   **tailwind:** add bundle classenames for Badge ([3874b70](https://github.com/kiwicom/orbit/commit/3874b706b93612ee008ab35a37b546a396efbc89))
*   **tailwind:** add minHeight icon classes ([bcc0063](https://github.com/kiwicom/orbit/commit/bcc0063e4a8e52e50c112af69b09b7752cd085ad))
*   **tailwind:** add transparent to available colors ([47394c9](https://github.com/kiwicom/orbit/commit/47394c9bbd36247d664f806c6b0883ab04384241))
*   **Text:** default value for align is now start ([137026a](https://github.com/kiwicom/orbit/commit/137026a1c0dc16a8d1eaccae3e4b3a44bb1e9dbe))
*   **TextLink:** migrate to Tailwind ([d7697e4](https://github.com/kiwicom/orbit/commit/d7697e4a49dd39852d8bd12676b4083379e93100))
*   **Text:** migrate to Tailwind ([225f29b](https://github.com/kiwicom/orbit/commit/225f29bd4dc2244b482e55fe57c708cf962ba62a))

#### BREAKING CHANGES

*   **BadgePrimitive:** background and foregroundColor props were removed
*   **Card:** Card no longer has the `icon` prop
*   **Text:** align left and right on Text no longer adjust to RTL. Use start or end instead.
*   **Box:** StyledBox removed. `.orbit-box` selector should be used

### [9.3.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@9.3.0...@kiwicom/orbit-components@9.3.1) (2023-09-25)

#### Bug Fixes

*   **ButtonPrimitive:** do not let 'loading' prop be rendered in the DOM ([a0e6406](https://github.com/kiwicom/orbit/commit/a0e64061d9006e7f02e370064d980910092fbd63))

## [9.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@9.2.0...@kiwicom/orbit-components@9.3.0) (2023-09-19)

#### Features

*   **Illustration:** add Damage and Wheelchair illustrations ([04c78b6](https://github.com/kiwicom/orbit/commit/04c78b6bfadf8f90df297a7daddaf4182601e354))

## [9.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@9.1.0...@kiwicom/orbit-components@9.2.0) (2023-09-18)

#### Bug Fixes

*   **ButtonLink:** fix incorrect hover backgroud color on primary ([fdc4c32](https://github.com/kiwicom/orbit/commit/fdc4c32913d026b796903b3f8fdd421302d35373))

#### Features

*   **icons:** update icons from figma ([f234800](https://github.com/kiwicom/orbit/commit/f2348001c23563e4e22711dd6d692b2f63586dfa))
*   **icons:** update icons from figma ([225f77e](https://github.com/kiwicom/orbit/commit/225f77eafd00086097d19a6557811da5f87d2d08))
*   **icons:** update icons from figma ([7279080](https://github.com/kiwicom/orbit/commit/727908001529ff0985e4daa04edfc84032d1a31d))

## [9.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@9.0.0...@kiwicom/orbit-components@9.1.0) (2023-09-11)

#### Bug Fixes

*   **Card:** header actions are now vertically center aligned ([2679f54](https://github.com/kiwicom/orbit/commit/2679f5410e6c7bc1f9cebbb092e4da6cd20e5709))
*   **HorizontalScroll:** prevent click to induce scrolling ([1eec4d2](https://github.com/kiwicom/orbit/commit/1eec4d212ddc05f686ab5e304bd11d3538f9e537))
*   **InputField:** show 'readOnly' as 'disabled' visually ([594a642](https://github.com/kiwicom/orbit/commit/594a642a27ba3026d804421a493c7c479bb53a95))
*   **Radio:** add visible indication of checked state when disabled ([#3970](https://github.com/kiwicom/orbit/issues/3970)) ([8cc1f62](https://github.com/kiwicom/orbit/commit/8cc1f62d2790fc4422e2aa3a00588d6c8cf90d0b))
*   **Textarea:** show 'readOnly' as 'disabled' visually ([68a25bc](https://github.com/kiwicom/orbit/commit/68a25bcf11324e980503e2a1744dc860aa24859b))
*   **Wizard:** title now renders correctly even without labelProgress ([9cd2503](https://github.com/kiwicom/orbit/commit/9cd25034b4d08f7a4b61f3161bfc4bfba558040f))

#### Features

*   **icons:** update icons from figma ([6db1846](https://github.com/kiwicom/orbit/commit/6db18463a0038ae54c009177018bfc909c9d4608))
*   **icons:** update icons from figma ([0191293](https://github.com/kiwicom/orbit/commit/01912933e33941e0ffec5a3f63db7ee3ec09884c))
*   **icons:** update icons from figma ([#3971](https://github.com/kiwicom/orbit/issues/3971)) ([1493315](https://github.com/kiwicom/orbit/commit/149331518258febba782caf34991448f03febf06))
*   **icons:** update icons from figma ([#3983](https://github.com/kiwicom/orbit/issues/3983)) ([69e68e0](https://github.com/kiwicom/orbit/commit/69e68e0c3c681318fd7e8b10eb04cf9b65c531e7))
*   **icons:** update icons from figma ([#3988](https://github.com/kiwicom/orbit/issues/3988)) ([32febf0](https://github.com/kiwicom/orbit/commit/32febf0701085be4cd41de1e1eafe74672f67e4c))
*   **icons:** update icons from figma ([#3993](https://github.com/kiwicom/orbit/issues/3993)) ([1092efd](https://github.com/kiwicom/orbit/commit/1092efdde90b5d0286afbf56dd76a771a96cc88d))
*   **InputField:** add defaultValue prop ([269928c](https://github.com/kiwicom/orbit/commit/269928c289a6864c4e7138c37df0057923f3123a))
*   **OrbitProvider:** no longer require single child ([5aed201](https://github.com/kiwicom/orbit/commit/5aed2014f5dc5de5c7a4a55884bb4eebaa0ec85c))
*   **Textarea:** add defaultValue prop ([0da689f](https://github.com/kiwicom/orbit/commit/0da689f3cf90ef8e4b5eee894c5b8987657f4bc2))

## [9.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@8.1.2...@kiwicom/orbit-components@9.0.0) (2023-08-22)

#### Features

*   abstract away react-uid and remove it from deps ([48f1473](https://github.com/kiwicom/orbit/commit/48f1473ac9e619fe0565cdbd884d0e9d9499e372))
*   all components now have use client directive ([4b6598b](https://github.com/kiwicom/orbit/commit/4b6598be12105824883182a6bfd890bc30e72a0a))
*   **ClickOutside:** deprecated ([#3960](https://github.com/kiwicom/orbit/issues/3960)) ([8baf829](https://github.com/kiwicom/orbit/commit/8baf8291f93c0d5360101b76883b0a628413aef2))
*   **icons:** update icons from figma ([#3955](https://github.com/kiwicom/orbit/issues/3955)) ([fb2c88a](https://github.com/kiwicom/orbit/commit/fb2c88abea266489c34c0070a416b8304d9e45f4))
*   **icons:** update icons from figma ([#3964](https://github.com/kiwicom/orbit/issues/3964)) ([a878b10](https://github.com/kiwicom/orbit/commit/a878b104a21a9b0865dbbc034ddfb43224a064fd))
*   **icons:** update icons from figma ([#3967](https://github.com/kiwicom/orbit/issues/3967)) ([9686366](https://github.com/kiwicom/orbit/commit/9686366668137aad34e6f9d7638b1893333f59e1))
*   **icons:** update icons from figma ([#3968](https://github.com/kiwicom/orbit/issues/3968)) ([ed6739a](https://github.com/kiwicom/orbit/commit/ed6739acde985c7123237a987ebe61d010de4da5))
*   remove deprecated FormFeedback ([f84c526](https://github.com/kiwicom/orbit/commit/f84c526b09666e882ab49f3d45a6336d48b8a4e1))
*   remove deprecated InputField ([939bf7f](https://github.com/kiwicom/orbit/commit/939bf7fc7db61f838401f6c6afbae181c365adc3))
*   remove deprecated InputFile ([957f724](https://github.com/kiwicom/orbit/commit/957f7242ad594334d7e7e528195d5bc14548963c))
*   remove deprecated InputGroup ([5a5b37d](https://github.com/kiwicom/orbit/commit/5a5b37db03706912d0688a155490ed2e88c757fb))
*   remove deprecated Select ([d590716](https://github.com/kiwicom/orbit/commit/d59071694b937e1ff00d55e834c360c755fcd3f1))
*   remove deprecated Textarea ([cc971ff](https://github.com/kiwicom/orbit/commit/cc971ffe165e3a250d131c875f1c01e62b512cef))
*   update to React 18 ([45be262](https://github.com/kiwicom/orbit/commit/45be2624ecce8097d95bfebc41f6686b2c735ebc))
*   upgrade to node 18 ([d7eafbf](https://github.com/kiwicom/orbit/commit/d7eafbf557fa485658d9d66e07b6839bf96a197d))
*   **Wizard:** add isCompleted to WizardStep ([#3958](https://github.com/kiwicom/orbit/issues/3958)) ([75ab7c6](https://github.com/kiwicom/orbit/commit/75ab7c6f8fc927f11502dc2729a6c48af62a3828))

#### BREAKING CHANGES

*   OrbitProvider now requires useId prop for random ID generator hook
*   Node version required is now >=18
*   remove deprecated InputGroup
*   remove deprecated Textarea
*   remove deprecated InputFile
*   removed deprecated InputField
*   remove deprecated FormFeedback

### [8.1.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@8.1.1...@kiwicom/orbit-components@8.1.2) (2023-08-08)

**Note:** Version bump only for package @kiwicom/orbit-components

### [8.1.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@8.1.0...@kiwicom/orbit-components@8.1.1) (2023-08-08)

**Note:** Version bump only for package @kiwicom/orbit-components

## [8.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@8.0.0...@kiwicom/orbit-components@8.1.0) (2023-08-03)

#### Bug Fixes

*   **tokens:** fix bundle tokens definitons ([#3940](https://github.com/kiwicom/orbit/issues/3940)) ([d275b5b](https://github.com/kiwicom/orbit/commit/d275b5b9049c54d32126a2dce4f1e2c2b788058a))
*   use ForwardRefRenderFunction instead of deprecated RefForwardingComponent ([#3941](https://github.com/kiwicom/orbit/issues/3941)) ([a70687c](https://github.com/kiwicom/orbit/commit/a70687c1ee5eac3edc83a6121e458686454e4ee6))

#### Features

*   **Textarea:** add  prop to pass data attributes ([#3937](https://github.com/kiwicom/orbit/issues/3937)) ([7089013](https://github.com/kiwicom/orbit/commit/7089013f1fa85e55776a4c00f2ef2cd81380812f))

## [8.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.8.0...@kiwicom/orbit-components@8.0.0) (2023-07-28)

#### Bug Fixes

*   **InputSelect:** clearing the input now clears the selected option ([b805837](https://github.com/kiwicom/orbit/commit/b805837f68d76dc42569e98e06419bb2a2da2924))
*   **InputSelect:** close events and invalid typing ([ce9051a](https://github.com/kiwicom/orbit/commit/ce9051a3b0ee4ea6a1aa463191f543b84ea8d2fb))
*   **InputSelect:** hover effect removed from mobile ([766a8d8](https://github.com/kiwicom/orbit/commit/766a8d8b99b002bec5af1fad85f2270fbd0c9567))
*   **InputSelect:** present error and info on mobile ([6f888f6](https://github.com/kiwicom/orbit/commit/6f888f64ea819c4f113e559233a8e8aa71ec52cc))
*   **InputSelect:** spaceAfter was not working correctly ([46d4f78](https://github.com/kiwicom/orbit/commit/46d4f789b117631ede9a7f5f955aa552ee72dc3e))
*   **Separator:** fix background and border issue ([#3925](https://github.com/kiwicom/orbit/issues/3925)) ([5ffa0ee](https://github.com/kiwicom/orbit/commit/5ffa0eee286ac1b18347dde1ea08c6558b61c5ee))

#### Features

*   **icons:** update icons from figma ([#3927](https://github.com/kiwicom/orbit/issues/3927)) ([51c2f14](https://github.com/kiwicom/orbit/commit/51c2f145f752cf04fb9889eabdce9face65c82f9))
*   **Illustration:** add Ambulance and FlexibleDates illustrations ([#3933](https://github.com/kiwicom/orbit/issues/3933)) ([47e8fe8](https://github.com/kiwicom/orbit/commit/47e8fe81c6b6b71f9d31eb7ced82d2f1fb5349c6))
*   **InputSelect:** rename emptyStateMessage to emptyState ([6a5ade2](https://github.com/kiwicom/orbit/commit/6a5ade2c9108e9186b62fb708d6250b87c429248))
*   **tokens:** migrate to style-dictionary ([5029dcf](https://github.com/kiwicom/orbit/commit/5029dcf5cd70ac6f65c43cb61da2f8ba60787d8d))

#### BREAKING CHANGES

*   **InputSelect:** emptyStateMessage string prop is now called emptyState and accepts any React element.

## [7.8.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.7.0...@kiwicom/orbit-components@7.8.0) (2023-07-14)

#### Bug Fixes

*   **InputSelect:** add missing onOptionSelect callback to onKeyDown ([e0d351f](https://github.com/kiwicom/orbit/commit/e0d351f288b674f1541dc9c3f35ec3636bd78542))
*   **InputSelect:** close after selection ([a6f39e0](https://github.com/kiwicom/orbit/commit/a6f39e06bb7b416d5fec7b76c746f6ee6d6fd1f3))
*   **InputSelect:** fix ModalHeader padding size ([304e7a7](https://github.com/kiwicom/orbit/commit/304e7a72d4824184f9a12f2087e13a6b3337e596))
*   **InputSelect:** keep option selected on second click ([0a9fbeb](https://github.com/kiwicom/orbit/commit/0a9fbeb51a53b6ed84e1952d0ee02c3a2538e001))
*   **Popover:** fix popover overlay bubbling event issue ([#3921](https://github.com/kiwicom/orbit/issues/3921)) ([e507e5e](https://github.com/kiwicom/orbit/commit/e507e5eea08457fa0b69cd899bc381dc21ad58d1))

#### Features

*   **InputFile:** add disabled prop ([#3920](https://github.com/kiwicom/orbit/issues/3920)) ([dd445b2](https://github.com/kiwicom/orbit/commit/dd445b296e0cb1af0949e373f3c9a7d3d3a43384))

## [7.7.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.6.0...@kiwicom/orbit-components@7.7.0) (2023-07-11)

#### Bug Fixes

*   **Box:** fix possible color tokens ([97d3807](https://github.com/kiwicom/orbit/commit/97d38073e09537e9253e3af6aeeab108ff71c599))
*   **TextLink:** allow secondary type inside Alert ([#3912](https://github.com/kiwicom/orbit/issues/3912)) ([a6193f5](https://github.com/kiwicom/orbit/commit/a6193f559c1399c60e321f43243f87e0097b5e9a))

#### Features

*   **InputFile:** add multiple attribute ([#3918](https://github.com/kiwicom/orbit/issues/3918)) ([9119426](https://github.com/kiwicom/orbit/commit/911942608ee74e44a361e3ae9b37fbb2a4f502db))
*   **Popover:** add zIndex property ([#3919](https://github.com/kiwicom/orbit/issues/3919)) ([36a8d21](https://github.com/kiwicom/orbit/commit/36a8d212609df6f00e1e88b9d7ae143e90cffa4d))
*   **ServiceLogo:** add KiwiGuarantee logo ([#3916](https://github.com/kiwicom/orbit/issues/3916)) ([60e6665](https://github.com/kiwicom/orbit/commit/60e66658517b3b1519f406c97a6e7faf3ebc6962))

## [7.6.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.5.0...@kiwicom/orbit-components@7.6.0) (2023-06-28)

#### Bug Fixes

*   **ChoiceGroup:** fix event types ([1f1832d](https://github.com/kiwicom/orbit/commit/1f1832d353a3db5213832bedb864908cfa2aefbb))
*   **ErrorFormTooltip:** fix event types ([8e85a57](https://github.com/kiwicom/orbit/commit/8e85a57b8166c31ca00635b19fd78018d5021b67))
*   **FormLabel:** fix event types ([74e42f2](https://github.com/kiwicom/orbit/commit/74e42f285266b7e4c35edd896779edfe07c2b4db))
*   **InputField:** fix event types ([4a3dcc0](https://github.com/kiwicom/orbit/commit/4a3dcc06b3e9f27e4a402858c003e2c252922272))
*   **InputFile:** fix event types ([7f88332](https://github.com/kiwicom/orbit/commit/7f8833255fe57ef10b12a9691cc92db209589d8b))
*   **InputGroup:** fix event types ([9c0ecdd](https://github.com/kiwicom/orbit/commit/9c0ecdd4e0a493439c49915dff7e1a910a83538f))
*   **InputSelect:** fix event types ([6ddddb3](https://github.com/kiwicom/orbit/commit/6ddddb326a2b286c42026fad8f9ca689599fceac))
*   **Modal:** fix event types ([f76aee4](https://github.com/kiwicom/orbit/commit/f76aee442442806532b77a45a4212c29dc924167))
*   **Radio:** fix event types ([4f48a4c](https://github.com/kiwicom/orbit/commit/4f48a4cc941a306adac33b91376f41e915acdbea))
*   **SegmentedSwitch:** fix event types ([06a24cf](https://github.com/kiwicom/orbit/commit/06a24cf1e507cfb6a6d704c4e3877a866d736679))
*   **SegmentedSwitch:** fix event types ([3935db2](https://github.com/kiwicom/orbit/commit/3935db285412cd340b706ae1874746877ed96076))
*   **Select:** fix event types ([89c413b](https://github.com/kiwicom/orbit/commit/89c413b8be4ae1e4af795f1f282526a2f255b16b))
*   **Select:** fix focus styles ([6dccd7a](https://github.com/kiwicom/orbit/commit/6dccd7a7b9448f272b9194a44b406a88d2ad6b98))
*   **Select:** long inline label now truncates ([17758b4](https://github.com/kiwicom/orbit/commit/17758b4b403809b94929e6280188f246f816c7f6))
*   **Slider:** allow move the slider over current value ([8696c1b](https://github.com/kiwicom/orbit/commit/8696c1ba147cbcc0b209c3e45f067905b84ab15a))
*   **Slider:** range Slider was not updating correctly ([7fb5229](https://github.com/kiwicom/orbit/commit/7fb52294289981b6e5280954795ab340e6fb2547))
*   **Switch:** fix event types ([2897a26](https://github.com/kiwicom/orbit/commit/2897a269f7eb28520b186438f8c80914d82c8190))
*   **Textarea:** fix event types ([609628b](https://github.com/kiwicom/orbit/commit/609628bd4edb3095b515b6ac5fff4990d63efae2))

#### Features

*   **Illustration:** add NoFlightChange illustration ([#3905](https://github.com/kiwicom/orbit/issues/3905)) ([637f876](https://github.com/kiwicom/orbit/commit/637f8760c60877980e924a0141d1fd1a8d4bb830))

## [7.5.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.4.1...@kiwicom/orbit-components@7.5.0) (2023-06-23)

#### Bug Fixes

*   **InputGroup:** disabled state was not visually correct ([53a00e0](https://github.com/kiwicom/orbit/commit/53a00e07bbd7774e73f94000be3ca0abaf01dd95))
*   **InputSelect:** z-index was missing from styles ([948574c](https://github.com/kiwicom/orbit/commit/948574cecb4ecaab94ab35da3b38fab39912e27b))
*   **ListChoice:** align icon to the center vertically ([b5c022b](https://github.com/kiwicom/orbit/commit/b5c022b60b45852db4aec203e3b1103718a44766))
*   **Slider:** defaultValue now updates the slider ([62dd911](https://github.com/kiwicom/orbit/commit/62dd91119c302c9c656d70fa172416eb614d8355))

#### Features

*   **InputSelect:** add prefix to Option ([bf89e71](https://github.com/kiwicom/orbit/commit/bf89e7165305271d31d0d703878caa3d1866340b))

### [7.4.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.4.0...@kiwicom/orbit-components@7.4.1) (2023-06-19)

#### Bug Fixes

*   **Select:** customValueText vertical alignment ([#3890](https://github.com/kiwicom/orbit/issues/3890)) ([92c3db8](https://github.com/kiwicom/orbit/commit/92c3db8fc9fea25e91b668f58ca28a442f251cb1))

## [7.4.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.3.0...@kiwicom/orbit-components@7.4.0) (2023-06-16)

#### Bug Fixes

*   **ErrorFormTooltip:** change font-weight to normal ([#3886](https://github.com/kiwicom/orbit/issues/3886)) ([2cb63c7](https://github.com/kiwicom/orbit/commit/2cb63c735512e8e200b336b173b87460cb81b084))
*   **HorizontalScroll:** arrows now only display if it's overflowing ([#3882](https://github.com/kiwicom/orbit/issues/3882)) ([115fce2](https://github.com/kiwicom/orbit/commit/115fce23904c437b995b62bc193c76e3c3a88d08))
*   **Itinerary:** correct cursor is now applied to ItinerarySegmentBanner ([#3884](https://github.com/kiwicom/orbit/issues/3884)) ([ff86148](https://github.com/kiwicom/orbit/commit/ff861487abd36c5cdd24830be0e3218f9bcb5c4d))
*   **Select:** adjust height and alignment of Select and Prefix ([#3883](https://github.com/kiwicom/orbit/issues/3883)) ([cedc3a0](https://github.com/kiwicom/orbit/commit/cedc3a0b6f7787f8110c4a001b6731eee8f23fa0))

#### Features

*   **icons:** update icons from figma ([#3888](https://github.com/kiwicom/orbit/issues/3888)) ([161a242](https://github.com/kiwicom/orbit/commit/161a242aab720a63e290e12d00e44ea5dd446905))
*   **Illustration:** add Cancelled illustration ([#3887](https://github.com/kiwicom/orbit/issues/3887)) ([3ffe282](https://github.com/kiwicom/orbit/commit/3ffe28294a7b9120cb1643b4d6b790d09d6eb6c5))
*   **Text:** add extraLarge size ([afe2971](https://github.com/kiwicom/orbit/commit/afe29716fc19c8e9701657e8daf1c02c80b77918))
*   **TextLink:** add extraLarge size ([6b90277](https://github.com/kiwicom/orbit/commit/6b902779689e013d06f797e7948c5920d41d5575))

## [7.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.2.0...@kiwicom/orbit-components@7.3.0) (2023-06-13)

#### Bug Fixes

*   **InputFile:** clicking on icon label no longer triggers the OS input ([b81547f](https://github.com/kiwicom/orbit/commit/b81547f3e2b2acd28c13cf2f2202ba12d96ceb9f))
*   **InputFile:** errorForm tooltip offset ([5801e7c](https://github.com/kiwicom/orbit/commit/5801e7ccaedf66c18d9ac94814dcbe0b83bb78cc))
*   **ModalFooter:** wrap elements in StyledChild only when multiple ([#3869](https://github.com/kiwicom/orbit/issues/3869)) ([be1cfe6](https://github.com/kiwicom/orbit/commit/be1cfe60b4086ac27371e907b17b3a393a6996c7))
*   **SegmentedSwitch:** errorForm tooltip offset ([#3877](https://github.com/kiwicom/orbit/issues/3877)) ([032b93f](https://github.com/kiwicom/orbit/commit/032b93f8f07b75297fc1cf292ffb8c82f3e8f83c))
*   **Select:** disabled styles ([d1697b1](https://github.com/kiwicom/orbit/commit/d1697b1d64919e338360e288bbc2a2eefde9a20a))
*   **Select:** fix Option label type for flow ([d541a91](https://github.com/kiwicom/orbit/commit/d541a91e52122a9f4bd304cd37d2693db4bd988b))
*   **Select:** inlineLabel and Prefix now work as expected ([1fa2c23](https://github.com/kiwicom/orbit/commit/1fa2c2302b7017d582534dcc0b59ad07ff3f7fcd))
*   **Slider:** value state update was not working correctly ([5c7a9aa](https://github.com/kiwicom/orbit/commit/5c7a9aa4f2f681df8065729fe4c916ea13963e40))
*   **Wizard:** fix missing provider prop ([#3875](https://github.com/kiwicom/orbit/issues/3875)) ([6b34b90](https://github.com/kiwicom/orbit/commit/6b34b9066bf7a02e7854b413cae5a6ab6ddd9cd2))

#### Features

*   **icons:** update icons from figma ([#3867](https://github.com/kiwicom/orbit/issues/3867)) ([ecd80ec](https://github.com/kiwicom/orbit/commit/ecd80eccd3b6be258d241a24879eade58c93bc1c))
*   **icons:** update icons from figma ([#3872](https://github.com/kiwicom/orbit/issues/3872)) ([4465369](https://github.com/kiwicom/orbit/commit/44653692b0aa791618b4b1e72bbf678b096c3b46))
*   **InputField:** add new aria-props ([95c35e5](https://github.com/kiwicom/orbit/commit/95c35e5530a2005ee0764876b2b840bda163961d))
*   **InputSelect:** new component ([e81110b](https://github.com/kiwicom/orbit/commit/e81110bf58700d31b03c9393afb6cee813732297))
*   **ListChoice:** add role and tabIndex props ([598de88](https://github.com/kiwicom/orbit/commit/598de88550427dfdec21136a3181a0b4072c0f20))
*   **Modal:** add onScroll prop ([989e1de](https://github.com/kiwicom/orbit/commit/989e1de21df6a9673c5efe89df0104a30ca45134))

## [7.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.1.0...@kiwicom/orbit-components@7.2.0) (2023-05-31)

#### Bug Fixes

*   **Alert:** change labelClose to accept string only ([6c7c53a](https://github.com/kiwicom/orbit/commit/6c7c53af185a72f15f8eaf6612000a973e07cdcf))
*   **ButtonPrimitive:** change title to accept string only ([6d90024](https://github.com/kiwicom/orbit/commit/6d90024ee5deb96123942109378ebf51ce15910c))
*   **Card:** change labelClose to accept string only ([b11a490](https://github.com/kiwicom/orbit/commit/b11a4906a9e7b923921308407bbb91092345b2d7))
*   **Drawer:** change labelHide to accept string only ([6ff0013](https://github.com/kiwicom/orbit/commit/6ff001325622844dd7072957bd583b6f06fd81ff))
*   **ItinerarySeparator:** rename imported Props to avoid naming conflict ([#3854](https://github.com/kiwicom/orbit/issues/3854)) ([12fca7a](https://github.com/kiwicom/orbit/commit/12fca7add4ee2da7d598d5de176ffef1dad5f70d))
*   **Modal:** change labelClose to accept string only ([5879f55](https://github.com/kiwicom/orbit/commit/5879f55269c742d83f8555d68a5d322c8bc1ac2e))
*   **NavigationBar:** change openTitle to accept string only ([1ce0c9e](https://github.com/kiwicom/orbit/commit/1ce0c9e0754c2dc6e85d9924bcc8a67d965e7e30))
*   **Pagination:** change label types to string ([d815e41](https://github.com/kiwicom/orbit/commit/d815e4114f01cdb84e0440a480445c64729fa1a7))
*   **Select:** change type of Option label to string ([dc18bed](https://github.com/kiwicom/orbit/commit/dc18bed530d45713f961e8f5894260d9f339f465))
*   **Select:** fixed spacing between prefix and customValueText ([143abec](https://github.com/kiwicom/orbit/commit/143abec3178c7d64fb662e92aa33706fd3d00ae7))
*   **SkipNavigation:** change label types to string ([4ad843e](https://github.com/kiwicom/orbit/commit/4ad843e5bffdc444101b81274846a33df790012a))
*   **Stepper:** change title to accept only string ([9ce9121](https://github.com/kiwicom/orbit/commit/9ce912141144be15783ec2877ac73f14dcfb38e4))
*   **Tooltip:** change labelClose to accept string only ([97a7115](https://github.com/kiwicom/orbit/commit/97a711566432edd87ca2e5a372282c31424fba07))
*   **Wizard:** change labelClose to accept string only ([c866ab8](https://github.com/kiwicom/orbit/commit/c866ab8418868c58ba5b7c5023ddce8b74204ee7))

#### Features

*   **Heading:** add title6 type ([6326b13](https://github.com/kiwicom/orbit/commit/6326b13665a945e712fe5a37de8c0f81503c69dd))

## [7.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@7.0.0...@kiwicom/orbit-components@7.1.0) (2023-05-18)

#### Bug Fixes

*   **Hide:** remove on prop from rendered element ([#3845](https://github.com/kiwicom/orbit/issues/3845)) ([f13031c](https://github.com/kiwicom/orbit/commit/f13031c67c28177c8475737d036ceeca792ba7be))

#### Features

*   **ItinerarySeparator:** add type and color props ([d73b182](https://github.com/kiwicom/orbit/commit/d73b182432714231510d25040074496cbf2c9b7c))
*   **Popover:** add renderTimeout prop ([#3841](https://github.com/kiwicom/orbit/issues/3841)) ([7e242a8](https://github.com/kiwicom/orbit/commit/7e242a8ad91fba37b16b6ea7a73ec9c16f299615))
*   **Select:** add inlineLabel prop ([8ad7a1d](https://github.com/kiwicom/orbit/commit/8ad7a1deffdd3ef61ba965d2af4b2dbf4d615f15))
*   **Separator:** add type and color props ([b6497a0](https://github.com/kiwicom/orbit/commit/b6497a038d80306985439c0fb96f0bdc2272e8e3))
*   **Tab:** add min-width to avoid text wrap ([b75ce17](https://github.com/kiwicom/orbit/commit/b75ce177c037f574e57fe4f88168e70157498f18))

## [7.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.4.0...@kiwicom/orbit-components@7.0.0) (2023-04-27)

#### Bug Fixes

*   **Alert:** change colors for AlertButton subtle ([961c6a1](https://github.com/kiwicom/orbit/commit/961c6a1c6c364c42b3264da88c5f585e8ba382f9))
*   **Breacrumbs:** change goBackTitle to accept React.Node ([b1614e6](https://github.com/kiwicom/orbit/commit/b1614e6ff34ee34107d3f3e3cfd504f51c1c8cf2))
*   **Button:** change icon sizes and spacing ([050e157](https://github.com/kiwicom/orbit/commit/050e1572b0b3c93a655d9693480302eedc2a4efb))
*   **ButtonPrimitive:** replace current title type with React.Node ([e1db0d0](https://github.com/kiwicom/orbit/commit/e1db0d04891ad72dca4f788868a46f8c192e3e2e))
*   **Card:** add spacing between actions and title ([da4e898](https://github.com/kiwicom/orbit/commit/da4e8984a3479cefaa3d0100a38b370bcd0617ea))
*   **FormLabel:** add margin-left offset ([eb0f092](https://github.com/kiwicom/orbit/commit/eb0f0924dfc8ae1bc0c7a602d7f6efffd0a7a67c))
*   **SegmentedSwitch:** adjust height to match design specs ([67dee47](https://github.com/kiwicom/orbit/commit/67dee478afebeef681dc9f12229b650ca12fca82))
*   **Select:** change type of label in option to React.Node ([a08eb5f](https://github.com/kiwicom/orbit/commit/a08eb5f3973fee3b84bf05f80a7b22661a463a23))
*   **Tag:** adjust height to match design specs ([09aa998](https://github.com/kiwicom/orbit/commit/09aa998eb207f728d8ed53873e6bbea7417ac687))
*   **Tag:** border-radius on responsive ([dddf4a4](https://github.com/kiwicom/orbit/commit/dddf4a440d8ddbbafa0b71fbcd87982aaeca6906))
*   **TextLink:** fix color on active state ([c981604](https://github.com/kiwicom/orbit/commit/c98160403c51f00e4021c316c66a0c32f92d1ce2))
*   **TextLink:** fix icon sizes ([7161d4f](https://github.com/kiwicom/orbit/commit/7161d4f754e65e00c9ba4526ee2d315055e9dafd))
*   **Tile:** adjust spacing between icon and content ([9e1c83a](https://github.com/kiwicom/orbit/commit/9e1c83a89368834a588727d1562e51964fcd7d16))
*   **Tile:** adjust title styles ([c880ee6](https://github.com/kiwicom/orbit/commit/c880ee66cc750added38a4164ae8e821e246ab9a))
*   **Tile:** fix border-radius on desktop ([5e04164](https://github.com/kiwicom/orbit/commit/5e041648ed050edb9a95b5ffaab9bc01bd4eeb6d))
*   **Toast:** icon on Promisse Toast was not rendered ([#3805](https://github.com/kiwicom/orbit/issues/3805)) ([e50b66f](https://github.com/kiwicom/orbit/commit/e50b66f182e2286f6fc87060beb0971dffd324d5))

#### chore

*   **Illustration:** add type to consts file ([#3815](https://github.com/kiwicom/orbit/issues/3815)) ([224698a](https://github.com/kiwicom/orbit/commit/224698a67514ad7f1835bde201cbd4b9eec8301a)), closes [#3816](https://github.com/kiwicom/orbit/issues/3816)

*   feat(Wizard)!: add label props ([96035c8](https://github.com/kiwicom/orbit/commit/96035c8a16d1930a7be25b2f401a3ae243f1a7e6))

#### Features

*   **Alert:** add labelClose prop ([5dc5d89](https://github.com/kiwicom/orbit/commit/5dc5d89c2131f36e17b895b36cfcf9e3509a55a7))
*   **BadgePrimitive:** remove borderColor prop ([70a620d](https://github.com/kiwicom/orbit/commit/70a620dd928a5178d6248f4edd90899cc236c555))
*   **Badge:** rename type prop ([a55dbd2](https://github.com/kiwicom/orbit/commit/a55dbd266460c767ae198c03cda98caaaf39b93b))
*   **Card:** add labelClose prop ([71d6cc4](https://github.com/kiwicom/orbit/commit/71d6cc48a72bd98bf373a460b84ed0aadf2ab593))
*   **Card:** icon prop is deprecated ([f6ba524](https://github.com/kiwicom/orbit/commit/f6ba524af38bbb430af6cc453c7549278cf5ae4d))
*   **Drawer:** add labelHide prop ([198b1d8](https://github.com/kiwicom/orbit/commit/198b1d894cd0cec261b43d8ec33cd53409ce6b09))
*   **ErrorFormTooltip:** change border-radius to 6px on responsive ([1bbbc00](https://github.com/kiwicom/orbit/commit/1bbbc009e679341da1bdbf8893d86387814a5f5c))
*   **ErrorFormTooltip:** change font-size to 14px only ([bf09d30](https://github.com/kiwicom/orbit/commit/bf09d3076c12e59e3f1bf480efa14f2e48fdf36e))
*   **ErrorformTooltip:** icon size changed to normal ([9c1045b](https://github.com/kiwicom/orbit/commit/9c1045b11343f2b61eb5d0e6a9ba65a074ad1756))
*   **InputField:** remove size prop ([05918ff](https://github.com/kiwicom/orbit/commit/05918ff3739879a7a742cba6a52b9cca072c1cc3))
*   **InputField:** set border-radius to large on responsive ([a69c792](https://github.com/kiwicom/orbit/commit/a69c792bbac32e9d769e32a300e60d2012954717))
*   **MobileDialogPrimitive:** add labelClose prop ([1c7ab61](https://github.com/kiwicom/orbit/commit/1c7ab61bd2902c0460d3cd597ddee78430debf52))
*   **Modal:** add labelClose prop ([c08c245](https://github.com/kiwicom/orbit/commit/c08c245d44bc20c15bdee96e93a93e613a274dd7))
*   **NavigationBar:** add openTitle prop ([2abe630](https://github.com/kiwicom/orbit/commit/2abe630d4406d294b4c5ab695822e4b1972f5c7c))
*   **Pagination:** add label props ([7b61545](https://github.com/kiwicom/orbit/commit/7b61545b4fe78ffba03b921c29a7db1ae07c27b0))
*   **Popover:** add labelClose prop ([0252aa0](https://github.com/kiwicom/orbit/commit/0252aa04dab1ccf30df3e668e941fcbbd05b587b))
*   **Popover:** add maxHeight prop ([b454d7b](https://github.com/kiwicom/orbit/commit/b454d7b1abca40a481652518b169b1a1a4a824a3))
*   remove deprecated InputStepper component ([ad64d7a](https://github.com/kiwicom/orbit/commit/ad64d7a7bec1af2a3c631949168d0a85ba3297e7))
*   remove translation and dictionary components ([4816c39](https://github.com/kiwicom/orbit/commit/4816c392fb744195a1c70da1f39f7bed7b89ee09))
*   **Select:** remove size prop ([a5e13a3](https://github.com/kiwicom/orbit/commit/a5e13a3be0d087e0143cba3e7b9ec468767ed65f))
*   **SkipNavigation:** add label props ([90f8e65](https://github.com/kiwicom/orbit/commit/90f8e656a4206a4ce293862f53cf1ad780f278ab))
*   **SkipNavigation:** add label props ([e5aeb5a](https://github.com/kiwicom/orbit/commit/e5aeb5a5bb76e46cc4d0361af97288db37e91e7e))
*   **Tag:** add iconLeft prop ([5a55e93](https://github.com/kiwicom/orbit/commit/5a55e9337575f471603a3ad6d74108d9c4c7c73a))
*   **tokens:** change fontSizeSm to 13px and fontSizeMd to 15px ([262104e](https://github.com/kiwicom/orbit/commit/262104e9374b9abee87539baa59e2d84dab9a883))
*   **Tooltip:** add labelClose prop ([01e9e28](https://github.com/kiwicom/orbit/commit/01e9e28618da4af86e1d8b61bdd8757442c997df))

#### BREAKING CHANGES

*   **Select:** size prop was removed. Normal size is now the only option.
*   **InputField:** size prop was removed. Normal size now is the only option.
*   **Illustration:** visual breaking change on ModalFooter. Flex-none is no longer applied after largeMobile.
*   **Badge:** New type subtle is the old default one. New default is the old Inverted
*   **BadgePrimitive:** borderColor prop is no longer accepted
*   translations removed, use labelClose for close Button and labelProgress for progress text
*   **NavigationBar:** translation removed, use openTitle with Translate instead
*   **Modal:** translations removed, use labelClose with Translate instead
*   **Drawer:** removed translation, use labelHide prop with Translate instead
*   Deprecated InputStepper removed, use Stepper instead
*   **Card:** use labelClose prop to add title for close button
*   **Breacrumbs:** translation removed, use goBackTitle prop with Translate
*   **Alert:** translation removed, use labelClose prop
*   **SkipNavigation:** transaltion removed, use feedbackLabel to add translation for feedback button content
*   **Popover:** removed translation, use labelClose prop instead
*   **Pagination:** translations were removed, use label props instead
*   useTranslate, useDictionary, Translate and Dictionary componentes were removed.
*   **Toast:** The createToastPromise function now receives three arguments. Check documentation for further details.

## [6.4.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.3.1...@kiwicom/orbit-components@6.4.0) (2023-04-17)

#### Features

*   **BadgeListItem:** add size prop ([#3797](https://github.com/kiwicom/orbit/issues/3797)) ([27501b6](https://github.com/kiwicom/orbit/commit/27501b61203f3cfc39e677308feb162ce6891023))
*   **icons:** update icons from figma ([#3799](https://github.com/kiwicom/orbit/issues/3799)) ([d9a6c65](https://github.com/kiwicom/orbit/commit/d9a6c6529e1c01789599aaa4949b5dfc75c7fa54))
*   **icons:** update icons from figma ([#3807](https://github.com/kiwicom/orbit/issues/3807)) ([239e3b3](https://github.com/kiwicom/orbit/commit/239e3b381aa5875710f82e460a6984382d0b82f1))

### [6.3.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.3.0...@kiwicom/orbit-components@6.3.1) (2023-03-31)

#### Bug Fixes

*   **CountryFlag:** add condition to console.warn ([7bc2b95](https://github.com/kiwicom/orbit/commit/7bc2b953089ae688351b44b81b574636f84fbb9e))
*   **Slider:** add condition to console.warn ([78c59ce](https://github.com/kiwicom/orbit/commit/78c59ce27c686c5e60220f1b95f55c04b1316bb8))

## [6.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.2.1...@kiwicom/orbit-components@6.3.0) (2023-03-29)

#### Bug Fixes

*   **AlertButton:** padding was not correct when there was an icon ([#3778](https://github.com/kiwicom/orbit/issues/3778)) ([e2feb34](https://github.com/kiwicom/orbit/commit/e2feb34593de6024977298819aea30a0178ad43a))
*   **Coupon:** change border color to paletteCloudDark ([457efe6](https://github.com/kiwicom/orbit/commit/457efe6c4181347633f5599bfecea5d2ba38185c))
*   **InputGroup:** fixes problem with long labels ([#3779](https://github.com/kiwicom/orbit/issues/3779)) ([2ef2dc1](https://github.com/kiwicom/orbit/commit/2ef2dc14c7f9cc4e1bc912cdc4c3fc6a141c4da7))
*   **Loading:** fix LoadingSpinner size with customSize prop ([#3789](https://github.com/kiwicom/orbit/issues/3789)) ([0b4056c](https://github.com/kiwicom/orbit/commit/0b4056c406abed59d922752284e1740ba521fc68))
*   **ModalFooter:** count children properly ([#3790](https://github.com/kiwicom/orbit/issues/3790)) ([c982e6c](https://github.com/kiwicom/orbit/commit/c982e6cfffe2c15177c9541e0f3204d5bf747c2a))

#### Features

*   **docs:** fix onChange type ([#3788](https://github.com/kiwicom/orbit/issues/3788)) ([7566138](https://github.com/kiwicom/orbit/commit/75661384f324ce48f63fc7f7aaac7b0145186e2b))
*   **Tabs:** add fullWidth prop ([#3786](https://github.com/kiwicom/orbit/issues/3786)) ([fef1d07](https://github.com/kiwicom/orbit/commit/fef1d07e7b9a4b198fbab31f19ec16c915720be6))
*   **Tabs:** add width: 100% to TabPanels ([#3793](https://github.com/kiwicom/orbit/issues/3793)) ([a3fd7a9](https://github.com/kiwicom/orbit/commit/a3fd7a983a7c17c739a5435e2d9bb3189ea30657))

### [6.2.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.2.0...@kiwicom/orbit-components@6.2.1) (2023-03-23)

#### Bug Fixes

*   **Button:** fullWidth prop type was incorrectly set ([#3776](https://github.com/kiwicom/orbit/issues/3776)) ([d1b2376](https://github.com/kiwicom/orbit/commit/d1b2376c2195578403cd0e34e2d49126ee0562de))

## [6.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.1.0...@kiwicom/orbit-components@6.2.0) (2023-03-23)

#### Bug Fixes

*   **CarrierLogo:** remove shadow from inlineStacked variation ([f06731f](https://github.com/kiwicom/orbit/commit/f06731fdf90c55b3722fbc426a93a26c674620c6))
*   **Itinerary:** type colors were not being correctly applied ([cb90cef](https://github.com/kiwicom/orbit/commit/cb90ceffc1f96c1df37b2de37cbecf5d14fc3dd7))
*   **SegmentedSwitch:** add role switch ([4b2e5e2](https://github.com/kiwicom/orbit/commit/4b2e5e20d72785cc747deeb2a10117f99af1791c))
*   **Stack:** fix gap issue for iOS Safar < 14.1 ([#3763](https://github.com/kiwicom/orbit/issues/3763)) ([8fd4fa4](https://github.com/kiwicom/orbit/commit/8fd4fa420edd05078fc0f0c28f143d9d2faeb2ab))
*   **Switch:** background color was not correct ([5a6841b](https://github.com/kiwicom/orbit/commit/5a6841b6bc33eff1b02b9e3adddd688139375b46))
*   **utils:** force outline to have only blue color ([7170bb7](https://github.com/kiwicom/orbit/commit/7170bb7895a33faf75c1425b0c41453f08b704c4))

#### Features

*   **Button:** add download prop ([a27447c](https://github.com/kiwicom/orbit/commit/a27447c659db4d6814d737f40f567197656b520c))
*   **ButtonLink:** add download and centered props ([6d90b90](https://github.com/kiwicom/orbit/commit/6d90b90813cd80cb33d7f45d6d225c6689b0b57a))
*   **ButtonPrimitive:** add download prop ([a1a6d64](https://github.com/kiwicom/orbit/commit/a1a6d64ca3a41a3c56b49906446e8fbc24f6174a))
*   **TextLink:** add download prop ([618d016](https://github.com/kiwicom/orbit/commit/618d0165dd90e1e031f2564b2ca2dc80e284dff0))

## [6.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.0.3...@kiwicom/orbit-components@6.1.0) (2023-03-13)

#### Bug Fixes

*   **Itinerary:** incorrect internal type passing Text on cancelled info ([#3760](https://github.com/kiwicom/orbit/issues/3760)) ([d945ae7](https://github.com/kiwicom/orbit/commit/d945ae781df93c9afbeb9c39fac8609cde835cc0))
*   **Itinerary:** text can now be selected inside ItinerarySegmentDetails ([f705780](https://github.com/kiwicom/orbit/commit/f7057801fc86f7fd671b4cc9c5c5d895ecd02ebc))
*   **Timeline:** correctly align text inside a Modal ([#3759](https://github.com/kiwicom/orbit/issues/3759)) ([0acff49](https://github.com/kiwicom/orbit/commit/0acff499f76c35c9f1e19a21ac98bc2cd3b54eb4))

#### Features

*   **icons:** update icons from figma ([#3757](https://github.com/kiwicom/orbit/issues/3757)) ([22ae41a](https://github.com/kiwicom/orbit/commit/22ae41a5eb8884a9513f0a2ab52d782cf786c134))
*   **Itinerary:** add actionable bool prop to ItineraryStatus ([d58e9ce](https://github.com/kiwicom/orbit/commit/d58e9cebd8cd7a4db0502f4ccb46d55d4c176997))

### [6.0.3](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.0.2...@kiwicom/orbit-components@6.0.3) (2023-03-03)

#### Bug Fixes

*   **TabList:** remove twiced ObjectProperty from d.ts ([6735b60](https://github.com/kiwicom/orbit/commit/6735b60a98991f42555d7040df91b6d8366eaa7b))

### [6.0.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.0.1...@kiwicom/orbit-components@6.0.2) (2023-03-02)

**Note:** Version bump only for package @kiwicom/orbit-components

### [6.0.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@6.0.0...@kiwicom/orbit-components@6.0.1) (2023-03-02)

#### Bug Fixes

*   **Tabs:** fix typing issues in .d.ts files ([4198d88](https://github.com/kiwicom/orbit/commit/4198d88924c585033e52ce0d6d39e757b9e37ed8))

## [6.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@5.3.0...@kiwicom/orbit-components@6.0.0) (2023-02-28)

#### Bug Fixes

*   adjust marginUtility to spacingUtility ([e9e2f09](https://github.com/kiwicom/orbit/commit/e9e2f09eaf94175822f36949f8be9a330d364467))
*   **icons:** fix bank icon id ([1e9bec1](https://github.com/kiwicom/orbit/commit/1e9bec1cc65b6f5282ba2c051c6b2fba53764d49))
*   **icons:** icon names were changed in Figma ([a9c1c10](https://github.com/kiwicom/orbit/commit/a9c1c10dbe382d2fc3c5472de6464abf714c4caa))
*   **InptuField:** remove theme from DOM element ([c9e7011](https://github.com/kiwicom/orbit/commit/c9e7011fe670fa6a405979970eec94aa1bfed1c9))
*   **ItineraryBadgeList:** fix status colors ([d921a30](https://github.com/kiwicom/orbit/commit/d921a307c53a7d1c105910af9eefda55eadfafb3))
*   **Itinerary:** only display chevron if Banner is clickable ([#3741](https://github.com/kiwicom/orbit/issues/3741)) ([8f2df5f](https://github.com/kiwicom/orbit/commit/8f2df5f65a5afba140ce030f46cc8ddadb144491))
*   **ItinerarySegment:** fix incorrect status colors ([ebafe7e](https://github.com/kiwicom/orbit/commit/ebafe7e6851de5f7c725e3eb252bd1bf03244d99))
*   **ItinerarySegmentStop:** fix CircleSmall icon ([#3746](https://github.com/kiwicom/orbit/issues/3746)) ([8d22436](https://github.com/kiwicom/orbit/commit/8d22436f3cd2fb7aaaf87913eef0c343a8810bcf))
*   **ItineraryStatus:** fix incorrect status colors ([815721b](https://github.com/kiwicom/orbit/commit/815721bbb113ac04de6dca77e3368d343cd896ff))
*   **Modal:** border-radius on mobile ([#3740](https://github.com/kiwicom/orbit/issues/3740)) ([5d8e08a](https://github.com/kiwicom/orbit/commit/5d8e08a6f8f2662a1e8675aed60bb5bcda35b45a))
*   **Modal:** fixed mobile header while scrolling ([#3753](https://github.com/kiwicom/orbit/issues/3753)) ([967375d](https://github.com/kiwicom/orbit/commit/967375df8f6f70fb53d0f02119b7d732b4e979b1))
*   **Select:** remove white bg from container ([#3745](https://github.com/kiwicom/orbit/issues/3745)) ([0fc18c8](https://github.com/kiwicom/orbit/commit/0fc18c8f949d5c116692f9956a83369335d4906b))
*   **TextLink:** remove type and theme props from DOM element ([6c573aa](https://github.com/kiwicom/orbit/commit/6c573aa02c999fbc827b5d6a841356c14536cac8))
*   **Timeline:** fix the last bold line in TimelineStep on desktop ([#3747](https://github.com/kiwicom/orbit/issues/3747)) ([520d345](https://github.com/kiwicom/orbit/commit/520d345aa6e62ccc2576ec0c5c13d883f2861db3))

#### Features

*   **icons:** update icons from figma ([#3737](https://github.com/kiwicom/orbit/issues/3737)) ([7b82d6e](https://github.com/kiwicom/orbit/commit/7b82d6ef3031a10413bed4caeb08ec018af42914))
*   **icons:** update icons from figma ([#3744](https://github.com/kiwicom/orbit/issues/3744)) ([7c43a44](https://github.com/kiwicom/orbit/commit/7c43a4441fe4377ce41ece9a5021c76665dc0102))
*   introduce Tabs component ([6c7607f](https://github.com/kiwicom/orbit/commit/6c7607f925cc09d61a454fe711e6646f7e020d86))
*   **Modal:** export ModalHeading subcomponent ([94010b8](https://github.com/kiwicom/orbit/commit/94010b83f37a9c9d9644c02e26af8e72b47349e0))
*   **Modal:** remove margin when there's no title or description ([15f12ac](https://github.com/kiwicom/orbit/commit/15f12acfd818fe8c987289f298b6c7c2f44f00ec))
*   **Text:** element prop in StyledText now has `p` as defaultValue ([723dd5d](https://github.com/kiwicom/orbit/commit/723dd5dda1d4bba538bc21102f03a8dfa939e1c6))

#### BREAKING CHANGES

*   **icons:** ChevronDoubleRight -> ChevronDoubleForward
    ChevronDoubleLeft  -> ChevronDoubleBackward
    ChevronRight -> ChevronForward
    ChevronLeft -> ChevronBackward
*   marginUtility renamed to spacingUtility
*   **Modal:** When a ModalHeader has no title nor description but has children, no margin is applied by default

## [5.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@5.2.0...@kiwicom/orbit-components@5.3.0) (2023-01-24)

#### Bug Fixes

*   **Alert:** line-height of elements ([3601846](https://github.com/kiwicom/orbit/commit/3601846fc1b33dae59469f240f1a08542ed511e3))
*   **Checkbox:** disabled color ([fc82a93](https://github.com/kiwicom/orbit/commit/fc82a9375e10a6ebc7587fe9332f12005bdf5f11))
*   **FormLabel:** adjust line-height ([e505725](https://github.com/kiwicom/orbit/commit/e505725dc33d5a659e6d25ff8a594a14ed26aa96))
*   **Grid:** fix missing spaceAfter ([#3728](https://github.com/kiwicom/orbit/issues/3728)) ([9f1cd25](https://github.com/kiwicom/orbit/commit/9f1cd25df51a18db2e7a3a029bea4279ecaca8ed))
*   **icons:** fix calendar-duration icon ([#3714](https://github.com/kiwicom/orbit/issues/3714)) ([b07e295](https://github.com/kiwicom/orbit/commit/b07e295c9ca41c595fed77043c01a2b1cec71fe3))
*   **Radio:** disabled color and cursor ([d7f7714](https://github.com/kiwicom/orbit/commit/d7f7714068ad325439896c954d5caabbbe9c72a7))
*   **SegmentedSwitch:** adjust padding on option ([9760298](https://github.com/kiwicom/orbit/commit/9760298ede857e978a563440956b81cfae544d3e))
*   **Table:** fix incorrect color value from paletteInkNormal to paletteInkDark ([#3727](https://github.com/kiwicom/orbit/issues/3727)) ([fc5e7d3](https://github.com/kiwicom/orbit/commit/fc5e7d3c60c597daf59793aff676a5466fc33af4))
*   **Text:** default margin to 0 after removing unintentionally ([ecdcb9a](https://github.com/kiwicom/orbit/commit/ecdcb9a143fafe32cb856d680f1850794db1a818))

#### Features

*   **ErrorFormTooltip:** add hasTooltip parameter to hook ([519f841](https://github.com/kiwicom/orbit/commit/519f841dd72984ef69deb236e11f230286a1de64))
*   **icons:** update icons from figma ([#3717](https://github.com/kiwicom/orbit/issues/3717)) ([9eadb46](https://github.com/kiwicom/orbit/commit/9eadb4624ed8e33bcbf0e007431fb2c4a2c7fc7c))
*   **icons:** update icons from figma ([#3722](https://github.com/kiwicom/orbit/issues/3722)) ([ebf10b0](https://github.com/kiwicom/orbit/commit/ebf10b06096319240f11a3a9d8cbce780e8a7e25))
*   **Illustration:** add MobileApp2 illustration ([#3725](https://github.com/kiwicom/orbit/issues/3725)) ([92e4483](https://github.com/kiwicom/orbit/commit/92e448396ef96c86f1cb87b9d1e4a06e103a23ab))

## [5.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@5.1.0...@kiwicom/orbit-components@5.2.0) (2023-01-09)

#### Bug Fixes

*   **Breadcrumbs:** make last element always bold ([#3699](https://github.com/kiwicom/orbit/issues/3699)) ([a9ab2aa](https://github.com/kiwicom/orbit/commit/a9ab2aafeaad9e8634094be3735cdf1c8b3a8c2f))
*   **Card:** remove additional padding in CardSection ([#3696](https://github.com/kiwicom/orbit/issues/3696)) ([826cae2](https://github.com/kiwicom/orbit/commit/826cae200206daf52f6042ad9d30561425da9e45))
*   **CarrierLogo:** correct width when inlineStacked ([4bd0bed](https://github.com/kiwicom/orbit/commit/4bd0bed997acf7bc4507456457fdf5c2c34aa8b2))
*   **icons:** add prefixes to icon ids ([#3698](https://github.com/kiwicom/orbit/issues/3698)) ([d585b3d](https://github.com/kiwicom/orbit/commit/d585b3d8529c3fbb07b66bf1e152dc93d2f6ed4e))
*   **Popover:** click outside was not working correctly ([#3702](https://github.com/kiwicom/orbit/issues/3702)) ([eeeeb86](https://github.com/kiwicom/orbit/commit/eeeeb86f7b18dcc37d999744a708c95d2ac2973d))
*   **StepperStateless:** remove size prop from types ([71b6190](https://github.com/kiwicom/orbit/commit/71b619056142c77d38b15251d615ce6608df0e1f))

#### Features

*   **icons:** update icons from figma ([#3709](https://github.com/kiwicom/orbit/issues/3709)) ([16d4b41](https://github.com/kiwicom/orbit/commit/16d4b41d46c8337160c0a41370d8a52c579847a6))
*   **InputField:** add aria-invalid and aria-describedby ([33f4bb6](https://github.com/kiwicom/orbit/commit/33f4bb6688f1ca9a1c065bf9ead56a65952862fd))
*   **Select:** add aria-invalid and aria-describedby ([eb49bb4](https://github.com/kiwicom/orbit/commit/eb49bb4dcbb7d3a5ca90a005622f7dcdc585e07e))
*   **Textarea:** add aria-invalid and aria-describedby ([05f955a](https://github.com/kiwicom/orbit/commit/05f955ac49539ef895c434cf1c628f59c555c3d1))

#### Reverts

*   Revert "Add aria-invalid and aria-describedby to form components (#3706)" ([a7be870](https://github.com/kiwicom/orbit/commit/a7be870faeca4183041c06aae56a9fdb918f386f)), closes [#3706](https://github.com/kiwicom/orbit/issues/3706)

## [5.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@5.0.0...@kiwicom/orbit-components@5.1.0) (2022-12-15)

#### Bug Fixes

*   **Button:** export conditional types correctly ([#3680](https://github.com/kiwicom/orbit/issues/3680)) ([6aec97f](https://github.com/kiwicom/orbit/commit/6aec97f73c7573909782d41a3da05a2b10a0f3e4))
*   **ButtonLink:** remove redundant ref type ([d483280](https://github.com/kiwicom/orbit/commit/d4832802a4629d2a6ccc5d9c5bda9939d2540ddb))
*   **CalloutBanner:** fix tabIndex type ([4187abc](https://github.com/kiwicom/orbit/commit/4187abc4d509f8c15c00ccbb034cad8d6551eb49))
*   **Card:** inconsistent expanded state is now impossible ([#3679](https://github.com/kiwicom/orbit/issues/3679)) ([c7d5cd2](https://github.com/kiwicom/orbit/commit/c7d5cd29d25921904b2685610ca4c85ee46d970b))
*   **CarrierLogo:** use useRandomIdSeed ([#3686](https://github.com/kiwicom/orbit/issues/3686)) ([ba538f8](https://github.com/kiwicom/orbit/commit/ba538f8d9879d334bf89703916ee055b919b4e53))
*   **InputField:** fix tabIndex type ([a11e324](https://github.com/kiwicom/orbit/commit/a11e32413e1f813b45f7c796b9b96417196352b9))
*   **InputField:** remove redundant ref type ([e8bce1e](https://github.com/kiwicom/orbit/commit/e8bce1e69635130b8f89649d378a5c70c1b388b2))
*   **ItinerarySegment:** fix incorrect counting of elements ([#3687](https://github.com/kiwicom/orbit/issues/3687)) ([6061b95](https://github.com/kiwicom/orbit/commit/6061b953e75a279af9f0537c91554aac741548bf))
*   **ItinerarySegmentStop:** fix date type ([3f1b92d](https://github.com/kiwicom/orbit/commit/3f1b92db04fae25fe837b83fa6f950c96db834f6))
*   **Radio:** remove redundant ref type ([ac51550](https://github.com/kiwicom/orbit/commit/ac5155019612f8a92fbf2e769d39713b8336c90a))
*   **Select:** fix select ref type ([0bc368d](https://github.com/kiwicom/orbit/commit/0bc368d4f24e728b2c006473330abf468cb5d257))
*   **Select:** remove ref type ([4b80564](https://github.com/kiwicom/orbit/commit/4b80564994e67eb21aacde5ec57c74aa378783ff))
*   **Switch:** remove redundant ref type ([b05f267](https://github.com/kiwicom/orbit/commit/b05f267f924e04c043075111fd47c67f4d291d6c))
*   **Tag:** remove redundant ref type ([fcf00eb](https://github.com/kiwicom/orbit/commit/fcf00eb4724ce9423acc9f1a8b6da5f981d946df))

#### Features

*   **Card:** add margin utility prop ([eddb2fe](https://github.com/kiwicom/orbit/commit/eddb2fe51e73ab3e8d66242fb35be77f3d918cb2))
*   **common:** add ObjectPropertUtility type ([600f8f9](https://github.com/kiwicom/orbit/commit/600f8f9cc148445345c83c47fcd0d1175834d37f))
*   **icons:** update icons from figma ([#3691](https://github.com/kiwicom/orbit/issues/3691)) ([898d44f](https://github.com/kiwicom/orbit/commit/898d44f8bb7fd8f440f150868fc9338f7077fe67))
*   **Illustration:** add margin utility prop ([581fcb9](https://github.com/kiwicom/orbit/commit/581fcb9706358473a39080ab1d653c13f2c8aada))
*   **IllustrationPrimitive:** add margin utility prop ([8efc6e9](https://github.com/kiwicom/orbit/commit/8efc6e91040b1cfaedf88ede9eee9a681d58a1ff))
*   **Text:** add margin utility prop ([02b9549](https://github.com/kiwicom/orbit/commit/02b954954f454052bb83ae10dfd425c7d12b0898))
*   **utils:** add marginUtility ([0f880a4](https://github.com/kiwicom/orbit/commit/0f880a4a705db9195e6a5c4b8feb8f1eee5bb534))

## [5.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@4.2.0...@kiwicom/orbit-components@5.0.0) (2022-12-01)

#### Bug Fixes

*   **Box:** wrap property was calculated incorrectly ([620812d](https://github.com/kiwicom/orbit/commit/620812d7d5047ad097c53f2809f4cb106bcad8ca))
*   **CardSection:** remove focus background style ([#3671](https://github.com/kiwicom/orbit/issues/3671)) ([cd11b2c](https://github.com/kiwicom/orbit/commit/cd11b2c058d2ca4d91f2c0756af996e1a59c07cb))
*   **CarrierLogo:** use CarrierLogo tokens ([89ece90](https://github.com/kiwicom/orbit/commit/89ece90067782458611af91feec6fc9f23c3ee25))
*   **CarrierLogo:** use space token after icon size changes ([d4408eb](https://github.com/kiwicom/orbit/commit/d4408eb24d2babd6d284374ad20de1f9c083bc65))
*   **Heading:** add missing role='heading' for div rendered as Heading ([#3666](https://github.com/kiwicom/orbit/issues/3666)) ([caed409](https://github.com/kiwicom/orbit/commit/caed409ce1c53ca0a1ce9ad8da4b5ea59db8be9e))
*   **Itinerary:** render text as div ([#3643](https://github.com/kiwicom/orbit/issues/3643)) ([fd5dd46](https://github.com/kiwicom/orbit/commit/fd5dd469ce2b6e5e520dd67afdd959b527bae0ba))
*   **ItinerarySegmentBanner:** fix RTL issue ([#3659](https://github.com/kiwicom/orbit/issues/3659)) ([6ed2395](https://github.com/kiwicom/orbit/commit/6ed2395e93f43aae664c2a5c6ea2fbb63df38c74))
*   **ItinerarySegment:** fix access of hidden prop in the context ([#3675](https://github.com/kiwicom/orbit/issues/3675)) ([e18b9dd](https://github.com/kiwicom/orbit/commit/e18b9dd8b7b56a0c275bcb6806556f9b52af87f1))
*   **ItinerarySegmentStop:** fix ItineraryIcon ([#3669](https://github.com/kiwicom/orbit/issues/3669)) ([6da4c6d](https://github.com/kiwicom/orbit/commit/6da4c6ddc538a40cc6ccfb374f2a41fcdcdcdb32))
*   **Modal:** don't render overlay if is full page ([4e31400](https://github.com/kiwicom/orbit/commit/4e31400ff49df156973959a8949eac73f2e5ca61))
*   **TextLink:** repair broken CSS rule ([#3638](https://github.com/kiwicom/orbit/issues/3638)) ([1927ca1](https://github.com/kiwicom/orbit/commit/1927ca11c53d26708fbdeb36384947c9ab1950f0))
*   **Tooltip:** background color ([#3667](https://github.com/kiwicom/orbit/issues/3667)) ([7819c9b](https://github.com/kiwicom/orbit/commit/7819c9b98421bdcb2c7c3b6781a3e7fb5a30a828))

#### Features

*   add inlineStacked property to CarrierLogo ([#3652](https://github.com/kiwicom/orbit/issues/3652)) ([e30e1c3](https://github.com/kiwicom/orbit/commit/e30e1c36b85211d7f119428ee9e305aaa2d934b8))
*   **Button:** add centered prop for fullWidth ([#3673](https://github.com/kiwicom/orbit/issues/3673)) ([f639b3e](https://github.com/kiwicom/orbit/commit/f639b3e54c28eed31b25ee39c5586331ef61bf2e))
*   **Button:** add line-height: 1 ([#3676](https://github.com/kiwicom/orbit/issues/3676)) ([34130c2](https://github.com/kiwicom/orbit/commit/34130c204533bf33e2145978ed26132497bdd437))
*   **Button:** add tokens for subtle button ([#3658](https://github.com/kiwicom/orbit/issues/3658)) ([2e84139](https://github.com/kiwicom/orbit/commit/2e8413996d79ce707626721b1bcd9892497c2177))
*   **Illustration:** add FastBooking illustration ([#3672](https://github.com/kiwicom/orbit/issues/3672)) ([3b19cd6](https://github.com/kiwicom/orbit/commit/3b19cd645abb3c54af511d3eafd79954c44c0e83))
*   **InputField:** set autoCorrect and autoCapitalize explicitly to off ([#3651](https://github.com/kiwicom/orbit/issues/3651)) ([f27912e](https://github.com/kiwicom/orbit/commit/f27912ee46f9d5223334224de29e4e724440b4bd))
*   rename ThemeProvider to OrbitProvider ([#3601](https://github.com/kiwicom/orbit/issues/3601)) ([10030dd](https://github.com/kiwicom/orbit/commit/10030dddc66826cfd7ff84edac90afdc4897dc94))
*   **ServiceLogo:** add AirHelpPlus logo ([6313ada](https://github.com/kiwicom/orbit/commit/6313ada629ab664be71e12e3a61b5e7c7926e7f9))
*   **tokens:** change icon sizes according to a new designs ([54e515f](https://github.com/kiwicom/orbit/commit/54e515f0a972e8e6c6414ce5966cb8d8e9d58e48))

#### Reverts

*   revert exporting types from index ([9e827b4](https://github.com/kiwicom/orbit/commit/9e827b467c099cf052abb02467a5b47c12a70698))

#### BREAKING CHANGES

*   **tokens:** Visual breaking changes. Icons medium sized now have 20px (24px before),
    size large 24px (32px before)

*   ThemeProvider is now called OrbitProvider.
    Everything else didn't change

*   docs: create documentation for OrbitProvider

New documentation page for OrbitProvider created.

## [4.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@4.1.0...@kiwicom/orbit-components@4.2.0) (2022-11-02)

#### Bug Fixes

*   **Breadcrumbs:** element without href is now focusable if it has onClick ([b252f72](https://github.com/kiwicom/orbit/commit/b252f728a5706f9b86f2941464d2953d59e35827))
*   **Grid:** fix TypeScript type for spaceAfter in Grid ([#3623](https://github.com/kiwicom/orbit/issues/3623)) ([70d713b](https://github.com/kiwicom/orbit/commit/70d713be3e1404e6aa493acf8acf7313f28c99a0))
*   **SegmentedSwitch:** incorrect defaultChecked prop name ([#3618](https://github.com/kiwicom/orbit/issues/3618)) ([e5c8efb](https://github.com/kiwicom/orbit/commit/e5c8efbfe5ad27e5b4fac668d3517519a5d70a05))
*   **Textarea:** required prop displays an asterisk ([#3617](https://github.com/kiwicom/orbit/issues/3617)) ([1d531a4](https://github.com/kiwicom/orbit/commit/1d531a49584ce787179a109b48ee65402b8d1a97))
*   **Timeline:** make last successful step text ink colored ([#3635](https://github.com/kiwicom/orbit/issues/3635)) ([c5a3f7d](https://github.com/kiwicom/orbit/commit/c5a3f7d8510b6657441dbc7bbfbe3ef18bea5f20))
*   **Tooltip:** add missing onShow for MobileDialog ([206a818](https://github.com/kiwicom/orbit/commit/206a8184083dfce72c7bf1d63744c6d865d881a2))

#### Features

*   **Breadcrumbs:** change focus to native colors ([c23dc88](https://github.com/kiwicom/orbit/commit/c23dc88837a02ec86c5c0785681517f2df2645b9))
*   **CallOutBanner:** change focus to native colors ([73e2fed](https://github.com/kiwicom/orbit/commit/73e2fed00595141edeba1a19e7761afb04d00925))
*   **Card:** change focus to native colors ([4f7e209](https://github.com/kiwicom/orbit/commit/4f7e2095231d45608475959c3da5252808eb4e39))
*   **Checkbox:** change focus to native colors ([6298b19](https://github.com/kiwicom/orbit/commit/6298b19390b977b443927bc57d2022509441f9cc))
*   **icons:** update icons from figma ([#3630](https://github.com/kiwicom/orbit/issues/3630)) ([7f524a0](https://github.com/kiwicom/orbit/commit/7f524a034f94f37dc44b4805063636d2310ed151))
*   **InputFile:** change focus to native colors ([8e5f155](https://github.com/kiwicom/orbit/commit/8e5f155775a3dc3fcd073d63bef011da33381315))
*   **InputGroup:** change focus to native colors ([9770ea8](https://github.com/kiwicom/orbit/commit/9770ea819ea90456938d1cfe753c1c6ca71b90ec))
*   **Itinerary:** change focus to native colors ([052cbe6](https://github.com/kiwicom/orbit/commit/052cbe644d33e56a02398c09a4fde0667a14a27e))
*   **ListChoice:** change focus to native colors ([517bd20](https://github.com/kiwicom/orbit/commit/517bd20e511cf5dc9e780c033076399bccf63e25))
*   **MobileDialog:** add onShow callback ([2dee49e](https://github.com/kiwicom/orbit/commit/2dee49ec0d8668b13ca12c30c4554db030d31d2a))
*   **Radio:** change focus to native colors ([e85e76c](https://github.com/kiwicom/orbit/commit/e85e76c4a881d6329b62cc943671987553487b97))
*   **Seat:** change focus to native colors ([2b8d8b6](https://github.com/kiwicom/orbit/commit/2b8d8b66b6897922680b4d0d1963dd15ccd60012))
*   **SegmentedSwitch:** change focus to native colors ([f08e9d1](https://github.com/kiwicom/orbit/commit/f08e9d13dc5d76c3e1345e491eab8c549519e37f))
*   **Slider:** change focus to native colors ([793ef00](https://github.com/kiwicom/orbit/commit/793ef008d3e3c2ff397966f31b1733085e325ce4))
*   **Stepper:** change focus to native colors ([16e9a75](https://github.com/kiwicom/orbit/commit/16e9a751cd17c65d666b439ea346cc5f90dc487c))
*   **Switch:** change focus to native colors ([ead846a](https://github.com/kiwicom/orbit/commit/ead846a1c63676e6f5fdbebbb503896aae9e1763))
*   **Tag:** change focus to native colors ([6189785](https://github.com/kiwicom/orbit/commit/6189785da00b99c3f65aec389cc662511b4864a8))
*   **Textarea:** change focus to native colors ([19cbd79](https://github.com/kiwicom/orbit/commit/19cbd795ca9069e92dbe610f34868bba71d7545e))
*   **TextLink:** change focus to native colors ([9299123](https://github.com/kiwicom/orbit/commit/92991239a122388ec2c71a58d0774cc505ae18dd))
*   **Tile:** change focus to native colors ([14455eb](https://github.com/kiwicom/orbit/commit/14455ebc019a04e3bb440f5dcf2ae8ab4a73e414))
*   **Timeline:** add active prop, subLabel and label accept React.Node ([ed45cf9](https://github.com/kiwicom/orbit/commit/ed45cf918d5ee9acc6461975a1addc50b2a976ed))
*   **Timeline:** new component design ([99d5094](https://github.com/kiwicom/orbit/commit/99d50947e19566569a5b1e309b65bbb285c7fb7f))
*   **utils:** add defaultFocus ([f419334](https://github.com/kiwicom/orbit/commit/f4193346cdf2998803e22fcc6a8cb21d2e7f7166))

## [4.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@4.0.0...@kiwicom/orbit-components@4.1.0) (2022-10-18)

#### Bug Fixes

*   **Accordion:** not expanding ([#3606](https://github.com/kiwicom/orbit/issues/3606)) ([61d7f3b](https://github.com/kiwicom/orbit/commit/61d7f3bbc465cf66fa1424c95a1e01f8f5d43068))
*   **LinkList:** fix missing direction prop in sc ([c04c42a](https://github.com/kiwicom/orbit/commit/c04c42ac33b8d9deac0487aaf40d5aebfabd25fe))
*   **Table:** responsive shadow was not correct ([#3604](https://github.com/kiwicom/orbit/issues/3604)) ([4feb4c9](https://github.com/kiwicom/orbit/commit/4feb4c9062e56712dc8253eee8aa8e5bd8e2f45f))

#### Features

*   **HorizontalScroll:** add arrows to scroll ([#3603](https://github.com/kiwicom/orbit/issues/3603)) ([3ec0895](https://github.com/kiwicom/orbit/commit/3ec0895ad1b7e8b735ce27dac3f8a2c06e697a37))
*   **LinkList:** add legacy prop ([553029f](https://github.com/kiwicom/orbit/commit/553029f82b00c35705b7540932f725c308e9210a))
*   **Stack:** add legacy prop to apply old spacing behaviour ([c6096dd](https://github.com/kiwicom/orbit/commit/c6096dd4986249000e022c3b3544d2caf073722b))

## [4.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.8.0...@kiwicom/orbit-components@4.0.0) (2022-10-12)

#### Bug Fixes

*   **HorizontalScroll:** fix issue with glitching on mobile while scrolling ([#3593](https://github.com/kiwicom/orbit/issues/3593)) ([343d3fc](https://github.com/kiwicom/orbit/commit/343d3fcaa09256738f81c3a7dbf308dfda33267e))
*   **ItineraryBadgeListItem:** add margin-top only if cancelledValue provided ([0e7745a](https://github.com/kiwicom/orbit/commit/0e7745a35915d6155f923ac017db659a5eaff4f2))
*   **Skeleton:** fix default color from paletteCloudDark to paletteCloudNormal ([055d009](https://github.com/kiwicom/orbit/commit/055d00940afa2a3d3931156e236e40de6d9365f4))
*   **Stack:** keep old behavior, enable gap only if flex or spacing is provided ([#3597](https://github.com/kiwicom/orbit/issues/3597)) ([1445684](https://github.com/kiwicom/orbit/commit/1445684dae4a2a92c0a9d7f1f7f9500c43725c74))
*   **Tooltip:** add max-width and render as flex instead of block ([#3595](https://github.com/kiwicom/orbit/issues/3595)) ([7b734b0](https://github.com/kiwicom/orbit/commit/7b734b0b51f7043e5c33c58503713d1adcd398bb))
*   **TooltipPrimitive:** add handleClick to content ([#3594](https://github.com/kiwicom/orbit/issues/3594)) ([b867342](https://github.com/kiwicom/orbit/commit/b867342e3301efdbe0c037fa29eb4498e6867a71))

#### Features

*   **PricingTable:** remove PricingTable ([0a674e4](https://github.com/kiwicom/orbit/commit/0a674e4fbdcd09d8d9271b6310bf229b53e64029))
*   **tokens:** update palette ([#3579](https://github.com/kiwicom/orbit/issues/3579)) ([bf2780b](https://github.com/kiwicom/orbit/commit/bf2780b3a71ef9347e06fca230be032a798053ea)), closes [#E8EDF1](https://github.com/kiwicom/orbit/issues/E8EDF1) [#BAC7D5](https://github.com/kiwicom/orbit/issues/BAC7D5) [#697D95](https://github.com/kiwicom/orbit/issues/697D95) [#4F5E71](https://github.com/kiwicom/orbit/issues/4F5E71) [#252A31](https://github.com/kiwicom/orbit/issues/252A31)

#### BREAKING CHANGES

*   **PricingTable:** PricingTable and PricingTableItem were removed.
    Its implementation was moved to repositories using it.
*   **tokens:** a few design tokens were changed

## [3.8.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.7.1...@kiwicom/orbit-components@3.8.0) (2022-10-07)

#### Bug Fixes

*   **FormLabel:** use onMouseEnter and onMouseLeave on wrapper ([8d5acb1](https://github.com/kiwicom/orbit/commit/8d5acb16e72764064de83755d2ef039eed06c7d8))
*   **ItinerarySegmentStop:** add missing flex shrink ([#3581](https://github.com/kiwicom/orbit/issues/3581)) ([75b1f4c](https://github.com/kiwicom/orbit/commit/75b1f4c6de54161f953725c30457350974d94ba6))

#### Features

*   **Badge:** export StyledBadge type ([13fe6d3](https://github.com/kiwicom/orbit/commit/13fe6d3e8690845ced30ad909e579778cdb9592a))
*   **Itinerary:** add ItineraryBadgeListItem ([2972f97](https://github.com/kiwicom/orbit/commit/2972f97ef2bd914a03164c0066d33e0328dd07cd))
*   **List:** export IconContainer and Item subcomponents ([72a904d](https://github.com/kiwicom/orbit/commit/72a904d57c2585e8a36babfe5b4b63e913167fcc))
*   **SegmentedSwitch:** new SegmentedSwitch component ([5d3b538](https://github.com/kiwicom/orbit/commit/5d3b5383b3942711f6dcd19ecc1106852a14e875))
*   **Text:** export StyledText type ([b18f3fb](https://github.com/kiwicom/orbit/commit/b18f3fbe867cb660309d47fcccc0cc4aa59ebf82))
*   **Tooltip:** add onShown prop ([b4f152e](https://github.com/kiwicom/orbit/commit/b4f152e2dd24f348f2079a4c1699637157c9bcee))
*   **TooltipPrimitive:** add onShown prop ([8c21377](https://github.com/kiwicom/orbit/commit/8c2137700e003779ffffc133fbde720041f6c3f0))

### [3.7.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.7.0...@kiwicom/orbit-components@3.7.1) (2022-09-23)

#### Bug Fixes

*   **ItinerarySegmentStop:** fix wider background color ([2663934](https://github.com/kiwicom/orbit/commit/2663934e4ba05ec18d457ee2f87df994cee44f2f))
*   **ItineraryStatus:** fixed height issue and longer translations ([901cf71](https://github.com/kiwicom/orbit/commit/901cf71456bd0b243f8272189ff1c1b8c8971713))
*   **Tile:** fix inherited font-weight ([#3580](https://github.com/kiwicom/orbit/issues/3580)) ([bdc57de](https://github.com/kiwicom/orbit/commit/bdc57deee5bafae511a7d16e9911b12f4ce88f09))

## [3.7.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.6.1...@kiwicom/orbit-components@3.7.0) (2022-09-20)

#### Features

*   **KeyValue:** new spacing, direction properties ([#3576](https://github.com/kiwicom/orbit/issues/3576)) ([aeeace9](https://github.com/kiwicom/orbit/commit/aeeace9e1d423e25e374f4c0c2d5251c65c40c31))
*   **Tile:** add expanded prop ([#3577](https://github.com/kiwicom/orbit/issues/3577)) ([7f97061](https://github.com/kiwicom/orbit/commit/7f970618eeb68fb451ccd5d279ed9957cee894f1))

### [3.6.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.6.0...@kiwicom/orbit-components@3.6.1) (2022-09-16)

#### Bug Fixes

*   **BadgePrimitive:** remove CarrierLogo offset ([7738f88](https://github.com/kiwicom/orbit/commit/7738f886b7183c10653c0f15821b853c9b013028))
*   **HorizontalScroll:** fix useScroll hook to support touchevent ([7207333](https://github.com/kiwicom/orbit/commit/7207333f05ec2860921cf33bbdbcffe582d85667))
*   **ItineraryBadgeList:** remove default spaceAfter medium ([ea7f3be](https://github.com/kiwicom/orbit/commit/ea7f3be511560d933710e5010541b5682203a344))
*   **ItinerarySeparator:** fix z-index issue ([0dc08b1](https://github.com/kiwicom/orbit/commit/0dc08b181cc5a673fc4b1cbd4067cbfaf2392c24))

## [3.6.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.5.1...@kiwicom/orbit-components@3.6.0) (2022-09-01)

#### Bug Fixes

*   **HorizontalScroll:** remove shadow after it reaches end ([9168bbe](https://github.com/kiwicom/orbit/commit/9168bbedb459a93bb2adce761ba82fbbcca31984))
*   **Itinerary:** fix icons imports ([8373597](https://github.com/kiwicom/orbit/commit/83735974bac0272f070deb4236f9217586fc55cc))

#### Features

*   **BadgeListItem:** add strikeThrough property ([b2cf321](https://github.com/kiwicom/orbit/commit/b2cf321e34c8eecb32d36df11bc0da4632ef458a))
*   **Box:** add forwardRef ([407b244](https://github.com/kiwicom/orbit/commit/407b24412a198f53de753b5570b3f389de2fdb1f))
*   **Box:** extend elevations ([6de92cf](https://github.com/kiwicom/orbit/commit/6de92cf84421033c67aedeeb73283c7adead89f9))

### [3.5.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.5.0...@kiwicom/orbit-components@3.5.1) (2022-08-23)

#### Bug Fixes

*   **Loading:** remove padding with customSize ([303ed7d](https://github.com/kiwicom/orbit/commit/303ed7d2c55502287ddb4bdba5f88097f209fc41))

## [3.5.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.4.0...@kiwicom/orbit-components@3.5.0) (2022-08-22)

#### Bug Fixes

*   **Checkbox:** change font-weight to medium for label ([9202eb7](https://github.com/kiwicom/orbit/commit/9202eb73dd4b1f0047956c65667331a1f7ea0d99))
*   deprecated InputField label z-index ([#3559](https://github.com/kiwicom/orbit/issues/3559)) ([f9b67ad](https://github.com/kiwicom/orbit/commit/f9b67ad922189f6c8799bd07d5013faf4dda7a86))
*   **Radio:** change font-size to medium for label ([5fc7bd6](https://github.com/kiwicom/orbit/commit/5fc7bd6e04d5afb81a2340f5b34344d74d5d6c87))
*   **useTransition:** fix type export ([#3560](https://github.com/kiwicom/orbit/issues/3560)) ([fda99a8](https://github.com/kiwicom/orbit/commit/fda99a883e2264907867f5a9dc6f744d79148208))

#### Features

*   **icons:** update icons from figma ([c16079a](https://github.com/kiwicom/orbit/commit/c16079a3bd6e03268e5ef7264f9f912e54b42b56))
*   **Itinerary:** add ItinerarySegmentBanner ([#3553](https://github.com/kiwicom/orbit/issues/3553)) ([911fc2a](https://github.com/kiwicom/orbit/commit/911fc2addfc3ab12aa11c74849a383dc255bc966))
*   **Loading:** new customSize prop ([#3558](https://github.com/kiwicom/orbit/issues/3558)) ([297f684](https://github.com/kiwicom/orbit/commit/297f684fb8571b50d6e7a4cc5900f6befaa6ef0f))

## [3.4.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.3.0...@kiwicom/orbit-components@3.4.0) (2022-08-01)

#### Bug Fixes

*   **Checkbox:** issue with need to click twice on iOS ([#3546](https://github.com/kiwicom/orbit/issues/3546)) ([1bdfa36](https://github.com/kiwicom/orbit/commit/1bdfa36f331145a776454ea8f256870c48f4efa0))
*   **Checkbox:** use ts type for onChange ([#3544](https://github.com/kiwicom/orbit/issues/3544)) ([31997be](https://github.com/kiwicom/orbit/commit/31997befbfddc4304f48ce6312bf5a035b868442))
*   **icons:** add iconFont false to colored icons ([989e5b1](https://github.com/kiwicom/orbit/commit/989e5b10e89a4293112e8fc6e79880814bcf8085))
*   **icons:** fix svg fonts unicodes ([262ee6c](https://github.com/kiwicom/orbit/commit/262ee6cff5e2880ce903cc464a7c3097b7931e5a))
*   **icons:** move colored icons to mobile folder ([93169b3](https://github.com/kiwicom/orbit/commit/93169b368f088c70e0cdd2d519b7f3dd2bf22c1e))
*   **Itinerary:** render Texts as div ([#3541](https://github.com/kiwicom/orbit/issues/3541)) ([3679d91](https://github.com/kiwicom/orbit/commit/3679d91d8dd307090aed4ed549ca3bff6bce6211))
*   storybook ([#3537](https://github.com/kiwicom/orbit/issues/3537)) ([e7680e4](https://github.com/kiwicom/orbit/commit/e7680e407c612d16245fce669e72a80146843800))

#### Features

*   **icons:** add google-play icon ([cf20e42](https://github.com/kiwicom/orbit/commit/cf20e4255eb926e026253b6cc1ec0ee62194d31d))
*   **ItineraryStatus:** add type neutral ([#3539](https://github.com/kiwicom/orbit/issues/3539)) ([bc73ba5](https://github.com/kiwicom/orbit/commit/bc73ba513c2a04f0db9aed6165ebc2895ff1855a))
*   **Itinerary:** support multiple banners ([#3543](https://github.com/kiwicom/orbit/issues/3543)) ([4994e9e](https://github.com/kiwicom/orbit/commit/4994e9eb65e81715fa198539cf03d3d7694a2266))

## [3.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.2.0...@kiwicom/orbit-components@3.3.0) (2022-07-21)

#### Bug Fixes

*   **ItineraryIcon:** add new icon from figma ([#3529](https://github.com/kiwicom/orbit/issues/3529)) ([233e2b7](https://github.com/kiwicom/orbit/commit/233e2b7293ee429d230f390b29bf765da63c2ae7))
*   **PricingTable:** remove max-width ([#3533](https://github.com/kiwicom/orbit/issues/3533)) ([6a4c40b](https://github.com/kiwicom/orbit/commit/6a4c40bf564c397d86a717ec65b19d870aaac548))

#### Features

*   **icons:** update icons from figma ([#3528](https://github.com/kiwicom/orbit/issues/3528)) ([a86268a](https://github.com/kiwicom/orbit/commit/a86268a5a24aa141b724887217d6ac3bb8bdfe7d))

## [3.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.1.0...@kiwicom/orbit-components@3.2.0) (2022-07-15)

#### Bug Fixes

*   **ItineraryIcon:** remove background color for first and last icon ([6e47687](https://github.com/kiwicom/orbit/commit/6e47687cb2847de97a6545a085f5258b9640f4d6))
*   **Itinerary:** remove opacity on Hidden ([ec53d4c](https://github.com/kiwicom/orbit/commit/ec53d4cde4df2a2305799ffe746460e2da465c10))
*   **ItinerarySegmentDetail:** remove border-radius on summary ([69d6cde](https://github.com/kiwicom/orbit/commit/69d6cde36caca7af410b5c47bcd514d65bdb68cf))
*   **Popover:** change zIndex value to 705 because of NavigationBar ([#3523](https://github.com/kiwicom/orbit/issues/3523)) ([9a40b57](https://github.com/kiwicom/orbit/commit/9a40b579de48300289052b986e7be3e6677625dc))
*   **Stepper:** change box-shadow to inset ([#3438](https://github.com/kiwicom/orbit/issues/3438)) ([8b3bf51](https://github.com/kiwicom/orbit/commit/8b3bf51b87c414e60c000707e949a5ee3d7bd344))
*   **Timeline:** render subLabel under label on mobile ([44d84bc](https://github.com/kiwicom/orbit/commit/44d84bce53321e26ededa5dc7396f15575fd1aec))

#### Features

*   **ItinerarySegmentStop:** add cancelledDate, cancelledCity, cancelledStation props ([69cc839](https://github.com/kiwicom/orbit/commit/69cc8397e6f96e31337efacf869cafef71b1bb88))
*   **Timeline:** add asText property ([ca6bd42](https://github.com/kiwicom/orbit/commit/ca6bd42abd33584039e8cc0439e92be25ecb6a09))

## [3.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@3.0.0...@kiwicom/orbit-components@3.1.0) (2022-06-30)

#### Bug Fixes

*   **Itinerary:** add radial-gradient to ItineraryIcon ([69b11ca](https://github.com/kiwicom/orbit/commit/69b11caff5c17a18c9845d4777870841bfa77381))
*   **Itinerary:** remove hover background color ([313f533](https://github.com/kiwicom/orbit/commit/313f53396133014cc8be1b3a4b77d33ba8729b69))
*   **Stepper:** minor stepper fixes ([#3431](https://github.com/kiwicom/orbit/issues/3431)) ([fe4a4fb](https://github.com/kiwicom/orbit/commit/fe4a4fbbcbe394c8c29d513f7386386081c7fcde))

#### Features

*   add ids to components ([#3422](https://github.com/kiwicom/orbit/issues/3422)) ([5036dbf](https://github.com/kiwicom/orbit/commit/5036dbf3fc2669c01e1ec1d8d355305f754d860d))
*   **icons:** update icons from figma ([#3421](https://github.com/kiwicom/orbit/issues/3421)) ([d90f7dd](https://github.com/kiwicom/orbit/commit/d90f7ddb75c68340415c20f477bfa13ddaeb5522))
*   **Itinerary:** add ItinerarySeparator component ([d4c804d](https://github.com/kiwicom/orbit/commit/d4c804de2deceaac344061eba574875ef3db8963))
*   **ItinerarySegment:** add info prop ([13a1a20](https://github.com/kiwicom/orbit/commit/13a1a20ccceadad7f759245a7df276374b9c23a2))
*   **ItinerarySegment:** make banner clickable ([202de24](https://github.com/kiwicom/orbit/commit/202de24d79a457b0a2f94baeee5427c724650161))
*   **ItinerarySegmentStop:** add support for new HiddenCities ([4cac115](https://github.com/kiwicom/orbit/commit/4cac1159e3a9d7286e4b5b0bdd2690089fd8b99d))
*   **ItinerarySegmentStop:** add support of cancelled time ([92c8b64](https://github.com/kiwicom/orbit/commit/92c8b643da16804467d282832218a28cbe79f100))
*   **KeyValue:** add KeyValue component ([#3430](https://github.com/kiwicom/orbit/issues/3430)) ([a9358a9](https://github.com/kiwicom/orbit/commit/a9358a927b34007838db2b68f8998c2e3452f0b1))
*   **Text:** add withBackground property ([1852f0b](https://github.com/kiwicom/orbit/commit/1852f0b5ded7a7897b0db78d15620d4106218e1b))
*   **useIntersect:** export observer ([#3432](https://github.com/kiwicom/orbit/issues/3432)) ([547b41e](https://github.com/kiwicom/orbit/commit/547b41eed005ec8684816ee3574ef09f34397d18))

#### Reverts

*   Revert "fix(useLockScroll): add webkit-scrollbar to prevent layout shift (#3408)" (#3420) ([9a72307](https://github.com/kiwicom/orbit/commit/9a72307ebb43d46742436ec1ba8a3c206d38d316)), closes [#3408](https://github.com/kiwicom/orbit/issues/3408) [#3420](https://github.com/kiwicom/orbit/issues/3420)

## [3.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.22.2...@kiwicom/orbit-components@3.0.0) (2022-06-20)

#### Bug Fixes

*   **ButtonPrimitive:** contentAlign prop fix ([#3405](https://github.com/kiwicom/orbit/issues/3405)) ([936f860](https://github.com/kiwicom/orbit/commit/936f860f820d585037690345bdbc6866840fa5c7))
*   **Stepper:** fix Stepper width on responsive ([#3418](https://github.com/kiwicom/orbit/issues/3418)) ([eb1b663](https://github.com/kiwicom/orbit/commit/eb1b6637b94927de3dcd339beb0875c9b4e555ac))
*   **Switch:** make circle icon to be 8px ([#3415](https://github.com/kiwicom/orbit/issues/3415)) ([a0ed184](https://github.com/kiwicom/orbit/commit/a0ed18496349254fa258076319f5351c19b3cb82))
*   **useLockScroll:** add webkit-scrollbar to prevent layout shift ([#3408](https://github.com/kiwicom/orbit/issues/3408)) ([c9ff813](https://github.com/kiwicom/orbit/commit/c9ff813412dd5ea45bdfa39b0a6951bad3bea906))

#### Features

*   **components:** stepper visual updates ([df86a44](https://github.com/kiwicom/orbit/commit/df86a448afa5a4f98a6dd4bf5da32ff6d06c5074))
*   **deprecate:** deprecate InputStepper component ([f6d2da9](https://github.com/kiwicom/orbit/commit/f6d2da9ad5f394d7fcc21d2594a07f2cd478bf87))
*   **icons:** update icons from figma ([32c0f24](https://github.com/kiwicom/orbit/commit/32c0f2482babb1d69a3c5f74f07396b136f07f38))
*   **illustration:** add AppKiwi illustration ([#3416](https://github.com/kiwicom/orbit/issues/3416)) ([6be7363](https://github.com/kiwicom/orbit/commit/6be7363c2212ae55611669b2d0b9ca3379533124))
*   **Stepper:** remove size prop ([49f31ce](https://github.com/kiwicom/orbit/commit/49f31cec3628f60d40e22fdf94955d31952fd394))

#### BREAKING CHANGES

*   **Stepper:** size prop was removed

### [2.22.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.22.1...@kiwicom/orbit-components@2.22.2) (2022-06-07)

#### Bug Fixes

*   **icons:** colored signal and google ([6925af9](https://github.com/kiwicom/orbit/commit/6925af9d8072bc5c86fed6a98834dad11373cb49))

### [2.22.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.22.0...@kiwicom/orbit-components@2.22.1) (2022-06-06)

#### Bug Fixes

*   **ButtonPrimitive:** prevent appearance css specifity issue ([#3394](https://github.com/kiwicom/orbit/issues/3394)) ([e9c2376](https://github.com/kiwicom/orbit/commit/e9c237668b791aa61b7c8af50d75068f3de410e5))
*   **icons:** fix baggage icons ([a7844aa](https://github.com/kiwicom/orbit/commit/a7844aa422e10c13ee383bbad46cd4149c6b4928))
*   **icons:** fix google icon ([03bff2b](https://github.com/kiwicom/orbit/commit/03bff2b927de6646941283b038b9a039b9799399))
*   **icons:** fix icons content after figma update ([#3403](https://github.com/kiwicom/orbit/issues/3403)) ([f2822f9](https://github.com/kiwicom/orbit/commit/f2822f9ac6fff57b565969801a25489ef9a23624))

## [2.22.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.21.0...@kiwicom/orbit-components@2.22.0) (2022-06-03)

#### Features

*   **icons:** add support for colored icons frame ([#3392](https://github.com/kiwicom/orbit/issues/3392)) ([b1ab819](https://github.com/kiwicom/orbit/commit/b1ab819451a72f3541520670327f51fc3b8ff1f9))
*   **Skeleton:** add color prop ([#3393](https://github.com/kiwicom/orbit/issues/3393)) ([c73eed1](https://github.com/kiwicom/orbit/commit/c73eed113a36f0e61fa433d403db7570c19917cc))

## [2.21.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.20.0...@kiwicom/orbit-components@2.21.0) (2022-06-02)

#### Bug Fixes

*   **icons:** fix icons names ([#3390](https://github.com/kiwicom/orbit/issues/3390)) ([dea0ed0](https://github.com/kiwicom/orbit/commit/dea0ed0de991e094f56252baf77b74855c2d6b1a))

#### Features

*   **Dialog:** add maxWidth prop ([#3386](https://github.com/kiwicom/orbit/issues/3386)) ([8b266dd](https://github.com/kiwicom/orbit/commit/8b266dd1675fdbd5598e1652e49ea883868dfb66))

## [2.20.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.19.1...@kiwicom/orbit-components@2.20.0) (2022-06-01)

#### Bug Fixes

*   **deprecated:** inputGroup margin ([#3375](https://github.com/kiwicom/orbit/issues/3375)) ([420c61b](https://github.com/kiwicom/orbit/commit/420c61b983b825a6299b14091b8580a49c83814d))
*   **Pagination:** add missing translation for responsive variant ([#3374](https://github.com/kiwicom/orbit/issues/3374)) ([761bc7c](https://github.com/kiwicom/orbit/commit/761bc7c82def72b09596b91a144a393cec052cd3))

#### Features

*   **icons:** add radar icon ([e88a3f5](https://github.com/kiwicom/orbit/commit/e88a3f5248d0ec6f393b359198f6884ef16c42d1))
*   **Timeline:** add direction prop ([55192c0](https://github.com/kiwicom/orbit/commit/55192c02d8c0e1e5521348ccd043a5c6f3987f18))
*   **Wizard:** allow column on desktop ([e375ba4](https://github.com/kiwicom/orbit/commit/e375ba4971e29ade55ce41cd5742a6a38fddaa1d))

### [2.19.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.19.0...@kiwicom/orbit-components@2.19.1) (2022-05-13)

**Note:** Version bump only for package @kiwicom/orbit-components

## [2.19.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.18.0...@kiwicom/orbit-components@2.19.0) (2022-05-03)

#### Bug Fixes

*   Button and ButtonLink changes ([#3351](https://github.com/kiwicom/orbit/issues/3351)) ([598ac28](https://github.com/kiwicom/orbit/commit/598ac2846d94177f3d2a3594d3c9a1caa5ddf69a))
*   button and buttonLink to have default browser outline for tab nav ([bf8eca2](https://github.com/kiwicom/orbit/commit/bf8eca28308884aadf48e4efbe9bb442a9ad6299))
*   **ButtonLink:** set productNormalHover and productNormalActive colors for compact secondary ([4cb3cf9](https://github.com/kiwicom/orbit/commit/4cb3cf954de142c983e00ac7eb5aeeebff5d0ecc))
*   **ErrorFormsTooltip:** turn off flip ([#3347](https://github.com/kiwicom/orbit/issues/3347)) ([e581554](https://github.com/kiwicom/orbit/commit/e5815544e5c654fcdccb03bfb6d8ea4f62f67735))
*   **ItinerarySegmentStop:** fix SSR issue ([#3350](https://github.com/kiwicom/orbit/issues/3350)) ([56b1bc7](https://github.com/kiwicom/orbit/commit/56b1bc7f4fa75132dc484813b6e605af024a0f17))
*   **useLockScrolling:** lockScrollingBarGap bug ([#3346](https://github.com/kiwicom/orbit/issues/3346)) ([f3a552d](https://github.com/kiwicom/orbit/commit/f3a552d960de772ad20a8dc8f3fdb35e18c5b81e))

#### Features

*   **tokens:** add colorTextButtonLinkSecondaryCompact active and hover tokens ([5ddcf2e](https://github.com/kiwicom/orbit/commit/5ddcf2e39a07fc2740ed32500ffe20dd92a2de09))

## [2.18.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.17.2...@kiwicom/orbit-components@2.18.0) (2022-04-28)

#### Bug Fixes

*   **Icon:** fix storybook iconList ([#3342](https://github.com/kiwicom/orbit/issues/3342)) ([3009190](https://github.com/kiwicom/orbit/commit/3009190647c2a5091cd70aa1220c2d5ae99aec31))
*   **ItinerarySegment:** change line color to paletteCloudNormalActive ([#3345](https://github.com/kiwicom/orbit/issues/3345)) ([3dcf147](https://github.com/kiwicom/orbit/commit/3dcf1479bf73486e6da13cda3f409ac2223f1f05))
*   **ItinerarySegmentStop:** fix paddings and minWidth ([#3339](https://github.com/kiwicom/orbit/issues/3339)) ([ead0cf6](https://github.com/kiwicom/orbit/commit/ead0cf65dde59dbe85389137a09b867d92a034eb))
*   **Skeleton:** make pulse animation more visible ([#3335](https://github.com/kiwicom/orbit/issues/3335)) ([a02c435](https://github.com/kiwicom/orbit/commit/a02c4350ae416fd1dbf43146220596beb60c64d7))

#### Features

*   **Collapse:** add customLabel prop ([#3331](https://github.com/kiwicom/orbit/issues/3331)) ([436442b](https://github.com/kiwicom/orbit/commit/436442bad4de751b861772572b20624934b2059a))
*   **SocialButton:** add type email and change layout ([#3337](https://github.com/kiwicom/orbit/issues/3337)) ([c460b52](https://github.com/kiwicom/orbit/commit/c460b52b5e85212686b9a520cef7e4373e6c85b3))

### [2.17.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.17.1...@kiwicom/orbit-components@2.17.2) (2022-04-05)

#### Bug Fixes

*   **ErrorFormTooltip:** fix overflowing tooltip ([#3328](https://github.com/kiwicom/orbit/issues/3328)) ([e57dbea](https://github.com/kiwicom/orbit/commit/e57dbeae304124bb9a460665f09ed769c763003a))
*   **InputField:** use line-height token ([#3319](https://github.com/kiwicom/orbit/issues/3319)) ([de0f878](https://github.com/kiwicom/orbit/commit/de0f87858fe45637fd00ebf39702b4621154e1df))
*   **Toast:** desktop width set to initial ([#3322](https://github.com/kiwicom/orbit/issues/3322)) ([529c9b1](https://github.com/kiwicom/orbit/commit/529c9b120bf0fbb8c6340c26888ee089a6691030))

### [2.17.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.17.0...@kiwicom/orbit-components@2.17.1) (2022-03-23)

#### Bug Fixes

*   **icons:** colored-whatsapp icon name ([6706b68](https://github.com/kiwicom/orbit/commit/6706b684c5c3aa734dcfcaec82652bccaff029e3))

## [2.17.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.16.0...@kiwicom/orbit-components@2.17.0) (2022-03-22)

#### Bug Fixes

*   **FormLabel:** add missing types ([#3310](https://github.com/kiwicom/orbit/issues/3310)) ([b764dbb](https://github.com/kiwicom/orbit/commit/b764dbbfc0cfc728a8aa127341201c3eaead64a0))
*   **ItinerarySegmentStop:** time, station, city as React.Node ([08b7ec5](https://github.com/kiwicom/orbit/commit/08b7ec595ffc7bb3a45796cef8dc36c17892b546))
*   **ItineraryStatus:** fix icon import ([#3312](https://github.com/kiwicom/orbit/issues/3312)) ([d3d9e67](https://github.com/kiwicom/orbit/commit/d3d9e6778999e3ce6165cabb4527d698ae6c7216))
*   **ModalFooter:** fix padding ([#3311](https://github.com/kiwicom/orbit/issues/3311)) ([b4dc950](https://github.com/kiwicom/orbit/commit/b4dc950b381f3f1a6f0ee23edc6c4e8b5a0d0f11))
*   **Tag:** selected circle color ([#3314](https://github.com/kiwicom/orbit/issues/3314)) ([33e8b77](https://github.com/kiwicom/orbit/commit/33e8b7747bd999a80ad2ba3065378378d979d673))
*   **Toast:** remove min-width for mobile ([#3306](https://github.com/kiwicom/orbit/issues/3306)) ([c242c1f](https://github.com/kiwicom/orbit/commit/c242c1ff04d6d74aa5f35dab0f3c3216a7e1baaa))

#### Features

*   **icons:** android icon ([5d05f50](https://github.com/kiwicom/orbit/commit/5d05f5091f8eefa527a4c1a49cd866937cc8f6a8))
*   **icons:** dashboard, admin, ai icons ([72aedc6](https://github.com/kiwicom/orbit/commit/72aedc6b8b9501f9021fa364edd24ba5ca9583a6))
*   **icons:** social networks icons ([b5a537c](https://github.com/kiwicom/orbit/commit/b5a537c40059b0568e11dfaf0166af9f76ce56ab))
*   **ItinerarySegment:** actionable prop ([#3309](https://github.com/kiwicom/orbit/issues/3309)) ([efa18ff](https://github.com/kiwicom/orbit/commit/efa18ff7f457c578066c6ebaf85ccc25ae364751))
*   **ListChoice:** action prop ([#3313](https://github.com/kiwicom/orbit/issues/3313)) ([bac197f](https://github.com/kiwicom/orbit/commit/bac197fb1c7614fbc8b2f4f03886d48e4bea4fc1))

## [2.16.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.15.1...@kiwicom/orbit-components@2.16.0) (2022-03-11)

#### Bug Fixes

*   **ItinerarySegmentDetail:** expandable, only if content is provided ([#3303](https://github.com/kiwicom/orbit/issues/3303)) ([d840627](https://github.com/kiwicom/orbit/commit/d840627294a5744838da2adb3beed4f5e50c2a3c))

#### Features

*   **Illustrations:** add new Chatbot, FareLock illustrations ([#3304](https://github.com/kiwicom/orbit/issues/3304)) ([31d5d82](https://github.com/kiwicom/orbit/commit/31d5d82e77e33204fcc2fc817af03afebc1a4e1b))

### [2.15.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.15.0...@kiwicom/orbit-components@2.15.1) (2022-03-07)

#### Bug Fixes

*   **Tile:** fix tile anchor ([#3302](https://github.com/kiwicom/orbit/issues/3302)) ([68c0bfa](https://github.com/kiwicom/orbit/commit/68c0bfae3391fd22d70bef9d4b384dc638c2e049))

## [2.15.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.14.2...@kiwicom/orbit-components@2.15.0) (2022-03-02)

#### Bug Fixes

*   **InputGroup:** pass and test forwardRef ([c1ef417](https://github.com/kiwicom/orbit/commit/c1ef41729822bacd07adafd2004cf3c9bbf727a1))
*   **ItinerarySegmentDetail:** fix click event for badges ([99305ae](https://github.com/kiwicom/orbit/commit/99305aef6344908fa5b6f2e27c4ccc8ceb4e95b8))
*   **List:** remove additional spacing ([#3299](https://github.com/kiwicom/orbit/issues/3299)) ([be2ac7c](https://github.com/kiwicom/orbit/commit/be2ac7c6b80d1aa079b22cf19f38b20a97cc8f48))

#### Features

*   **HorizontalScroll:** add onOverflow prop ([ec04d31](https://github.com/kiwicom/orbit/commit/ec04d319484a0d92bf7e1b486a5d6547c66bf533))

### [2.14.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.14.1...@kiwicom/orbit-components@2.14.2) (2022-02-28)

#### Bug Fixes

*   **Alert:** fix content line-height ([485b67f](https://github.com/kiwicom/orbit/commit/485b67f54661da9e201201eece014bb24a6fe3fd))
*   **ChoiceGroup:** add forwardRef ([3158068](https://github.com/kiwicom/orbit/commit/3158068029efb48263fb1c3ed5bc5ae843a1b31a))
*   **Drawer:** autofocus close button when opened ([39dc39c](https://github.com/kiwicom/orbit/commit/39dc39c2cbf80ff978ef1e353ea703ee076d7b7e))
*   **Drawer:** close on ESC ([0de54ee](https://github.com/kiwicom/orbit/commit/0de54eea5c72e2847f1a9a455ad037dae4c0e9ee))
*   **Drawer:** use focus trap ([8291bd3](https://github.com/kiwicom/orbit/commit/8291bd3539905c97f407d72c02950e0a75850524))
*   **InputGroup:** add forwardRef ([78ff5f7](https://github.com/kiwicom/orbit/commit/78ff5f76ac93a98f65f8db53e24d0d025280496e))

### [2.14.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.14.0...@kiwicom/orbit-components@2.14.1) (2022-02-21)

#### Bug Fixes

*   **Popover:** remove animation on desktop ([1b5d613](https://github.com/kiwicom/orbit/commit/1b5d613a4ae3a634a13ac019776d0b520cf6c04b))

## [2.14.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.13.0...@kiwicom/orbit-components@2.14.0) (2022-02-21)

#### Bug Fixes

*   **Card:** change chevron icon color to secondary ([813c02f](https://github.com/kiwicom/orbit/commit/813c02fb04ab2d7e6252bcb469479909de8a40ce))
*   **Collapse:** change icon color to secondary ([ccc945b](https://github.com/kiwicom/orbit/commit/ccc945befffa0663717aee14009f8d2c72e043fc))
*   **Drawer:** new z-index value ([df4a571](https://github.com/kiwicom/orbit/commit/df4a5715fcb55e1a86eeeed3ca8960c53a760831))
*   **Drawer:** use new z-index value ([#3292](https://github.com/kiwicom/orbit/issues/3292)) ([b0c5a6d](https://github.com/kiwicom/orbit/commit/b0c5a6da773c74060842b299ec5b1a2518d091f6))
*   **ItinerarySegmentDetail:** change chevron to secondary color ([8b05f16](https://github.com/kiwicom/orbit/commit/8b05f165730c98495f3351a8435f42e08a48d47b))
*   **Select:** change icon color to InkLight ([4467e53](https://github.com/kiwicom/orbit/commit/4467e539ba2f047b3db6acd81403f73600d71255))
*   **Tag:** fix persistant focus ([#3287](https://github.com/kiwicom/orbit/issues/3287)) ([286088e](https://github.com/kiwicom/orbit/commit/286088ed81f25200d3aab94e103ec5b5d5dbde42))
*   **Tile:** change chevon icon color to secondary ([68cb181](https://github.com/kiwicom/orbit/commit/68cb181c31a5b390e2841e8163c955a2178697bc))
*   **useScrollLock:** return reserveScrollBarGap option ([#3286](https://github.com/kiwicom/orbit/issues/3286)) ([118a9cb](https://github.com/kiwicom/orbit/commit/118a9cb0956bda40625d5bb7f8cbe34609728d69))

#### Features

*   **NavigationBar:** add hideOnScroll prop ([#3282](https://github.com/kiwicom/orbit/issues/3282)) ([c253f23](https://github.com/kiwicom/orbit/commit/c253f23b46040af1917f71527037019e6a57c7a8))

## [2.13.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.12.0...@kiwicom/orbit-components@2.13.0) (2022-02-10)

#### Features

*   **Alert:** visual alert component updates ([#3277](https://github.com/kiwicom/orbit/issues/3277)) ([b68b4a2](https://github.com/kiwicom/orbit/commit/b68b4a23c02707e8307547962b13eaf777191cfd))

## [2.12.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.11.0...@kiwicom/orbit-components@2.12.0) (2022-02-09)

#### Bug Fixes

*   **InputField:** enable tooltip on hover when disabled ([#3274](https://github.com/kiwicom/orbit/issues/3274)) ([cb61420](https://github.com/kiwicom/orbit/commit/cb61420c5e826a8bdda86d9c661cf73cfe49d7a6))
*   **Itinerary:** fix overflowing badges ([#3275](https://github.com/kiwicom/orbit/issues/3275)) ([e894fce](https://github.com/kiwicom/orbit/commit/e894fcef7b5dae6ea2015ed15997b6361ecd7a6e))

#### Features

*   **Drawer:** add fixedHeader prop ([#3269](https://github.com/kiwicom/orbit/issues/3269)) ([a6658a4](https://github.com/kiwicom/orbit/commit/a6658a454614adbf0e65affceb6988c2aea66799))

## [2.11.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.10.0...@kiwicom/orbit-components@2.11.0) (2022-02-07)

#### Bug Fixes

*   **ItinerarySegmentDetail:** fix overflowing badges ([5a4bea7](https://github.com/kiwicom/orbit/commit/5a4bea77bda557d666fd42bbd54640300fba67f8))

#### Features

*   **Badge:** add new bundle type ([1c92c62](https://github.com/kiwicom/orbit/commit/1c92c6276bd4871f794724e5e2eb1011dc085feb))
*   **Button:** add new bundle type ([ad7c435](https://github.com/kiwicom/orbit/commit/ad7c435ecfdf17e0cac3db3985b06e4bb07da56b))
*   **HorizontalScroll:** add elevationOverflow and elevationColor props ([8c7ce02](https://github.com/kiwicom/orbit/commit/8c7ce02a7ec5436cdc069bb3d0f4d3e4c5ea36bf))

## [2.10.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.9.0...@kiwicom/orbit-components@2.10.0) (2022-02-02)

#### Bug Fixes

*   **InputGroup:** fix issue with long labels ([#3256](https://github.com/kiwicom/orbit/issues/3256)) ([9690e1e](https://github.com/kiwicom/orbit/commit/9690e1ec7b379d90cbc0688c91f12c5209c330d6))
*   **useTransition:** replace `enter` API with `state` ([ab239d4](https://github.com/kiwicom/orbit/commit/ab239d44dd7dbb0e5ede7791f6a6fc97dfddc47d))

#### Features

*   add new experimental hook `useTransition` ([#3191](https://github.com/kiwicom/orbit/issues/3191)) ([3758af5](https://github.com/kiwicom/orbit/commit/3758af591f0b8b63b722e93571276485ec0ea010))
*   **icons:** add new flash icon ([#3260](https://github.com/kiwicom/orbit/issues/3260)) ([574299e](https://github.com/kiwicom/orbit/commit/574299ee5a59d18f6635e29727d496b44c17131c))

## [2.9.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.8.1...@kiwicom/orbit-components@2.9.0) (2022-01-24)

#### Bug Fixes

*   **ButtonPrimitive:** preserve `:hover` and `:active` styles ([6b67b24](https://github.com/kiwicom/orbit/commit/6b67b24ac1c6406d86f289a12f8e475d0ca2bcaa))
*   **ErrorFormTooltip:** help closable onBlur ([#3246](https://github.com/kiwicom/orbit/issues/3246)) ([9a0c04d](https://github.com/kiwicom/orbit/commit/9a0c04df8a1947448ba58d91c7f9d261516b7031))
*   **Itinerary:** truncate possible long texts ([#3247](https://github.com/kiwicom/orbit/issues/3247)) ([740c798](https://github.com/kiwicom/orbit/commit/740c798773e8761cdc3fdfa858d4f8afae162a12))
*   **Popover:** ensure rounded bottom corners when `actions` are defined ([f8f6e39](https://github.com/kiwicom/orbit/commit/f8f6e3982e1a5d5fb178398b1f9c6366589fedb6))

#### Features

*   **Separator:** add props `indent` and `align` ([e8f5bcb](https://github.com/kiwicom/orbit/commit/e8f5bcb067b05208c44981cc9bc113cf269daec3))
*   **SocialButton:** add chevron icons ([538a28a](https://github.com/kiwicom/orbit/commit/538a28a5806d83812528d0e384341b7c065fda98))

### [2.8.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.8.0...@kiwicom/orbit-components@2.8.1) (2022-01-20)

**Note:** Version bump only for package @kiwicom/orbit-components

## [2.8.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.7.0...@kiwicom/orbit-components@2.8.0) (2022-01-20)

#### Bug Fixes

*   **components:** fixes after design reviews ([#3226](https://github.com/kiwicom/orbit/issues/3226)) ([281bea7](https://github.com/kiwicom/orbit/commit/281bea7b3a093316964385eb6f549ec6283f720f))
*   **ErrorFormTooltip:** close icon on top ([65b3a0f](https://github.com/kiwicom/orbit/commit/65b3a0fbee8a3731bef5eae7e827b74284c66d71))
*   **FormLabel:** change color from secondary to info ([a1c3e7d](https://github.com/kiwicom/orbit/commit/a1c3e7d56c7021f94e52361d457013e6cbf69b17))
*   **InputField:** inlineLabel color from secondary to info ([0b1b03a](https://github.com/kiwicom/orbit/commit/0b1b03ae54cb4bf08a246acdbbf73c68d666ea64))
*   **Toast:** align implementation with type declarations ([5d6fdb9](https://github.com/kiwicom/orbit/commit/5d6fdb950de779863e43c7977f08c4b608b5f933))
*   **Toast:** fix infinite loop in unit tests ([4fdbe0e](https://github.com/kiwicom/orbit/commit/4fdbe0e214ff6f3a19335dad0b469b3464033729)), closes [/github.com/timolins/react-hot-toast/issues/107#issuecomment-1017213020](https://github.com//github.com/timolins/react-hot-toast/issues/107/issues/issuecomment-1017213020)

#### Features

*   **ErrorForms:** add helpClosable prop ([f5a73cc](https://github.com/kiwicom/orbit/commit/f5a73cccfd0d5dc0a507e93cb21062edf3aff451))
*   **Tag:** add new colors and props ([#3232](https://github.com/kiwicom/orbit/issues/3232)) ([a896127](https://github.com/kiwicom/orbit/commit/a8961277967360a60045b0fdf8dd1534afb8e799))

## [2.7.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.6.1...@kiwicom/orbit-components@2.7.0) (2022-01-14)

#### Bug Fixes

*   **Toast:** fix message type ([#3235](https://github.com/kiwicom/orbit/issues/3235)) ([75c2a5d](https://github.com/kiwicom/orbit/commit/75c2a5d444ce60232efa0a2a8ec4ed2cb85a3da0))

#### Features

*   **Illustration:** add new illustrations ([#3234](https://github.com/kiwicom/orbit/issues/3234)) ([f90da39](https://github.com/kiwicom/orbit/commit/f90da394dd2cf384ee65b859333d7fcb69aa2280))
*   **Layout:** accommodate breadcrumbs on booking ([cedef08](https://github.com/kiwicom/orbit/commit/cedef08607ba6f3136dec1924ceb06aeb0ef5c98))

### [2.6.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.6.0...@kiwicom/orbit-components@2.6.1) (2022-01-07)

#### Bug Fixes

*   **ButtonPrimitive:** remove line-height ([ea54b4e](https://github.com/kiwicom/orbit/commit/ea54b4ee5dd61dcb34451146f60b0ad0440c37f3))
*   **InputField:** fix placeholder type ([42a6244](https://github.com/kiwicom/orbit/commit/42a62445e2e536502d379eb73a55777075c234b6))

## [2.6.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.5.1...@kiwicom/orbit-components@2.6.0) (2021-12-22)

#### Bug Fixes

*   **Checkbox:** fix design discrepancies in border width and radius ([24b9af2](https://github.com/kiwicom/orbit/commit/24b9af2b96ae6f0dd0d10e376fbd9e2adc6bf400))
*   fix background color for help tooltip in form components ([8ce16bd](https://github.com/kiwicom/orbit/commit/8ce16bdc9a00157a6c79a0e8eb4de4119ae2f3ba))
*   fix tooltip's padding in form components ([c7496c8](https://github.com/kiwicom/orbit/commit/c7496c8a0a78c23e148606f26079a49eba643d88))
*   increase font weight of labels in form components ([56fcaeb](https://github.com/kiwicom/orbit/commit/56fcaeb4a86a6e8162ac89380db4dc4d14a1bddd))
*   **Itinerary:** fix to match design ([#3222](https://github.com/kiwicom/orbit/issues/3222)) ([80fa090](https://github.com/kiwicom/orbit/commit/80fa090c0186789a99e73bd45d152bd659927262))
*   **Radio:** lower focus glow amount ([2a7012f](https://github.com/kiwicom/orbit/commit/2a7012f46ce068e7703a2cbe44f861db142f1614))

#### Features

*   **Toast:** introduce toast component ([#3216](https://github.com/kiwicom/orbit/issues/3216)) ([8157669](https://github.com/kiwicom/orbit/commit/8157669e30b89bf2f207287e410ba952509d6f98))

### [2.5.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.5.0...@kiwicom/orbit-components@2.5.1) (2021-12-13)

#### Bug Fixes

*   remove norefferer from links ([#3217](https://github.com/kiwicom/orbit/issues/3217)) ([67353f0](https://github.com/kiwicom/orbit/commit/67353f083f84c96e68887b30008ea72211020938))
*   **Skeleton:** set fixed height for Text preset ([#3214](https://github.com/kiwicom/orbit/issues/3214)) ([c7a35c5](https://github.com/kiwicom/orbit/commit/c7a35c51ed5532955edff2b518f8567b0758ab4a))

## [2.5.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.4.1...@kiwicom/orbit-components@2.5.0) (2021-12-07)

#### Bug Fixes

*   **getBreakpointWidth:** improve typings through overloading ([069cf86](https://github.com/kiwicom/orbit/commit/069cf8628f3f1e39fcefce72d0f8d702d23320f5))
*   **Heading:** add missing TypeScript definition for StyledHeading ([7bdb6e2](https://github.com/kiwicom/orbit/commit/7bdb6e27bbf78916fc5faf64c8ffe17a47c0ba1e))
*   **Heading:** temporary fix for `viewports` being `undefined` ([#3212](https://github.com/kiwicom/orbit/issues/3212)) ([4f3fb8d](https://github.com/kiwicom/orbit/commit/4f3fb8d2d03d84825898a2a0d28c7eb94033e465))
*   **Tooltip:** export interface ([#3210](https://github.com/kiwicom/orbit/issues/3210)) ([d393f9a](https://github.com/kiwicom/orbit/commit/d393f9ac321336bcdd3fbba54f9c92be8ac3b170))

#### Features

*   add tracking ([#3180](https://github.com/kiwicom/orbit/issues/3180)) ([29d01be](https://github.com/kiwicom/orbit/commit/29d01be68cd661254479e4dad1b49d36ba5abd47))

### [2.4.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.4.0...@kiwicom/orbit-components@2.4.1) (2021-12-03)

#### Bug Fixes

*   **useMediaQuery:** add a fallback for older browsers ([3f51a3c](https://github.com/kiwicom/orbit/commit/3f51a3c22edcee80d55c077d9c688ee6aaeec47f))

## [2.4.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.3.0...@kiwicom/orbit-components@2.4.0) (2021-12-01)

#### Bug Fixes

*   **InputField:** fix warning caused by the invalid `$width` attribute ([1afc9d2](https://github.com/kiwicom/orbit/commit/1afc9d293a4d359d8f6c071b1ccc76c8c989683e))
*   **InputStepper:** fix type definitions to export InputStepperStateless ([36549da](https://github.com/kiwicom/orbit/commit/36549da8122892eb09876d3b256263157030b565))
*   update `peerDependencies` to support both `styled-components` v4 and v5 ([f420ff8](https://github.com/kiwicom/orbit/commit/f420ff8b082e918d3c26a6d5c1783022e8704a0f))
*   **useFocusTrap:** export from root ([1df0f8f](https://github.com/kiwicom/orbit/commit/1df0f8f1e034fed20824260dfbb572e7a474a52f))

#### Features

*   **Box:** support `display="list-item"` ([b42662a](https://github.com/kiwicom/orbit/commit/b42662a3e66542d4ecc3b831c24966a3f8780b83))
*   export RTL utilities from root as `rtl` ([10f8d1f](https://github.com/kiwicom/orbit/commit/10f8d1f81a6c88a23ac47ee3740d388d3f23e6ff))

## [2.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.2.0...@kiwicom/orbit-components@2.3.0) (2021-11-23)

#### Features

*   **Badge:** add border and carriers props ([e538b53](https://github.com/kiwicom/orbit/commit/e538b535418d2b76fb63b4279cf87d36a4b2b2b9))
*   **BadgePrimitive:** add carriers prop ([274795c](https://github.com/kiwicom/orbit/commit/274795ca8b6440ac14acda58472dabac5a7bca25))
*   **CarrierLogo:** add rounded prop ([55aaf50](https://github.com/kiwicom/orbit/commit/55aaf50d1f1c82626c83773b935d69765b988ac3))
*   **Itinerary:** init ([3a0d40e](https://github.com/kiwicom/orbit/commit/3a0d40e7bf9f63ed577519dd00535039713ca8c3))
*   **Text:** add font-weight medium ([1a361f2](https://github.com/kiwicom/orbit/commit/1a361f27edf166e52b59fbd840deee942573235f))
*   **Text:** add line-through ([2a74e2d](https://github.com/kiwicom/orbit/commit/2a74e2dec4d1bd37345178b07b527bd91310f6df))

## [2.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.1.3...@kiwicom/orbit-components@2.2.0) (2021-11-22)

#### Bug Fixes

*   **Box:** flex-grow and flex-shrink, allow any number ([#3190](https://github.com/kiwicom/orbit/issues/3190)) ([0243bfa](https://github.com/kiwicom/orbit/commit/0243bfa8dac814f5edad292b21e4a19d825ee86e))
*   **Popover:** useClickOutside after isLargeMobile ([#3189](https://github.com/kiwicom/orbit/issues/3189)) ([02b1487](https://github.com/kiwicom/orbit/commit/02b14876bf69839d248d9ff846e86a3a6a4cf063))
*   prevent form tooltip from falling off-screen ([8c8a0a8](https://github.com/kiwicom/orbit/commit/8c8a0a8751daa8efb81ca7355a523170a4438c9f))
*   **SmartPassIllustration:** fix double id ([ada7a0b](https://github.com/kiwicom/orbit/commit/ada7a0b3c82272abea5665808ad454dad701b095))
*   **WizardStepIcon:** fix transient props ([#3184](https://github.com/kiwicom/orbit/issues/3184)) ([a560e0f](https://github.com/kiwicom/orbit/commit/a560e0f99ef9d084e3602fe428eec005c1849893))

#### Features

*   **icons:** added new icons ([#3199](https://github.com/kiwicom/orbit/issues/3199)) ([28f7575](https://github.com/kiwicom/orbit/commit/28f7575a93fc37d81d3f0d7c258ee107a8f92d16))

### [2.1.3](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.1.2...@kiwicom/orbit-components@2.1.3) (2021-11-09)

#### Bug Fixes

*   **Heading:** fix error when passing unsupported props ([b52bcdb](https://github.com/kiwicom/orbit/commit/b52bcdb2984e92fb925e361a957a1d8717b938b8))

### [2.1.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.1.1...@kiwicom/orbit-components@2.1.2) (2021-11-09)

**Note:** Version bump only for package @kiwicom/orbit-components

### [2.1.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.1.0...@kiwicom/orbit-components@2.1.1) (2021-11-05)

#### Bug Fixes

*   remove uneccessary condition ([#3181](https://github.com/kiwicom/orbit/issues/3181)) ([e79baab](https://github.com/kiwicom/orbit/commit/e79baabc51531a88796100a14efaf2495730e41b))

## [2.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.0.1...@kiwicom/orbit-components@2.1.0) (2021-11-05)

#### Bug Fixes

*   **useMediaQuery:** optimize, support custom breakpoints, and make it work without context ([8a734fd](https://github.com/kiwicom/orbit/commit/8a734fd9d8db7d14725bf1c86b40652f50eeaf33))

#### Features

*   **Wizard:** close after click on WizardStep in compact ([#3176](https://github.com/kiwicom/orbit/issues/3176)) ([247e7ae](https://github.com/kiwicom/orbit/commit/247e7ae43a8e6983c183bd100806d64c3636b0a7))

### [2.0.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@2.0.0...@kiwicom/orbit-components@2.0.1) (2021-11-03)

#### Bug Fixes

*   missing storybook provider ([#3173](https://github.com/kiwicom/orbit/issues/3173)) ([4967fb7](https://github.com/kiwicom/orbit/commit/4967fb7dc2f34a716db7fda30c48952992979562))
*   **useToggle:** make typings reflect initial param is optional ([95821c5](https://github.com/kiwicom/orbit/commit/95821c514e8ccf970ec606de219eff301309f914))

## [2.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.6.1...@kiwicom/orbit-components@2.0.0) (2021-11-02)

#### Bug Fixes

*   **CountryFlag:** set "undefined" as default code ([#3100](https://github.com/kiwicom/orbit/issues/3100)) ([3e841c5](https://github.com/kiwicom/orbit/commit/3e841c526326c68140215e9e6afdec7bcb4cc29a))
*   refactor and properly initialize media queries ([#3138](https://github.com/kiwicom/orbit/issues/3138)) ([b566699](https://github.com/kiwicom/orbit/commit/b566699c00f0ca0e0c15e315f41121302b99cd69)), closes [#3149](https://github.com/kiwicom/orbit/issues/3149)

#### Code Refactoring

*   **TooltipPrimitive:** use Popper instead of custom logic ([#3129](https://github.com/kiwicom/orbit/issues/3129)) ([0e2271f](https://github.com/kiwicom/orbit/commit/0e2271f7389fd78ec541c60ec540668dff7b7351))

#### BREAKING CHANGES

*   **TooltipPrimitive:** replace props `preferredAlign` and `preferredPosition`
    with `placement`, and add new props `noFlip` and `offset`.
*   **CountryFlag:** The default code for CountryFlag is now `"undefined"`
    rather than `"anywhere"`, a gray flag with a question mark. This code is
    also used if the given code isn't supported.
*   media queries in `useMediaQuery` are now being
    properly initialized, in `useEffect` rather than directly in render, which
    should prevent some cryptic bugs, but there is a tiny chance that it will
    break code for those who have been relying on previous behavior, so it's
    important to be aware of this change.

### [1.6.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.6.0...@kiwicom/orbit-components@1.6.1) (2021-10-27)

#### Bug Fixes

*   **cloneWithTooltip:** wrong type declaration ([52c2418](https://github.com/kiwicom/orbit/commit/52c2418c06fbd4f8ea4aae6765e29ff48c1b2963))

## [1.6.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.5.0...@kiwicom/orbit-components@1.6.0) (2021-10-27)

#### Features

*   **InputField:** add width prop ([2a2fe0f](https://github.com/kiwicom/orbit/commit/2a2fe0f437a396cfc6c153d19546e3c039dd55d2))
*   **InputFile:** add width prop ([70d1d39](https://github.com/kiwicom/orbit/commit/70d1d397fce90d9160e44a4bc7147170a93414be))
*   **InputStepper:** add width prop ([c479f41](https://github.com/kiwicom/orbit/commit/c479f414370adb9f0f728d9d51d997cbdb02ca43))
*   **Select:** add width prop ([865d690](https://github.com/kiwicom/orbit/commit/865d690bfeaa97844601114bc8db95de2ab9c307))
*   **TextLink:** add active and focus colors ([3df1647](https://github.com/kiwicom/orbit/commit/3df1647bfa94bbd269e57b7b88b7f44c53b25ad0))

## [1.5.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.4.0...@kiwicom/orbit-components@1.5.0) (2021-10-21)

#### Bug Fixes

*   bring back missing icon Flow declarations ([9c0dcac](https://github.com/kiwicom/orbit/commit/9c0dcacde636535371d48600cc3cbf32485908e8))
*   **ErrorForms:** fix font-size ([#3151](https://github.com/kiwicom/orbit/issues/3151)) ([323c480](https://github.com/kiwicom/orbit/commit/323c480e9de6a1232c4da9325eb093ec5659fe6c))
*   **useLockScrolling:** support nested scroll locks ([#3149](https://github.com/kiwicom/orbit/issues/3149)) ([8215c85](https://github.com/kiwicom/orbit/commit/8215c85c6ef237ff65cbcbe14e69d46b8e9af5d5))

#### Features

*   add new icon: deals v2 ([08edbf9](https://github.com/kiwicom/orbit/commit/08edbf921f6f59b38466f34326070c76270d6e28))

#### Reverts

*   Revert "feat: export Theme type from root (#3125)" ([c0754d9](https://github.com/kiwicom/orbit/commit/c0754d985f8a38e7fb434e884b9ebe987a689374)), closes [#3125](https://github.com/kiwicom/orbit/issues/3125)

## [1.4.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.3.1...@kiwicom/orbit-components@1.4.0) (2021-10-20)

#### Bug Fixes

*   **ModalHeader:** remove margins from title ([e9ae04d](https://github.com/kiwicom/orbit/commit/e9ae04d2d5ca0098a12e38b37078e453992d31f9))

#### Features

*   export Theme type from root ([#3125](https://github.com/kiwicom/orbit/issues/3125)) ([0531faa](https://github.com/kiwicom/orbit/commit/0531faa9a34c628eefb3cb9619770b0d43380bd9))

### [1.3.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.3.0...@kiwicom/orbit-components@1.3.1) (2021-10-18)

#### Bug Fixes

*   **Box:** fix width and height types ([#3145](https://github.com/kiwicom/orbit/issues/3145)) ([c60308a](https://github.com/kiwicom/orbit/commit/c60308a4f809a002512c27c26d6ce6e6e5e8c712))
*   **Modal:** improve accessibility and testability ([#3143](https://github.com/kiwicom/orbit/issues/3143)) ([c4c7bcb](https://github.com/kiwicom/orbit/commit/c4c7bcb198658abe64bacd2b648424a6837d9b7f))

## [1.3.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.2.2...@kiwicom/orbit-components@1.3.0) (2021-10-14)

#### Bug Fixes

*   **useRandomId:** fix missing UIDReset ([d2e0ec8](https://github.com/kiwicom/orbit/commit/d2e0ec8c2ad158df747173f6dd468a69ca929b38))

#### Features

*   **Heading:** add align prop ([#3141](https://github.com/kiwicom/orbit/issues/3141)) ([7dcf2bf](https://github.com/kiwicom/orbit/commit/7dcf2bf5f640b0545ee5000e3f4fef572dce2fa8))
*   **Heading:** add mediaQuery properties ([#3135](https://github.com/kiwicom/orbit/issues/3135)) ([1ecaf64](https://github.com/kiwicom/orbit/commit/1ecaf649eb8fdb4b1c0ec4afb1f366e0fed0765e))

### [1.2.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.2.1...@kiwicom/orbit-components@1.2.2) (2021-10-06)

#### Bug Fixes

*   **Skeleton:** fix default height ([cc02dd3](https://github.com/kiwicom/orbit/commit/cc02dd3a1bc060a81f38bd5b469f763acbb3ad33))

### [1.2.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.2.0...@kiwicom/orbit-components@1.2.1) (2021-10-06)

#### Bug Fixes

*   **Card:** set description Text default as div ([#3132](https://github.com/kiwicom/orbit/issues/3132)) ([df60e73](https://github.com/kiwicom/orbit/commit/df60e7303ef63feaa70c80024039ed1802e79e69))
*   **Skeleton:** default as single rect ([#3134](https://github.com/kiwicom/orbit/issues/3134)) ([9e0bf27](https://github.com/kiwicom/orbit/commit/9e0bf270e2cb9562edeed20e90ab4be94d5eb9c1))

## [1.2.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.1.0...@kiwicom/orbit-components@1.2.0) (2021-10-01)

#### Bug Fixes

*   **storybook:** logo url ([#3127](https://github.com/kiwicom/orbit/issues/3127)) ([455ded0](https://github.com/kiwicom/orbit/commit/455ded075bf366a2f702fd83037c134492a85bd6))
*   remove unnecessary declare module statements ([#3124](https://github.com/kiwicom/orbit/issues/3124)) ([32805a8](https://github.com/kiwicom/orbit/commit/32805a8ac51eec5a955ba6627b361c506fd35846))
*   **InputField:** label before tags ([c25ba7a](https://github.com/kiwicom/orbit/commit/c25ba7ad0afe213bd78104a20c7fb7dd3fbc72f9))
*   **Popover:** transform and transition ([33f73ad](https://github.com/kiwicom/orbit/commit/33f73ad87aa8bb9a1bb8c1716c0095dd96bdccb0))
*   **Popover:** ts type definition ([1e61a81](https://github.com/kiwicom/orbit/commit/1e61a8125dd87d576a048031a0b7ef39fe803f8c))

#### Features

*   **Skeleton:** allow string values for height and width ([43f51bb](https://github.com/kiwicom/orbit/commit/43f51bb1ab64ae129d5119e379808933a707c02f))
*   add component structure component ([8cacce0](https://github.com/kiwicom/orbit/commit/8cacce077e561b71b2419dea7a24ed6b2d68a587))
*   export `useRandomId` and `useRandomIdSeed` from root ([cf4dd14](https://github.com/kiwicom/orbit/commit/cf4dd1477492a908ab49c018250956f1b1ee57c6))
*   export useTheme hook from root ([a622f6d](https://github.com/kiwicom/orbit/commit/a622f6d4bc3f4a5c8b998404a18730a16cac0a2c))

## [1.1.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.0.1...@kiwicom/orbit-components@1.1.0) (2021-09-22)

#### Bug Fixes

*   **Icon:** explicitly set expected `display` ([5babd1a](https://github.com/kiwicom/orbit/commit/5babd1a6babc426249eec4b2e569cae7d47e53ee))
*   **useLockScrolling:** ensure that scroll is locked by default ([bb2da46](https://github.com/kiwicom/orbit/commit/bb2da464bb18cef49ff7768c6343cdeb6e66f60e))

#### Features

*   **Alert:** properly style links in Alert ([8d3fff5](https://github.com/kiwicom/orbit/commit/8d3fff53ee8ade47727e55b54e46b2775d6f2745))

### [1.0.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@1.0.0...@kiwicom/orbit-components@1.0.1) (2021-09-13)

#### Bug Fixes

*   **InputField:** remove aria-labelledby when label is provided ([#3103](https://github.com/kiwicom/orbit/issues/3103)) ([724163b](https://github.com/kiwicom/orbit/commit/724163bd70f52b35bafa381f4c4241b600fba12f))

## [1.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.122.0...@kiwicom/orbit-components@1.0.0) (2021-09-10)

#### Code Refactoring

*   **Popover:** replace calculate logic with popper.js ([#3046](https://github.com/kiwicom/orbit/issues/3046)) ([9b4852d](https://github.com/kiwicom/orbit/commit/9b4852d531f1a9e25a7c1efc2c3f0faaa122f84b))
*   delete deprecated components ([#3084](https://github.com/kiwicom/orbit/issues/3084)) ([ee75f02](https://github.com/kiwicom/orbit/commit/ee75f0203f5c8afbf389d798db677c4e59d88706))

#### Features

*   error forms ([#2350](https://github.com/kiwicom/orbit/issues/2350)) ([480d565](https://github.com/kiwicom/orbit/commit/480d5652433758cbe7d024073c2a39a9088207ec))
*   update colour palette ([#3095](https://github.com/kiwicom/orbit/issues/3095)) ([acddb14](https://github.com/kiwicom/orbit/commit/acddb14bc0e371568fb53fc74977f0ad9617bd80)), closes [#BAC7D5](https://github.com/kiwicom/orbit/issues/BAC7D5) [#697D95](https://github.com/kiwicom/orbit/issues/697D95) [#4F5E71](https://github.com/kiwicom/orbit/issues/4F5E71)

#### BREAKING CHANGES

*   **Popover:**
    *   props `preferredPosition` and `preferredAlign` are replaced by single prop `placement`, which same as [popper.js's placement](https://popper.js.org/docs/v2/constructors/#placement) can have one of the following values:
        *   `"top-start"`
        *   `"top-end"`
        *   `"bottom-start"`
        *   `"bottom-end"`
        *   `"right-start"`
        *   `"right-end"`
        *   `"left-start"`
        *   `"left-end"`
        *   `"auto"`
        *   `"auto-start"`
        *   `"auto-end"`

    *   extended by two props:
        *   `noFlip`:  Turns off automatic flipping of the Popover when there is not enough space
        *   `allowOverflow`: Allows the Popover to be cut off instead of moving it while scrolling to keep it visible.

*   deletes deprecated components, their usage should be
    replaced with better existing or upcoming alternatives.

## [0.122.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.121.0...@kiwicom/orbit-components@0.122.0) (2021-09-09)

#### Features

*   **Skeleton:** introduce Skeleton component ([#3071](https://github.com/kiwicom/orbit/issues/3071)) ([6a3cf3d](https://github.com/kiwicom/orbit/commit/6a3cf3d6c45945ff1e3a988a675d919da8fc757e))
*   **useLockScrolling:** allow specifying additional dependencies ([aac39f0](https://github.com/kiwicom/orbit/commit/aac39f0bcd20e92df1f09e3565b0315a024f95e2))
*   add `lockScrolling` theme flag ([abfe92c](https://github.com/kiwicom/orbit/commit/abfe92c2f50299f9d731c66a9ff2b424f53d060d))

## [0.121.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.120.0...@kiwicom/orbit-components@0.121.0) (2021-09-07)

#### Bug Fixes

*   **Badge:** add border to type white ([#3085](https://github.com/kiwicom/orbit/issues/3085)) ([70264ee](https://github.com/kiwicom/orbit/commit/70264ee7160e55293b63babc28ad6067b127bd59))
*   **CountryFlag:** disallow `code` value null ([481b36c](https://github.com/kiwicom/orbit/commit/481b36cbbbd2814f9fd1d6202402003ac4af2ea6))
*   **Drawer:** fix iOS bug with scrolling content ([92827ab](https://github.com/kiwicom/orbit/commit/92827abcff5ab7e9938c0e5252cfa3c1e7233ffe))
*   **Modal:** fix bug with detached footer ([#3093](https://github.com/kiwicom/orbit/issues/3093)) ([d552b78](https://github.com/kiwicom/orbit/commit/d552b7826bdfd3687ac06a255ec8a0d7c4a06beb))
*   add missing TS definitions in ESM build ([90ec51a](https://github.com/kiwicom/orbit/commit/90ec51a5bfdf34b5d844c9e73278ca70a2207217))
*   use @kiwicom/orbit-design-tokens's ESM build ([a85a521](https://github.com/kiwicom/orbit/commit/a85a5210dce433f52b08d63c504316c847ff6178))

#### Features

*   new SSR-friendly useRandomId hook ([#3055](https://github.com/kiwicom/orbit/issues/3055)) ([1220d8f](https://github.com/kiwicom/orbit/commit/1220d8fd285103b191949caaca910a3ab122eeeb))
*   **Illustration:** add EVisa image ([#3091](https://github.com/kiwicom/orbit/issues/3091)) ([23d0ecd](https://github.com/kiwicom/orbit/commit/23d0ecd3278061e98d49ff34350082ae596a2983))

#### BREAKING CHANGES

*   **CountryFlag:** Flow and TypeScript type definitions no longer allow
    `null` as value for `CountryFlag`'s `code`.

## [0.120.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.119.0...@kiwicom/orbit-components@0.120.0) (2021-08-19)

#### Bug Fixes

*   **useLockScrolling:** fix body positioning on iOS ([b780fde](https://github.com/kiwicom/orbit/commit/b780fde9deb8d93073a9a93e445814066aaddc70))

#### Features

*   **Drawer:** add lockScrolling ([#3072](https://github.com/kiwicom/orbit/issues/3072)) ([bdc4e58](https://github.com/kiwicom/orbit/commit/bdc4e5873ea3b5183243bae6cc929702cfadcbff))
*   **InputGroup:** add `disabled` prop ([61a7f01](https://github.com/kiwicom/orbit/commit/61a7f0124eb593b0f3997a3861147b676c576c86))

## [0.119.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.118.1...@kiwicom/orbit-components@0.119.0) (2021-08-10)

#### Features

*   **Wizard:** add lockScrolling prop ([#3070](https://github.com/kiwicom/orbit/issues/3070)) ([38b6456](https://github.com/kiwicom/orbit/commit/38b6456610c37507278f776dcfe20e43ed2329d9))

### [0.118.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.118.0...@kiwicom/orbit-components@0.118.1) (2021-08-05)

#### Bug Fixes

*   **Modal:** hide closeContainer with mobileHeader set to false ([#3065](https://github.com/kiwicom/orbit/issues/3065)) ([78c1a55](https://github.com/kiwicom/orbit/commit/78c1a5537a3c028521b72eb91f6a983be9f3201b))

## [0.118.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.117.0...@kiwicom/orbit-components@0.118.0) (2021-08-05)

#### Bug Fixes

*   **ButtonLink:** use proper design tokens ([#3060](https://github.com/kiwicom/orbit/issues/3060)) ([2e035be](https://github.com/kiwicom/orbit/commit/2e035be52a6423e36ab4723886245a9d96cc9ad2))
*   **InputField:** value color in Safari ([#3062](https://github.com/kiwicom/orbit/issues/3062)) ([2c12957](https://github.com/kiwicom/orbit/commit/2c1295770d5c952ccd8c0b12520c6a53b21057c3))

#### Features

*   **Modal:** add mobileHeader prop ([#3063](https://github.com/kiwicom/orbit/issues/3063)) ([61065ef](https://github.com/kiwicom/orbit/commit/61065efaaacb623f190766268dde10bcc70a8df4))

## [0.117.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.116.0...@kiwicom/orbit-components@0.117.0) (2021-07-22)

#### Bug Fixes

*   **ChoiceGroup:** use correct box sizing ([68c2303](https://github.com/kiwicom/orbit/commit/68c2303f0357435d9e5dfdb97e48c19a1c6a54cb))
*   **InputField:** add aria-required ([7d7f5ef](https://github.com/kiwicom/orbit/commit/7d7f5ef1cff154e88185f204990de5230c75742d))

#### Features

*   **Text:** allow `justify` value for `align` prop ([#3050](https://github.com/kiwicom/orbit/issues/3050)) ([c7704b2](https://github.com/kiwicom/orbit/commit/c7704b2ee0050d5964572cb4e44b5aa87e060d8b))
*   add lockScrolling prop ([#3045](https://github.com/kiwicom/orbit/issues/3045)) ([461139d](https://github.com/kiwicom/orbit/commit/461139df3ace314c04e11d01a7a5e4495a35e97f))
*   lock scrolling in components with overlay ([#3036](https://github.com/kiwicom/orbit/issues/3036)) ([b6c87ae](https://github.com/kiwicom/orbit/commit/b6c87aec9e3005fb76752390c9b4f909bc12f087))
*   **Grid:** add spaceAfter utility prop ([#3043](https://github.com/kiwicom/orbit/issues/3043)) ([c65ba9a](https://github.com/kiwicom/orbit/commit/c65ba9a86bcadb378c424c447c23694e67de6ac4))
*   **InputFile:** add aria-required ([ef47042](https://github.com/kiwicom/orbit/commit/ef470429c5c1748757d8e85bc7f9eca689162a49))
*   **TextLink:** add type "white" ([#3000](https://github.com/kiwicom/orbit/issues/3000)) ([6a101f1](https://github.com/kiwicom/orbit/commit/6a101f1a8dd5daae1e3a55315f6b4eab1617eb06))

## [0.116.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.115.0...@kiwicom/orbit-components@0.116.0) (2021-06-24)

#### Bug Fixes

*   **CarrierLogo:** redirects ([#2972](https://github.com/kiwicom/orbit/issues/2972)) ([59287d9](https://github.com/kiwicom/orbit/commit/59287d9e198701934c099be45278a5f2cb3c8f6e))
*   **Wizard:** increase clickable area of steps ([#2988](https://github.com/kiwicom/orbit/issues/2988)) ([1c55aaa](https://github.com/kiwicom/orbit/commit/1c55aaac9723e3acfef274e0e935efffb9247a99))

#### Features

*   **ChoiceGroup:** increase rendering flexibility ([#2983](https://github.com/kiwicom/orbit/issues/2983)) ([9c2625b](https://github.com/kiwicom/orbit/commit/9c2625b5efd4d8de5bee8fc50492cfaee05ddf2e))

## [0.115.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.114.2...@kiwicom/orbit-components@0.115.0) (2021-05-27)

#### Bug Fixes

*   **HorizontalScroll:** getSnap ([9823909](https://github.com/kiwicom/orbit/commit/98239092d0be2e23ba8ffab2b4bb0b268bdbb52d))

#### Features

*   **CarrierLogo:** add kiwicom type fallback ([#2959](https://github.com/kiwicom/orbit/issues/2959)) ([041d8d6](https://github.com/kiwicom/orbit/commit/041d8d6a6d4d8acf6f7cdd78282f132010949cf1))
*   **Dialog:** add insidePortal prop ([dbe7785](https://github.com/kiwicom/orbit/commit/dbe7785ae8326663500e92c207143f42f1ad92fd))
*   **HorizontalScroll:** add scroll-snap-type ([#2964](https://github.com/kiwicom/orbit/issues/2964)) ([837685d](https://github.com/kiwicom/orbit/commit/837685d29aa200c19f5c3549d12fa756bb7c628b))
*   **Illustration:** add GroundTransport404 ([#2966](https://github.com/kiwicom/orbit/issues/2966)) ([24771e2](https://github.com/kiwicom/orbit/commit/24771e2adf737137a4fe85bc62effa8f2c32342e))
*   **MobileDialog:** add insidePortal prop ([3b55af6](https://github.com/kiwicom/orbit/commit/3b55af6800f04d29318a9a6f25f635c106a684ab))
*   **Modal:** add disableAnimation prop ([306455b](https://github.com/kiwicom/orbit/commit/306455b5c8bf6a303781d0b477c45fd2be76ef12))
*   **Popover:** add insidePortal prop ([14d126f](https://github.com/kiwicom/orbit/commit/14d126f808720d0e08c08aea3c1de9a0efc94824))
*   **TextLink:** add status types ([#2915](https://github.com/kiwicom/orbit/issues/2915)) ([970edc7](https://github.com/kiwicom/orbit/commit/970edc7fe16bb710754db7020c4ef2e2ab63d72c))
*   **Tooltip:** add insidePortal prop ([fa127e8](https://github.com/kiwicom/orbit/commit/fa127e8e55164295bfb22d189153f31170e609ad))
*   **TooltipPrimitive:** add insidePortal prop ([4cb5dde](https://github.com/kiwicom/orbit/commit/4cb5ddee0a88872f97b4a00fbb2d47bfe0c6f440))
*   introduce BadgeList component ([#2937](https://github.com/kiwicom/orbit/issues/2937)) ([b2b68ec](https://github.com/kiwicom/orbit/commit/b2b68ecc5b0eac97c0c3c628f7da2cc836bb6050))

### [0.114.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.114.1...@kiwicom/orbit-components@0.114.2) (2021-05-17)

#### Bug Fixes

*   **ButtonLink:** pass size prop to icons ([#2938](https://github.com/kiwicom/orbit/issues/2938)) ([0184785](https://github.com/kiwicom/orbit/commit/01847859090fe9b95e41fd6c3944f3aa701180a8))
*   **HorizontalScroll:** remove automatic height calculation for wrapper ([#2936](https://github.com/kiwicom/orbit/issues/2936)) ([0880483](https://github.com/kiwicom/orbit/commit/0880483961e88ccfb1c27c6b9eafe8dd0094b3d5))
*   **MobileDialog:** change to dialog role ([9895ac7](https://github.com/kiwicom/orbit/commit/9895ac79fb4405396dcc3937e97fdf3c4e9072a7))
*   **popover:** close on overlay ([e2cef68](https://github.com/kiwicom/orbit/commit/e2cef688dd3eecbf15eabafbf70009ac9baee72b))
*   pass aria-labelledby for switch labels ([#2935](https://github.com/kiwicom/orbit/issues/2935)) ([1b10e4c](https://github.com/kiwicom/orbit/commit/1b10e4c4e708d768149346c5b941202fd72dc431))

#### Reverts

*   **Modal:** revert CLS changes ([b1d00b4](https://github.com/kiwicom/orbit/commit/b1d00b4c187d1ed4d25cb3b24a42c84cbe6856d0))

### [0.114.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.114.0...@kiwicom/orbit-components@0.114.1) (2021-05-12)

#### Bug Fixes

*   **BaggageStepper:** forgotten prop ([#2931](https://github.com/kiwicom/orbit/issues/2931)) ([6797d73](https://github.com/kiwicom/orbit/commit/6797d73f2395b905cfe8ca9f8d7bc47b775f8171))
*   **Modal:** reduce Cumulative Layout Shift ([2108956](https://github.com/kiwicom/orbit/commit/21089567a2b25d6e42f432fa44ea40ab21d16785))

## [0.114.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.113.1...@kiwicom/orbit-components@0.114.0) (2021-05-05)

#### Bug Fixes

*   **Popover:** fix bug with Tooltip inside Popover on mobile ([75d8fa4](https://github.com/kiwicom/orbit/commit/75d8fa41df9afb0d2448ee073a0d2b559d1ae29e))

#### Features

*   **BaggageStepper:** init ([#2922](https://github.com/kiwicom/orbit/issues/2922)) ([0c9c546](https://github.com/kiwicom/orbit/commit/0c9c5460f41d34300dfa28b6573db7d855a52f79))
*   HorizontalScroll component ([#2917](https://github.com/kiwicom/orbit/issues/2917)) ([d5e5929](https://github.com/kiwicom/orbit/commit/d5e59290b6aa6474ef3c5454b427c2a7859f43e1))
*   introduce Switch component ([7517675](https://github.com/kiwicom/orbit/commit/7517675712c36073c909c74ef4b334b92cc97fb1))

### [0.113.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.113.0...@kiwicom/orbit-components@0.113.1) (2021-04-28)

#### Bug Fixes

*   **Button:** pass forgotten size prop to utility functions ([8b97281](https://github.com/kiwicom/orbit/commit/8b972812c9fdd8cd985247b139589babf335b59b))
*   **ButtonPrimitive:** remove redundant size property ([#2847](https://github.com/kiwicom/orbit/issues/2847)) ([bec9180](https://github.com/kiwicom/orbit/commit/bec9180e55ac7fe04c08bd51dac37993d432fc3b))
*   **examples:** strip flow types from the generated JSONs ([#2913](https://github.com/kiwicom/orbit/issues/2913)) ([49f36fd](https://github.com/kiwicom/orbit/commit/49f36fd815b75894c223bd79acd00456e159c432))
*   **SocialButton:** add forgotten size property to getCommomProps ([a950d6d](https://github.com/kiwicom/orbit/commit/a950d6d2b1f60de77fadd9e3cb021a77639306dc))

## [0.113.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.112.0...@kiwicom/orbit-components@0.113.0) (2021-04-22)

#### Bug Fixes

*   add TypeScript definition of getTokens ([267109a](https://github.com/kiwicom/orbit/commit/267109aa0680f48756bda7c6e87827d500a066ca))
*   add typescript export of defaultTheme ([1047b61](https://github.com/kiwicom/orbit/commit/1047b6117fb705943caeaf64b509a285100ad0b4))
*   export SeatLegend ([576027f](https://github.com/kiwicom/orbit/commit/576027fcca81b72c0b5a968ecef5e5b034a0cc98))
*   update React peer dependency versions ([#2898](https://github.com/kiwicom/orbit/issues/2898)) ([b841f2d](https://github.com/kiwicom/orbit/commit/b841f2d05a96dc023338b527d46910a2d61b2e5f))
*   **Breadcrumbs:** missing action in default story ([#2884](https://github.com/kiwicom/orbit/issues/2884)) ([683bd86](https://github.com/kiwicom/orbit/commit/683bd86a37e15fb89368621ae45604842c0f6a6a))
*   **docs:** escape pipe in Alert button props table ([f50485f](https://github.com/kiwicom/orbit/commit/f50485f91a29af1460af8dbd429b078c1e8ba7bb))
*   **useBoundingRect:** fix TypeScript declaration ([#2875](https://github.com/kiwicom/orbit/issues/2875)) ([371b30d](https://github.com/kiwicom/orbit/commit/371b30dbdff3fe96d1a2b8c2ead88e1f24288f8a))

#### Features

*   add export of calculateCountOf ([6ac26ff](https://github.com/kiwicom/orbit/commit/6ac26ff591e332e7ea680d9feb845ad264fb9b0e))
*   **docs:** update guidance on notification badges ([f5b0da7](https://github.com/kiwicom/orbit/commit/f5b0da7660d3f7b03294bc882667c10273114ee5))

#### BREAKING CHANGES

*   **useBoundingRect:** In TypeScript `useBoundingRect` now requires a type
    parameter based on which HTML element it measures:

```tsx
function App() {
  const [dimensions, ref] = useBoundingRect<HTMLDivElement>();
  return <div ref={ref} />;
}
```

## [0.112.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.111.1...@kiwicom/orbit-components@0.112.0) (2021-04-07)

#### Bug Fixes

*   add default export for Icon stories ([#2864](https://github.com/kiwicom/orbit/issues/2864)) ([2e9d2c7](https://github.com/kiwicom/orbit/commit/2e9d2c7700c36c78b0c46b36d1cb82104f6659f2))
*   **docs:** add exports for types ([3acc31e](https://github.com/kiwicom/orbit/commit/3acc31e379c8089cdf42383e3459bafff8647190))
*   **docs:** change null to 0 ([9eca6cd](https://github.com/kiwicom/orbit/commit/9eca6cdab0987dd3b0ccef7f648cca39a2f63bd8))
*   **docs:** remove improper token in enum ([4ab6b23](https://github.com/kiwicom/orbit/commit/4ab6b2319597574d6fbfa23c95d305754a9163be))
*   **TextLink:** called twice when stopPropagation specified ([#2857](https://github.com/kiwicom/orbit/issues/2857)) ([4fc78dc](https://github.com/kiwicom/orbit/commit/4fc78dca23086fd0f9dadd51164774dcd8a83c70))
*   **TypeScript:** fix root mediaQueries export ([32a70a6](https://github.com/kiwicom/orbit/commit/32a70a69de07638cc78fd3961d09bb2184599e8a))

#### Features

*   **eslint-plugin-orbit:** useRtl rule ([#2833](https://github.com/kiwicom/orbit/issues/2833)) ([ecb3fd6](https://github.com/kiwicom/orbit/commit/ecb3fd6530cf6c9c0a3115d72bd6fb12f45aef90))
*   update baggage related icons ([#2851](https://github.com/kiwicom/orbit/issues/2851)) ([fb118c9](https://github.com/kiwicom/orbit/commit/fb118c91406cabc74b5665cd3c8d75a4e77a1566))
*   **playground:** examples ([#2808](https://github.com/kiwicom/orbit/issues/2808)) ([6f495cf](https://github.com/kiwicom/orbit/commit/6f495cf1e219720033a19d61a304f3c224c5c3ec))
*   export useMediaQuery hook from root ([1048599](https://github.com/kiwicom/orbit/commit/1048599150ed88126f5591fe83a76fb18b72d001))

#### BREAKING CHANGES

*   Renamed icons BaggageChecked -> BaggageChecked30; BaggagePersonalItem -> BaggagePersonal; BaggagePersonalItemNone -> BaggagePersonalNone

**Added new icons:**

*   BaggageChecked10
*   BaggageChecked20

**Renamed icons:**

*   BaggageChecked -> BaggageChecked30
*   BaggagePersonalItem -> BaggagePersonal
*   BaggagePersonalItemNone -> BaggagePersonalNone

**Updated icons:**

*   PriorityBorading
*   BaggageCheckedNone
*   BaggageCabin
*   BaggageCabinNone

### [0.111.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.111.0...@kiwicom/orbit-components@0.111.1) (2021-03-19)

#### Bug Fixes

*   **ci:** deploy storybook only, not build ([#2830](https://github.com/kiwicom/orbit/issues/2830)) ([f287d1e](https://github.com/kiwicom/orbit/commit/f287d1ec507fcb5f93d06f74afe1d2e8d973c958))
*   **docs:** misnamed prop for Box ([#2825](https://github.com/kiwicom/orbit/issues/2825)) ([4e98bd9](https://github.com/kiwicom/orbit/commit/4e98bd9038f3e30d634a74047308c08467416a31))
*   **InputFile:** ref ts type ([#2827](https://github.com/kiwicom/orbit/issues/2827)) ([1341d57](https://github.com/kiwicom/orbit/commit/1341d57ecd5aa63baafd9f95409941d910153141))
*   **SkipLink:** missing export ([#2794](https://github.com/kiwicom/orbit/issues/2794)) ([eff2c6d](https://github.com/kiwicom/orbit/commit/eff2c6d0e62fb8f2f151d8935f3e4dbe1879796c))
*   **useMediaQuery:** remove listeners on cleanup ([#2822](https://github.com/kiwicom/orbit/issues/2822)) ([eb92419](https://github.com/kiwicom/orbit/commit/eb92419e9d0884c4d6013d1598f0de9b85ebbf2f))
*   **Wizard:** remove incorrect React.ReactChildren ([#2829](https://github.com/kiwicom/orbit/issues/2829)) ([3f6b803](https://github.com/kiwicom/orbit/commit/3f6b80396aac9feb9df621dce2ef2ac70fddf616))

## [0.111.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.110.0...@kiwicom/orbit-components@0.111.0) (2021-03-08)

#### Bug Fixes

*   fix script for fetching translations ([#2817](https://github.com/kiwicom/orbit/issues/2817)) ([df3633e](https://github.com/kiwicom/orbit/commit/df3633e7e39365f834c85b269a168ac3da7ff7b6))
*   **Accordion:** missing export ([#2797](https://github.com/kiwicom/orbit/issues/2797)) ([020f2f3](https://github.com/kiwicom/orbit/commit/020f2f3d75b6dc26a5ec9fda717510ef9bd8b1d9))
*   **ButtonMobileStore:** missing ts export ([f82f8cd](https://github.com/kiwicom/orbit/commit/f82f8cd61cc460eae6d3e1572a0ccf71ebe8cdd8))
*   **CalloutBanner:** illustration type ([#2791](https://github.com/kiwicom/orbit/issues/2791)) ([3b752e3](https://github.com/kiwicom/orbit/commit/3b752e3a8844f80038dee4a655c2928660f3dc86))
*   **Radio:** missing tooltip type in d.ts ([4ce4b4e](https://github.com/kiwicom/orbit/commit/4ce4b4eac82db50ab9bbaa04e8b0d5211672ff0b))
*   **SocialButton:** missing export ([#2793](https://github.com/kiwicom/orbit/issues/2793)) ([df1f288](https://github.com/kiwicom/orbit/commit/df1f288c62c6eb3d5e28839aa3284680ebc3ad99))
*   **SocialButton:** missing ts export ([2806aca](https://github.com/kiwicom/orbit/commit/2806aca878afb9ee68345f4ac75462a6376b2ad7))
*   **Timeline:** type property inside d.ts ([#2792](https://github.com/kiwicom/orbit/issues/2792)) ([b07f49c](https://github.com/kiwicom/orbit/commit/b07f49ca5a45a8c9359a2280d4dae33a36892137))
*   **validateIncrement:** fix wrong type ([#2796](https://github.com/kiwicom/orbit/issues/2796)) ([bafe8b5](https://github.com/kiwicom/orbit/commit/bafe8b5f2562d65d2305d1e0d0a5bc23ec1b6744))
*   missing Desktop and Mobile exports ([033e111](https://github.com/kiwicom/orbit/commit/033e111c93d1df0add95d1a7e321638a25594171))

#### Features

*   **Tooltip:** add block prop ([#2813](https://github.com/kiwicom/orbit/issues/2813)) ([0f032a8](https://github.com/kiwicom/orbit/commit/0f032a8deae42ae333f8a2c0711069393375db52))

## [0.110.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.109.2...@kiwicom/orbit-components@0.110.0) (2021-03-03)

#### Bug Fixes

*   **Box:** regression test error ([#2807](https://github.com/kiwicom/orbit/issues/2807)) ([2f2478e](https://github.com/kiwicom/orbit/commit/2f2478e585af02afca3aaa951ea0e0c94519199f))
*   **InputStepper:** missing font-family ([#2748](https://github.com/kiwicom/orbit/issues/2748)) ([8ccebe7](https://github.com/kiwicom/orbit/commit/8ccebe76084c85be6a994ba2e7b5d4f18ae22eb9))
*   **Seat:** add export for SeatLegend and fix TS type of "type" prop  ([#2788](https://github.com/kiwicom/orbit/issues/2788)) ([9fea5af](https://github.com/kiwicom/orbit/commit/9fea5af6201f01b351011937d4416b5dd4d0ba26))
*   **useIntersect:** remove unnecessary SSR check ([0b440e6](https://github.com/kiwicom/orbit/commit/0b440e631c35a9c1dc5599e098d5e97ee2da5fcc))
*   **useIntersect:** simplify `ref` type ([573eba0](https://github.com/kiwicom/orbit/commit/573eba08249868c2e8de4a92e04fa9dd63b4fa72))
*   **utils:** getDirection ([#2782](https://github.com/kiwicom/orbit/issues/2782)) ([01be059](https://github.com/kiwicom/orbit/commit/01be059cf7b3fbf2445e1741322f331ff6325f54))

#### Features

*   **Modal:** autofocus ([#2749](https://github.com/kiwicom/orbit/issues/2749)) ([7318569](https://github.com/kiwicom/orbit/commit/7318569da6665f392ccfa88ea9b5fc3336e38072))
*   **slide:** added static defaultProps inside class ([e344e61](https://github.com/kiwicom/orbit/commit/e344e612cdedc64e0a8d25ad3f74b91e689b2b34))
*   **slide:** added transitionDuration support ([7e5cf6a](https://github.com/kiwicom/orbit/commit/7e5cf6ab85f1d36ad0738090d0ab06ce2e213255))
*   **slide:** fixed eslint issues ([d0bd068](https://github.com/kiwicom/orbit/commit/d0bd068f227f149a8e70bc11f9fbebda44f93347))
*   **slide:** using defaultProps instead of destruct value ([140f896](https://github.com/kiwicom/orbit/commit/140f896b05c772028093f24c511a1477ef5d47c2))
*   **Slide:** added transitionDuration support ([#2751](https://github.com/kiwicom/orbit/issues/2751)) ([e7b5c72](https://github.com/kiwicom/orbit/commit/e7b5c728f0ebb3bf4d032c10bccaa187cb76dd54))

### [0.109.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.109.1...@kiwicom/orbit-components@0.109.2) (2021-02-16)

#### Bug Fixes

*   **Popover:** readme ([07aecf2](https://github.com/kiwicom/orbit/commit/07aecf20862899762cfd7f37f96fb28d034a98f4))
*   **Seat:** active state, spacing ([#2734](https://github.com/kiwicom/orbit/issues/2734)) ([d59187f](https://github.com/kiwicom/orbit/commit/d59187f902fce1f84c15b381c49b35110b729db7))

### [0.109.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.109.0...@kiwicom/orbit-components@0.109.1) (2021-02-08)

#### Bug Fixes

*   use postinstall script only in development ([05cecc4](https://github.com/kiwicom/orbit/commit/05cecc434b069d32732c0434186d76877c2f0277))

## [0.109.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.108.2...@kiwicom/orbit-components@0.109.0) (2021-02-05)

#### Bug Fixes

*   **InputTags:** fix cleanup logic ([7d66ff8](https://github.com/kiwicom/orbit/commit/7d66ff8458da274a0f48b30f9099f6430e7aa274))
*   **PictureCard:** label semantic ([#2713](https://github.com/kiwicom/orbit/issues/2713)) ([0c454e0](https://github.com/kiwicom/orbit/commit/0c454e07e5c6bdf96a85b8db005268aa741d00be))
*   **Seat:** small selected state ([#2715](https://github.com/kiwicom/orbit/issues/2715)) ([8426630](https://github.com/kiwicom/orbit/commit/84266306b655060a8197c6f23e4289ea68b94d45))
*   **useIntersect:** do nothing in browsers that don't support IntersectionObserver ([99d3772](https://github.com/kiwicom/orbit/commit/99d3772da1b386fe620d6c8735760aed754f9779))
*   **useMediaQuery:** fix Rules of Hooks violation ([6146505](https://github.com/kiwicom/orbit/commit/6146505eead568ad12a8bc7e58ed46cea9096157))

#### Features

*   **eslint-orbit:** add unique-ids rule ([#2671](https://github.com/kiwicom/orbit/issues/2671)) ([b6a1057](https://github.com/kiwicom/orbit/commit/b6a10570a7fb3f0243fcf96a7f975dce52391fb5))
*   **Seat:** new icon sizes, general refactoring ([a86cd07](https://github.com/kiwicom/orbit/commit/a86cd07dc6971f694142d836c5ec36cf10419621))

#### BREAKING CHANGES

*   **Seat:** separated component for legend, changed icon sizes

### [0.108.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.108.1...@kiwicom/orbit-components@0.108.2) (2021-01-26)

#### Bug Fixes

*   unescaped readmes ([#2687](https://github.com/kiwicom/orbit/issues/2687)) ([d33b47b](https://github.com/kiwicom/orbit/commit/d33b47b60d265144745e504780dd77836755ec59))
*   **Seat:** blueDark change to blueNormal ([#2685](https://github.com/kiwicom/orbit/issues/2685)) ([516e8ef](https://github.com/kiwicom/orbit/commit/516e8ef92ed3a853d718921e167ca84ccd454218))

### [0.108.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.108.0...@kiwicom/orbit-components@0.108.1) (2021-01-25)

#### Bug Fixes

*   **Seat:** visual fixes ([#2678](https://github.com/kiwicom/orbit/issues/2678)) ([a60c333](https://github.com/kiwicom/orbit/commit/a60c333af361add73569c4456589b570c3c8aac3))

## [0.108.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.107.0...@kiwicom/orbit-components@0.108.0) (2021-01-22)

#### Bug Fixes

*   **Accordion:** missing onExpand ts ([4a64429](https://github.com/kiwicom/orbit/commit/4a644293f97a415a01e6a05cb55bcc6412d61b26))
*   **Card:** missing titleAs in d.ts ([#2666](https://github.com/kiwicom/orbit/issues/2666)) ([0f60daa](https://github.com/kiwicom/orbit/commit/0f60daa418b7efbd69a8e4c9a94f8a30528f920b))
*   **IllustrationPrimitive:** allow empty alt ([1c9e3d7](https://github.com/kiwicom/orbit/commit/1c9e3d783ea0957fc447be3342c5b5bcdb196e4d))
*   **Tag:** focus only if onClick/onRemove provided ([41a163a](https://github.com/kiwicom/orbit/commit/41a163a764b679e3813cdc1daf217a71f7f278a0))

#### Features

*   **Tag:** add forwardRef ([4445cbb](https://github.com/kiwicom/orbit/commit/4445cbb37944172d0b859a605a2bfb84de9f2dfa))
*   **Tag:** Icon prop removed, changed colors ([4b918c0](https://github.com/kiwicom/orbit/commit/4b918c0bdf2b3077fb63306daf6ffb52cd8165b8))

## [0.107.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.106.0...@kiwicom/orbit-components@0.107.0) (2021-01-13)

#### Bug Fixes

*   **seat:** randomize id to prevent namespace errors ([114e38f](https://github.com/kiwicom/orbit/commit/114e38f1f4e0e4301d192cf03d81aa127a37f987))

#### Features

*   deprecate old Seat component ([99001b0](https://github.com/kiwicom/orbit/commit/99001b0c9d7adc5869a21e7aa7978f48c56a7dc5))
*   **box:** add minWidth ([e325c19](https://github.com/kiwicom/orbit/commit/e325c1984e64c66f32cb43289ed138fbaf40abb6))
*   **CountryFlag:** add "undefined" flag ([#2654](https://github.com/kiwicom/orbit/issues/2654)) ([fa5fe66](https://github.com/kiwicom/orbit/commit/fa5fe665d0250c99161f8c7832fde87d17f50336))

## [0.106.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.105.0...@kiwicom/orbit-components@0.106.0) (2021-01-07)

#### Bug Fixes

*   **Box:** fix null values ([eacb181](https://github.com/kiwicom/orbit/commit/eacb1815758f79cf417c88d141f7cef71d152eaf))
*   **Box:** set padding/marging to 0 if none ([f5eee37](https://github.com/kiwicom/orbit/commit/f5eee37c890134e042a125e30ef980b094d12429))
*   **CardSection:** title and icon alignment ([#2618](https://github.com/kiwicom/orbit/issues/2618)) ([3d2b795](https://github.com/kiwicom/orbit/commit/3d2b7952047ae7d29d889d1483e54e4218994708))
*   **Modal:** ensure header overlay if title exists ([#2634](https://github.com/kiwicom/orbit/issues/2634)) ([bf2a8e0](https://github.com/kiwicom/orbit/commit/bf2a8e09dc8524d9c1199799eff38def6228b66d))
*   **Wizard:** translate close button ([#2630](https://github.com/kiwicom/orbit/issues/2630)) ([25d351b](https://github.com/kiwicom/orbit/commit/25d351b752ba6b76ca69c1170816bb4badcb0343))

#### Features

*   **popover:** offset ([#2633](https://github.com/kiwicom/orbit/issues/2633)) ([ea71b64](https://github.com/kiwicom/orbit/commit/ea71b6428784be6c779b130c14749c1b14d70266))
*   **seat:** new version of seat component ([#2623](https://github.com/kiwicom/orbit/issues/2623)) ([e091345](https://github.com/kiwicom/orbit/commit/e09134523d8960fdfb150c8ed4861607c662d3b0))
*   **TableCell:** add normal white-space ([#2637](https://github.com/kiwicom/orbit/issues/2637)) ([4bc34ed](https://github.com/kiwicom/orbit/commit/4bc34edc1cb5247ec06208a9f587b9a3db4b51ed))

## [0.105.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.104.0...@kiwicom/orbit-components@0.105.0) (2020-12-18)

#### Bug Fixes

*   **Box:** missing box-sizing ([#2616](https://github.com/kiwicom/orbit/issues/2616)) ([51246ca](https://github.com/kiwicom/orbit/commit/51246ca926cfab134098bca8d216b9fb7bbfe662))
*   **CardSection:** missing hover ([#2615](https://github.com/kiwicom/orbit/issues/2615)) ([d62d192](https://github.com/kiwicom/orbit/commit/d62d192f673c165e953339fe250667a904019342))

#### Features

*   **CardSection:** add onClick ([#2614](https://github.com/kiwicom/orbit/issues/2614)) ([074ded0](https://github.com/kiwicom/orbit/commit/074ded07055f2c606aa7b474de514e27fe63b7cd))

## [0.104.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.103.0...@kiwicom/orbit-components@0.104.0) (2020-12-17)

#### Bug Fixes

*   **Box:** apply `largeMobile` properties ([#2612](https://github.com/kiwicom/orbit/issues/2612)) ([e55c88e](https://github.com/kiwicom/orbit/commit/e55c88ea6d60d81cd492dce3a3a5e9a4e74edb33))
*   **Button:** change color of outline on focus ([#2611](https://github.com/kiwicom/orbit/issues/2611)) ([e2b0384](https://github.com/kiwicom/orbit/commit/e2b038451485858a2166a68e0cd44fc37dc989dc))
*   **InputFile:** a11y fixes ([be39d80](https://github.com/kiwicom/orbit/commit/be39d803f579d0f3dc607cfc51aeec1a39a232f3))
*   **Tag:** add missing aria-label ([26789fb](https://github.com/kiwicom/orbit/commit/26789fb6c3378dff9cec49028f552a3aef16c232))
*   **Tile:** missing a11y attributes ([3959338](https://github.com/kiwicom/orbit/commit/3959338be443a409c53c707def932f6dbfa96e93))

#### Features

*   add widthModalExtraLarge token ([#2592](https://github.com/kiwicom/orbit/issues/2592)) ([5213c49](https://github.com/kiwicom/orbit/commit/5213c498a7fade644d8d85ba821adfb5b25c162e))
*   **Sticky:** add data-test ([e01e6d2](https://github.com/kiwicom/orbit/commit/e01e6d22cc86eba6e6bfe908daff52b775b78518))

## [0.103.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.102.0...@kiwicom/orbit-components@0.103.0) (2020-12-10)

#### Bug Fixes

*   **SkipLink:** sr-only styles, label as aria-label ([eb0d625](https://github.com/kiwicom/orbit/commit/eb0d625bda51daefa34b74a863f32860306dbad5))
*   **SmartPassIllustration:** linergradients missing ids restored ([93fd176](https://github.com/kiwicom/orbit/commit/93fd176e46a2862ac9a2d34df3ff2b17fc26f7ba))
*   **Wizard:** translate progress label on mobile ([#2576](https://github.com/kiwicom/orbit/issues/2576)) ([cf6fc54](https://github.com/kiwicom/orbit/commit/cf6fc542a1ec0cad60dda133eb29d8f056afc812))

#### Features

*   **Modal:** extended size ([#2575](https://github.com/kiwicom/orbit/issues/2575)) ([9de69e9](https://github.com/kiwicom/orbit/commit/9de69e9fe36b4c9591d8bb9919fd3e03d71a72fb))

#### BREAKING CHANGES

*   **Modal:** size prop is changed, added new value
    CODEMODE: `jscodeshift -t https://raw.githubusercontent.com/kiwicom/orbit/master/packages/orbit-components/transforms/Modal-size.js <pathToYourCode> --parser=flow|t`

## [0.102.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.101.0...@kiwicom/orbit-components@0.102.0) (2020-12-01)

#### Bug Fixes

*   **Accordion:** allow any children type in Flow ([#2552](https://github.com/kiwicom/orbit/issues/2552)) ([1f7e37d](https://github.com/kiwicom/orbit/commit/1f7e37d7991e750451329801c5171686e71a9aaf))
*   **Popover:** popover bottom position issue ([#2540](https://github.com/kiwicom/orbit/issues/2540)) ([4b251ad](https://github.com/kiwicom/orbit/commit/4b251ad3f5e388aced3bb29a51ff128f015906a7))
*   **SmartPassIllustration:** change smartPass api, to reduce bundle size ([#2529](https://github.com/kiwicom/orbit/issues/2529)) ([761d3f3](https://github.com/kiwicom/orbit/commit/761d3f39bd0fb6f5b8ea428410958eb491377ff9))

#### Features

*   **Textarea:** add required prop ([#2532](https://github.com/kiwicom/orbit/issues/2532)) ([904a78f](https://github.com/kiwicom/orbit/commit/904a78f04b316955f57b84dbb4e240f6067f4dc4))

#### BREAKING CHANGES

*   **SmartPassIllustration:** API of SmartPassIllustation has changed

## [0.101.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.100.1...@kiwicom/orbit-components@0.101.0) (2020-11-26)

#### Bug Fixes

*   **Modal:** expose modalBody and modalContent ([500cf6b](https://github.com/kiwicom/orbit/commit/500cf6b9556190fb30be0a3736591fc4238d89b1))

#### Features

*   **Modal:** add scrollingElementRef prop ([0cf4f7e](https://github.com/kiwicom/orbit/commit/0cf4f7e6e646974a3b8dbaf50507de1a312b43e1))
*   **SmartPassIllustration:** added v5 image ([#2519](https://github.com/kiwicom/orbit/issues/2519)) ([f718651](https://github.com/kiwicom/orbit/commit/f7186513257324c9fa79bc118c90e17184beea00))

### [0.100.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.100.0...@kiwicom/orbit-components@0.100.1) (2020-11-24)

#### Bug Fixes

*   expose getScrollPosition in Modal ([#2528](https://github.com/kiwicom/orbit/issues/2528)) ([ecd5b9f](https://github.com/kiwicom/orbit/commit/ecd5b9f0d556b80519bae735110bb9acb3de3946))

## [0.100.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.99.0...@kiwicom/orbit-components@0.100.0) (2020-11-23)

#### Bug Fixes

*   **RTL:** fix Flow types of utilities ([#2520](https://github.com/kiwicom/orbit/issues/2520)) ([d696b4c](https://github.com/kiwicom/orbit/commit/d696b4cc59dfeaf35f49d3099c845bb2ab992487)), closes [#2331](https://github.com/kiwicom/orbit/issues/2331)

#### Features

*   **InputStepper:** added readonly prop ([#2495](https://github.com/kiwicom/orbit/issues/2495)) ([74fee3f](https://github.com/kiwicom/orbit/commit/74fee3f208dcd6f89e66f92f66710a0fa68982f3))

## [0.99.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.98.0...@kiwicom/orbit-components@0.99.0) (2020-11-19)

#### Bug Fixes

*   **Popover:** a11y issues ([45dbbdf](https://github.com/kiwicom/orbit/commit/45dbbdf094f688252a2a01a325ac823514609781))
*   **Timeline:** make subLabel optional ([#2505](https://github.com/kiwicom/orbit/issues/2505)) ([8cb77f0](https://github.com/kiwicom/orbit/commit/8cb77f011a2365ff178be7422827efcb19d0aef2))
*   **Tooltip:** only call `preventDefault` on mobile ([#2502](https://github.com/kiwicom/orbit/issues/2502)) ([f73940b](https://github.com/kiwicom/orbit/commit/f73940b5803311fb4b57418a6e384ea2ae7b5a0e)), closes [#2230](https://github.com/kiwicom/orbit/issues/2230)

#### Features

*   SmartPassIllustration component ([#2504](https://github.com/kiwicom/orbit/issues/2504)) ([4c8ba9c](https://github.com/kiwicom/orbit/commit/4c8ba9c1e3c98a734689ed04801d7d982136ba71))

## [0.98.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.3...@kiwicom/orbit-components@0.98.0) (2020-11-10)

#### Bug Fixes

*   **Layout:** use the correct tags for columns ([#2487](https://github.com/kiwicom/orbit/issues/2487)) ([f092fa9](https://github.com/kiwicom/orbit/commit/f092fa9e26aeacc74d5bc0b56a488f5ab8355ef3))
*   **ListChoice:** disabled items should not get focus ([#2474](https://github.com/kiwicom/orbit/issues/2474)) ([08eb9c4](https://github.com/kiwicom/orbit/commit/08eb9c4a364385b0baaef39f8e4c635989f5cb7e))
*   **Modal:** lost focus on user interaction ([#2484](https://github.com/kiwicom/orbit/issues/2484)) ([ef3e4f9](https://github.com/kiwicom/orbit/commit/ef3e4f9bf1a6b61812e42c5c7b16d9df3556678f))

#### Features

*   **Select:** added readOnly prop ([#2493](https://github.com/kiwicom/orbit/issues/2493)) ([2b06b27](https://github.com/kiwicom/orbit/commit/2b06b276d6165e6f1d0baaf93da1e991cedafc4a))
*   **Textarea:** added readOnly prop ([#2494](https://github.com/kiwicom/orbit/issues/2494)) ([d33c396](https://github.com/kiwicom/orbit/commit/d33c396714ba8e9e4931fa31796571c7c69e30c4))

## [0.97.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.3...@kiwicom/orbit-components@0.97.0) (2020-11-10)

#### Bug Fixes

*   **Accordion:** Accordion sticky footer story ([#2483](https://github.com/kiwicom/orbit/issues/2483)) ([09127f8](https://github.com/kiwicom/orbit/commit/09127f819da1e04f016d3590a78c8c079611bcac))
*   **Inline:** add around and between ([#2476](https://github.com/kiwicom/orbit/issues/2476)) ([554e536](https://github.com/kiwicom/orbit/commit/554e536cf64098812f62572b180a43ee6bec660c))

#### Features

*   **Button:** div behave like button, a11y ([#2426](https://github.com/kiwicom/orbit/issues/2426)) ([93cc601](https://github.com/kiwicom/orbit/commit/93cc6018f7287f8e192241acd0812c3a9106abef))

### [0.96.3](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.2...@kiwicom/orbit-components@0.96.3) (2020-11-09)

#### Bug Fixes

*   **Modal:** expose setScrollPosition via forwardRef ([#2472](https://github.com/kiwicom/orbit/issues/2472)) ([3f30a63](https://github.com/kiwicom/orbit/commit/3f30a63cfcbf9791fdf6bedc10f7e1909edca5fc))
*   **Modal:** fix TypeScript definition for ref ([#2479](https://github.com/kiwicom/orbit/issues/2479)) ([86c5c7e](https://github.com/kiwicom/orbit/commit/86c5c7e55cd44d98501e26784c29f2a67f452ded))

### [0.96.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.1...@kiwicom/orbit-components@0.96.2) (2020-11-06)

#### Bug Fixes

*   **Inline:** add inner wrapper for negative margin ([#2469](https://github.com/kiwicom/orbit/issues/2469)) ([efd7ab2](https://github.com/kiwicom/orbit/commit/efd7ab2d2b1866d2727b3fc290b87754c76307b1))

### [0.96.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.0...@kiwicom/orbit-components@0.96.1) (2020-11-05)

#### Bug Fixes

*   **Stack:** change spacing value TS types ([#2468](https://github.com/kiwicom/orbit/issues/2468)) ([f572b4c](https://github.com/kiwicom/orbit/commit/f572b4ce634f9e9b3d4ce29003ceb88f28d4e34e))

## [0.96.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.95.0...@kiwicom/orbit-components@0.96.0) (2020-11-04)

#### Bug Fixes

*   **InputFile:** forward onFocus event handler ([#2461](https://github.com/kiwicom/orbit/issues/2461)) ([92ad4da](https://github.com/kiwicom/orbit/commit/92ad4da10e4c90b81917083af762a9ae7bf6048f))
*   **SkipNavigation:** fix typos in stories ([#2414](https://github.com/kiwicom/orbit/issues/2414)) ([b380a1c](https://github.com/kiwicom/orbit/commit/b380a1cd70649bbea781fb026c659b1ea5902bf6))
*   **Stack:** add forgotten interface export ([#2456](https://github.com/kiwicom/orbit/issues/2456)) ([a85d20a](https://github.com/kiwicom/orbit/commit/a85d20aee69b29ac8a5305a77ad9078623569e48))
*   **Tooltip:** do not propagate the onClick event on mobile when stopPropagate is set to true ([#2438](https://github.com/kiwicom/orbit/issues/2438)) ([00467c5](https://github.com/kiwicom/orbit/commit/00467c5d3f77e49f2fbccf848c8ae0328c38f8ad))
*   remove //flow from \*.d.ts ([5a57884](https://github.com/kiwicom/orbit/commit/5a57884281dc952ad959e53608b3a9dee8239e85))
*   **CountryFlag** stop exporting `getCountryProps` ([#2436](https://github.com/kiwicom/orbit/pull/2436)) ([e001aabe](https://github.com/kiwicom/orbit/commit/e001aabea64b132977ba534ee54eb059794a68a4))
*   **ButtonPrimitive** correctly forward `ref` ([#2418](https://github.com/kiwicom/orbit/pull/2418)) ([cf4c4f33](https://github.com/kiwicom/orbit/commit/cf4c4f33fc41fa7af80d2861014ea653dc44cd89))

#### Features

*   introduce Box component ([#2242](https://github.com/kiwicom/orbit/issues/2242)) ([226bec7](https://github.com/kiwicom/orbit/commit/226bec7f95143474df073ff0f6efe89d5a3f7a81))
*   introduce Inline component ([#2255](https://github.com/kiwicom/orbit/issues/2255)) ([ef00500](https://github.com/kiwicom/orbit/commit/ef005000b522d28b842e3c7651cac31540d1debe))
*   **AlertButton:** set small as default size for alert button ([#2391](https://github.com/kiwicom/orbit/issues/2391)) ([1a6d0be](https://github.com/kiwicom/orbit/commit/1a6d0bea34771c0b08ac196946b606ad23dc662b))
*   **Stack:** change spacing value names ([#2457](https://github.com/kiwicom/orbit/issues/2457)) ([6a9363b](https://github.com/kiwicom/orbit/commit/6a9363bab5c39632e1c245832014a3375b64d3fb)), closes [#2451](https://github.com/kiwicom/orbit/issues/2451)

#### BREAKING CHANGES

*   **Stack:** Renaming spacing values of `Stack` component and `LinkList` component – that was using Stack internally.

Also dropped support of different spacings between mobile and desktop version. It no longer make sense from design point of view.

*   **AlertButton:** Removed size property from AlertButton since only the small size should be used and from now, it's the default value. No actions should be necessary. If you used different than small size, just remove the usage of the property.
    Co-authored-by: Luděk Vepřek <weprous@gmail.com>

## [0.95.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.94.0...@kiwicom/orbit-components@0.95.0) (2020-10-23)

#### Bug Fixes

*   **Timeline:** IE fixes ([#2370](https://github.com/kiwicom/orbit/issues/2370)) ([e2d1953](https://github.com/kiwicom/orbit/commit/e2d1953af1a339f42ead0ed4dbe716fc52d52d62))
*   **Tooltip:** missing MobileDialog data-test ([#2382](https://github.com/kiwicom/orbit/issues/2382)) ([00bf878](https://github.com/kiwicom/orbit/commit/00bf878821ca59de024eb6ec0886f8e7b7b03000))

#### Features

*   **Eslint:** add rules for enforcing readOnly types on TS/Flow ([#2331](https://github.com/kiwicom/orbit/issues/2331)) ([26d13b5](https://github.com/kiwicom/orbit/commit/26d13b52ce62da4f41f48237a469c84c7e24f11b))
*   **ListChoice:** add disabled boolean property ([#2355](https://github.com/kiwicom/orbit/issues/2355)) ([4f135e5](https://github.com/kiwicom/orbit/commit/4f135e5b7bd07202dd507acad5375619fee1aa0a))
*   **Loki:** skip code blocks ([#2389](https://github.com/kiwicom/orbit/issues/2389)) ([9d4c7d1](https://github.com/kiwicom/orbit/commit/9d4c7d1af63735d652440cf0c9003e834e4b4fc5)), closes [#2346](https://github.com/kiwicom/orbit/issues/2346)
*   **orbit:** transitions defaults to on ([#2372](https://github.com/kiwicom/orbit/issues/2372)) ([d2338e3](https://github.com/kiwicom/orbit/commit/d2338e385f04d262de4fd82fe736eb5a12a6ffbe))
*   **TextLink:** add standAlone, noUnderline & iconRight, rename icon to iconLeft ([#2373](https://github.com/kiwicom/orbit/pull/2373)) ([76959c86](https://github.com/kiwicom/orbit/commit/76959c865fbb942bfafd9b67b4e2cc45897ab67a))
    *   for renaming `icon` to `iconRight` there's a codemod available, see https://github.com/kiwicom/orbit/pull/2380#issuecomment-713441576

## [0.94.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.93.0...@kiwicom/orbit-components@0.94.0) (2020-10-19)

#### Bug Fixes

*   **TextLink:** ariaCurrent should in optional in TS definition ([#2365](https://github.com/kiwicom/orbit/issues/2365)) ([09857f7](https://github.com/kiwicom/orbit/commit/09857f7d9b64fc791b2371a2a43b3a709484be2f))

#### Features

*   **Grid:** add width property ([#2356](https://github.com/kiwicom/orbit/issues/2356)) ([ee8943e](https://github.com/kiwicom/orbit/commit/ee8943e4d59d73fa9d95573fffe8df4ece04ede7))

## [0.93.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.92.0...@kiwicom/orbit-components@0.93.0) (2020-10-16)

#### Bug Fixes

*   add padding to InputField text suffix ([#2338](https://github.com/kiwicom/orbit/issues/2338)) ([6b77021](https://github.com/kiwicom/orbit/commit/6b7702161fd7b052c3a2a4dfe636cd6eb759a271))
*   **Breadcrumbs:** add check for absence of props on mobile ([#2259](https://github.com/kiwicom/orbit/issues/2259)) ([7bd4ab3](https://github.com/kiwicom/orbit/commit/7bd4ab3cc74b7c42a6d3817d6712865709a7e1bd))
*   **Breadcrumbs:** spacing from 8 to 4 ([#2311](https://github.com/kiwicom/orbit/issues/2311)) ([b51bd21](https://github.com/kiwicom/orbit/commit/b51bd21926a22393ab270c0de5b593299760a94a))
*   **ButtonPrimitive:** align text to right in RTL ([f26c45e](https://github.com/kiwicom/orbit/commit/f26c45e86f1f19c3c035f9eccae7644d23c27536))
*   **Docs:** primitives default ([dd91c4f](https://github.com/kiwicom/orbit/commit/dd91c4f254bb8c3240972d0708324d5ff2d624d8))
*   **Hide:** span to div ([#2277](https://github.com/kiwicom/orbit/issues/2277)) ([3bcc1bb](https://github.com/kiwicom/orbit/commit/3bcc1bbc82a0b0fe75610cc110c7c07983d6b664))
*   **ModalSection:** margin-top ([#2340](https://github.com/kiwicom/orbit/issues/2340)) ([4a7def0](https://github.com/kiwicom/orbit/commit/4a7def0168cacbe1b943a55f09ec5bccc8644ff3))
*   **Slide:** initialize max-height to work SSR ([#2339](https://github.com/kiwicom/orbit/issues/2339)) ([ff7dce8](https://github.com/kiwicom/orbit/commit/ff7dce8185d198ae847a3330287ab75dc5837f2b))
*   fix InputGroup/LayoutColumn TS typing ([#2326](https://github.com/kiwicom/orbit/issues/2326)) ([de52968](https://github.com/kiwicom/orbit/commit/de5296870ec89ba1c3c17fa7fb4a936171ebced8))
*   move collapsable aria labels to the focusable button ([#2319](https://github.com/kiwicom/orbit/issues/2319)) ([ad8708b](https://github.com/kiwicom/orbit/commit/ad8708bfd32af8966ec505032b7e703944b75b1a))
*   **Tile:** fix newWindow icon on external ([#2264](https://github.com/kiwicom/orbit/issues/2264)) ([4ea9639](https://github.com/kiwicom/orbit/commit/4ea9639fbd1ea693a9f315a2c0ee00d2f872ced5))

#### Features

*   **Accordion:** added Accordion component ([#2280](https://github.com/kiwicom/orbit/issues/2280)) ([9d24499](https://github.com/kiwicom/orbit/commit/9d244990ecc3e1c39ff60fc6caa5c5e4c3edda5a))
*   add Wizard component ([99229b1](https://github.com/kiwicom/orbit/commit/99229b1586acbf9ed093fa277a63c7333f73ecf5))
*   **ButtonPrimitive:** add support for aria-current ([d26067b](https://github.com/kiwicom/orbit/commit/d26067b648e23402fbfefdd9110b3cde0671ed0d))
*   **Illustration:** added image to images.kiwi ([#2312](https://github.com/kiwicom/orbit/issues/2312)) ([6652782](https://github.com/kiwicom/orbit/commit/66527820fd4529b3f58a2be20387a175befafddd))
*   **InputField:** adding a autofocus attribute ([#2236](https://github.com/kiwicom/orbit/issues/2236)) ([3ebec2e](https://github.com/kiwicom/orbit/commit/3ebec2ec954aaf7941282e71b921f4fd954562c0))
*   **Modal:** add prop to remove the close button ([d96f46d](https://github.com/kiwicom/orbit/commit/d96f46d9b4fced03cd8677bb8eb5a4a72c235ea9))
*   **TextLink:** add support for aria-current ([9e0b3e2](https://github.com/kiwicom/orbit/commit/9e0b3e2b6fb4129931da3a8ece0796e8a07d0b12))
*   **Timeline:** init component ([#2287](https://github.com/kiwicom/orbit/issues/2287)) ([9447edf](https://github.com/kiwicom/orbit/commit/9447edf6f2cdcfb10a72da133b9aeb2b18a3a928))
*   **Tooltip:** refactoring Tooltip into 2 separate components ([#2230](https://github.com/kiwicom/orbit/issues/2230)) ([df3b3be](https://github.com/kiwicom/orbit/commit/df3b3be122c92b4d0c29c6d72171cda866bdb471))
*   add an agnostic entry point for icons ([#2237](https://github.com/kiwicom/orbit/issues/2237)) ([597d1ec](https://github.com/kiwicom/orbit/commit/597d1ecefd543a79936af9a658be6b401c934a9a))

## 0.92.0 (2020-09-09)

#### Bug Fixes

*   **Layout:** width of Card on mobile ([#2181](https://github.com/kiwicom/orbit/issues/2181)) ([8daca18](https://github.com/kiwicom/orbit/commit/8daca18b382e04873d781f457c1294aae353134e))
*   updating TypeScript definitions to match Flow ([#2202](https://github.com/kiwicom/orbit/issues/2202)) ([d476c2f](https://github.com/kiwicom/orbit/commit/d476c2f95bb260b72611bfb19a55c294fc72478d))
*   **Docs:** internal github links ([#2182](https://github.com/kiwicom/orbit/issues/2182)) ([da12261](https://github.com/kiwicom/orbit/commit/da1226162b0cd3fee7c31f6ab8da97cf4b642feb))
*   **Table:** updating default align and removing unnecessary vertical-align options ([#2204](https://github.com/kiwicom/orbit/issues/2204)) ([0bfe9ae](https://github.com/kiwicom/orbit/commit/0bfe9ae0da094586a2818fb733ee5219802099df))
*   **Tooltip:** enable event bubbling for disabled children ([#2201](https://github.com/kiwicom/orbit/issues/2201)) ([5f26d88](https://github.com/kiwicom/orbit/commit/5f26d88d65ca1fc20b1cd2badf3bfd9fc03c2ede))
*   update docs and icons link for monorepo ([#2200](https://github.com/kiwicom/orbit/issues/2200)) ([27f4974](https://github.com/kiwicom/orbit/commit/27f49746c12a1adeb2721f9c31b323b074e98aea))

#### Features

*   **Hooks:** useIntersect ([#2091](https://github.com/kiwicom/orbit/issues/2091)) ([dd65d65](https://github.com/kiwicom/orbit/commit/dd65d65d55e6b90e47765160fd610fdd8441e3f0))
*   **Icons:** add double chevron icons ([#2190](https://github.com/kiwicom/orbit/issues/2190)) ([f0ce1f9](https://github.com/kiwicom/orbit/commit/f0ce1f96c918d3859590752f305a9e59497b1094))

#### Reverts

*   **Layout:** width of Card on mobile ([#2228](https://github.com/kiwicom/orbit/issues/2228)) ([09a5429](https://github.com/kiwicom/orbit/commit/09a5429138d2f922b54d45e573f07f85181bd141))

### [0.90.1](https://github.com/kiwicom/orbit/compare/0.90.0...0.90.1) (2020-08-06)

#### Bug Fixes

*   **Pricingtable:** rendering of wrapped mobile child ([#2094](https://github.com/kiwicom/orbit/issues/2094)) ([5713e76](https://github.com/kiwicom/orbit/commit/5713e76aadb4f8fd59af61edb2f84099d0843b75))
*   popover memory leak ([#2095](https://github.com/kiwicom/orbit/issues/2095)) ([9a9a890](https://github.com/kiwicom/orbit/commit/9a9a89023130e3d111618dbb03f9f5697adb0b7f))
*   **types:** adjust Breadcrumbs, Tile, Button type declarations and exports ([#2096](https://github.com/kiwicom/orbit/issues/2096)) ([b6cdc68](https://github.com/kiwicom/orbit/commit/b6cdc68ffac754dc1c4ca162aaec2cf40dacde11))
*   **types:** adjust typescript types for heading and textarea ([#2093](https://github.com/kiwicom/orbit/issues/2093)) ([0fcd753](https://github.com/kiwicom/orbit/commit/0fcd753f22e5067cdc42004f6c4feef94a559d97))

## [0.90.0](https://github.com/kiwicom/orbit/compare/0.89.0...0.90.0) (2020-08-05)

*   fix!(Popover): actions on mobile are no longer hidden (#2040) ([1a71008](https://github.com/kiwicom/orbit/commit/1a7100832a1dda020f09ec4ef6dfd1a18d7032bd)), closes [#2040](https://github.com/kiwicom/orbit/issues/2040)
*   feat!(PricingTable): adding option to display radio buttons on desktop (#2076) ([8d1fee4](https://github.com/kiwicom/orbit/commit/8d1fee4041293e12f4609908d38d62bc0e85473d)), closes [#2076](https://github.com/kiwicom/orbit/issues/2076)

#### Bug Fixes

*   **IllustrationPrimitive:** defaulting flex shrink to false ([#2036](https://github.com/kiwicom/orbit/issues/2036)) ([0a867f1](https://github.com/kiwicom/orbit/commit/0a867f16794535d4d9caa041ca7b1a5ac3730ac0))
*   **InputStepper, Stepper:** callbacks triggered when disabled ([#2050](https://github.com/kiwicom/orbit/issues/2050)) ([81ed35b](https://github.com/kiwicom/orbit/commit/81ed35be583686c64d7fd7ae7a8531a58833a853))
*   **Layout:** edge to edge behavior of deprecated Card ([#2049](https://github.com/kiwicom/orbit/issues/2049)) ([637f677](https://github.com/kiwicom/orbit/commit/637f677147c2a1423eb5201bf39ebefed7cfe953))
*   **ListChoice:** set role to checkbox when selectable is true ([#2062](https://github.com/kiwicom/orbit/issues/2062)) ([70d1625](https://github.com/kiwicom/orbit/commit/70d1625627953520f32d945996096ef93008876b))
*   **Rtl:** flow definition of destructured assigment ([#2077](https://github.com/kiwicom/orbit/issues/2077)) ([6dd89e2](https://github.com/kiwicom/orbit/commit/6dd89e23e824decd81b8cb442d7bf2f37aa752d0))
*   **Typescript:** updating definitions ([#2083](https://github.com/kiwicom/orbit/issues/2083)) ([b1fc89f](https://github.com/kiwicom/orbit/commit/b1fc89fcbb5f2cfe4aefc24436a7d93a95f8887b))

#### Features

*   **Breadcrumbs:** add backHref prop ([#2048](https://github.com/kiwicom/orbit/issues/2048)) ([58e0493](https://github.com/kiwicom/orbit/commit/58e049340436a75d8f058503b99eb46e40c9a950))
*   **ButtonMobileStore:** adding light variants ([#2059](https://github.com/kiwicom/orbit/issues/2059)) ([d534554](https://github.com/kiwicom/orbit/commit/d534554a5ad335bcce9448c854256b2027f5cb65))
*   **Modal:** adding extraSmall size option ([#2078](https://github.com/kiwicom/orbit/issues/2078)) ([17fa9ae](https://github.com/kiwicom/orbit/commit/17fa9ae6bf716a5021989a628cfcbfbb07e59930))
*   **SocialButton:** adding twitter type ([#2057](https://github.com/kiwicom/orbit/issues/2057)) ([cb1c97d](https://github.com/kiwicom/orbit/commit/cb1c97dca7b58b56fe9503e791d62ad00cfb9fbc))

#### BREAKING CHANGES

*   adding a padding-top to Actions causing it to potentially collide with some wrappers with padding which might be in place
*   activeElement no longer passes active to children

## [0.89.0](https://github.com/kiwicom/orbit/compare/0.88.0...0.89.0) (2020-07-17)

#### Bug Fixes

*   **Breadcrumbs:** unification of style from figma ([#2032](https://github.com/kiwicom/orbit/issues/2032)) ([8c8868d](https://github.com/kiwicom/orbit/commit/8c8868db821e0f9a401d0b4d4a4d9fea964461f8))
*   extend type of tabIndex to allow numbers ([#2029](https://github.com/kiwicom/orbit/issues/2029)) ([96c1a7b](https://github.com/kiwicom/orbit/commit/96c1a7b6f906af5d6e231eb02fdda1b25a500979))
*   **InputStepper:** onChange is triggered when disabled ([#2024](https://github.com/kiwicom/orbit/issues/2024)) ([387806c](https://github.com/kiwicom/orbit/commit/387806c63e5da13657b995389c42f81557492a0a))
*   **Layout:** inner usage of Card – edge to edge behavior ([#2025](https://github.com/kiwicom/orbit/issues/2025)) ([3d475f3](https://github.com/kiwicom/orbit/commit/3d475f3d986c12286ce264f7d2f7ee7121858d4a))

#### Features

*   **Buttons:** adding rel attribute ([#2028](https://github.com/kiwicom/orbit/issues/2028)) ([df8507e](https://github.com/kiwicom/orbit/commit/df8507e35abab58f71890ca4c77103cd70c03d59))

## [0.88.0](https://github.com/kiwicom/orbit/compare/0.87.2...0.88.0) (2020-06-30)

#### Bug Fixes

*   **Breadcrumbs:** unnecessary optional event ([#1959](https://github.com/kiwicom/orbit/issues/1959)) ([d4034a7](https://github.com/kiwicom/orbit/commit/d4034a78b4f9df76d1fa2b2fafd3f6cc9e672d6f))
*   **Select:** customValueText interpolation ([#1957](https://github.com/kiwicom/orbit/issues/1957)) ([f528d0c](https://github.com/kiwicom/orbit/commit/f528d0c171dc8aaf1f1e6a66ebefdb4996e096d2))
*   **SocialButton:** inner content align ([#1983](https://github.com/kiwicom/orbit/issues/1983)) ([2b57e3a](https://github.com/kiwicom/orbit/commit/2b57e3a205bfa70d5946a236c45d60da93745991))
*   **UseMediaQuery:** remove unnecessary debounce ([#1982](https://github.com/kiwicom/orbit/issues/1982)) ([bc73651](https://github.com/kiwicom/orbit/commit/bc73651e624574f36c5582b9dc8b42024aa1e1ed))

### [0.87.2](https://github.com/kiwicom/orbit/compare/0.87.1...0.87.2) (2020-06-16)

#### Bug Fixes

*   **ButtonPrimitive:** fallback to text-align ([#1946](https://github.com/kiwicom/orbit/issues/1946)) ([bd7f59f](https://github.com/kiwicom/orbit/commit/bd7f59f870aae6a005f170e4332a98e2272d46dd))
*   **Portal:** state init on SSR ([#1954](https://github.com/kiwicom/orbit/issues/1954)) ([1f43f7a](https://github.com/kiwicom/orbit/commit/1f43f7abd1493cf7592e3d0c9a69a04570dec1a4))
*   tests folder names ([#1940](https://github.com/kiwicom/orbit/issues/1940)) ([9bd091c](https://github.com/kiwicom/orbit/commit/9bd091c5b5c93f930fd1879e52e45d5eed361287))

### [0.87.1](https://github.com/kiwicom/orbit/compare/0.87.0...0.87.1) (2020-06-12)

#### Bug Fixes

*   **Breadcrumbs:** add mobile back button onClick ([#1944](https://github.com/kiwicom/orbit/issues/1944)) ([2bb09e0](https://github.com/kiwicom/orbit/commit/2bb09e0921ba2d73daf4eb113b24242ee0434dde))

## [0.87.0](https://github.com/kiwicom/orbit/compare/0.86.0...0.87.0) (2020-06-11)

#### Bug Fixes

*   **ButtonGroup:** mobile border radius ([#1934](https://github.com/kiwicom/orbit/issues/1934)) ([08316d1](https://github.com/kiwicom/orbit/commit/08316d18ceaea05e627649e351d4112d358383c5))
*   **Portal:** usage with Tooltip ([#1935](https://github.com/kiwicom/orbit/issues/1935)) ([67e88d6](https://github.com/kiwicom/orbit/commit/67e88d67a1fefd3605646c7a1b164d0024864d3c))
*   **Tag:** onRemove now shows close button ([#1931](https://github.com/kiwicom/orbit/issues/1931)) ([0156b7f](https://github.com/kiwicom/orbit/commit/0156b7f9ec22ccdd41c7fe19fd313418aa2a36ee))

#### Features

*   **ButtonLink:** inline type and compact property, remove transparent ([#1912](https://github.com/kiwicom/orbit/issues/1912)) ([8e2f128](https://github.com/kiwicom/orbit/commit/8e2f1286d8ef2f90330e6960af399a583d993bc1))
*   **ButtonPrimitive:** adding responsive visual style behaviour ([#1911](https://github.com/kiwicom/orbit/issues/1911)) ([06a8622](https://github.com/kiwicom/orbit/commit/06a86224c00a2c2594e2ffd433b10878e25b7c9a))
*   **Dialog:** change spacing between title and description ([#1922](https://github.com/kiwicom/orbit/issues/1922)) ([7718db7](https://github.com/kiwicom/orbit/commit/7718db7552ae2c6ca84f63f4bb8bfd9c9c18773c))
*   **FormElements:** adding mobile border radius ([#1915](https://github.com/kiwicom/orbit/issues/1915)) ([3a3c227](https://github.com/kiwicom/orbit/commit/3a3c22782edcadb6447b38ac7d6dfe037ad83292))
*   **General:** adding display name to react contexts ([#1936](https://github.com/kiwicom/orbit/issues/1936)) ([c1a0da4](https://github.com/kiwicom/orbit/commit/c1a0da4fe7e985732ea17c7bdec6d7666afc1603))
*   **MediaQuery:** adding prefersReducedMotion ([#1921](https://github.com/kiwicom/orbit/issues/1921)) ([dd807cb](https://github.com/kiwicom/orbit/commit/dd807cbfb6dd47a3fce4a6c630a07dbe892be149))
*   **Portal:** refactor to hooks ([#1923](https://github.com/kiwicom/orbit/issues/1923)) ([04ad886](https://github.com/kiwicom/orbit/commit/04ad88683e7e7c3128e073bd3b3b6806cb04e1e5))
*   **Stack:** add baseline to align options ([#1930](https://github.com/kiwicom/orbit/issues/1930)) ([eecc296](https://github.com/kiwicom/orbit/commit/eecc296ca8b425f17527fc9a11da04332db7cbe6))
*   **TextLink:** change focus state to non underlined text ([#1914](https://github.com/kiwicom/orbit/issues/1914)) ([e2bb67d](https://github.com/kiwicom/orbit/commit/e2bb67dda64477347168a5629b921811ab62ad71))

## [0.86.0](https://github.com/kiwicom/orbit/compare/0.85.2...0.86.0) (2020-06-01)

#### Bug Fixes

*   **InputStepper:** removing native arrows on Firefox ([#1889](https://github.com/kiwicom/orbit/issues/1889)) ([2c61e3b](https://github.com/kiwicom/orbit/commit/2c61e3b786e2b6a1ec8d363789d19ab634e96e36))
*   **MediaQuery:** spread type ([#1899](https://github.com/kiwicom/orbit/issues/1899)) ([c78ab3f](https://github.com/kiwicom/orbit/commit/c78ab3f54701443c436b88e297e512672969a8f4))

#### Features

*   **InputField:** adding onSelect, onMouseUp, onMouseDown ([#1883](https://github.com/kiwicom/orbit/issues/1883)) ([8ce9435](https://github.com/kiwicom/orbit/commit/8ce9435eb07b8a898fd56f957701f78194029a8f))
*   **PictureCard:** Add src attribute ([#1544](https://github.com/kiwicom/orbit/issues/1544)) ([5a17c0b](https://github.com/kiwicom/orbit/commit/5a17c0b6c476ad5cbae1e31bee4037b7fc8efd86))
*   **Table:** adding striped on Table. Scope and as on TableCell ([#1881](https://github.com/kiwicom/orbit/issues/1881)) ([5d49cfd](https://github.com/kiwicom/orbit/commit/5d49cfd6786a919f10db34b33f112d7d67482259))
*   **TableCell:** adding white-space and vertical align options ([#1910](https://github.com/kiwicom/orbit/issues/1910)) ([5380443](https://github.com/kiwicom/orbit/commit/538044350cbb099b4b297964f3577f18a805dc8c))

### [0.85.2](https://github.com/kiwicom/orbit/compare/0.85.1...0.85.2) (2020-05-21)

#### Bug Fixes

*   defaultTheme global declaration and references of themeType ([#1876](https://github.com/kiwicom/orbit/issues/1876)) ([6e1e60e](https://github.com/kiwicom/orbit/commit/6e1e60e7cca922139221d3cda81930710cc397da))

### [0.85.1](https://github.com/kiwicom/orbit/compare/0.85.0...0.85.1) (2020-05-20)

#### Bug Fixes

*   **InputStepper:** improve TypeScript definition ([#1865](https://github.com/kiwicom/orbit/issues/1865)) ([86915f3](https://github.com/kiwicom/orbit/commit/86915f30f7959479997f93d038a03c49eb565879))
*   **Typescript:** defaultTheme, missing instance ([#1873](https://github.com/kiwicom/orbit/issues/1873)) ([d7e62cf](https://github.com/kiwicom/orbit/commit/d7e62cf8b7b4ab4ffaab0350ad718d993aa9166b))

## [0.85.0](https://github.com/kiwicom/orbit/compare/0.84.2...0.85.0) (2020-05-15)

#### Bug Fixes

*   **AlertButton:** missing export in entry file ([#1848](https://github.com/kiwicom/orbit/issues/1848)) ([1e4336a](https://github.com/kiwicom/orbit/commit/1e4336a7155e031bf7c8bca1f47ecaba6f26b7b3))
*   **Breadcrumbs:** render in RTL ([#1836](https://github.com/kiwicom/orbit/issues/1836)) ([a427b70](https://github.com/kiwicom/orbit/commit/a427b7003d15e33563c0fc25eef92c2d1163b0c2))
*   **ButtonPrimitive:** interactive states when disabled ([#1846](https://github.com/kiwicom/orbit/issues/1846)) ([5de0ad3](https://github.com/kiwicom/orbit/commit/5de0ad36ba3549af40da1a0bb01a36ddb55d84b0))
*   **FormElements:** adding aria polite to errors ([#1840](https://github.com/kiwicom/orbit/issues/1840)) ([14196cc](https://github.com/kiwicom/orbit/commit/14196cc2e7fb06cd402333cc3c8ea1564641d425))
*   **ModalHeader:** illustration type to Node ([#1829](https://github.com/kiwicom/orbit/issues/1829)) ([8775caa](https://github.com/kiwicom/orbit/commit/8775caa9200a8f6e29f858055c15d9070f284ea3))
*   **Table:** min-height on table ([#1823](https://github.com/kiwicom/orbit/issues/1823)) ([c116c27](https://github.com/kiwicom/orbit/commit/c116c279e22707f8c24e39d325a6748cc2c78ab2))

#### Features

*   **Icons:** adding colorPicker icon ([#1841](https://github.com/kiwicom/orbit/issues/1841)) ([b79fbe6](https://github.com/kiwicom/orbit/commit/b79fbe61582468c9fca7784b3cef296131442cd3))
*   **Modal:** illustration size ([#1830](https://github.com/kiwicom/orbit/issues/1830)) ([3bf4fac](https://github.com/kiwicom/orbit/commit/3bf4fac8bb95b2a60918106bf5c001bd8c193aae))
*   **Pagination:** not hiding buttons at the end/start of the list ([#1843](https://github.com/kiwicom/orbit/issues/1843)) ([67e867a](https://github.com/kiwicom/orbit/commit/67e867ac86604073907328c8881f234c1b512bee))
*   **ServiceLogo:** new Maestro and MasterCard short variants ([#1847](https://github.com/kiwicom/orbit/issues/1847)) ([a4fae80](https://github.com/kiwicom/orbit/commit/a4fae803ac093b37694b9941bf81fe7cbde6d797))
*   **TypeScript:** adding type definitions ([#1504](https://github.com/kiwicom/orbit/issues/1504)) ([a2ea0ec](https://github.com/kiwicom/orbit/commit/a2ea0ecc3080afae5b2e38f611e98137c5bd91dd))

### [0.84.2](https://github.com/kiwicom/orbit/compare/0.84.1...0.84.2) (2020-04-29)

#### Bug Fixes

*   **ButtonPrimitive:** disabled render to DOM element ([#1813](https://github.com/kiwicom/orbit/issues/1813)) ([0147810](https://github.com/kiwicom/orbit/commit/014781087bc609c757f5acd1729601c9b612ce2e))

### [0.84.1](https://github.com/kiwicom/orbit/compare/0.84.0...0.84.1) (2020-04-28)

#### Bug Fixes

*   **Button:** missing white type in flow definition ([#1806](https://github.com/kiwicom/orbit/issues/1806)) ([153b158](https://github.com/kiwicom/orbit/commit/153b158d0cd86dc639a5fcace3d0db288e0563e1))

## [0.84.0](https://github.com/kiwicom/orbit/compare/0.83.0...0.84.0) (2020-04-27)

#### Features

*   adding extraSmall size to illustrations ([#1800](https://github.com/kiwicom/orbit/issues/1800)) ([7987772](https://github.com/kiwicom/orbit/commit/7987772d37d324ef86978b0c8e3e6a476a676a23))
*   introduce useBoundingRect hook ([#1771](https://github.com/kiwicom/orbit/issues/1771)) ([ba9597b](https://github.com/kiwicom/orbit/commit/ba9597be44383cddc22e50dbfb9562b5d5014dc5))
*   moving separated type of List to PricingTable only ([#1801](https://github.com/kiwicom/orbit/issues/1801)) ([93629b5](https://github.com/kiwicom/orbit/commit/93629b5d8a267aabd428b2cfe38d0138ab3ba9ed))
*   rename element property to as ([#1273](https://github.com/kiwicom/orbit/issues/1273)) ([91ff946](https://github.com/kiwicom/orbit/commit/91ff946a69af5756749c4b431b2312357104e225))
*   **Buttons:** introduce SocialButton ([#1803](https://github.com/kiwicom/orbit/issues/1803)) ([ac41d60](https://github.com/kiwicom/orbit/commit/ac41d6094b69e684b2857e2d43712be6b60e1848))
*   **Drawer:** title alignment ([#1790](https://github.com/kiwicom/orbit/issues/1790)) ([5fb4708](https://github.com/kiwicom/orbit/commit/5fb4708fc64157dcac2774ec9672833b7ee5356f))
*   **SkipLink:** Rename description to buttonLabel on SkipLink ([#1686](https://github.com/kiwicom/orbit/issues/1686)) ([99e4017](https://github.com/kiwicom/orbit/commit/99e4017a5b1a1dc264274df2a58b2051f829cc7e))
*   **Table:** adding new type and footer ([#1788](https://github.com/kiwicom/orbit/issues/1788)) ([075d9f3](https://github.com/kiwicom/orbit/commit/075d9f33b820a4f0299a71c304843a5f294c5018))
*   introduce global onlyIE media query selector ([#1772](https://github.com/kiwicom/orbit/issues/1772)) ([1b48f6b](https://github.com/kiwicom/orbit/commit/1b48f6b6ec7f71aa35211ea0fc1e04752a6ede91))

<!---->

*   feat(Buttons)!: Introduce ButtonPrimitive, implementing planned breaking changes (#1522) ([ca4a641](https://github.com/kiwicom/orbit/commit/ca4a6411ad2e8a2b28f5efe1e7dd534459a7abbf)), closes [#1522](https://github.com/kiwicom/orbit/issues/1522)

#### Bug Fixes

*   types of asComponent ([#1787](https://github.com/kiwicom/orbit/issues/1787)) ([a80b468](https://github.com/kiwicom/orbit/commit/a80b468ee90ae30b1e43d3c7d939e2f8c4e683f4))
*   **Card:** font-size of title in section header ([#1776](https://github.com/kiwicom/orbit/issues/1776)) ([a2e3a52](https://github.com/kiwicom/orbit/commit/a2e3a52aaa2031b0be198853859114e4dd3c3a47))

#### BREAKING CHANGES

*   Shifting small size to extraSmall
*   removes a separated type from List
*   **SkipLink:** renaming description prop
*   **Buttons:** Removing info, success, warning, facebook, google types from Button.
    Removing bordered property from Button.
*   removing unsafe className (deprecated, not public API)
    removing icon property (deprecated)
    changing type of width to string (planned)

## [0.83.0](https://github.com/kiwicom/orbit/compare/0.82.1...0.83.0) (2020-04-03)

#### Bug Fixes

*   **Compass:** broken svg definition for icon font ([#1759](https://github.com/kiwicom/orbit/issues/1759)) ([f8e7b72](https://github.com/kiwicom/orbit/commit/f8e7b721f16fb8984414117e63f121196fc300ea))
*   **Tooltip:** calculation upon change in the wrapped element ([#1761](https://github.com/kiwicom/orbit/issues/1761)) ([e7b5474](https://github.com/kiwicom/orbit/commit/e7b5474047f8d3a7fa09e70a0de879cd8c7f685f))

#### Features

*   **ChoiceGroup:** updating the filter color from product color ([#1757](https://github.com/kiwicom/orbit/issues/1757)) ([e1ad6f2](https://github.com/kiwicom/orbit/commit/e1ad6f20e0b822fcba88568b2709594083d03be7))
*   adding new ButtonMobileStore component ([#1756](https://github.com/kiwicom/orbit/issues/1756)) ([223c846](https://github.com/kiwicom/orbit/commit/223c846d556050d19b46134260610f508d36d844))
*   **Alert:** changing the alignment of description ([#1758](https://github.com/kiwicom/orbit/issues/1758)) ([fff86ca](https://github.com/kiwicom/orbit/commit/fff86ca43ee497897bbcd12346f06a3c5a8d2f2f))

### [0.82.1](https://github.com/kiwicom/orbit/compare/0.82.0...0.82.1) (2020-04-01)

#### Bug Fixes

*   **Tooltip:** with clickable element should close on mobile ([#1752](https://github.com/kiwicom/orbit/issues/1752)) ([3af61f8](https://github.com/kiwicom/orbit/commit/3af61f8caddf2d2a3762dfb24f846736f6214a90))

## [0.82.0](https://github.com/kiwicom/orbit/compare/0.81.0...0.82.0) (2020-03-31)

#### Bug Fixes

*   **Hide:** omit rendering of on property ([#1740](https://github.com/kiwicom/orbit/issues/1740)) ([e343317](https://github.com/kiwicom/orbit/commit/e34331729802b5fc380d5970cecea1e44e5d7fbf))
*   **InputField:** Tag alignment ([#1744](https://github.com/kiwicom/orbit/issues/1744)) ([133f718](https://github.com/kiwicom/orbit/commit/133f718cbd945f10cfbd5245b678409693af8b73))
*   **modal:** border radius of close container on desktop ([#1726](https://github.com/kiwicom/orbit/issues/1726)) ([fc3b4aa](https://github.com/kiwicom/orbit/commit/fc3b4aa2ba48eb595f76a92e67a292aef2e27239))
*   **Modal:** click ability under CloseContainer ([#1739](https://github.com/kiwicom/orbit/issues/1739)) ([2368987](https://github.com/kiwicom/orbit/commit/2368987f0d1c58307b303bb1d3eaac714263ca22))
*   **radar:** SVG definition ([#1728](https://github.com/kiwicom/orbit/issues/1728)) ([843d1bd](https://github.com/kiwicom/orbit/commit/843d1bda68e368a69e220b79d956f9a3ce9a27fb))
*   **Tooltip:** should close when clicked on clickable element ([#1742](https://github.com/kiwicom/orbit/issues/1742)) ([a4e226e](https://github.com/kiwicom/orbit/commit/a4e226eac9981c039d195884a7e3dd2d54dc16e1))

#### Features

*   **Checkbox,Radio:** Updating visual style ([#1737](https://github.com/kiwicom/orbit/issues/1737)) ([8ff47d7](https://github.com/kiwicom/orbit/commit/8ff47d7a265c3586366f3adde3a597e5111cf573))
*   Adding commitlint and husky ([#1730](https://github.com/kiwicom/orbit/issues/1730)) ([e96446e](https://github.com/kiwicom/orbit/commit/e96446e8347d8f4406fc9d2bf80ba1cfeb9604f6))
*   **card:** new titleAs property ([#1729](https://github.com/kiwicom/orbit/issues/1729)) ([fa50675](https://github.com/kiwicom/orbit/commit/fa50675db518d932f40e2012bd69d4446b9f9df4))
*   **icons:** New Radar icon ([#1725](https://github.com/kiwicom/orbit/issues/1725)) ([93e14fc](https://github.com/kiwicom/orbit/commit/93e14fcf39e72706afeddc8cdc171ff9f18e96d6))
*   **Tile:** change padding to large for desktop breakpoint ([#1732](https://github.com/kiwicom/orbit/issues/1732)) ([ce9b531](https://github.com/kiwicom/orbit/commit/ce9b531713349b890d03362ae685e7099d8b4606))

#### Reverts

*   **FormElements:** native design sync ([#1743](https://github.com/kiwicom/orbit/issues/1743)) ([f351e46](https://github.com/kiwicom/orbit/commit/f351e4618e3495cb6a42a4b66e23d4157e3f403d))

## [0.81.0](https://github.com/kiwicom/orbit/compare/0.80.0...0.81.0) (2020-03-24)

#### Features

*   **Select:** Add optional key to Option ([#1708](https://github.com/kiwicom/orbit/issues/1708)) ([f824d4a](https://github.com/kiwicom/orbit/commit/f824d4a762edc70598746a3533fa470fc53e90b6))
*   **Tile:** introduce noHeaderIcon property ([#1710](https://github.com/kiwicom/orbit/issues/1710)) ([0183561](https://github.com/kiwicom/orbit/commit/0183561c5f14e595f3df76c620c8966999467cbe))

## [0.80.0](https://github.com/kiwicom/orbit/compare/0.79.0...0.80.0) (2020-03-20)

#### Features

*   **Tile:** Adding htmlTitle attribute ([#1691](https://github.com/kiwicom/orbit/issues/1691)) ([a1628ba](https://github.com/kiwicom/orbit/commit/a1628ba78cad62734ca4d87414a3e18989020e9c))

## [0.79.0](https://github.com/kiwicom/orbit/compare/0.78.0...0.79.0) (2020-03-17)

#### Bug Fixes

*   **Breadcrumbs:** add correct html5 structured microdata for breadcrumbs ([#1666](https://github.com/kiwicom/orbit/issues/1666)) ([692b3f5](https://github.com/kiwicom/orbit/commit/692b3f57a50745ce12161a8088338ad84af5eda2))
*   **tooltip:** usage of TextLink in content ([#1680](https://github.com/kiwicom/orbit/issues/1680)) ([139a787](https://github.com/kiwicom/orbit/commit/139a787d4c3d7eebf9ff991282d23cbb75428bec))

#### Features

*   **servicelogo:** Add Booking and RentalCars logos ([#1682](https://github.com/kiwicom/orbit/issues/1682)) ([fb94862](https://github.com/kiwicom/orbit/commit/fb94862eaf3e61e305710044981bd40a818806d9))
*   **Tag:** Update visual style ([#1573](https://github.com/kiwicom/orbit/issues/1573)) ([e363406](https://github.com/kiwicom/orbit/commit/e3634060a9848625f9503a6c9d9e38bcbd8f1538))
*   **theme:** Added transitions property ([#1668](https://github.com/kiwicom/orbit/issues/1668)) ([e8f86e6](https://github.com/kiwicom/orbit/commit/e8f86e64e6280e0ceb50b9eda2083df66089e8e7))

## [0.78.0](https://github.com/kiwicom/orbit/compare/0.77.1...0.78.0) (2020-03-12)

#### Bug Fixes

*   **button:** circled not being perfect circle with small children ([#1654](https://github.com/kiwicom/orbit/issues/1654)) ([280905d](https://github.com/kiwicom/orbit/commit/280905dd1a1a03e94d745d8695e2bf8723c59d68))
*   **button:** Fix flow type of the button export ([#1663](https://github.com/kiwicom/orbit/issues/1663)) ([4c07ca0](https://github.com/kiwicom/orbit/commit/4c07ca0adb959425bd09041b244cfb6c57c9b70b))
*   **pictureCard:** Enabling heiight to be smaller than 200 ([#1660](https://github.com/kiwicom/orbit/issues/1660)) ([633fbe5](https://github.com/kiwicom/orbit/commit/633fbe543352785ff8405087033af06642097fe5))
*   **popover:** Border radius on desktop and close button padding ([#1658](https://github.com/kiwicom/orbit/issues/1658)) ([50b2a24](https://github.com/kiwicom/orbit/commit/50b2a24f8bd8fc42c8c21200ffae22f11d295385))
*   **popover:** Opening with onKeyDown event ([#1657](https://github.com/kiwicom/orbit/issues/1657)) ([ea27780](https://github.com/kiwicom/orbit/commit/ea27780a6592a5e0a4ab4b8f3e847cfb65bb89e1))
*   **popover:** RTL calculation ([#1653](https://github.com/kiwicom/orbit/issues/1653)) ([8572fea](https://github.com/kiwicom/orbit/commit/8572fea4939385d08a0b211877c0d1b3790ec57c))

#### Features

*   **dictionary:** add index.js export of all languages ([#1650](https://github.com/kiwicom/orbit/issues/1650)) ([83f5a9d](https://github.com/kiwicom/orbit/commit/83f5a9d6e37950b1bce3a57ac12ef74b444f7f2c))
*   **illustrations:** Add optional alt property ([#1656](https://github.com/kiwicom/orbit/issues/1656)) ([4a60dfd](https://github.com/kiwicom/orbit/commit/4a60dfda0dae50dd6551410c94edb90664cabf00))
*   **modal:** Change title size to title2 on mobile ([5ab25f2](https://github.com/kiwicom/orbit/commit/5ab25f2352e2db73c778953d7bd86bdc5f55662e))

### [0.77.1](https://github.com/kiwicom/orbit/compare/0.77.0...0.77.1) (2020-03-09)

#### Bug Fixes

*   **popover:** position calculations ([#1647](https://github.com/kiwicom/orbit/issues/1647)) ([6c0fcad](https://github.com/kiwicom/orbit/commit/6c0fcad28d0d5abeb49a6a1098fbee17093ad3b2))

## [0.77.0](https://github.com/kiwicom/orbit/compare/0.76.0...0.77.0) (2020-03-06)

## [0.76.0](https://github.com/kiwicom/orbit/compare/0.75.0...0.76.0) (2020-02-25)

## [0.75.0](https://github.com/kiwicom/orbit/compare/0.74.0...0.75.0) (2020-02-19)

## [0.74.0](https://github.com/kiwicom/orbit/compare/0.73.1...0.74.0) (2020-02-18)

#### Bug Fixes

*   **components:** PictureCard href ([#1536](https://github.com/kiwicom/orbit/issues/1536)) ([4866b9e](https://github.com/kiwicom/orbit/commit/4866b9e545ae32b341c822ab520677b6cffe2b1e))

### [0.73.1](https://github.com/kiwicom/orbit/compare/0.73.0...0.73.1) (2020-02-12)

## [0.73.0](https://github.com/kiwicom/orbit/compare/0.72.0...0.73.0) (2020-02-07)

## [0.72.0](https://github.com/kiwicom/orbit/compare/0.71.0...0.72.0) (2020-01-27)

## [0.71.0](https://github.com/kiwicom/orbit/compare/0.70.0...0.71.0) (2020-01-15)

## [0.70.0](https://github.com/kiwicom/orbit/compare/0.69.0...0.70.0) (2019-12-18)

## [0.69.0](https://github.com/kiwicom/orbit/compare/0.68.0...0.69.0) (2019-12-06)

## [0.68.0](https://github.com/kiwicom/orbit/compare/0.67.1...0.68.0) (2019-11-27)

### [0.67.1](https://github.com/kiwicom/orbit/compare/0.67.0...0.67.1) (2019-11-13)

## [0.67.0](https://github.com/kiwicom/orbit/compare/0.66.0...0.67.0) (2019-11-11)

## [0.66.0](https://github.com/kiwicom/orbit/compare/0.65.0...0.66.0) (2019-10-31)

## [0.65.0](https://github.com/kiwicom/orbit/compare/0.64.2...0.65.0) (2019-10-22)

### [0.64.2](https://github.com/kiwicom/orbit/compare/0.64.1...0.64.2) (2019-10-16)

### [0.64.1](https://github.com/kiwicom/orbit/compare/0.64.0...0.64.1) (2019-10-14)

## [0.64.0](https://github.com/kiwicom/orbit/compare/0.63.0...0.64.0) (2019-10-11)

## [0.63.0](https://github.com/kiwicom/orbit/compare/0.62.0...0.63.0) (2019-10-04)

## [0.62.0](https://github.com/kiwicom/orbit/compare/0.61.3...0.62.0) (2019-10-02)

### [0.61.3](https://github.com/kiwicom/orbit/compare/0.61.2...0.61.3) (2019-10-01)

### [0.61.2](https://github.com/kiwicom/orbit/compare/0.61.1...0.61.2) (2019-09-25)

### [0.61.1](https://github.com/kiwicom/orbit/compare/0.61.0...0.61.1) (2019-09-25)

## [0.61.0](https://github.com/kiwicom/orbit/compare/0.60.0...0.61.0) (2019-09-21)

## [0.60.0](https://github.com/kiwicom/orbit/compare/0.59.0...0.60.0) (2019-09-16)

## [0.59.0](https://github.com/kiwicom/orbit/compare/0.58.0...0.59.0) (2019-09-12)

## [0.58.0](https://github.com/kiwicom/orbit/compare/0.57.0...0.58.0) (2019-09-04)

## [0.57.0](https://github.com/kiwicom/orbit/compare/0.56.0...0.57.0) (2019-09-03)

## [0.56.0](https://github.com/kiwicom/orbit/compare/0.55.0...0.56.0) (2019-08-27)

## [0.55.0](https://github.com/kiwicom/orbit/compare/0.54.0...0.55.0) (2019-08-21)

## [0.54.0](https://github.com/kiwicom/orbit/compare/0.53.0...0.54.0) (2019-08-15)

## [0.53.0](https://github.com/kiwicom/orbit/compare/0.52.0...0.53.0) (2019-08-08)

## [0.52.0](https://github.com/kiwicom/orbit/compare/0.51.0...0.52.0) (2019-07-31)

## [0.51.0](https://github.com/kiwicom/orbit/compare/0.50.0...0.51.0) (2019-07-24)

## [0.50.0](https://github.com/kiwicom/orbit/compare/0.49.1...0.50.0) (2019-07-17)

### [0.49.1](https://github.com/kiwicom/orbit/compare/0.49.0...0.49.1) (2019-07-02)

## [0.49.0](https://github.com/kiwicom/orbit/compare/0.48.0...0.49.0) (2019-07-01)

## [0.48.0](https://github.com/kiwicom/orbit/compare/0.47.0...0.48.0) (2019-06-18)

## [0.47.0](https://github.com/kiwicom/orbit/compare/0.46.0...0.47.0) (2019-06-10)

## [0.46.0](https://github.com/kiwicom/orbit/compare/0.45.0...0.46.0) (2019-06-05)

## [0.45.0](https://github.com/kiwicom/orbit/compare/0.44.0...0.45.0) (2019-05-31)

## [0.44.0](https://github.com/kiwicom/orbit/compare/0.43.0...0.44.0) (2019-05-29)

## [0.43.0](https://github.com/kiwicom/orbit/compare/0.42.0...0.43.0) (2019-05-27)

## [0.42.0](https://github.com/kiwicom/orbit/compare/0.41.0...0.42.0) (2019-05-20)

## [0.41.0](https://github.com/kiwicom/orbit/compare/0.40.1...0.41.0) (2019-05-15)

### [0.40.1](https://github.com/kiwicom/orbit/compare/0.40.0...0.40.1) (2019-05-02)

#### Bug Fixes

*   build script to include data dir in compilation ([#1025](https://github.com/kiwicom/orbit/issues/1025)) ([a71ab3d](https://github.com/kiwicom/orbit/commit/a71ab3d48b164a384b051e21b198aa5746bd6314))

## [0.40.0](https://github.com/kiwicom/orbit/compare/0.39.1...0.40.0) (2019-04-30)

### [0.39.1](https://github.com/kiwicom/orbit/compare/0.39.0...0.39.1) (2019-04-23)

## [0.39.0](https://github.com/kiwicom/orbit/compare/0.38.1...0.39.0) (2019-04-17)

### [0.38.1](https://github.com/kiwicom/orbit/compare/0.38.0...0.38.1) (2019-04-05)

## [0.38.0](https://github.com/kiwicom/orbit/compare/0.37.0...0.38.0) (2019-04-04)

## [0.37.0](https://github.com/kiwicom/orbit/compare/0.36.0...0.37.0) (2019-03-27)

## [0.36.0](https://github.com/kiwicom/orbit/compare/0.35.0...0.36.0) (2019-03-22)

## [0.35.0](https://github.com/kiwicom/orbit/compare/0.34.1...0.35.0) (2019-03-15)

### [0.34.1](https://github.com/kiwicom/orbit/compare/0.34.0...0.34.1) (2019-03-11)

## [0.34.0](https://github.com/kiwicom/orbit/compare/0.33.0...0.34.0) (2019-03-08)

## 0.0.0-rc5 (2018-02-28)
