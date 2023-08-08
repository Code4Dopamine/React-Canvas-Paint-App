import React from "react";

const CanvasTool = (props) => {
  
  //Show Icon (emoji) if not passed font-awesome parameter
  let icon
  if (props.icon.length === 1){
    icon = props.icon
  }

  // w-auto hover:text-stone-500
  return (
    <li className="option tool rounded-xl w-auto p-2 hover:bg-slate-500 active:bg-rose-300" id="line">
      <span className="tool-choice">
        {/* <i className="fa-solid fa-ruler fa-sm"></i> {props.label} */}
        <i className={!icon && props.icon}></i> {icon && props.icon} {props.label}
      </span>
    </li>
  );
};

export default CanvasTool;
