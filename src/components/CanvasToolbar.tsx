// import React from "react";

import CanvasTool from "./CanvasTool";

const CanvasToolbar = () => {
  const test = "hover:border-2 border-black focus:border-2 border-black";

  /*
      <li className="option active tool" id="brush">
      <span className="tool-choice">
        <i className="fa-solid fa-brush fa-sm"></i> Brush
      </span>
    </li>
    <li className="option tool" id="line">
      <span className="tool-choice">
        <i className="fa-solid fa-ruler fa-sm"></i> Line
      </span>
    </li>

    <li className="option tool" id="eraser">
      <span className="tool-choice">
        <i className="fa-solid fa-eraser fa-sm"></i> Eraser
      </span>
    </li>

    <li>
      <span className="label">
        <i className="fa-solid fa-eraser fa-sm"></i> Eraser
      </span>
    </li>

    <li className="option tool" id="rectangle">
      <span className="tool-choice">▭ Rectangle</span>
    </li>

    <li className="option tool" id="circle">
      <span className="tool-choice">◯ Circle</span>
    </li>

    <li className="option tool" id="triangle">
      <span className="tool-choice">△ Triangle</span>
    </li>
   */

{/* Color Picker */}
{/* <li>
  <input type="color" id="color-picker" value="#FFFFFF" />
</li> */}

  return (
    <div className="flex flex-col justify-center w-[200px] bg-white p-5 rounded-xl">
      <ul className="options flex flex-col gap-1 justify-around">
        
        <label htmlFor="" className="text-center">Tools</label>
        <hr></hr>

        <CanvasTool icon="fa-solid fa-brush fa-sm" label="Brush" />
        <CanvasTool icon="fa-solid fa-ruler fa-sm" label="Line"/>
        <CanvasTool icon="fa-solid fa-eraser fa-sm" label="Eraser" />
        <CanvasTool icon="▭" label="Rectangle" />
        <CanvasTool icon="◯" label="Circle" />
        <CanvasTool icon="△" label="Triangle" />
        {/* <button className="bg-rose-400 hover:bg-rose-800">Test</button> */}


      </ul>

      <div>
        <label className="label cursor-pointer">
          <span className="label-text">Color Fill:</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <input
          type="range"
          min={0}
          max="100"
          value="25"
          className="range range-xs"
        />
        <div className="w-full flex justify-between text-xs px-2 pb-4">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>

      {/* Original picker */}
      {/* <div className="row">
        <ul className="options">
          <label className="toggle flex space-x-2">
            <span className="tool-choice">
              <i className="fa-solid fa-shapes fa-sm"></i> Fill
            </span>
            <input type="checkbox" id="fill-color" />
            <span className="slider"></span>
          </label>
          <label className="option">
            <input type="range" id="size-slider" min="1" max="30" value="5" />
          </label>
        </ul>
      </div> */}

      {/* Other */}
      <div className="colors flex flex-col justify-center items-center border-2 rounded-lg py-2 px-2">
        <p>Color</p>
        <div className="grid grid-cols-5 grid-rows-2 gap-2 py-2">
          <button
            className={`bg-[#ff0000] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#ff9500] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#ffe100] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#64de2f] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#195bff] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#8f08e9] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#ff46f9] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#714520] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#b2b2b2] w-[20px] h-[20px] rounded-full ${test}`}
          ></button>
          <button
            className={`bg-[#000000] w-[20px] h-[20px] rounded-full hover:border-2 border-[#ff9500] focus:border-2 border-[#ff9500]`}
          ></button>
        </div>

        <div className="py-2 flex justify-center items-center gap-1">
          <label className="text-sm">Color Picker: </label>
          <input
            className="rounded-lg"
            type="color"
            id="color-picker"
            value="#FFFFFF"
          />
        </div>
        {/* <ul
          className="options flex gap-1 justify-center items-center"
          id="paint-options"
        >
          <li className="option bg-[#] w-[20px] h-[20px] selected rounded-full"></li>
          <li className="option"></li>
          <li className="option"></li>
          <li className="option"></li>
          <li className="option"></li>
          <li className="option"></li>
          <li className="option"></li>
          <li className="option"></li>
          <li className="option"></li>
        </ul> */}
        {/* <li className="option">
          <input type="color" id="color-picker" value="#FFFFFF" />
        </li> */}
      </div>
    </div>
  );
};

export default CanvasToolbar;
