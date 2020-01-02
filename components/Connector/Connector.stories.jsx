import React from 'react';
import events from './events';

import Connector from './Connector';
import { withKnobs, button } from "@storybook/addon-knobs";
import './Connector.stories.scss';

export default {
  title: 'Connector',
  decorators: [withKnobs]
};

button("Dispatch scroll event", () => {
  events.dispatchEvent("content.scroll")
});


export const connectorExample = () => (
  <div className="connector-container">
    <Connector events={events} />
  </div>
)
