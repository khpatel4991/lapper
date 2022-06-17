import { SectorTime } from "./lapper";
import { Input } from "./input";
import { sectorTimesState } from "../lib/lapper-atoms";
import { useRecoilState } from "recoil";
import { ChangeEventHandler, FocusEventHandler, useRef } from "react";

interface Props {
  s: SectorTime;
  name: string;
  focused: boolean;
}

export const Sector = ({ s, name, focused = false }: Props) => {
  const [sectorTimes, setSectorTimes] = useRecoilState(sectorTimesState);
  const inputRef = useRef();
  const index = sectorTimes.findIndex((st) => st === s);
  const editSectorTime: ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    const newList = replaceItemAtIndex(sectorTimes, index, {
      ...s,
      [name]: Number(value),
    });

    setSectorTimes(newList);
  };
  const handleBlur: FocusEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    if (value !== "") {
      return;
    }
    const newList = replaceItemAtIndex(sectorTimes, index, {
      ...s,
      [name]: 0,
    });

    setSectorTimes(newList);
  };
  return (
    <div className="flex items-center py-2">
      <div className="w-24 pr-4">{name}</div>
      <div className="grid grid-cols-3 gap-2">
        <Input
          focused={focused}
          name="m"
          label="mm"
          placeholder="1"
          value={s.m ?? ""}
          onChange={editSectorTime}
          onBlur={handleBlur}
        />
        <Input
          name="s"
          label="ss"
          placeholder="23"
          value={s.s ?? ""}
          onChange={editSectorTime}
          onBlur={handleBlur}
        />
        <Input
          name="ms"
          label="sss"
          placeholder="234"
          value={s.ms ?? ""}
          onChange={editSectorTime}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
