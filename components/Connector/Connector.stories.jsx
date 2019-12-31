import React from 'react';
import events from './events';

import Connector from './Connector';

export default {
  title: 'Connector',
};

export const connectorExample = () => (
  <>
  <form onSubmit={e => {
    e.preventDefault();
    const {value} = e.target.querySelector('input')
    events.dispatchEvent(value)
  }}>
    <input type="text" placeholder="dispatch event" >
      
    </input>
  </form>
  <Connector events={events} />
  </>
)
