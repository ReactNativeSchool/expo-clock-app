import { useState, useRef, useEffect } from "react";

export type LapData = {
  time: string;
  lap: number;
};

const padStart = (num: number) => {
  return num.toString().padStart(2, "0");
};

// const SAMPLE_START = 1000 + 543; // 1.543 seconds 00:01.54
// const SAMPLE_START = 1000 * 60 + 1000 * 2 + 543; // 1 minute 2.543 seconds 01:02.54
// const SAMPLE_START = 1000 * 60 * 32 + 1000 * 2 + 543; // 32 minute 2.543 seconds 32:02.54
// const SAMPLE_START = 1000 * 60 * 60 * 2 + 1000 * 60 * 32 + 1000 * 2 + 543; // 2 hours 32 minute 2.543 seconds 02:32:02.54
// const SAMPLE_START = 1000 * 60 * 60 * 200 + 1000 * 60 * 32 + 1000 * 2 + 543; // 200 hours 32 minute 2.543 seconds 200:32:02.54
const formatMs = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  // using the modulus operator gets the remainder if the time roles over
  // we don't do this for hours because we want them to rollover
  // seconds = 81 -> minutes = 1, seconds = 21.
  // 60 minutes in an hour, 60 seconds in a minute, 1000 milliseconds in a second.
  minutes = minutes % 60;
  seconds = seconds % 60;
  // divide the milliseconds by 10 to get the tenths of a second. 543 -> 54
  const ms = Math.floor((milliseconds % 1000) / 10);

  let str = `${padStart(minutes)}:${padStart(seconds)}.${padStart(ms)}`;

  if (hours > 0) {
    str = `${padStart(hours)}:${str}`;
  }

  return str;
};

export const useStopWatch = () => {
  const [time, setTime] = useState(0);

  const [timeWhenLastStopped, setTimeWhenLastStopped] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (startTime > 0) {
      interval.current = setInterval(() => {
        setTime(() => Date.now() - startTime + timeWhenLastStopped);
      }, 1);
    } else {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = undefined;
      }
    }
  }, [startTime]);

  const start = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const stop = () => {
    setIsRunning(false);
    setTimeWhenLastStopped(time);
    setStartTime(0);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setTimeWhenLastStopped(0);
    setLaps([]);
    setStartTime(0);
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
    currentLapTime: laps[0] ? formatMs(time - laps[0]) : formatMs(time),
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
