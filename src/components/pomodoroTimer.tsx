import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // Tempo inicial em segundos
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isRunning) {
      timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(25 * 60);
    setIsRunning(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      {!isRunning && (
        <button onClick={startTimer}>Iniciar</button>
      )}
      {isRunning && (
        <button onClick={stopTimer}>Parar</button>
      )}
      <button onClick={resetTimer}>Resetar</button>
    </div>
  );
};

export default PomodoroTimer;