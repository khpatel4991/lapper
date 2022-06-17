import {
  ChangeEventHandler,
  FocusEventHandler,
  useEffect,
  useRef,
} from "react";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
  value: number | string;
  focused?: boolean;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
const isDev = process.env.NODE_ENV === "development";

export const Input = ({
  name,
  placeholder,
  label,
  onChange,
  onBlur,
  value,
  focused = false,
}: InputProps) => {
  const textInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (focused && !isDev) {
      textInput.current!.focus();
    }
  }, []);
  return (
    <div className="relative">
      <input
        ref={textInput}
        id={name}
        name={name}
        type="text"
        className="peer h-10 w-16 border-b-2 border-rose-300 text-rose-900 placeholder-transparent focus:outline-none focus:border-rose-600 text-right"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label
        htmlFor={name}
        className="absolute right-0 -top-3.5 text-rose-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-rose-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-rose-200 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};
