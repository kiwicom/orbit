## Getting started

1. In the root folder (which is `../` relative to this README), do `yarn`.
2. `cd storybooknative`
3. `yarn`

### To see Storybook on Emulator
4. `yarn start`
5. `yarn ios`

Go to `http://localhost:7007` in your browser to get the storybook UI and be able to control the knobs.

**Gotcha**: When reloading React Native (`CMD+R`), if you are not on the first available story, the browser and the emulator get into some weird loop where both try to control which story should be rendered.  
*TL;DR*: Be on the first story (currently Button>Default) when trigerring `CMD+R` in the emulator.

### To see Storybook in the browser
4. `yarn storybook-web`

Go to `http://localhost:9009` in your browser to get the storybook UI and be able to control the knobs.

## Development

It is easier to develop new functionality by using the browser only approach. However, please make sure to run the storybook in the emulator to verify that your component is working as intended.