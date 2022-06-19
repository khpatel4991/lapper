import dayjs from "dayjs";
import customParsePlugin from "dayjs/plugin/customParseFormat";
import durationPlugin, { Duration } from "dayjs/plugin/duration";
import isFinite from "lodash/isFinite";
import toNumber from "lodash/toNumber";
import last from "lodash/last";
import { atom, selector } from "recoil";
import { AggregatedTime } from "../components/aggregated";
import { SectorTime } from "../components/lapper";

dayjs.extend(customParsePlugin);
dayjs.extend(durationPlugin);

const EmptyThreeSectorTime: SectorTime[] = [
  { id: "s1" },
  { id: "s2" },
  { id: "s3" },
];

export const sectorTimesState = atom({
  key: "SectorTimes",
  default: EmptyThreeSectorTime,
});

const EmptyOneAggregatedTime: AggregatedTime[] = [{ id: "s1", ip: "" }];

export const aggregatedTimesState = atom({
  key: "AggregatedTimes",
  default: EmptyOneAggregatedTime,
});

export const lapTimeStatsState = selector({
  key: "LaptTimeStats",
  get: ({ get }) => {
    const sectorTimes = get(sectorTimesState);
    const isLapCompleted = sectorTimes.every(
      (s) => isFinite(s.m) && isFinite(s.s) && isFinite(s.ms)
    );
    const lapTimeDuration = dayjs.duration({ seconds: 0 });
    const aggregatedTimes: string[] = [];
    sectorTimes.forEach((s) => {
      lapTimeDuration.add(sectorTimeInMs(s));
      aggregatedTimes.push(lapTimeDuration.format("m:ss.SSS"));
    });
    const lapTime = lapTimeDuration.format("m:ss.SSS");
    return {
      aggregatedTimes,
      isLapCompleted,
      lapTime,
      lapTimeDuration,
    };
  },
});

export const lapTimeStatsState2 = selector({
  key: "LaptTimeStats2",
  get: ({ get }) => {
    const aggregatedTimes = get(aggregatedTimesState);
    const isLapCompleted = aggregatedTimes.every((s) =>
      dayjs(s.ip, "m:ss.SSS", true).isValid()
    );
    const sectorTimes: string[] = [];

    aggregatedTimes.forEach((at, i, arr) => {
      if (!dayjs(at.ip, "m:ss.SSS", true).isValid()) {
        return;
      }
      const curr = dayjs(at.ip, "m:ss.SSS");
      const currDur = dayjs.duration({
        minutes: curr.minute(),
        seconds: curr.second(),
        milliseconds: curr.millisecond(),
      });
      if (i === 0) {
        sectorTimes.push(currDur.format("m:ss.SSS"));
        return;
      }
      const prev = arr[i - 1];
      const prevTime = dayjs(prev.ip, "m:ss.SSS");
      const prevDur = dayjs.duration({
        minutes: prevTime.minute(),
        seconds: prevTime.second(),
        milliseconds: prevTime.millisecond(),
      });
      const sdur = currDur.subtract(prevDur);
      sectorTimes.push(sdur.format("m:ss.SSS"));
    });
    const lapTime = dayjs(last(aggregatedTimes)?.ip, "m:ss.SSS").format(
      "m:ss.SSS"
    );

    return {
      isLapCompleted,
      lapTime,
      sectorTimes,
    };
  },
});

const sectorTimeInMs = (s: SectorTime): Duration => {
  return dayjs.duration({
    minutes: toNumber(s.m),
    seconds: toNumber(s.s),
    milliseconds: toNumber(s.ms),
  });
};
