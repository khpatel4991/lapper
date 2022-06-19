import { Sector } from "./sector";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { lapTimeStatsState, sectorTimesState } from "../lib/lapper-atoms";
import { AddSector } from "./addsector";

export interface SectorTime {
  id: string;
  m?: number;
  s?: number;
  ms?: number;
}

const useSectorTimes = () => ({
  lapTimeStats: useRecoilValue(lapTimeStatsState),
  sectorTimes: useRecoilValue(sectorTimesState),
  setSectorTimes: useSetRecoilState(sectorTimesState),
});

export const Lapper = () => {
  const { sectorTimes, setSectorTimes, lapTimeStats } = useSectorTimes();

  const { isLapCompleted, lapTime } = lapTimeStats;
  const handleClick = () => {
    const newSector: SectorTime = {
      id: (sectorTimes.length + 1).toString(),
    };
    setSectorTimes((times) => [...times, newSector]);
  };
  return (
    <>
      {sectorTimes.map((s, i) => (
        <Sector key={s.id} s={s} name={`Sector ${i + 1}`} focused={i === 0} />
      ))}
      <AddSector handleClick={handleClick} label="Add Sector" />
      <div
        className={`flex justify-center text-xl antialiased items-center mt-10 p-2 ${
          isLapCompleted ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {lapTime}
      </div>
    </>
  );
};
