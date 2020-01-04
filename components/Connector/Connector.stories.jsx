import React from 'react';
import Connector from './Connector';
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import './Connector.stories.scss';
import defaultStyles from './Connector.module.scss';
import overrides from './ConnectorOverrides.module.scss';

export default {
  title: 'Connector',
  decorators: [withKnobs]
};

export const connectorExample = () => {

  return (
    <div className="connector-container">
      <Connector 
        isVisible={boolean("isVisible", false)}
        styles={select("Style", { defaultStyles, overrides}, defaultStyles)}
      />
    </div>
  )
}
