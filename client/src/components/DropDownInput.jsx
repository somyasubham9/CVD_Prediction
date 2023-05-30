import React, { useState } from "react";

const DropdownInput = ({options,labelName,handleChange,name,value,form,setForm}) => {
  

  const [selectedOption, setSelectedOption] = useState('');
  const handleDropdownChange = (event) => {
    setForm({ ...form, [name]: event.target.value });
    setSelectedOption(event.target.value);
    // console.log(form)
  };
  

  return (
    <div>
   <div className="flex items-center gap-2 py-2">
        <label
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
      </div>

      <div className="">
      <select
        value={selectedOption}
        onChange={handleDropdownChange}
        className="not-italic font-normal text-sm leading-6 text-[#101828] bg-[#ffffff] box-border flex flex-row items-center justify-between gap-2 w-56 h-[46px] border shadow-[0px 1px 2px rgba(16,24,40,0.05)] px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD] cursor-pointer focus:border-[#1e1e1e]"
      >
        <option hidden className=" w-full h-full cursor-pointer hover:bg-[#f2f2f2] " value="">Select an option</option>
      {options.map((o,i)=>{return(<option key={i} className="cursor-pointer hover:bg-[#f2f2f2" name={name} value={value}>{o}</option>)})}

      </select>
    </div>
    </div>
  );
};

export default DropdownInput;

