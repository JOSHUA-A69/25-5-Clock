import React from 'react';

const Timer = ({ timerLabel, timeLeft }) => (
  <div>
    <div id="timer-label">{timerLabel}</div>
    <div id="time-left">{timeLeft}</div>
  </div>
);

export default Timer;
