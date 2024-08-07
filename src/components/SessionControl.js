import React from 'react';

const SessionControl = ({ sessionLength, increment, decrement }) => (
  <div id="session-label">
    Session Length
    <button id="session-decrement" onClick={decrement}>-</button>
    <span id="session-length">{sessionLength}</span>
    <button id="session-increment" onClick={increment}>+</button>
  </div>
);

export default SessionControl;
