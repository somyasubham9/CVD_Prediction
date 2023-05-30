import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  isSurpriseMe,
  handleSurpriseMe,
  handleChange,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-2 ">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-[#ffffff] border w-56 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block p-3 w-56"
      />
    </div>
  );
};

export default FormField;
