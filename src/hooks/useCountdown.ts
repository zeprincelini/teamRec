import { useState, useEffect } from "react";

const useCountdown = () => {
  const countDown = 80;
  const [time, setTime] = useState<number>(countDown);

  useEffect(() => {
    const timer = setInterval(() => {
      // setTime((prev) => (prev <= 0 ? countDown : prev - 1));
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const padZero = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const formatTime = (time: number): string[] => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return time >= 0 ? [padZero(minutes), padZero(seconds)] : ["00", "00"];
  };

  return formatTime(time);
};

export default useCountdown;
