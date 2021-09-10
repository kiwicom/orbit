# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.122.0...@kiwicom/orbit-components@1.0.0) (2021-09-10)


### Code Refactoring

* **Popover:** replace calculate logic with popper.js ([#3046](https://github.com/kiwicom/orbit/issues/3046)) ([9b4852d](https://github.com/kiwicom/orbit/commit/9b4852d531f1a9e25a7c1efc2c3f0faaa122f84b))
* delete deprecated components ([#3084](https://github.com/kiwicom/orbit/issues/3084)) ([ee75f02](https://github.com/kiwicom/orbit/commit/ee75f0203f5c8afbf389d798db677c4e59d88706))


### Features

* error forms ([#2350](https://github.com/kiwicom/orbit/issues/2350)) ([480d565](https://github.com/kiwicom/orbit/commit/480d5652433758cbe7d024073c2a39a9088207ec))
* update colour palette ([#3095](https://github.com/kiwicom/orbit/issues/3095)) ([acddb14](https://github.com/kiwicom/orbit/commit/acddb14bc0e371568fb53fc74977f0ad9617bd80)), closes [#BAC7D5](https://github.com/kiwicom/orbit/issues/BAC7D5) [#697D95](https://github.com/kiwicom/orbit/issues/697D95) [#4F5E71](https://github.com/kiwicom/orbit/issues/4F5E71)


### BREAKING CHANGES

* **Popover:** preferredPosition and preferredAlign are replaced by single prop `placement`.
Which can have one of the following values: "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" "auto" | "auto-start" | "auto-end";

[More info here](https://popper.js.org/docs/v2/constructors/#placement)

Extended by two props:
 `noFlip`:  Turns off automatic flipping of the Popover when there is not enough space
 `allowOverflow`: Allows the Popover to be cut off instead of moving it while scrolling to keep it visible.

* fix(Popover): fixes after review

* feat(Popover): noFlip prop

* feat(Popover): allowOverflow prop
* changes in Ink Palette:
* deletes deprecated components, their usage should be
replaced with better existing or upcoming alternatives.





# [0.122.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.121.0...@kiwicom/orbit-components@0.122.0) (2021-09-09)


### Features

* **Skeleton:** introduce Skeleton component ([#3071](https://github.com/kiwicom/orbit/issues/3071)) ([6a3cf3d](https://github.com/kiwicom/orbit/commit/6a3cf3d6c45945ff1e3a988a675d919da8fc757e))
* **useLockScrolling:** allow specifying additional dependencies ([aac39f0](https://github.com/kiwicom/orbit/commit/aac39f0bcd20e92df1f09e3565b0315a024f95e2))
* add `lockScrolling` theme flag ([abfe92c](https://github.com/kiwicom/orbit/commit/abfe92c2f50299f9d731c66a9ff2b424f53d060d))





# [0.121.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.120.0...@kiwicom/orbit-components@0.121.0) (2021-09-07)


### Bug Fixes

* **Badge:** add border to type white ([#3085](https://github.com/kiwicom/orbit/issues/3085)) ([70264ee](https://github.com/kiwicom/orbit/commit/70264ee7160e55293b63babc28ad6067b127bd59))
* **CountryFlag:** disallow `code` value null ([481b36c](https://github.com/kiwicom/orbit/commit/481b36cbbbd2814f9fd1d6202402003ac4af2ea6))
* **Drawer:** fix iOS bug with scrolling content ([92827ab](https://github.com/kiwicom/orbit/commit/92827abcff5ab7e9938c0e5252cfa3c1e7233ffe))
* **Modal:** fix bug with detached footer ([#3093](https://github.com/kiwicom/orbit/issues/3093)) ([d552b78](https://github.com/kiwicom/orbit/commit/d552b7826bdfd3687ac06a255ec8a0d7c4a06beb))
* add missing TS definitions in ESM build ([90ec51a](https://github.com/kiwicom/orbit/commit/90ec51a5bfdf34b5d844c9e73278ca70a2207217))
* use @kiwicom/orbit-design-tokens's ESM build ([a85a521](https://github.com/kiwicom/orbit/commit/a85a5210dce433f52b08d63c504316c847ff6178))


### Features

* new SSR-friendly useRandomId hook ([#3055](https://github.com/kiwicom/orbit/issues/3055)) ([1220d8f](https://github.com/kiwicom/orbit/commit/1220d8fd285103b191949caaca910a3ab122eeeb))
* **Illustration:** add EVisa image ([#3091](https://github.com/kiwicom/orbit/issues/3091)) ([23d0ecd](https://github.com/kiwicom/orbit/commit/23d0ecd3278061e98d49ff34350082ae596a2983))


### BREAKING CHANGES

* **CountryFlag:** Flow and TypeScript type definitions no longer allow
`null` as value for `CountryFlag`'s `code`.





# [0.120.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.119.0...@kiwicom/orbit-components@0.120.0) (2021-08-19)


### Bug Fixes

* **useLockScrolling:** fix body positioning on iOS ([b780fde](https://github.com/kiwicom/orbit/commit/b780fde9deb8d93073a9a93e445814066aaddc70))


### Features

* **Drawer:** add lockScrolling ([#3072](https://github.com/kiwicom/orbit/issues/3072)) ([bdc4e58](https://github.com/kiwicom/orbit/commit/bdc4e5873ea3b5183243bae6cc929702cfadcbff))
* **InputGroup:** add `disabled` prop ([61a7f01](https://github.com/kiwicom/orbit/commit/61a7f0124eb593b0f3997a3861147b676c576c86))





# [0.119.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.118.1...@kiwicom/orbit-components@0.119.0) (2021-08-10)


### Features

* **Wizard:** add lockScrolling prop ([#3070](https://github.com/kiwicom/orbit/issues/3070)) ([38b6456](https://github.com/kiwicom/orbit/commit/38b6456610c37507278f776dcfe20e43ed2329d9))





## [0.118.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.118.0...@kiwicom/orbit-components@0.118.1) (2021-08-05)


### Bug Fixes

* **Modal:** hide closeContainer with mobileHeader set to false ([#3065](https://github.com/kiwicom/orbit/issues/3065)) ([78c1a55](https://github.com/kiwicom/orbit/commit/78c1a5537a3c028521b72eb91f6a983be9f3201b))





# [0.118.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.117.0...@kiwicom/orbit-components@0.118.0) (2021-08-05)


### Bug Fixes

* **ButtonLink:** use proper design tokens ([#3060](https://github.com/kiwicom/orbit/issues/3060)) ([2e035be](https://github.com/kiwicom/orbit/commit/2e035be52a6423e36ab4723886245a9d96cc9ad2))
* **InputField:** value color in Safari ([#3062](https://github.com/kiwicom/orbit/issues/3062)) ([2c12957](https://github.com/kiwicom/orbit/commit/2c1295770d5c952ccd8c0b12520c6a53b21057c3))


### Features

* **Modal:** add mobileHeader prop ([#3063](https://github.com/kiwicom/orbit/issues/3063)) ([61065ef](https://github.com/kiwicom/orbit/commit/61065efaaacb623f190766268dde10bcc70a8df4))





# [0.117.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.116.0...@kiwicom/orbit-components@0.117.0) (2021-07-22)


### Bug Fixes

* **ChoiceGroup:** use correct box sizing ([68c2303](https://github.com/kiwicom/orbit/commit/68c2303f0357435d9e5dfdb97e48c19a1c6a54cb))
* **InputField:** add aria-required ([7d7f5ef](https://github.com/kiwicom/orbit/commit/7d7f5ef1cff154e88185f204990de5230c75742d))


### Features

* **Text:** allow `justify` value for `align` prop ([#3050](https://github.com/kiwicom/orbit/issues/3050)) ([c7704b2](https://github.com/kiwicom/orbit/commit/c7704b2ee0050d5964572cb4e44b5aa87e060d8b))
* add lockScrolling prop ([#3045](https://github.com/kiwicom/orbit/issues/3045)) ([461139d](https://github.com/kiwicom/orbit/commit/461139df3ace314c04e11d01a7a5e4495a35e97f))
* lock scrolling in components with overlay ([#3036](https://github.com/kiwicom/orbit/issues/3036)) ([b6c87ae](https://github.com/kiwicom/orbit/commit/b6c87aec9e3005fb76752390c9b4f909bc12f087))
* **Grid:** add spaceAfter utility prop ([#3043](https://github.com/kiwicom/orbit/issues/3043)) ([c65ba9a](https://github.com/kiwicom/orbit/commit/c65ba9a86bcadb378c424c447c23694e67de6ac4))
* **InputFile:** add aria-required ([ef47042](https://github.com/kiwicom/orbit/commit/ef470429c5c1748757d8e85bc7f9eca689162a49))
* **TextLink:** add type "white" ([#3000](https://github.com/kiwicom/orbit/issues/3000)) ([6a101f1](https://github.com/kiwicom/orbit/commit/6a101f1a8dd5daae1e3a55315f6b4eab1617eb06))





# [0.116.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.115.0...@kiwicom/orbit-components@0.116.0) (2021-06-24)


### Bug Fixes

* **CarrierLogo:** redirects ([#2972](https://github.com/kiwicom/orbit/issues/2972)) ([59287d9](https://github.com/kiwicom/orbit/commit/59287d9e198701934c099be45278a5f2cb3c8f6e))
* **Wizard:** increase clickable area of steps ([#2988](https://github.com/kiwicom/orbit/issues/2988)) ([1c55aaa](https://github.com/kiwicom/orbit/commit/1c55aaac9723e3acfef274e0e935efffb9247a99))


### Features

* **ChoiceGroup:** increase rendering flexibility ([#2983](https://github.com/kiwicom/orbit/issues/2983)) ([9c2625b](https://github.com/kiwicom/orbit/commit/9c2625b5efd4d8de5bee8fc50492cfaee05ddf2e))





# [0.115.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.114.2...@kiwicom/orbit-components@0.115.0) (2021-05-27)


### Bug Fixes

* **HorizontalScroll:** getSnap ([9823909](https://github.com/kiwicom/orbit/commit/98239092d0be2e23ba8ffab2b4bb0b268bdbb52d))


### Features

* **CarrierLogo:** add kiwicom type fallback ([#2959](https://github.com/kiwicom/orbit/issues/2959)) ([041d8d6](https://github.com/kiwicom/orbit/commit/041d8d6a6d4d8acf6f7cdd78282f132010949cf1))
* **Dialog:** add insidePortal prop ([dbe7785](https://github.com/kiwicom/orbit/commit/dbe7785ae8326663500e92c207143f42f1ad92fd))
* **HorizontalScroll:** add scroll-snap-type ([#2964](https://github.com/kiwicom/orbit/issues/2964)) ([837685d](https://github.com/kiwicom/orbit/commit/837685d29aa200c19f5c3549d12fa756bb7c628b))
* **Illustration:** add GroundTransport404 ([#2966](https://github.com/kiwicom/orbit/issues/2966)) ([24771e2](https://github.com/kiwicom/orbit/commit/24771e2adf737137a4fe85bc62effa8f2c32342e))
* **MobileDialog:** add insidePortal prop ([3b55af6](https://github.com/kiwicom/orbit/commit/3b55af6800f04d29318a9a6f25f635c106a684ab))
* **Modal:** add disableAnimation prop ([306455b](https://github.com/kiwicom/orbit/commit/306455b5c8bf6a303781d0b477c45fd2be76ef12))
* **Popover:** add insidePortal prop ([14d126f](https://github.com/kiwicom/orbit/commit/14d126f808720d0e08c08aea3c1de9a0efc94824))
* **TextLink:** add status types ([#2915](https://github.com/kiwicom/orbit/issues/2915)) ([970edc7](https://github.com/kiwicom/orbit/commit/970edc7fe16bb710754db7020c4ef2e2ab63d72c))
* **Tooltip:** add insidePortal prop ([fa127e8](https://github.com/kiwicom/orbit/commit/fa127e8e55164295bfb22d189153f31170e609ad))
* **TooltipPrimitive:** add insidePortal prop ([4cb5dde](https://github.com/kiwicom/orbit/commit/4cb5ddee0a88872f97b4a00fbb2d47bfe0c6f440))
* introduce BadgeList component ([#2937](https://github.com/kiwicom/orbit/issues/2937)) ([b2b68ec](https://github.com/kiwicom/orbit/commit/b2b68ecc5b0eac97c0c3c628f7da2cc836bb6050))





## [0.114.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.114.1...@kiwicom/orbit-components@0.114.2) (2021-05-17)


### Bug Fixes

* **ButtonLink:** pass size prop to icons ([#2938](https://github.com/kiwicom/orbit/issues/2938)) ([0184785](https://github.com/kiwicom/orbit/commit/01847859090fe9b95e41fd6c3944f3aa701180a8))
* **HorizontalScroll:** remove automatic height calculation for wrapper ([#2936](https://github.com/kiwicom/orbit/issues/2936)) ([0880483](https://github.com/kiwicom/orbit/commit/0880483961e88ccfb1c27c6b9eafe8dd0094b3d5))
* **MobileDialog:** change to dialog role ([9895ac7](https://github.com/kiwicom/orbit/commit/9895ac79fb4405396dcc3937e97fdf3c4e9072a7))
* **popover:** close on overlay ([e2cef68](https://github.com/kiwicom/orbit/commit/e2cef688dd3eecbf15eabafbf70009ac9baee72b))
* pass aria-labelledby for switch labels ([#2935](https://github.com/kiwicom/orbit/issues/2935)) ([1b10e4c](https://github.com/kiwicom/orbit/commit/1b10e4c4e708d768149346c5b941202fd72dc431))


### Reverts

* **Modal:** revert CLS changes ([b1d00b4](https://github.com/kiwicom/orbit/commit/b1d00b4c187d1ed4d25cb3b24a42c84cbe6856d0))





## [0.114.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.114.0...@kiwicom/orbit-components@0.114.1) (2021-05-12)


### Bug Fixes

* **BaggageStepper:** forgotten prop ([#2931](https://github.com/kiwicom/orbit/issues/2931)) ([6797d73](https://github.com/kiwicom/orbit/commit/6797d73f2395b905cfe8ca9f8d7bc47b775f8171))
* **Modal:** reduce Cumulative Layout Shift ([2108956](https://github.com/kiwicom/orbit/commit/21089567a2b25d6e42f432fa44ea40ab21d16785))





# [0.114.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.113.1...@kiwicom/orbit-components@0.114.0) (2021-05-05)


### Bug Fixes

* **Popover:** fix bug with Tooltip inside Popover on mobile ([75d8fa4](https://github.com/kiwicom/orbit/commit/75d8fa41df9afb0d2448ee073a0d2b559d1ae29e))


### Features

* **BaggageStepper:** init ([#2922](https://github.com/kiwicom/orbit/issues/2922)) ([0c9c546](https://github.com/kiwicom/orbit/commit/0c9c5460f41d34300dfa28b6573db7d855a52f79))
* HorizontalScroll component ([#2917](https://github.com/kiwicom/orbit/issues/2917)) ([d5e5929](https://github.com/kiwicom/orbit/commit/d5e59290b6aa6474ef3c5454b427c2a7859f43e1))
* introduce Switch component ([7517675](https://github.com/kiwicom/orbit/commit/7517675712c36073c909c74ef4b334b92cc97fb1))





## [0.113.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.113.0...@kiwicom/orbit-components@0.113.1) (2021-04-28)


### Bug Fixes

* **Button:** pass forgotten size prop to utility functions ([8b97281](https://github.com/kiwicom/orbit/commit/8b972812c9fdd8cd985247b139589babf335b59b))
* **ButtonPrimitive:** remove redundant size property ([#2847](https://github.com/kiwicom/orbit/issues/2847)) ([bec9180](https://github.com/kiwicom/orbit/commit/bec9180e55ac7fe04c08bd51dac37993d432fc3b))
* **examples:** strip flow types from the generated JSONs ([#2913](https://github.com/kiwicom/orbit/issues/2913)) ([49f36fd](https://github.com/kiwicom/orbit/commit/49f36fd815b75894c223bd79acd00456e159c432))
* **SocialButton:** add forgotten size property to getCommomProps ([a950d6d](https://github.com/kiwicom/orbit/commit/a950d6d2b1f60de77fadd9e3cb021a77639306dc))





# [0.113.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.112.0...@kiwicom/orbit-components@0.113.0) (2021-04-22)


### Bug Fixes

* add TypeScript definition of getTokens ([267109a](https://github.com/kiwicom/orbit/commit/267109aa0680f48756bda7c6e87827d500a066ca))
* add typescript export of defaultTheme ([1047b61](https://github.com/kiwicom/orbit/commit/1047b6117fb705943caeaf64b509a285100ad0b4))
* export SeatLegend ([576027f](https://github.com/kiwicom/orbit/commit/576027fcca81b72c0b5a968ecef5e5b034a0cc98))
* update React peer dependency versions ([#2898](https://github.com/kiwicom/orbit/issues/2898)) ([b841f2d](https://github.com/kiwicom/orbit/commit/b841f2d05a96dc023338b527d46910a2d61b2e5f))
* **Breadcrumbs:** missing action in default story ([#2884](https://github.com/kiwicom/orbit/issues/2884)) ([683bd86](https://github.com/kiwicom/orbit/commit/683bd86a37e15fb89368621ae45604842c0f6a6a))
* **docs:** escape pipe in Alert button props table ([f50485f](https://github.com/kiwicom/orbit/commit/f50485f91a29af1460af8dbd429b078c1e8ba7bb))
* **useBoundingRect:** fix TypeScript declaration ([#2875](https://github.com/kiwicom/orbit/issues/2875)) ([371b30d](https://github.com/kiwicom/orbit/commit/371b30dbdff3fe96d1a2b8c2ead88e1f24288f8a))


### Features

* add export of calculateCountOf ([6ac26ff](https://github.com/kiwicom/orbit/commit/6ac26ff591e332e7ea680d9feb845ad264fb9b0e))
* **docs:** update guidance on notification badges ([f5b0da7](https://github.com/kiwicom/orbit/commit/f5b0da7660d3f7b03294bc882667c10273114ee5))


### BREAKING CHANGES

* **useBoundingRect:** In TypeScript `useBoundingRect` now requires a type
parameter based on which HTML element it measures:

```tsx
function App() {
  const [dimensions, ref] = useBoundingRect<HTMLDivElement>();
  return <div ref={ref} />;
}
```





# [0.112.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.111.1...@kiwicom/orbit-components@0.112.0) (2021-04-07)


### Bug Fixes

* add default export for Icon stories ([#2864](https://github.com/kiwicom/orbit/issues/2864)) ([2e9d2c7](https://github.com/kiwicom/orbit/commit/2e9d2c7700c36c78b0c46b36d1cb82104f6659f2))
* **docs:** add exports for types ([3acc31e](https://github.com/kiwicom/orbit/commit/3acc31e379c8089cdf42383e3459bafff8647190))
* **docs:** change null to 0 ([9eca6cd](https://github.com/kiwicom/orbit/commit/9eca6cdab0987dd3b0ccef7f648cca39a2f63bd8))
* **docs:** remove improper token in enum ([4ab6b23](https://github.com/kiwicom/orbit/commit/4ab6b2319597574d6fbfa23c95d305754a9163be))
* **TextLink:** called twice when stopPropagation specified ([#2857](https://github.com/kiwicom/orbit/issues/2857)) ([4fc78dc](https://github.com/kiwicom/orbit/commit/4fc78dca23086fd0f9dadd51164774dcd8a83c70))
* **TypeScript:** fix root mediaQueries export ([32a70a6](https://github.com/kiwicom/orbit/commit/32a70a69de07638cc78fd3961d09bb2184599e8a))


### Features

* **eslint-plugin-orbit:** useRtl rule ([#2833](https://github.com/kiwicom/orbit/issues/2833)) ([ecb3fd6](https://github.com/kiwicom/orbit/commit/ecb3fd6530cf6c9c0a3115d72bd6fb12f45aef90))
* update baggage related icons ([#2851](https://github.com/kiwicom/orbit/issues/2851)) ([fb118c9](https://github.com/kiwicom/orbit/commit/fb118c91406cabc74b5665cd3c8d75a4e77a1566))
* **playground:** examples ([#2808](https://github.com/kiwicom/orbit/issues/2808)) ([6f495cf](https://github.com/kiwicom/orbit/commit/6f495cf1e219720033a19d61a304f3c224c5c3ec))
* export useMediaQuery hook from root ([1048599](https://github.com/kiwicom/orbit/commit/1048599150ed88126f5591fe83a76fb18b72d001))


### BREAKING CHANGES

* Renamed icons BaggageChecked -> BaggageChecked30; BaggagePersonalItem -> BaggagePersonal; BaggagePersonalItemNone -> BaggagePersonalNone

**Added new icons:**

- BaggageChecked10
- BaggageChecked20

**Renamed icons:**

- BaggageChecked -> BaggageChecked30
- BaggagePersonalItem -> BaggagePersonal
- BaggagePersonalItemNone -> BaggagePersonalNone

**Updated icons:**

- PriorityBorading
- BaggageCheckedNone
- BaggageCabin
- BaggageCabinNone





## [0.111.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.111.0...@kiwicom/orbit-components@0.111.1) (2021-03-19)


### Bug Fixes

* **ci:** deploy storybook only, not build ([#2830](https://github.com/kiwicom/orbit/issues/2830)) ([f287d1e](https://github.com/kiwicom/orbit/commit/f287d1ec507fcb5f93d06f74afe1d2e8d973c958))
* **docs:** misnamed prop for Box ([#2825](https://github.com/kiwicom/orbit/issues/2825)) ([4e98bd9](https://github.com/kiwicom/orbit/commit/4e98bd9038f3e30d634a74047308c08467416a31))
* **InputFile:** ref ts type ([#2827](https://github.com/kiwicom/orbit/issues/2827)) ([1341d57](https://github.com/kiwicom/orbit/commit/1341d57ecd5aa63baafd9f95409941d910153141))
* **SkipLink:** missing export ([#2794](https://github.com/kiwicom/orbit/issues/2794)) ([eff2c6d](https://github.com/kiwicom/orbit/commit/eff2c6d0e62fb8f2f151d8935f3e4dbe1879796c))
* **useMediaQuery:** remove listeners on cleanup ([#2822](https://github.com/kiwicom/orbit/issues/2822)) ([eb92419](https://github.com/kiwicom/orbit/commit/eb92419e9d0884c4d6013d1598f0de9b85ebbf2f))
* **Wizard:** remove incorrect React.ReactChildren ([#2829](https://github.com/kiwicom/orbit/issues/2829)) ([3f6b803](https://github.com/kiwicom/orbit/commit/3f6b80396aac9feb9df621dce2ef2ac70fddf616))





# [0.111.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.110.0...@kiwicom/orbit-components@0.111.0) (2021-03-08)


### Bug Fixes

* fix script for fetching translations ([#2817](https://github.com/kiwicom/orbit/issues/2817)) ([df3633e](https://github.com/kiwicom/orbit/commit/df3633e7e39365f834c85b269a168ac3da7ff7b6))
* **Accordion:** missing export ([#2797](https://github.com/kiwicom/orbit/issues/2797)) ([020f2f3](https://github.com/kiwicom/orbit/commit/020f2f3d75b6dc26a5ec9fda717510ef9bd8b1d9))
* **ButtonMobileStore:** missing ts export ([f82f8cd](https://github.com/kiwicom/orbit/commit/f82f8cd61cc460eae6d3e1572a0ccf71ebe8cdd8))
* **CalloutBanner:** illustration type ([#2791](https://github.com/kiwicom/orbit/issues/2791)) ([3b752e3](https://github.com/kiwicom/orbit/commit/3b752e3a8844f80038dee4a655c2928660f3dc86))
* **Radio:** missing tooltip type in d.ts ([4ce4b4e](https://github.com/kiwicom/orbit/commit/4ce4b4eac82db50ab9bbaa04e8b0d5211672ff0b))
* **SocialButton:** missing export ([#2793](https://github.com/kiwicom/orbit/issues/2793)) ([df1f288](https://github.com/kiwicom/orbit/commit/df1f288c62c6eb3d5e28839aa3284680ebc3ad99))
* **SocialButton:** missing ts export ([2806aca](https://github.com/kiwicom/orbit/commit/2806aca878afb9ee68345f4ac75462a6376b2ad7))
* **Timeline:** type property inside d.ts ([#2792](https://github.com/kiwicom/orbit/issues/2792)) ([b07f49c](https://github.com/kiwicom/orbit/commit/b07f49ca5a45a8c9359a2280d4dae33a36892137))
* **validateIncrement:** fix wrong type ([#2796](https://github.com/kiwicom/orbit/issues/2796)) ([bafe8b5](https://github.com/kiwicom/orbit/commit/bafe8b5f2562d65d2305d1e0d0a5bc23ec1b6744))
* missing Desktop and Mobile exports ([033e111](https://github.com/kiwicom/orbit/commit/033e111c93d1df0add95d1a7e321638a25594171))


### Features

* **Tooltip:** add block prop ([#2813](https://github.com/kiwicom/orbit/issues/2813)) ([0f032a8](https://github.com/kiwicom/orbit/commit/0f032a8deae42ae333f8a2c0711069393375db52))





# [0.110.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.109.2...@kiwicom/orbit-components@0.110.0) (2021-03-03)


### Bug Fixes

* **Box:** regression test error ([#2807](https://github.com/kiwicom/orbit/issues/2807)) ([2f2478e](https://github.com/kiwicom/orbit/commit/2f2478e585af02afca3aaa951ea0e0c94519199f))
* **InputStepper:** missing font-family ([#2748](https://github.com/kiwicom/orbit/issues/2748)) ([8ccebe7](https://github.com/kiwicom/orbit/commit/8ccebe76084c85be6a994ba2e7b5d4f18ae22eb9))
* **Seat:** add export for SeatLegend and fix TS type of "type" prop  ([#2788](https://github.com/kiwicom/orbit/issues/2788)) ([9fea5af](https://github.com/kiwicom/orbit/commit/9fea5af6201f01b351011937d4416b5dd4d0ba26))
* **useIntersect:** remove unnecessary SSR check ([0b440e6](https://github.com/kiwicom/orbit/commit/0b440e631c35a9c1dc5599e098d5e97ee2da5fcc))
* **useIntersect:** simplify `ref` type ([573eba0](https://github.com/kiwicom/orbit/commit/573eba08249868c2e8de4a92e04fa9dd63b4fa72))
* **utils:** getDirection ([#2782](https://github.com/kiwicom/orbit/issues/2782)) ([01be059](https://github.com/kiwicom/orbit/commit/01be059cf7b3fbf2445e1741322f331ff6325f54))


### Features

* **Modal:** autofocus ([#2749](https://github.com/kiwicom/orbit/issues/2749)) ([7318569](https://github.com/kiwicom/orbit/commit/7318569da6665f392ccfa88ea9b5fc3336e38072))
* **slide:** added static defaultProps inside class ([e344e61](https://github.com/kiwicom/orbit/commit/e344e612cdedc64e0a8d25ad3f74b91e689b2b34))
* **slide:** added transitionDuration support ([7e5cf6a](https://github.com/kiwicom/orbit/commit/7e5cf6ab85f1d36ad0738090d0ab06ce2e213255))
* **slide:** fixed eslint issues ([d0bd068](https://github.com/kiwicom/orbit/commit/d0bd068f227f149a8e70bc11f9fbebda44f93347))
* **slide:** using defaultProps instead of destruct value ([140f896](https://github.com/kiwicom/orbit/commit/140f896b05c772028093f24c511a1477ef5d47c2))
* **Slide:** added transitionDuration support ([#2751](https://github.com/kiwicom/orbit/issues/2751)) ([e7b5c72](https://github.com/kiwicom/orbit/commit/e7b5c728f0ebb3bf4d032c10bccaa187cb76dd54))





## [0.109.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.109.1...@kiwicom/orbit-components@0.109.2) (2021-02-16)


### Bug Fixes

* **Popover:** readme ([07aecf2](https://github.com/kiwicom/orbit/commit/07aecf20862899762cfd7f37f96fb28d034a98f4))
* **Seat:** active state, spacing ([#2734](https://github.com/kiwicom/orbit/issues/2734)) ([d59187f](https://github.com/kiwicom/orbit/commit/d59187f902fce1f84c15b381c49b35110b729db7))





## [0.109.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.109.0...@kiwicom/orbit-components@0.109.1) (2021-02-08)


### Bug Fixes

* use postinstall script only in development ([05cecc4](https://github.com/kiwicom/orbit/commit/05cecc434b069d32732c0434186d76877c2f0277))





# [0.109.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.108.2...@kiwicom/orbit-components@0.109.0) (2021-02-05)


### Bug Fixes

* **InputTags:** fix cleanup logic ([7d66ff8](https://github.com/kiwicom/orbit/commit/7d66ff8458da274a0f48b30f9099f6430e7aa274))
* **PictureCard:** label semantic ([#2713](https://github.com/kiwicom/orbit/issues/2713)) ([0c454e0](https://github.com/kiwicom/orbit/commit/0c454e07e5c6bdf96a85b8db005268aa741d00be))
* **Seat:** small selected state ([#2715](https://github.com/kiwicom/orbit/issues/2715)) ([8426630](https://github.com/kiwicom/orbit/commit/84266306b655060a8197c6f23e4289ea68b94d45))
* **useIntersect:** do nothing in browsers that don't support IntersectionObserver ([99d3772](https://github.com/kiwicom/orbit/commit/99d3772da1b386fe620d6c8735760aed754f9779))
* **useMediaQuery:** fix Rules of Hooks violation ([6146505](https://github.com/kiwicom/orbit/commit/6146505eead568ad12a8bc7e58ed46cea9096157))


### Features

* **eslint-orbit:** add unique-ids rule ([#2671](https://github.com/kiwicom/orbit/issues/2671)) ([b6a1057](https://github.com/kiwicom/orbit/commit/b6a10570a7fb3f0243fcf96a7f975dce52391fb5))
* **Seat:** new icon sizes, general refactoring ([a86cd07](https://github.com/kiwicom/orbit/commit/a86cd07dc6971f694142d836c5ec36cf10419621))


### BREAKING CHANGES

* **Seat:** separated component for legend, changed icon sizes





## [0.108.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.108.1...@kiwicom/orbit-components@0.108.2) (2021-01-26)


### Bug Fixes

* unescaped readmes ([#2687](https://github.com/kiwicom/orbit/issues/2687)) ([d33b47b](https://github.com/kiwicom/orbit/commit/d33b47b60d265144745e504780dd77836755ec59))
* **Seat:** blueDark change to blueNormal ([#2685](https://github.com/kiwicom/orbit/issues/2685)) ([516e8ef](https://github.com/kiwicom/orbit/commit/516e8ef92ed3a853d718921e167ca84ccd454218))





## [0.108.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.108.0...@kiwicom/orbit-components@0.108.1) (2021-01-25)


### Bug Fixes

* **Seat:** visual fixes ([#2678](https://github.com/kiwicom/orbit/issues/2678)) ([a60c333](https://github.com/kiwicom/orbit/commit/a60c333af361add73569c4456589b570c3c8aac3))





# [0.108.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.107.0...@kiwicom/orbit-components@0.108.0) (2021-01-22)


### Bug Fixes

* **Accordion:** missing onExpand ts ([4a64429](https://github.com/kiwicom/orbit/commit/4a644293f97a415a01e6a05cb55bcc6412d61b26))
* **Card:** missing titleAs in d.ts ([#2666](https://github.com/kiwicom/orbit/issues/2666)) ([0f60daa](https://github.com/kiwicom/orbit/commit/0f60daa418b7efbd69a8e4c9a94f8a30528f920b))
* **IllustrationPrimitive:** allow empty alt ([1c9e3d7](https://github.com/kiwicom/orbit/commit/1c9e3d783ea0957fc447be3342c5b5bcdb196e4d))
* **Tag:** focus only if onClick/onRemove provided ([41a163a](https://github.com/kiwicom/orbit/commit/41a163a764b679e3813cdc1daf217a71f7f278a0))


### Features

* **Tag:** add forwardRef ([4445cbb](https://github.com/kiwicom/orbit/commit/4445cbb37944172d0b859a605a2bfb84de9f2dfa))
* **Tag:** Icon prop removed, changed colors ([4b918c0](https://github.com/kiwicom/orbit/commit/4b918c0bdf2b3077fb63306daf6ffb52cd8165b8))





# [0.107.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.106.0...@kiwicom/orbit-components@0.107.0) (2021-01-13)


### Bug Fixes

* **seat:** randomize id to prevent namespace errors ([114e38f](https://github.com/kiwicom/orbit/commit/114e38f1f4e0e4301d192cf03d81aa127a37f987))


### Features

* deprecate old Seat component ([99001b0](https://github.com/kiwicom/orbit/commit/99001b0c9d7adc5869a21e7aa7978f48c56a7dc5))
* **box:** add minWidth ([e325c19](https://github.com/kiwicom/orbit/commit/e325c1984e64c66f32cb43289ed138fbaf40abb6))
* **CountryFlag:** add "undefined" flag ([#2654](https://github.com/kiwicom/orbit/issues/2654)) ([fa5fe66](https://github.com/kiwicom/orbit/commit/fa5fe665d0250c99161f8c7832fde87d17f50336))





# [0.106.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.105.0...@kiwicom/orbit-components@0.106.0) (2021-01-07)


### Bug Fixes

* **Box:** fix null values ([eacb181](https://github.com/kiwicom/orbit/commit/eacb1815758f79cf417c88d141f7cef71d152eaf))
* **Box:** set padding/marging to 0 if none ([f5eee37](https://github.com/kiwicom/orbit/commit/f5eee37c890134e042a125e30ef980b094d12429))
* **CardSection:** title and icon alignment ([#2618](https://github.com/kiwicom/orbit/issues/2618)) ([3d2b795](https://github.com/kiwicom/orbit/commit/3d2b7952047ae7d29d889d1483e54e4218994708))
* **Modal:** ensure header overlay if title exists ([#2634](https://github.com/kiwicom/orbit/issues/2634)) ([bf2a8e0](https://github.com/kiwicom/orbit/commit/bf2a8e09dc8524d9c1199799eff38def6228b66d))
* **Wizard:** translate close button ([#2630](https://github.com/kiwicom/orbit/issues/2630)) ([25d351b](https://github.com/kiwicom/orbit/commit/25d351b752ba6b76ca69c1170816bb4badcb0343))


### Features

* **popover:** offset ([#2633](https://github.com/kiwicom/orbit/issues/2633)) ([ea71b64](https://github.com/kiwicom/orbit/commit/ea71b6428784be6c779b130c14749c1b14d70266))
* **seat:** new version of seat component ([#2623](https://github.com/kiwicom/orbit/issues/2623)) ([e091345](https://github.com/kiwicom/orbit/commit/e09134523d8960fdfb150c8ed4861607c662d3b0))
* **TableCell:** add normal white-space ([#2637](https://github.com/kiwicom/orbit/issues/2637)) ([4bc34ed](https://github.com/kiwicom/orbit/commit/4bc34edc1cb5247ec06208a9f587b9a3db4b51ed))





# [0.105.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.104.0...@kiwicom/orbit-components@0.105.0) (2020-12-18)


### Bug Fixes

* **Box:** missing box-sizing ([#2616](https://github.com/kiwicom/orbit/issues/2616)) ([51246ca](https://github.com/kiwicom/orbit/commit/51246ca926cfab134098bca8d216b9fb7bbfe662))
* **CardSection:** missing hover ([#2615](https://github.com/kiwicom/orbit/issues/2615)) ([d62d192](https://github.com/kiwicom/orbit/commit/d62d192f673c165e953339fe250667a904019342))


### Features

* **CardSection:** add onClick ([#2614](https://github.com/kiwicom/orbit/issues/2614)) ([074ded0](https://github.com/kiwicom/orbit/commit/074ded07055f2c606aa7b474de514e27fe63b7cd))





# [0.104.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.103.0...@kiwicom/orbit-components@0.104.0) (2020-12-17)


### Bug Fixes

* **Box:** apply `largeMobile` properties ([#2612](https://github.com/kiwicom/orbit/issues/2612)) ([e55c88e](https://github.com/kiwicom/orbit/commit/e55c88ea6d60d81cd492dce3a3a5e9a4e74edb33))
* **Button:** change color of outline on focus ([#2611](https://github.com/kiwicom/orbit/issues/2611)) ([e2b0384](https://github.com/kiwicom/orbit/commit/e2b038451485858a2166a68e0cd44fc37dc989dc))
* **InputFile:** a11y fixes ([be39d80](https://github.com/kiwicom/orbit/commit/be39d803f579d0f3dc607cfc51aeec1a39a232f3))
* **Tag:** add missing aria-label ([26789fb](https://github.com/kiwicom/orbit/commit/26789fb6c3378dff9cec49028f552a3aef16c232))
* **Tile:** missing a11y attributes ([3959338](https://github.com/kiwicom/orbit/commit/3959338be443a409c53c707def932f6dbfa96e93))


### Features

* add widthModalExtraLarge token ([#2592](https://github.com/kiwicom/orbit/issues/2592)) ([5213c49](https://github.com/kiwicom/orbit/commit/5213c498a7fade644d8d85ba821adfb5b25c162e))
* **Sticky:** add data-test ([e01e6d2](https://github.com/kiwicom/orbit/commit/e01e6d22cc86eba6e6bfe908daff52b775b78518))





# [0.103.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.102.0...@kiwicom/orbit-components@0.103.0) (2020-12-10)


### Bug Fixes

* **SkipLink:** sr-only styles, label as aria-label ([eb0d625](https://github.com/kiwicom/orbit/commit/eb0d625bda51daefa34b74a863f32860306dbad5))
* **SmartPassIllustration:** linergradients missing ids restored ([93fd176](https://github.com/kiwicom/orbit/commit/93fd176e46a2862ac9a2d34df3ff2b17fc26f7ba))
* **Wizard:** translate progress label on mobile ([#2576](https://github.com/kiwicom/orbit/issues/2576)) ([cf6fc54](https://github.com/kiwicom/orbit/commit/cf6fc542a1ec0cad60dda133eb29d8f056afc812))


### Features

* **Modal:** extended size ([#2575](https://github.com/kiwicom/orbit/issues/2575)) ([9de69e9](https://github.com/kiwicom/orbit/commit/9de69e9fe36b4c9591d8bb9919fd3e03d71a72fb))


### BREAKING CHANGES

* **Modal:** size prop is changed, added new value
CODEMODE: jscodeshift -t https://raw.githubusercontent.com/kiwicom/orbit/master/packages/orbit-components/transforms/Modal-size.js
<pathToYourCode> --parser=flow|ts





# [0.102.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.101.0...@kiwicom/orbit-components@0.102.0) (2020-12-01)


### Bug Fixes

* **Accordion:** allow any children type in Flow ([#2552](https://github.com/kiwicom/orbit/issues/2552)) ([1f7e37d](https://github.com/kiwicom/orbit/commit/1f7e37d7991e750451329801c5171686e71a9aaf))
* **Popover:** popover bottom position issue ([#2540](https://github.com/kiwicom/orbit/issues/2540)) ([4b251ad](https://github.com/kiwicom/orbit/commit/4b251ad3f5e388aced3bb29a51ff128f015906a7))
* **SmartPassIllustration:** change smartPass api, to reduce bundle size ([#2529](https://github.com/kiwicom/orbit/issues/2529)) ([761d3f3](https://github.com/kiwicom/orbit/commit/761d3f39bd0fb6f5b8ea428410958eb491377ff9))


### Features

* **Textarea:** add required prop ([#2532](https://github.com/kiwicom/orbit/issues/2532)) ([904a78f](https://github.com/kiwicom/orbit/commit/904a78f04b316955f57b84dbb4e240f6067f4dc4))


### BREAKING CHANGES

* **SmartPassIllustration:** API of SmartPassIllustation has changed





# [0.101.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.100.1...@kiwicom/orbit-components@0.101.0) (2020-11-26)


### Bug Fixes

* **Modal:** expose modalBody and modalContent ([500cf6b](https://github.com/kiwicom/orbit/commit/500cf6b9556190fb30be0a3736591fc4238d89b1))


### Features

* **Modal:** add scrollingElementRef prop ([0cf4f7e](https://github.com/kiwicom/orbit/commit/0cf4f7e6e646974a3b8dbaf50507de1a312b43e1))
* **SmartPassIllustration:** added v5 image ([#2519](https://github.com/kiwicom/orbit/issues/2519)) ([f718651](https://github.com/kiwicom/orbit/commit/f7186513257324c9fa79bc118c90e17184beea00))





## [0.100.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.100.0...@kiwicom/orbit-components@0.100.1) (2020-11-24)


### Bug Fixes

* expose getScrollPosition in Modal ([#2528](https://github.com/kiwicom/orbit/issues/2528)) ([ecd5b9f](https://github.com/kiwicom/orbit/commit/ecd5b9f0d556b80519bae735110bb9acb3de3946))





# [0.100.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.99.0...@kiwicom/orbit-components@0.100.0) (2020-11-23)


### Bug Fixes

* **RTL:** fix Flow types of utilities ([#2520](https://github.com/kiwicom/orbit/issues/2520)) ([d696b4c](https://github.com/kiwicom/orbit/commit/d696b4cc59dfeaf35f49d3099c845bb2ab992487)), closes [#2331](https://github.com/kiwicom/orbit/issues/2331)


### Features

* **InputStepper:** added readonly prop ([#2495](https://github.com/kiwicom/orbit/issues/2495)) ([74fee3f](https://github.com/kiwicom/orbit/commit/74fee3f208dcd6f89e66f92f66710a0fa68982f3))





# [0.99.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.98.0...@kiwicom/orbit-components@0.99.0) (2020-11-19)


### Bug Fixes

* **Popover:** a11y issues ([45dbbdf](https://github.com/kiwicom/orbit/commit/45dbbdf094f688252a2a01a325ac823514609781))
* **Timeline:** make subLabel optional ([#2505](https://github.com/kiwicom/orbit/issues/2505)) ([8cb77f0](https://github.com/kiwicom/orbit/commit/8cb77f011a2365ff178be7422827efcb19d0aef2))
* **Tooltip:** only call `preventDefault` on mobile ([#2502](https://github.com/kiwicom/orbit/issues/2502)) ([f73940b](https://github.com/kiwicom/orbit/commit/f73940b5803311fb4b57418a6e384ea2ae7b5a0e)), closes [#2230](https://github.com/kiwicom/orbit/issues/2230)


### Features

* SmartPassIllustration component ([#2504](https://github.com/kiwicom/orbit/issues/2504)) ([4c8ba9c](https://github.com/kiwicom/orbit/commit/4c8ba9c1e3c98a734689ed04801d7d982136ba71))





# [0.98.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.3...@kiwicom/orbit-components@0.98.0) (2020-11-10)


### Bug Fixes

* **Layout:** use the correct tags for columns ([#2487](https://github.com/kiwicom/orbit/issues/2487)) ([f092fa9](https://github.com/kiwicom/orbit/commit/f092fa9e26aeacc74d5bc0b56a488f5ab8355ef3))
* **ListChoice:** disabled items should not get focus ([#2474](https://github.com/kiwicom/orbit/issues/2474)) ([08eb9c4](https://github.com/kiwicom/orbit/commit/08eb9c4a364385b0baaef39f8e4c635989f5cb7e))
* **Modal:** lost focus on user interaction ([#2484](https://github.com/kiwicom/orbit/issues/2484)) ([ef3e4f9](https://github.com/kiwicom/orbit/commit/ef3e4f9bf1a6b61812e42c5c7b16d9df3556678f))


### Features

* **Select:** added readOnly prop ([#2493](https://github.com/kiwicom/orbit/issues/2493)) ([2b06b27](https://github.com/kiwicom/orbit/commit/2b06b276d6165e6f1d0baaf93da1e991cedafc4a))
* **Textarea:** added readOnly prop ([#2494](https://github.com/kiwicom/orbit/issues/2494)) ([d33c396](https://github.com/kiwicom/orbit/commit/d33c396714ba8e9e4931fa31796571c7c69e30c4))





# [0.97.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.3...@kiwicom/orbit-components@0.97.0) (2020-11-10)


### Bug Fixes

* **Accordion:** Accordion sticky footer story ([#2483](https://github.com/kiwicom/orbit/issues/2483)) ([09127f8](https://github.com/kiwicom/orbit/commit/09127f819da1e04f016d3590a78c8c079611bcac))
* **Inline:** add around and between ([#2476](https://github.com/kiwicom/orbit/issues/2476)) ([554e536](https://github.com/kiwicom/orbit/commit/554e536cf64098812f62572b180a43ee6bec660c))


### Features

* **Button:** div behave like button, a11y ([#2426](https://github.com/kiwicom/orbit/issues/2426)) ([93cc601](https://github.com/kiwicom/orbit/commit/93cc6018f7287f8e192241acd0812c3a9106abef))





## [0.96.3](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.2...@kiwicom/orbit-components@0.96.3) (2020-11-09)


### Bug Fixes

* **Modal:** expose setScrollPosition via forwardRef ([#2472](https://github.com/kiwicom/orbit/issues/2472)) ([3f30a63](https://github.com/kiwicom/orbit/commit/3f30a63cfcbf9791fdf6bedc10f7e1909edca5fc))
* **Modal:** fix TypeScript definition for ref ([#2479](https://github.com/kiwicom/orbit/issues/2479)) ([86c5c7e](https://github.com/kiwicom/orbit/commit/86c5c7e55cd44d98501e26784c29f2a67f452ded))





## [0.96.2](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.1...@kiwicom/orbit-components@0.96.2) (2020-11-06)


### Bug Fixes

* **Inline:** add inner wrapper for negative margin ([#2469](https://github.com/kiwicom/orbit/issues/2469)) ([efd7ab2](https://github.com/kiwicom/orbit/commit/efd7ab2d2b1866d2727b3fc290b87754c76307b1))





## [0.96.1](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.96.0...@kiwicom/orbit-components@0.96.1) (2020-11-05)


### Bug Fixes

* **Stack:** change spacing value TS types ([#2468](https://github.com/kiwicom/orbit/issues/2468)) ([f572b4c](https://github.com/kiwicom/orbit/commit/f572b4ce634f9e9b3d4ce29003ceb88f28d4e34e))





# [0.96.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.95.0...@kiwicom/orbit-components@0.96.0) (2020-11-04)


### Bug Fixes

- **InputFile:** forward onFocus event handler ([#2461](https://github.com/kiwicom/orbit/issues/2461)) ([92ad4da](https://github.com/kiwicom/orbit/commit/92ad4da10e4c90b81917083af762a9ae7bf6048f))
- **SkipNavigation:** fix typos in stories ([#2414](https://github.com/kiwicom/orbit/issues/2414)) ([b380a1c](https://github.com/kiwicom/orbit/commit/b380a1cd70649bbea781fb026c659b1ea5902bf6))
- **Stack:** add forgotten interface export ([#2456](https://github.com/kiwicom/orbit/issues/2456)) ([a85d20a](https://github.com/kiwicom/orbit/commit/a85d20aee69b29ac8a5305a77ad9078623569e48))
- **Tooltip:** do not propagate the onClick event on mobile when stopPropagate is set to true ([#2438](https://github.com/kiwicom/orbit/issues/2438)) ([00467c5](https://github.com/kiwicom/orbit/commit/00467c5d3f77e49f2fbccf848c8ae0328c38f8ad))
- remove //flow from \*.d.ts ([5a57884](https://github.com/kiwicom/orbit/commit/5a57884281dc952ad959e53608b3a9dee8239e85))
- **CountryFlag** stop exporting `getCountryProps` ([#2436](https://github.com/kiwicom/orbit/pull/2436)) ([e001aabe](https://github.com/kiwicom/orbit/commit/e001aabea64b132977ba534ee54eb059794a68a4))
- **ButtonPrimitive** correctly forward `ref` ([#2418](https://github.com/kiwicom/orbit/pull/2418)) ([cf4c4f33](https://github.com/kiwicom/orbit/commit/cf4c4f33fc41fa7af80d2861014ea653dc44cd89))


### Features

* introduce Box component ([#2242](https://github.com/kiwicom/orbit/issues/2242)) ([226bec7](https://github.com/kiwicom/orbit/commit/226bec7f95143474df073ff0f6efe89d5a3f7a81))
* introduce Inline component ([#2255](https://github.com/kiwicom/orbit/issues/2255)) ([ef00500](https://github.com/kiwicom/orbit/commit/ef005000b522d28b842e3c7651cac31540d1debe))
* **AlertButton:** set small as default size for alert button ([#2391](https://github.com/kiwicom/orbit/issues/2391)) ([1a6d0be](https://github.com/kiwicom/orbit/commit/1a6d0bea34771c0b08ac196946b606ad23dc662b))
* **Stack:** change spacing value names ([#2457](https://github.com/kiwicom/orbit/issues/2457)) ([6a9363b](https://github.com/kiwicom/orbit/commit/6a9363bab5c39632e1c245832014a3375b64d3fb)), closes [#2451](https://github.com/kiwicom/orbit/issues/2451)


### BREAKING CHANGES

* **Stack:** Renaming spacing values of `Stack` component and `LinkList` component – that was using Stack internally.

Also dropped support of different spacings between mobile and desktop version. It no longer make sense from design point of view.
* **AlertButton:** Removed size property from AlertButton since only the small size should be used and from now, it's the default value. No actions should be necessary. If you used different than small size, just remove the usage of the property.
Co-authored-by: Luděk Vepřek <weprous@gmail.com>





# [0.95.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.94.0...@kiwicom/orbit-components@0.95.0) (2020-10-23)

### Bug Fixes

- **Timeline:** IE fixes ([#2370](https://github.com/kiwicom/orbit/issues/2370)) ([e2d1953](https://github.com/kiwicom/orbit/commit/e2d1953af1a339f42ead0ed4dbe716fc52d52d62))
- **Tooltip:** missing MobileDialog data-test ([#2382](https://github.com/kiwicom/orbit/issues/2382)) ([00bf878](https://github.com/kiwicom/orbit/commit/00bf878821ca59de024eb6ec0886f8e7b7b03000))

### Features

- **Eslint:** add rules for enforcing readOnly types on TS/Flow ([#2331](https://github.com/kiwicom/orbit/issues/2331)) ([26d13b5](https://github.com/kiwicom/orbit/commit/26d13b52ce62da4f41f48237a469c84c7e24f11b))
- **ListChoice:** add disabled boolean property ([#2355](https://github.com/kiwicom/orbit/issues/2355)) ([4f135e5](https://github.com/kiwicom/orbit/commit/4f135e5b7bd07202dd507acad5375619fee1aa0a))
- **Loki:** skip code blocks ([#2389](https://github.com/kiwicom/orbit/issues/2389)) ([9d4c7d1](https://github.com/kiwicom/orbit/commit/9d4c7d1af63735d652440cf0c9003e834e4b4fc5)), closes [#2346](https://github.com/kiwicom/orbit/issues/2346)
- **orbit:** transitions defaults to on ([#2372](https://github.com/kiwicom/orbit/issues/2372)) ([d2338e3](https://github.com/kiwicom/orbit/commit/d2338e385f04d262de4fd82fe736eb5a12a6ffbe))
- **TextLink:** add standAlone, noUnderline & iconRight, rename icon to iconLeft ([#2373](https://github.com/kiwicom/orbit/pull/2373)) ([76959c86](https://github.com/kiwicom/orbit/commit/76959c865fbb942bfafd9b67b4e2cc45897ab67a))
  - for renaming `icon` to `iconRight` there's a codemod available, see https://github.com/kiwicom/orbit/pull/2380#issuecomment-713441576

# [0.94.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.93.0...@kiwicom/orbit-components@0.94.0) (2020-10-19)

### Bug Fixes

- **TextLink:** ariaCurrent should in optional in TS definition ([#2365](https://github.com/kiwicom/orbit/issues/2365)) ([09857f7](https://github.com/kiwicom/orbit/commit/09857f7d9b64fc791b2371a2a43b3a709484be2f))

### Features

- **Grid:** add width property ([#2356](https://github.com/kiwicom/orbit/issues/2356)) ([ee8943e](https://github.com/kiwicom/orbit/commit/ee8943e4d59d73fa9d95573fffe8df4ece04ede7))

# [0.93.0](https://github.com/kiwicom/orbit/compare/@kiwicom/orbit-components@0.92.0...@kiwicom/orbit-components@0.93.0) (2020-10-16)

### Bug Fixes

- add padding to InputField text suffix ([#2338](https://github.com/kiwicom/orbit/issues/2338)) ([6b77021](https://github.com/kiwicom/orbit/commit/6b7702161fd7b052c3a2a4dfe636cd6eb759a271))
- **Breadcrumbs:** add check for absence of props on mobile ([#2259](https://github.com/kiwicom/orbit/issues/2259)) ([7bd4ab3](https://github.com/kiwicom/orbit/commit/7bd4ab3cc74b7c42a6d3817d6712865709a7e1bd))
- **Breadcrumbs:** spacing from 8 to 4 ([#2311](https://github.com/kiwicom/orbit/issues/2311)) ([b51bd21](https://github.com/kiwicom/orbit/commit/b51bd21926a22393ab270c0de5b593299760a94a))
- **ButtonPrimitive:** align text to right in RTL ([f26c45e](https://github.com/kiwicom/orbit/commit/f26c45e86f1f19c3c035f9eccae7644d23c27536))
- **Docs:** primitives default ([dd91c4f](https://github.com/kiwicom/orbit/commit/dd91c4f254bb8c3240972d0708324d5ff2d624d8))
- **Hide:** span to div ([#2277](https://github.com/kiwicom/orbit/issues/2277)) ([3bcc1bb](https://github.com/kiwicom/orbit/commit/3bcc1bbc82a0b0fe75610cc110c7c07983d6b664))
- **ModalSection:** margin-top ([#2340](https://github.com/kiwicom/orbit/issues/2340)) ([4a7def0](https://github.com/kiwicom/orbit/commit/4a7def0168cacbe1b943a55f09ec5bccc8644ff3))
- **Slide:** initialize max-height to work SSR ([#2339](https://github.com/kiwicom/orbit/issues/2339)) ([ff7dce8](https://github.com/kiwicom/orbit/commit/ff7dce8185d198ae847a3330287ab75dc5837f2b))
- fix InputGroup/LayoutColumn TS typing ([#2326](https://github.com/kiwicom/orbit/issues/2326)) ([de52968](https://github.com/kiwicom/orbit/commit/de5296870ec89ba1c3c17fa7fb4a936171ebced8))
- move collapsable aria labels to the focusable button ([#2319](https://github.com/kiwicom/orbit/issues/2319)) ([ad8708b](https://github.com/kiwicom/orbit/commit/ad8708bfd32af8966ec505032b7e703944b75b1a))
- **Tile:** fix newWindow icon on external ([#2264](https://github.com/kiwicom/orbit/issues/2264)) ([4ea9639](https://github.com/kiwicom/orbit/commit/4ea9639fbd1ea693a9f315a2c0ee00d2f872ced5))

### Features

- **Accordion:** added Accordion component ([#2280](https://github.com/kiwicom/orbit/issues/2280)) ([9d24499](https://github.com/kiwicom/orbit/commit/9d244990ecc3e1c39ff60fc6caa5c5e4c3edda5a))
- add Wizard component ([99229b1](https://github.com/kiwicom/orbit/commit/99229b1586acbf9ed093fa277a63c7333f73ecf5))
- **ButtonPrimitive:** add support for aria-current ([d26067b](https://github.com/kiwicom/orbit/commit/d26067b648e23402fbfefdd9110b3cde0671ed0d))
- **Illustration:** added image to images.kiwi ([#2312](https://github.com/kiwicom/orbit/issues/2312)) ([6652782](https://github.com/kiwicom/orbit/commit/66527820fd4529b3f58a2be20387a175befafddd))
- **InputField:** adding a autofocus attribute ([#2236](https://github.com/kiwicom/orbit/issues/2236)) ([3ebec2e](https://github.com/kiwicom/orbit/commit/3ebec2ec954aaf7941282e71b921f4fd954562c0))
- **Modal:** add prop to remove the close button ([d96f46d](https://github.com/kiwicom/orbit/commit/d96f46d9b4fced03cd8677bb8eb5a4a72c235ea9))
- **TextLink:** add support for aria-current ([9e0b3e2](https://github.com/kiwicom/orbit/commit/9e0b3e2b6fb4129931da3a8ece0796e8a07d0b12))
- **Timeline:** init component ([#2287](https://github.com/kiwicom/orbit/issues/2287)) ([9447edf](https://github.com/kiwicom/orbit/commit/9447edf6f2cdcfb10a72da133b9aeb2b18a3a928))
- **Tooltip:** refactoring Tooltip into 2 separate components ([#2230](https://github.com/kiwicom/orbit/issues/2230)) ([df3b3be](https://github.com/kiwicom/orbit/commit/df3b3be122c92b4d0c29c6d72171cda866bdb471))
- add an agnostic entry point for icons ([#2237](https://github.com/kiwicom/orbit/issues/2237)) ([597d1ec](https://github.com/kiwicom/orbit/commit/597d1ecefd543a79936af9a658be6b401c934a9a))

# 0.92.0 (2020-09-09)

### Bug Fixes

- **Layout:** width of Card on mobile ([#2181](https://github.com/kiwicom/orbit/issues/2181)) ([8daca18](https://github.com/kiwicom/orbit/commit/8daca18b382e04873d781f457c1294aae353134e))
- updating TypeScript definitions to match Flow ([#2202](https://github.com/kiwicom/orbit/issues/2202)) ([d476c2f](https://github.com/kiwicom/orbit/commit/d476c2f95bb260b72611bfb19a55c294fc72478d))
- **Docs:** internal github links ([#2182](https://github.com/kiwicom/orbit/issues/2182)) ([da12261](https://github.com/kiwicom/orbit/commit/da1226162b0cd3fee7c31f6ab8da97cf4b642feb))
- **Table:** updating default align and removing unnecessary vertical-align options ([#2204](https://github.com/kiwicom/orbit/issues/2204)) ([0bfe9ae](https://github.com/kiwicom/orbit/commit/0bfe9ae0da094586a2818fb733ee5219802099df))
- **Tooltip:** enable event bubbling for disabled children ([#2201](https://github.com/kiwicom/orbit/issues/2201)) ([5f26d88](https://github.com/kiwicom/orbit/commit/5f26d88d65ca1fc20b1cd2badf3bfd9fc03c2ede))
- update docs and icons link for monorepo ([#2200](https://github.com/kiwicom/orbit/issues/2200)) ([27f4974](https://github.com/kiwicom/orbit/commit/27f49746c12a1adeb2721f9c31b323b074e98aea))

### Features

- **Hooks:** useIntersect ([#2091](https://github.com/kiwicom/orbit/issues/2091)) ([dd65d65](https://github.com/kiwicom/orbit/commit/dd65d65d55e6b90e47765160fd610fdd8441e3f0))
- **Icons:** add double chevron icons ([#2190](https://github.com/kiwicom/orbit/issues/2190)) ([f0ce1f9](https://github.com/kiwicom/orbit/commit/f0ce1f96c918d3859590752f305a9e59497b1094))

### Reverts

- **Layout:** width of Card on mobile ([#2228](https://github.com/kiwicom/orbit/issues/2228)) ([09a5429](https://github.com/kiwicom/orbit/commit/09a5429138d2f922b54d45e573f07f85181bd141))

## [0.90.1](https://github.com/kiwicom/orbit/compare/0.90.0...0.90.1) (2020-08-06)

### Bug Fixes

- **Pricingtable:** rendering of wrapped mobile child ([#2094](https://github.com/kiwicom/orbit/issues/2094)) ([5713e76](https://github.com/kiwicom/orbit/commit/5713e76aadb4f8fd59af61edb2f84099d0843b75))
- popover memory leak ([#2095](https://github.com/kiwicom/orbit/issues/2095)) ([9a9a890](https://github.com/kiwicom/orbit/commit/9a9a89023130e3d111618dbb03f9f5697adb0b7f))
- **types:** adjust Breadcrumbs, Tile, Button type declarations and exports ([#2096](https://github.com/kiwicom/orbit/issues/2096)) ([b6cdc68](https://github.com/kiwicom/orbit/commit/b6cdc68ffac754dc1c4ca162aaec2cf40dacde11))
- **types:** adjust typescript types for heading and textarea ([#2093](https://github.com/kiwicom/orbit/issues/2093)) ([0fcd753](https://github.com/kiwicom/orbit/commit/0fcd753f22e5067cdc42004f6c4feef94a559d97))

# [0.90.0](https://github.com/kiwicom/orbit/compare/0.89.0...0.90.0) (2020-08-05)

- fix!(Popover): actions on mobile are no longer hidden (#2040) ([1a71008](https://github.com/kiwicom/orbit/commit/1a7100832a1dda020f09ec4ef6dfd1a18d7032bd)), closes [#2040](https://github.com/kiwicom/orbit/issues/2040)
- feat!(PricingTable): adding option to display radio buttons on desktop (#2076) ([8d1fee4](https://github.com/kiwicom/orbit/commit/8d1fee4041293e12f4609908d38d62bc0e85473d)), closes [#2076](https://github.com/kiwicom/orbit/issues/2076)

### Bug Fixes

- **IllustrationPrimitive:** defaulting flex shrink to false ([#2036](https://github.com/kiwicom/orbit/issues/2036)) ([0a867f1](https://github.com/kiwicom/orbit/commit/0a867f16794535d4d9caa041ca7b1a5ac3730ac0))
- **InputStepper, Stepper:** callbacks triggered when disabled ([#2050](https://github.com/kiwicom/orbit/issues/2050)) ([81ed35b](https://github.com/kiwicom/orbit/commit/81ed35be583686c64d7fd7ae7a8531a58833a853))
- **Layout:** edge to edge behavior of deprecated Card ([#2049](https://github.com/kiwicom/orbit/issues/2049)) ([637f677](https://github.com/kiwicom/orbit/commit/637f677147c2a1423eb5201bf39ebefed7cfe953))
- **ListChoice:** set role to checkbox when selectable is true ([#2062](https://github.com/kiwicom/orbit/issues/2062)) ([70d1625](https://github.com/kiwicom/orbit/commit/70d1625627953520f32d945996096ef93008876b))
- **Rtl:** flow definition of destructured assigment ([#2077](https://github.com/kiwicom/orbit/issues/2077)) ([6dd89e2](https://github.com/kiwicom/orbit/commit/6dd89e23e824decd81b8cb442d7bf2f37aa752d0))
- **Typescript:** updating definitions ([#2083](https://github.com/kiwicom/orbit/issues/2083)) ([b1fc89f](https://github.com/kiwicom/orbit/commit/b1fc89fcbb5f2cfe4aefc24436a7d93a95f8887b))

### Features

- **Breadcrumbs:** add backHref prop ([#2048](https://github.com/kiwicom/orbit/issues/2048)) ([58e0493](https://github.com/kiwicom/orbit/commit/58e049340436a75d8f058503b99eb46e40c9a950))
- **ButtonMobileStore:** adding light variants ([#2059](https://github.com/kiwicom/orbit/issues/2059)) ([d534554](https://github.com/kiwicom/orbit/commit/d534554a5ad335bcce9448c854256b2027f5cb65))
- **Modal:** adding extraSmall size option ([#2078](https://github.com/kiwicom/orbit/issues/2078)) ([17fa9ae](https://github.com/kiwicom/orbit/commit/17fa9ae6bf716a5021989a628cfcbfbb07e59930))
- **SocialButton:** adding twitter type ([#2057](https://github.com/kiwicom/orbit/issues/2057)) ([cb1c97d](https://github.com/kiwicom/orbit/commit/cb1c97dca7b58b56fe9503e791d62ad00cfb9fbc))

### BREAKING CHANGES

- adding a padding-top to Actions causing it to potentially collide with some wrappers with padding which might be in place
- activeElement no longer passes active to children

# [0.89.0](https://github.com/kiwicom/orbit/compare/0.88.0...0.89.0) (2020-07-17)

### Bug Fixes

- **Breadcrumbs:** unification of style from figma ([#2032](https://github.com/kiwicom/orbit/issues/2032)) ([8c8868d](https://github.com/kiwicom/orbit/commit/8c8868db821e0f9a401d0b4d4a4d9fea964461f8))
- extend type of tabIndex to allow numbers ([#2029](https://github.com/kiwicom/orbit/issues/2029)) ([96c1a7b](https://github.com/kiwicom/orbit/commit/96c1a7b6f906af5d6e231eb02fdda1b25a500979))
- **InputStepper:** onChange is triggered when disabled ([#2024](https://github.com/kiwicom/orbit/issues/2024)) ([387806c](https://github.com/kiwicom/orbit/commit/387806c63e5da13657b995389c42f81557492a0a))
- **Layout:** inner usage of Card – edge to edge behavior ([#2025](https://github.com/kiwicom/orbit/issues/2025)) ([3d475f3](https://github.com/kiwicom/orbit/commit/3d475f3d986c12286ce264f7d2f7ee7121858d4a))

### Features

- **Buttons:** adding rel attribute ([#2028](https://github.com/kiwicom/orbit/issues/2028)) ([df8507e](https://github.com/kiwicom/orbit/commit/df8507e35abab58f71890ca4c77103cd70c03d59))

# [0.88.0](https://github.com/kiwicom/orbit/compare/0.87.2...0.88.0) (2020-06-30)

### Bug Fixes

- **Breadcrumbs:** unnecessary optional event ([#1959](https://github.com/kiwicom/orbit/issues/1959)) ([d4034a7](https://github.com/kiwicom/orbit/commit/d4034a78b4f9df76d1fa2b2fafd3f6cc9e672d6f))
- **Select:** customValueText interpolation ([#1957](https://github.com/kiwicom/orbit/issues/1957)) ([f528d0c](https://github.com/kiwicom/orbit/commit/f528d0c171dc8aaf1f1e6a66ebefdb4996e096d2))
- **SocialButton:** inner content align ([#1983](https://github.com/kiwicom/orbit/issues/1983)) ([2b57e3a](https://github.com/kiwicom/orbit/commit/2b57e3a205bfa70d5946a236c45d60da93745991))
- **UseMediaQuery:** remove unnecessary debounce ([#1982](https://github.com/kiwicom/orbit/issues/1982)) ([bc73651](https://github.com/kiwicom/orbit/commit/bc73651e624574f36c5582b9dc8b42024aa1e1ed))

## [0.87.2](https://github.com/kiwicom/orbit/compare/0.87.1...0.87.2) (2020-06-16)

### Bug Fixes

- **ButtonPrimitive:** fallback to text-align ([#1946](https://github.com/kiwicom/orbit/issues/1946)) ([bd7f59f](https://github.com/kiwicom/orbit/commit/bd7f59f870aae6a005f170e4332a98e2272d46dd))
- **Portal:** state init on SSR ([#1954](https://github.com/kiwicom/orbit/issues/1954)) ([1f43f7a](https://github.com/kiwicom/orbit/commit/1f43f7abd1493cf7592e3d0c9a69a04570dec1a4))
- tests folder names ([#1940](https://github.com/kiwicom/orbit/issues/1940)) ([9bd091c](https://github.com/kiwicom/orbit/commit/9bd091c5b5c93f930fd1879e52e45d5eed361287))

## [0.87.1](https://github.com/kiwicom/orbit/compare/0.87.0...0.87.1) (2020-06-12)

### Bug Fixes

- **Breadcrumbs:** add mobile back button onClick ([#1944](https://github.com/kiwicom/orbit/issues/1944)) ([2bb09e0](https://github.com/kiwicom/orbit/commit/2bb09e0921ba2d73daf4eb113b24242ee0434dde))

# [0.87.0](https://github.com/kiwicom/orbit/compare/0.86.0...0.87.0) (2020-06-11)

### Bug Fixes

- **ButtonGroup:** mobile border radius ([#1934](https://github.com/kiwicom/orbit/issues/1934)) ([08316d1](https://github.com/kiwicom/orbit/commit/08316d18ceaea05e627649e351d4112d358383c5))
- **Portal:** usage with Tooltip ([#1935](https://github.com/kiwicom/orbit/issues/1935)) ([67e88d6](https://github.com/kiwicom/orbit/commit/67e88d67a1fefd3605646c7a1b164d0024864d3c))
- **Tag:** onRemove now shows close button ([#1931](https://github.com/kiwicom/orbit/issues/1931)) ([0156b7f](https://github.com/kiwicom/orbit/commit/0156b7f9ec22ccdd41c7fe19fd313418aa2a36ee))

### Features

- **ButtonLink:** inline type and compact property, remove transparent ([#1912](https://github.com/kiwicom/orbit/issues/1912)) ([8e2f128](https://github.com/kiwicom/orbit/commit/8e2f1286d8ef2f90330e6960af399a583d993bc1))
- **ButtonPrimitive:** adding responsive visual style behaviour ([#1911](https://github.com/kiwicom/orbit/issues/1911)) ([06a8622](https://github.com/kiwicom/orbit/commit/06a86224c00a2c2594e2ffd433b10878e25b7c9a))
- **Dialog:** change spacing between title and description ([#1922](https://github.com/kiwicom/orbit/issues/1922)) ([7718db7](https://github.com/kiwicom/orbit/commit/7718db7552ae2c6ca84f63f4bb8bfd9c9c18773c))
- **FormElements:** adding mobile border radius ([#1915](https://github.com/kiwicom/orbit/issues/1915)) ([3a3c227](https://github.com/kiwicom/orbit/commit/3a3c22782edcadb6447b38ac7d6dfe037ad83292))
- **General:** adding display name to react contexts ([#1936](https://github.com/kiwicom/orbit/issues/1936)) ([c1a0da4](https://github.com/kiwicom/orbit/commit/c1a0da4fe7e985732ea17c7bdec6d7666afc1603))
- **MediaQuery:** adding prefersReducedMotion ([#1921](https://github.com/kiwicom/orbit/issues/1921)) ([dd807cb](https://github.com/kiwicom/orbit/commit/dd807cbfb6dd47a3fce4a6c630a07dbe892be149))
- **Portal:** refactor to hooks ([#1923](https://github.com/kiwicom/orbit/issues/1923)) ([04ad886](https://github.com/kiwicom/orbit/commit/04ad88683e7e7c3128e073bd3b3b6806cb04e1e5))
- **Stack:** add baseline to align options ([#1930](https://github.com/kiwicom/orbit/issues/1930)) ([eecc296](https://github.com/kiwicom/orbit/commit/eecc296ca8b425f17527fc9a11da04332db7cbe6))
- **TextLink:** change focus state to non underlined text ([#1914](https://github.com/kiwicom/orbit/issues/1914)) ([e2bb67d](https://github.com/kiwicom/orbit/commit/e2bb67dda64477347168a5629b921811ab62ad71))

# [0.86.0](https://github.com/kiwicom/orbit/compare/0.85.2...0.86.0) (2020-06-01)

### Bug Fixes

- **InputStepper:** removing native arrows on Firefox ([#1889](https://github.com/kiwicom/orbit/issues/1889)) ([2c61e3b](https://github.com/kiwicom/orbit/commit/2c61e3b786e2b6a1ec8d363789d19ab634e96e36))
- **MediaQuery:** spread type ([#1899](https://github.com/kiwicom/orbit/issues/1899)) ([c78ab3f](https://github.com/kiwicom/orbit/commit/c78ab3f54701443c436b88e297e512672969a8f4))

### Features

- **InputField:** adding onSelect, onMouseUp, onMouseDown ([#1883](https://github.com/kiwicom/orbit/issues/1883)) ([8ce9435](https://github.com/kiwicom/orbit/commit/8ce9435eb07b8a898fd56f957701f78194029a8f))
- **PictureCard:** Add src attribute ([#1544](https://github.com/kiwicom/orbit/issues/1544)) ([5a17c0b](https://github.com/kiwicom/orbit/commit/5a17c0b6c476ad5cbae1e31bee4037b7fc8efd86))
- **Table:** adding striped on Table. Scope and as on TableCell ([#1881](https://github.com/kiwicom/orbit/issues/1881)) ([5d49cfd](https://github.com/kiwicom/orbit/commit/5d49cfd6786a919f10db34b33f112d7d67482259))
- **TableCell:** adding white-space and vertical align options ([#1910](https://github.com/kiwicom/orbit/issues/1910)) ([5380443](https://github.com/kiwicom/orbit/commit/538044350cbb099b4b297964f3577f18a805dc8c))

## [0.85.2](https://github.com/kiwicom/orbit/compare/0.85.1...0.85.2) (2020-05-21)

### Bug Fixes

- defaultTheme global declaration and references of themeType ([#1876](https://github.com/kiwicom/orbit/issues/1876)) ([6e1e60e](https://github.com/kiwicom/orbit/commit/6e1e60e7cca922139221d3cda81930710cc397da))

## [0.85.1](https://github.com/kiwicom/orbit/compare/0.85.0...0.85.1) (2020-05-20)

### Bug Fixes

- **InputStepper:** improve TypeScript definition ([#1865](https://github.com/kiwicom/orbit/issues/1865)) ([86915f3](https://github.com/kiwicom/orbit/commit/86915f30f7959479997f93d038a03c49eb565879))
- **Typescript:** defaultTheme, missing instance ([#1873](https://github.com/kiwicom/orbit/issues/1873)) ([d7e62cf](https://github.com/kiwicom/orbit/commit/d7e62cf8b7b4ab4ffaab0350ad718d993aa9166b))

# [0.85.0](https://github.com/kiwicom/orbit/compare/0.84.2...0.85.0) (2020-05-15)

### Bug Fixes

- **AlertButton:** missing export in entry file ([#1848](https://github.com/kiwicom/orbit/issues/1848)) ([1e4336a](https://github.com/kiwicom/orbit/commit/1e4336a7155e031bf7c8bca1f47ecaba6f26b7b3))
- **Breadcrumbs:** render in RTL ([#1836](https://github.com/kiwicom/orbit/issues/1836)) ([a427b70](https://github.com/kiwicom/orbit/commit/a427b7003d15e33563c0fc25eef92c2d1163b0c2))
- **ButtonPrimitive:** interactive states when disabled ([#1846](https://github.com/kiwicom/orbit/issues/1846)) ([5de0ad3](https://github.com/kiwicom/orbit/commit/5de0ad36ba3549af40da1a0bb01a36ddb55d84b0))
- **FormElements:** adding aria polite to errors ([#1840](https://github.com/kiwicom/orbit/issues/1840)) ([14196cc](https://github.com/kiwicom/orbit/commit/14196cc2e7fb06cd402333cc3c8ea1564641d425))
- **ModalHeader:** illustration type to Node ([#1829](https://github.com/kiwicom/orbit/issues/1829)) ([8775caa](https://github.com/kiwicom/orbit/commit/8775caa9200a8f6e29f858055c15d9070f284ea3))
- **Table:** min-height on table ([#1823](https://github.com/kiwicom/orbit/issues/1823)) ([c116c27](https://github.com/kiwicom/orbit/commit/c116c279e22707f8c24e39d325a6748cc2c78ab2))

### Features

- **Icons:** adding colorPicker icon ([#1841](https://github.com/kiwicom/orbit/issues/1841)) ([b79fbe6](https://github.com/kiwicom/orbit/commit/b79fbe61582468c9fca7784b3cef296131442cd3))
- **Modal:** illustration size ([#1830](https://github.com/kiwicom/orbit/issues/1830)) ([3bf4fac](https://github.com/kiwicom/orbit/commit/3bf4fac8bb95b2a60918106bf5c001bd8c193aae))
- **Pagination:** not hiding buttons at the end/start of the list ([#1843](https://github.com/kiwicom/orbit/issues/1843)) ([67e867a](https://github.com/kiwicom/orbit/commit/67e867ac86604073907328c8881f234c1b512bee))
- **ServiceLogo:** new Maestro and MasterCard short variants ([#1847](https://github.com/kiwicom/orbit/issues/1847)) ([a4fae80](https://github.com/kiwicom/orbit/commit/a4fae803ac093b37694b9941bf81fe7cbde6d797))
- **TypeScript:** adding type definitions ([#1504](https://github.com/kiwicom/orbit/issues/1504)) ([a2ea0ec](https://github.com/kiwicom/orbit/commit/a2ea0ecc3080afae5b2e38f611e98137c5bd91dd))

## [0.84.2](https://github.com/kiwicom/orbit/compare/0.84.1...0.84.2) (2020-04-29)

### Bug Fixes

- **ButtonPrimitive:** disabled render to DOM element ([#1813](https://github.com/kiwicom/orbit/issues/1813)) ([0147810](https://github.com/kiwicom/orbit/commit/014781087bc609c757f5acd1729601c9b612ce2e))

## [0.84.1](https://github.com/kiwicom/orbit/compare/0.84.0...0.84.1) (2020-04-28)

### Bug Fixes

- **Button:** missing white type in flow definition ([#1806](https://github.com/kiwicom/orbit/issues/1806)) ([153b158](https://github.com/kiwicom/orbit/commit/153b158d0cd86dc639a5fcace3d0db288e0563e1))

# [0.84.0](https://github.com/kiwicom/orbit/compare/0.83.0...0.84.0) (2020-04-27)

### Features

- adding extraSmall size to illustrations ([#1800](https://github.com/kiwicom/orbit/issues/1800)) ([7987772](https://github.com/kiwicom/orbit/commit/7987772d37d324ef86978b0c8e3e6a476a676a23))
- introduce useBoundingRect hook ([#1771](https://github.com/kiwicom/orbit/issues/1771)) ([ba9597b](https://github.com/kiwicom/orbit/commit/ba9597be44383cddc22e50dbfb9562b5d5014dc5))
- moving separated type of List to PricingTable only ([#1801](https://github.com/kiwicom/orbit/issues/1801)) ([93629b5](https://github.com/kiwicom/orbit/commit/93629b5d8a267aabd428b2cfe38d0138ab3ba9ed))
- rename element property to as ([#1273](https://github.com/kiwicom/orbit/issues/1273)) ([91ff946](https://github.com/kiwicom/orbit/commit/91ff946a69af5756749c4b431b2312357104e225))
- **Buttons:** introduce SocialButton ([#1803](https://github.com/kiwicom/orbit/issues/1803)) ([ac41d60](https://github.com/kiwicom/orbit/commit/ac41d6094b69e684b2857e2d43712be6b60e1848))
- **Drawer:** title alignment ([#1790](https://github.com/kiwicom/orbit/issues/1790)) ([5fb4708](https://github.com/kiwicom/orbit/commit/5fb4708fc64157dcac2774ec9672833b7ee5356f))
- **SkipLink:** Rename description to buttonLabel on SkipLink ([#1686](https://github.com/kiwicom/orbit/issues/1686)) ([99e4017](https://github.com/kiwicom/orbit/commit/99e4017a5b1a1dc264274df2a58b2051f829cc7e))
- **Table:** adding new type and footer ([#1788](https://github.com/kiwicom/orbit/issues/1788)) ([075d9f3](https://github.com/kiwicom/orbit/commit/075d9f33b820a4f0299a71c304843a5f294c5018))
- introduce global onlyIE media query selector ([#1772](https://github.com/kiwicom/orbit/issues/1772)) ([1b48f6b](https://github.com/kiwicom/orbit/commit/1b48f6b6ec7f71aa35211ea0fc1e04752a6ede91))

* feat(Buttons)!: Introduce ButtonPrimitive, implementing planned breaking changes (#1522) ([ca4a641](https://github.com/kiwicom/orbit/commit/ca4a6411ad2e8a2b28f5efe1e7dd534459a7abbf)), closes [#1522](https://github.com/kiwicom/orbit/issues/1522)

### Bug Fixes

- types of asComponent ([#1787](https://github.com/kiwicom/orbit/issues/1787)) ([a80b468](https://github.com/kiwicom/orbit/commit/a80b468ee90ae30b1e43d3c7d939e2f8c4e683f4))
- **Card:** font-size of title in section header ([#1776](https://github.com/kiwicom/orbit/issues/1776)) ([a2e3a52](https://github.com/kiwicom/orbit/commit/a2e3a52aaa2031b0be198853859114e4dd3c3a47))

### BREAKING CHANGES

- Shifting small size to extraSmall
- removes a separated type from List
- **SkipLink:** renaming description prop
- **Buttons:** Removing info, success, warning, facebook, google types from Button.
  Removing bordered property from Button.
- removing unsafe className (deprecated, not public API)
  removing icon property (deprecated)
  changing type of width to string (planned)

# [0.83.0](https://github.com/kiwicom/orbit/compare/0.82.1...0.83.0) (2020-04-03)

### Bug Fixes

- **Compass:** broken svg definition for icon font ([#1759](https://github.com/kiwicom/orbit/issues/1759)) ([f8e7b72](https://github.com/kiwicom/orbit/commit/f8e7b721f16fb8984414117e63f121196fc300ea))
- **Tooltip:** calculation upon change in the wrapped element ([#1761](https://github.com/kiwicom/orbit/issues/1761)) ([e7b5474](https://github.com/kiwicom/orbit/commit/e7b5474047f8d3a7fa09e70a0de879cd8c7f685f))

### Features

- **ChoiceGroup:** updating the filter color from product color ([#1757](https://github.com/kiwicom/orbit/issues/1757)) ([e1ad6f2](https://github.com/kiwicom/orbit/commit/e1ad6f20e0b822fcba88568b2709594083d03be7))
- adding new ButtonMobileStore component ([#1756](https://github.com/kiwicom/orbit/issues/1756)) ([223c846](https://github.com/kiwicom/orbit/commit/223c846d556050d19b46134260610f508d36d844))
- **Alert:** changing the alignment of description ([#1758](https://github.com/kiwicom/orbit/issues/1758)) ([fff86ca](https://github.com/kiwicom/orbit/commit/fff86ca43ee497897bbcd12346f06a3c5a8d2f2f))

## [0.82.1](https://github.com/kiwicom/orbit/compare/0.82.0...0.82.1) (2020-04-01)

### Bug Fixes

- **Tooltip:** with clickable element should close on mobile ([#1752](https://github.com/kiwicom/orbit/issues/1752)) ([3af61f8](https://github.com/kiwicom/orbit/commit/3af61f8caddf2d2a3762dfb24f846736f6214a90))

# [0.82.0](https://github.com/kiwicom/orbit/compare/0.81.0...0.82.0) (2020-03-31)

### Bug Fixes

- **Hide:** omit rendering of on property ([#1740](https://github.com/kiwicom/orbit/issues/1740)) ([e343317](https://github.com/kiwicom/orbit/commit/e34331729802b5fc380d5970cecea1e44e5d7fbf))
- **InputField:** Tag alignment ([#1744](https://github.com/kiwicom/orbit/issues/1744)) ([133f718](https://github.com/kiwicom/orbit/commit/133f718cbd945f10cfbd5245b678409693af8b73))
- **modal:** border radius of close container on desktop ([#1726](https://github.com/kiwicom/orbit/issues/1726)) ([fc3b4aa](https://github.com/kiwicom/orbit/commit/fc3b4aa2ba48eb595f76a92e67a292aef2e27239))
- **Modal:** click ability under CloseContainer ([#1739](https://github.com/kiwicom/orbit/issues/1739)) ([2368987](https://github.com/kiwicom/orbit/commit/2368987f0d1c58307b303bb1d3eaac714263ca22))
- **radar:** SVG definition ([#1728](https://github.com/kiwicom/orbit/issues/1728)) ([843d1bd](https://github.com/kiwicom/orbit/commit/843d1bda68e368a69e220b79d956f9a3ce9a27fb))
- **Tooltip:** should close when clicked on clickable element ([#1742](https://github.com/kiwicom/orbit/issues/1742)) ([a4e226e](https://github.com/kiwicom/orbit/commit/a4e226eac9981c039d195884a7e3dd2d54dc16e1))

### Features

- **Checkbox,Radio:** Updating visual style ([#1737](https://github.com/kiwicom/orbit/issues/1737)) ([8ff47d7](https://github.com/kiwicom/orbit/commit/8ff47d7a265c3586366f3adde3a597e5111cf573))
- Adding commitlint and husky ([#1730](https://github.com/kiwicom/orbit/issues/1730)) ([e96446e](https://github.com/kiwicom/orbit/commit/e96446e8347d8f4406fc9d2bf80ba1cfeb9604f6))
- **card:** new titleAs property ([#1729](https://github.com/kiwicom/orbit/issues/1729)) ([fa50675](https://github.com/kiwicom/orbit/commit/fa50675db518d932f40e2012bd69d4446b9f9df4))
- **icons:** New Radar icon ([#1725](https://github.com/kiwicom/orbit/issues/1725)) ([93e14fc](https://github.com/kiwicom/orbit/commit/93e14fcf39e72706afeddc8cdc171ff9f18e96d6))
- **Tile:** change padding to large for desktop breakpoint ([#1732](https://github.com/kiwicom/orbit/issues/1732)) ([ce9b531](https://github.com/kiwicom/orbit/commit/ce9b531713349b890d03362ae685e7099d8b4606))

### Reverts

- **FormElements:** native design sync ([#1743](https://github.com/kiwicom/orbit/issues/1743)) ([f351e46](https://github.com/kiwicom/orbit/commit/f351e4618e3495cb6a42a4b66e23d4157e3f403d))

# [0.81.0](https://github.com/kiwicom/orbit/compare/0.80.0...0.81.0) (2020-03-24)

### Features

- **Select:** Add optional key to Option ([#1708](https://github.com/kiwicom/orbit/issues/1708)) ([f824d4a](https://github.com/kiwicom/orbit/commit/f824d4a762edc70598746a3533fa470fc53e90b6))
- **Tile:** introduce noHeaderIcon property ([#1710](https://github.com/kiwicom/orbit/issues/1710)) ([0183561](https://github.com/kiwicom/orbit/commit/0183561c5f14e595f3df76c620c8966999467cbe))

# [0.80.0](https://github.com/kiwicom/orbit/compare/0.79.0...0.80.0) (2020-03-20)

### Features

- **Tile:** Adding htmlTitle attribute ([#1691](https://github.com/kiwicom/orbit/issues/1691)) ([a1628ba](https://github.com/kiwicom/orbit/commit/a1628ba78cad62734ca4d87414a3e18989020e9c))

# [0.79.0](https://github.com/kiwicom/orbit/compare/0.78.0...0.79.0) (2020-03-17)

### Bug Fixes

- **Breadcrumbs:** add correct html5 structured microdata for breadcrumbs ([#1666](https://github.com/kiwicom/orbit/issues/1666)) ([692b3f5](https://github.com/kiwicom/orbit/commit/692b3f57a50745ce12161a8088338ad84af5eda2))
- **tooltip:** usage of TextLink in content ([#1680](https://github.com/kiwicom/orbit/issues/1680)) ([139a787](https://github.com/kiwicom/orbit/commit/139a787d4c3d7eebf9ff991282d23cbb75428bec))

### Features

- **servicelogo:** Add Booking and RentalCars logos ([#1682](https://github.com/kiwicom/orbit/issues/1682)) ([fb94862](https://github.com/kiwicom/orbit/commit/fb94862eaf3e61e305710044981bd40a818806d9))
- **Tag:** Update visual style ([#1573](https://github.com/kiwicom/orbit/issues/1573)) ([e363406](https://github.com/kiwicom/orbit/commit/e3634060a9848625f9503a6c9d9e38bcbd8f1538))
- **theme:** Added transitions property ([#1668](https://github.com/kiwicom/orbit/issues/1668)) ([e8f86e6](https://github.com/kiwicom/orbit/commit/e8f86e64e6280e0ceb50b9eda2083df66089e8e7))

# [0.78.0](https://github.com/kiwicom/orbit/compare/0.77.1...0.78.0) (2020-03-12)

### Bug Fixes

- **button:** circled not being perfect circle with small children ([#1654](https://github.com/kiwicom/orbit/issues/1654)) ([280905d](https://github.com/kiwicom/orbit/commit/280905dd1a1a03e94d745d8695e2bf8723c59d68))
- **button:** Fix flow type of the button export ([#1663](https://github.com/kiwicom/orbit/issues/1663)) ([4c07ca0](https://github.com/kiwicom/orbit/commit/4c07ca0adb959425bd09041b244cfb6c57c9b70b))
- **pictureCard:** Enabling heiight to be smaller than 200 ([#1660](https://github.com/kiwicom/orbit/issues/1660)) ([633fbe5](https://github.com/kiwicom/orbit/commit/633fbe543352785ff8405087033af06642097fe5))
- **popover:** Border radius on desktop and close button padding ([#1658](https://github.com/kiwicom/orbit/issues/1658)) ([50b2a24](https://github.com/kiwicom/orbit/commit/50b2a24f8bd8fc42c8c21200ffae22f11d295385))
- **popover:** Opening with onKeyDown event ([#1657](https://github.com/kiwicom/orbit/issues/1657)) ([ea27780](https://github.com/kiwicom/orbit/commit/ea27780a6592a5e0a4ab4b8f3e847cfb65bb89e1))
- **popover:** RTL calculation ([#1653](https://github.com/kiwicom/orbit/issues/1653)) ([8572fea](https://github.com/kiwicom/orbit/commit/8572fea4939385d08a0b211877c0d1b3790ec57c))

### Features

- **dictionary:** add index.js export of all languages ([#1650](https://github.com/kiwicom/orbit/issues/1650)) ([83f5a9d](https://github.com/kiwicom/orbit/commit/83f5a9d6e37950b1bce3a57ac12ef74b444f7f2c))
- **illustrations:** Add optional alt property ([#1656](https://github.com/kiwicom/orbit/issues/1656)) ([4a60dfd](https://github.com/kiwicom/orbit/commit/4a60dfda0dae50dd6551410c94edb90664cabf00))
- **modal:** Change title size to title2 on mobile ([5ab25f2](https://github.com/kiwicom/orbit/commit/5ab25f2352e2db73c778953d7bd86bdc5f55662e))

## [0.77.1](https://github.com/kiwicom/orbit/compare/0.77.0...0.77.1) (2020-03-09)

### Bug Fixes

- **popover:** position calculations ([#1647](https://github.com/kiwicom/orbit/issues/1647)) ([6c0fcad](https://github.com/kiwicom/orbit/commit/6c0fcad28d0d5abeb49a6a1098fbee17093ad3b2))

# [0.77.0](https://github.com/kiwicom/orbit/compare/0.76.0...0.77.0) (2020-03-06)

# [0.76.0](https://github.com/kiwicom/orbit/compare/0.75.0...0.76.0) (2020-02-25)

# [0.75.0](https://github.com/kiwicom/orbit/compare/0.74.0...0.75.0) (2020-02-19)

# [0.74.0](https://github.com/kiwicom/orbit/compare/0.73.1...0.74.0) (2020-02-18)

### Bug Fixes

- **components:** PictureCard href ([#1536](https://github.com/kiwicom/orbit/issues/1536)) ([4866b9e](https://github.com/kiwicom/orbit/commit/4866b9e545ae32b341c822ab520677b6cffe2b1e))

## [0.73.1](https://github.com/kiwicom/orbit/compare/0.73.0...0.73.1) (2020-02-12)

# [0.73.0](https://github.com/kiwicom/orbit/compare/0.72.0...0.73.0) (2020-02-07)

# [0.72.0](https://github.com/kiwicom/orbit/compare/0.71.0...0.72.0) (2020-01-27)

# [0.71.0](https://github.com/kiwicom/orbit/compare/0.70.0...0.71.0) (2020-01-15)

# [0.70.0](https://github.com/kiwicom/orbit/compare/0.69.0...0.70.0) (2019-12-18)

# [0.69.0](https://github.com/kiwicom/orbit/compare/0.68.0...0.69.0) (2019-12-06)

# [0.68.0](https://github.com/kiwicom/orbit/compare/0.67.1...0.68.0) (2019-11-27)

## [0.67.1](https://github.com/kiwicom/orbit/compare/0.67.0...0.67.1) (2019-11-13)

# [0.67.0](https://github.com/kiwicom/orbit/compare/0.66.0...0.67.0) (2019-11-11)

# [0.66.0](https://github.com/kiwicom/orbit/compare/0.65.0...0.66.0) (2019-10-31)

# [0.65.0](https://github.com/kiwicom/orbit/compare/0.64.2...0.65.0) (2019-10-22)

## [0.64.2](https://github.com/kiwicom/orbit/compare/0.64.1...0.64.2) (2019-10-16)

## [0.64.1](https://github.com/kiwicom/orbit/compare/0.64.0...0.64.1) (2019-10-14)

# [0.64.0](https://github.com/kiwicom/orbit/compare/0.63.0...0.64.0) (2019-10-11)

# [0.63.0](https://github.com/kiwicom/orbit/compare/0.62.0...0.63.0) (2019-10-04)

# [0.62.0](https://github.com/kiwicom/orbit/compare/0.61.3...0.62.0) (2019-10-02)

## [0.61.3](https://github.com/kiwicom/orbit/compare/0.61.2...0.61.3) (2019-10-01)

## [0.61.2](https://github.com/kiwicom/orbit/compare/0.61.1...0.61.2) (2019-09-25)

## [0.61.1](https://github.com/kiwicom/orbit/compare/0.61.0...0.61.1) (2019-09-25)

# [0.61.0](https://github.com/kiwicom/orbit/compare/0.60.0...0.61.0) (2019-09-21)

# [0.60.0](https://github.com/kiwicom/orbit/compare/0.59.0...0.60.0) (2019-09-16)

# [0.59.0](https://github.com/kiwicom/orbit/compare/0.58.0...0.59.0) (2019-09-12)

# [0.58.0](https://github.com/kiwicom/orbit/compare/0.57.0...0.58.0) (2019-09-04)

# [0.57.0](https://github.com/kiwicom/orbit/compare/0.56.0...0.57.0) (2019-09-03)

# [0.56.0](https://github.com/kiwicom/orbit/compare/0.55.0...0.56.0) (2019-08-27)

# [0.55.0](https://github.com/kiwicom/orbit/compare/0.54.0...0.55.0) (2019-08-21)

# [0.54.0](https://github.com/kiwicom/orbit/compare/0.53.0...0.54.0) (2019-08-15)

# [0.53.0](https://github.com/kiwicom/orbit/compare/0.52.0...0.53.0) (2019-08-08)

# [0.52.0](https://github.com/kiwicom/orbit/compare/0.51.0...0.52.0) (2019-07-31)

# [0.51.0](https://github.com/kiwicom/orbit/compare/0.50.0...0.51.0) (2019-07-24)

# [0.50.0](https://github.com/kiwicom/orbit/compare/0.49.1...0.50.0) (2019-07-17)

## [0.49.1](https://github.com/kiwicom/orbit/compare/0.49.0...0.49.1) (2019-07-02)

# [0.49.0](https://github.com/kiwicom/orbit/compare/0.48.0...0.49.0) (2019-07-01)

# [0.48.0](https://github.com/kiwicom/orbit/compare/0.47.0...0.48.0) (2019-06-18)

# [0.47.0](https://github.com/kiwicom/orbit/compare/0.46.0...0.47.0) (2019-06-10)

# [0.46.0](https://github.com/kiwicom/orbit/compare/0.45.0...0.46.0) (2019-06-05)

# [0.45.0](https://github.com/kiwicom/orbit/compare/0.44.0...0.45.0) (2019-05-31)

# [0.44.0](https://github.com/kiwicom/orbit/compare/0.43.0...0.44.0) (2019-05-29)

# [0.43.0](https://github.com/kiwicom/orbit/compare/0.42.0...0.43.0) (2019-05-27)

# [0.42.0](https://github.com/kiwicom/orbit/compare/0.41.0...0.42.0) (2019-05-20)

# [0.41.0](https://github.com/kiwicom/orbit/compare/0.40.1...0.41.0) (2019-05-15)

## [0.40.1](https://github.com/kiwicom/orbit/compare/0.40.0...0.40.1) (2019-05-02)

### Bug Fixes

- build script to include data dir in compilation ([#1025](https://github.com/kiwicom/orbit/issues/1025)) ([a71ab3d](https://github.com/kiwicom/orbit/commit/a71ab3d48b164a384b051e21b198aa5746bd6314))

# [0.40.0](https://github.com/kiwicom/orbit/compare/0.39.1...0.40.0) (2019-04-30)

## [0.39.1](https://github.com/kiwicom/orbit/compare/0.39.0...0.39.1) (2019-04-23)

# [0.39.0](https://github.com/kiwicom/orbit/compare/0.38.1...0.39.0) (2019-04-17)

## [0.38.1](https://github.com/kiwicom/orbit/compare/0.38.0...0.38.1) (2019-04-05)

# [0.38.0](https://github.com/kiwicom/orbit/compare/0.37.0...0.38.0) (2019-04-04)

# [0.37.0](https://github.com/kiwicom/orbit/compare/0.36.0...0.37.0) (2019-03-27)

# [0.36.0](https://github.com/kiwicom/orbit/compare/0.35.0...0.36.0) (2019-03-22)

# [0.35.0](https://github.com/kiwicom/orbit/compare/0.34.1...0.35.0) (2019-03-15)

## [0.34.1](https://github.com/kiwicom/orbit/compare/0.34.0...0.34.1) (2019-03-11)

# [0.34.0](https://github.com/kiwicom/orbit/compare/0.33.0...0.34.0) (2019-03-08)

# 0.0.0-rc5 (2018-02-28)
