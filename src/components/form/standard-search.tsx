import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { FaSearch } from "react-icons/fa";

interface StandardSearchParams {
  onChange: ChangeEventHandler;
  onClick: MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
}

function StandardSearch({
  onChange,
  onClick,
  placeholder,
}: StandardSearchParams) {
  return (
    <div className="input-group justify-end">
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered bg-neutral bg-opacity-50"
        onChange={onChange}
      />
      <button
        type="submit"
        className="btn btn-square btn-primary"
        onClick={onClick}
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default StandardSearch;
