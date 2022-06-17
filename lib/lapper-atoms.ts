import { atom, selector } from 'recoil';
import { SectorTime } from '../components/lapper';
import isFinite from 'lodash/isFinite';
import reduce from 'lodash/reduce';
import toNumber from 'lodash/toNumber';
import dayjs from 'dayjs';
import durationPlugin, { Duration } from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

const EmptyThreeSectorTime: SectorTime[] = [
  { id: 's1' },
  { id: 's2' },
  { id: 's3' },
];

export const sectorTimesState = atom({
  key: 'SectorTimes',
  default: EmptyThreeSectorTime,
});

export const lapTimeStatsState = selector({
  key: 'LaptTimeStats',
  get: ({ get }) => {
    const sectorTimes = get(sectorTimesState);
    const isLapCompleted = sectorTimes.every(
      (s) => isFinite(s.m) && isFinite(s.s) && isFinite(s.ms)
    );
    const lapTimeDuration = reduce<SectorTime, Duration>(
      sectorTimes,
      (acc, s) => acc.add(sectorTimeInMs(s)),
      dayjs.duration({ seconds: 0 })
    );
    const lapTime = lapTimeDuration.format('m:ss.SSS');
    return {
      isLapCompleted,
      lapTime,
      lapTimeDuration,
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
