import React, { useRef, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";

const DropDown = () => {
  return;
};

export const Nav = () => {
  const menuRef = useRef(null);
  const [menuState, setMenuState] = useDetectOutsideClick(menuRef, false);
  const optionsRef = useRef(null);
  const [optionsState, setOptionsState] = useDetectOutsideClick(
    optionsRef,
    false
  );

  const openMenu = () => {
    setMenuState(!menuState);
  };
  const openOptions = () => {
    setOptionsState(!optionsState);
  };

  return (
    <div className="h-[5vh] bg-gray-300 rounded-t-md flex flex-row items-center px-4 relative">
      <div className="flex flex-row absolute">
        <div className="h-[2vh] w-[2vh] bg-red-500 hover:bg-red-600 rounded-full mr-2 cursor-pointer"></div>

        <div
          className="h-[2vh] w-[2vh] bg-yellow-500 hover:bg-yellow-600 rounded-full mr-2 cursor-pointer relative"
          onClick={openOptions}
          data-tip
          data-for="options-tip"
        >
          <div
            className={`w-[200px]  h-[200px] absolute mt-10  bg-gray-100 rounded p-2 ${
              optionsState ? "visible" : "hidden"
            }`}
            ref={optionsRef}
          >
            Options
          </div>
        </div>

        <ReactTooltip id="options-tip" place="top" type="dark" effect="solid">
          Options
        </ReactTooltip>

        <div
          className="h-[2vh] w-[2vh] bg-green-500 hover:bg-green-600 rounded-full mr-2 cursor-pointer relative"
          onClick={openMenu}
          data-tip
          data-for="menu-tip"
        >
          <div
            className={`w-[200px]  h-[200px] absolute mt-10  bg-gray-100 rounded p-2 ${
              menuState ? "visible" : "hidden"
            }`}
            ref={menuRef}
          >
            Menu
          </div>
        </div>

        <ReactTooltip id="menu-tip" place="top" type="dark" effect="solid">
          Menu
        </ReactTooltip>
      </div>
      <div className="mx-auto md:text-lg text-sm">Aniket Singh Rawat</div>
    </div>
  );
};
