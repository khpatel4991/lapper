import { MouseEventHandler } from "react";

interface Props {
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export const AddSector = ({ label, handleClick }: Props) => {
  return (
    <div className="flex space-x-2 justify-center mt-10">
      <div>
        <button
          onClick={handleClick}
          type="button"
          className="inline-block px-6 pt-2.5 pb-2 bg-rose-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            role="img"
            aria-hidden="true"
            focusable="false"
            data-prefix="add"
            data-icon="add"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          {label}
        </button>
      </div>
    </div>
  );
};
