import { ReactElement } from "react";
import useCountdown from "../hooks/useCountdown";

const Timer = (): ReactElement => {
  const [min, sec] = useCountdown();
  return (
    <div className="flex items-center gap-1 font-bold">
      {min?.split("").map((v: string, i: number) => (
        <div
          key={i}
          className="bg-[#1E2A53] grid place-items-center text-white rounded-sm px-2 py-[6px]"
        >
          {v}
        </div>
      ))}
      <p>:</p>
      {sec?.split("").map((v: string, i: number) => (
        <div
          key={i}
          className="bg-[#1E2A53] grid place-items-center text-white rounded-sm px-2 py-[6px]"
        >
          {v}
        </div>
      ))}
    </div>
  );
};

export default Timer;
