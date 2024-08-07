import React, { useState, useEffect } from 'react';
import BreakControl from './components/BreakControl';
import SessionControl from './components/SessionControl';
import Timer from './components/Timer';
import Controls from './components/Controls';
import './App.css';

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [timeLeft, setTimeLeft] = useState('25:00');
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Convert minutes to mm:ss format
  const formatTime = (minutes, seconds) => {
    const min = minutes < 10 ? `0${minutes}` : minutes;
    const sec = seconds < 10 ? `0${seconds}` : seconds;
    return `${min}:${sec}`;
  };

  // Timer functionality
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const interval = setInterval(() => {
        setTimeLeft(prev => {
          const [minutes, seconds] = prev.split(':').map(Number);
          if (seconds === 0) {
            if (minutes === 0) {
              // Handle the end of session/break
              const newLabel = timerLabel === 'Session' ? 'Break' : 'Session';
              const newTime = timerLabel === 'Session' ? breakLength : sessionLength;
              setTimerLabel(newLabel);
              return formatTime(newTime, 0);
            }
            return formatTime(minutes - 1, 59);
          }
          return formatTime(minutes, seconds - 1);
        });
      }, 1000);
      setIntervalId(interval);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel('Session');
    setTimeLeft('25:00');
    setIsRunning(false);
  };

  const incrementBreak = () => setBreakLength(prev => (prev < 60 ? prev + 1 : prev));
  const decrementBreak = () => setBreakLength(prev => (prev > 1 ? prev - 1 : prev));
  const incrementSession = () => {
    setSessionLength(prev => (prev < 60 ? prev + 1 : prev));
    setTimeLeft(formatTime(sessionLength + 1, 0));
  };
  const decrementSession = () => {
    setSessionLength(prev => (prev > 1 ? prev - 1 : prev));
    setTimeLeft(formatTime(sessionLength - 1, 0));
  };

  return (
    <div className="App">
      <BreakControl breakLength={breakLength} increment={incrementBreak} decrement={decrementBreak} />
      <SessionControl sessionLength={sessionLength} increment={incrementSession} decrement={decrementSession} />
      <Timer timerLabel={timerLabel} timeLeft={timeLeft} />
      <Controls startStop={handleStartStop} reset={handleReset} />
    </div>
  );
};

export default App;
