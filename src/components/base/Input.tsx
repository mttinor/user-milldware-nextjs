import React, { HTMLInputTypeAttribute } from "react";

interface IInputType {
  type?: HTMLInputTypeAttribute;
  title?: string;
  value?: number | string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputType> = ({
  type = "text",
  title,
  value,
  onChangeValue,
}: IInputType) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <input
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};



export default Input;
