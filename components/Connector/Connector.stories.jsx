import React from 'react';
import events from './events';

import Connector from './Connector';

export default {
  title: 'Connector',
};

export const connectorExample = () => <Connector events={events} />

