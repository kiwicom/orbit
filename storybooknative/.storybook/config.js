import { configure } from '@storybook/react';
function loadStories() {
  require('../storybook/stories');
}
configure(loadStories, module);