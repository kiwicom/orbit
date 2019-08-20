// @flow

import type { IsMobileViewport } from './isMobileViewport.js.flow';

const isMobileViewport: IsMobileViewport = viewport =>
  viewport === 'smallMobile' || viewport === 'mediumMobile' || viewport === 'largeMobile';

export default isMobileViewport;
