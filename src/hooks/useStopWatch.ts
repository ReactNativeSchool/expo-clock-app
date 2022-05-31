import { useState } from "react";

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
    if (runningInterval) {
      setRunningInterval(undefined);
    }
  };

  return {
    time: formatMs(time),
    isRunning,
    start,
    stop,
    reset,
  };
};
