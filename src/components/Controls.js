import React from 'react';

const Controls = ({ startStop, reset }) => (
  <div>
    <button id="start_stop" onClick={startStop}>Start/Stop</button>
    <button id="reset" onClick={reset}>Reset</button>
  </div>
);

export default Controls;
