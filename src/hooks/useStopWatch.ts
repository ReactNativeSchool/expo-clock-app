import { useState } from "react";

export type LapData = {
  time: string;
  lap: number;
};

const formatMs = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds % 60);
  const prettySeconds = seconds < 10 ? `0${seconds}` : seconds;

  const minutes = Math.floor((milliseconds / 60) % 60);
  const prettyMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const hours = Math.floor((milliseconds / 60 / 60) % 24);
  const prettyHours = hours < 10 ? `0${hours}` : hours;

  return `${prettyHours}:${prettyMinutes}:${prettySeconds}`;
};

export const useStopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [runningInterval, setRunningInterval] =
    useState<ReturnType<typeof setInterval>>();
  const [laps, setLaps] = useState<number[]>([]);

  const start = () => {
    setIsRunning(true);
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 10);
    setRunningInterval(interval);
  };

  const stop = () => {
    setIsRunning(false);

    if (runningInterval) {
      clearInterval(runningInterval);
      setRunningInterval(undefined);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    if (runningInterval) {
      setRunningInterval(undefined);
    }
  };

  const lap = () => {
    setLaps((laps) => [time, ...laps]);
  };

  let slowestLapTime: number | undefined;
  let fastestLapTime: number | undefined;
  const formattedLapData = laps.map((l, index) => {
    const previousLap = laps[index + 1] || 0;
    const lapTime = l - previousLap;

    if (!slowestLapTime || lapTime > slowestLapTime) {
      slowestLapTime = lapTime;
    }

    if (!fastestLapTime || lapTime < fastestLapTime) {
      fastestLapTime = lapTime;
    }

    return {
      time: formatMs(lapTime),
      lap: laps.length - index,
    };
  });

  return {
    // Data
    time: formatMs(time),
    currentLapTime: laps[0] ? formatMs(time - laps[0] || 0) : formatMs(time),
    laps: formattedLapData,
    slowestLapTime: formatMs(slowestLapTime || 0),
    fastestLapTime: formatMs(fastestLapTime || 0),

    // Booleans
    hasStarted: time > 0,
    isRunning,

    // Actions
    start,
    stop,
    reset,
    lap,
  };
};
