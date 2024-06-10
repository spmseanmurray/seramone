import React, { ChangeEventHandler } from "react";

interface StandardInputParams {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
  icon: React.ReactNode;
}

function StandardInput({
  id,
  type,
  placeholder,
  onChange,
  icon,
  value,
}: StandardInputParams) {
  return (
    <div className="flex flex-col gap-2">
      <div className="label-text">{placeholder}</div>
      {icon ? (
        <div className="input-group">
          <span className="w-16 justify-center">{icon}</span>
          <input
            id={id}
            required
            type={type}
            value={value}
            placeholder={placeholder}
            className="input input-bordered w-full"
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          id={id}
          required
          type={type}
          value={value}
          placeholder={placeholder}
          className="input input-bordered w-full"
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default StandardInput;
