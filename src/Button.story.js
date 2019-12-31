import React from 'react';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Button showApp={linkTo('Button')} />;

