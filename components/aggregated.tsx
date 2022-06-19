import dayjs from "dayjs";
import { ChangeEventHandler } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { aggregatedTimesState, lapTimeStatsState2 } from "../lib/lapper-atoms";
import { AddSector } from "./addsector";
import { Input } from "./input";

export interface AggregatedTime {
  id: string;
  ip: string;
}

const useAggregatedTimes = () => ({
  aggregatedTimes: useRecoilValue(aggregatedTimesState),
  setAggregatedTimes: useSetRecoilState(aggregatedTimesState),
  lapTimeStats: useRecoilValue(lapTimeStatsState2),
});

export const Aggregated = () => {
  const { aggregatedTimes, setAggregatedTimes, lapTimeStats } =
    useAggregatedTimes();
  const { isLapCompleted, lapTime, sectorTimes } = lapTimeStats;
  const handleChange: (idx: number) => ChangeEventHandler<HTMLInputElement> =
    (idx) =>
    ({ target: { value } }) => {
      const sanitized = sanitizeTime(value);
      const newList = replaceItemAtIndex(aggregatedTimes, idx, {
        ...aggregatedTimes[idx],
        ip: sanitized,
      });

      setAggregatedTimes(newList);
    };
  const addAggregatedTime = () => {
    const newTime: AggregatedTime = {
      id: (aggregatedTimes.length + 1).toString(),
      ip: "",
    };
    setAggregatedTimes((at) => [...at, newTime]);
  };
  return (
    <div>
      {aggregatedTimes.map((at, i) => (
        <Input
          label="m:ss.sss"
          name="ip"
          onChange={handleChange(i)}
          value={at.ip}
          placeholder="asd"
          key={at.id}
          onBlur={() => {}}
        />
      ))}
      <AddSector handleClick={addAggregatedTime} label="Add Aggregated Time" />
      <div
        className={`flex flex-col justify-center text-xl antialiased items-center mt-10 p-2 ${
          isLapCompleted ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <h3>{lapTime}</h3>

        {sectorTimes.map((s, i) => (
          <p key={s}>
            Sector {i}: {s}
          </p>
        ))}
      </div>
    </div>
  );
};

const sanitizeTime = (ip: string): string => {
  return ip;
};

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
