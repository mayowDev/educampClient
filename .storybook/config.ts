import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
  require('../src/styles/global.scss');
  // You can require as many stories as you need.
}

configure(loadStories, module);
