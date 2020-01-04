import React from 'react';
import Connector from './Connector';
import { withKnobs, button } from "@storybook/addon-knobs";
import './Connector.stories.scss';

export default {
  title: 'Connector',
  decorators: [withKnobs]
};

export const connectorExample = () => {

  let _onScroll;
  const onScroll = () => _onScroll();

  button("Execute onScroll", onScroll); 
  return (
    <div className="connector-container">
    <Connector registerOnScroll={fn => {_onScroll = fn }}/>
  </div>
  )
}
