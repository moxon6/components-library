import React from 'react';
import Connector from './Connector';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import './Connector.stories.scss';

export default {
  title: 'Connector',
  decorators: [withKnobs]
};

export const connectorExample = () => {

  return (
    <div className="connector-container">
      <Connector isVisible={boolean("isVisible", false)} />
    </div>
  )
}
