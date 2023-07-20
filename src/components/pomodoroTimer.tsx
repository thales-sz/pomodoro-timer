import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-primary">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Pomodoro Timer</h1>
        <div className="text-4xl font-semibold mb-8">
          <span className="minutes">25</span>
        </div>
        <div className="space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Start
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Pause
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;