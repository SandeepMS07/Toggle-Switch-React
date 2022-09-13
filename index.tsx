import { useState } from "react";

interface ToggleProps {
  handleChange: any;
  enabled?: any; 
}

const ToggleSwitch = ({
  handleChange,
  enabled, 
}: ToggleProps) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(enabled, "enabled");
  console.log(isSelected, "isselectd");
  return (
    <div>
      <div
        onClick={() => {
          if (enabled == false) {
            setIsSelected(enabled);
          } else {
            setIsSelected(!isSelected);
          }
          //   handleStatusChange();
        }}
      >
        <div
          className={`${
            enabled == false ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <div
            className={`flex w-10 h-5 rounded-full transition-all duration-500   ${
              enabled == false
                ? "bg-gray-400"
                : isSelected
                ? "bg-blue-600"
                : "bg-gray-600"
            }`}
            onChange={handleChange}
          >
            <span
              className={`h-4 w-4 m-[2px] bg-white rounded-full transition-all duration-300 shadow-xl ${
                isSelected && "ml-5"
              }  ${enabled && enabled == false && "ml-0"}`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
