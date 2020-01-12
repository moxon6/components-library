import React from 'react';
import Connector from './Connector';
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";
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
        fillDuration={text("fillDuration", "2.5s")}
        colorDuration={text("colorDuration", "2.5s")}
        styles={select("Style", { defaultStyles, overrides}, defaultStyles)}
      />
    </div>
  )
}
