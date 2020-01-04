import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

// Option defaults.
addParameters({
  options: {
    theme: themes.light,
  },
});
// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js.?$/), module);
