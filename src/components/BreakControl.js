import React from 'react';

const BreakControl = ({ breakLength, increment, decrement }) => (
  <div id="break-label">
    Break Length
    <button id="break-decrement" onClick={decrement}>-</button>
    <span id="break-length">{breakLength}</span>
    <button id="break-increment" onClick={increment}>+</button>
  </div>
);

export default BreakControl;
