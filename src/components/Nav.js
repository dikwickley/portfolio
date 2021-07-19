import React, { useRef, useState } from "react";
import Link from "next/link";

import ReactTooltip from "react-tooltip";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";

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
    setOptionsState(false);
  };
  const openOptions = () => {
    setOptionsState(!optionsState);
    setMenuState(false);
  };

  return (
    <div className="h-[5vh] bg-gray-300 rounded-t-md flex flex-row items-center px-4 relative">
      <div className="absolute flex flex-row">
        <Link href="/">
          <div className="h-[2vh] w-[2vh] bg-red-500 hover:bg-red-600 rounded-full mr-2 cursor-pointer"></div>
        </Link>
        <div
          className="h-[2vh] w-[2vh] bg-yellow-500 hover:bg-yellow-600 rounded-full mr-2 cursor-pointer relative"
          onClick={openOptions}
          data-tip
          data-for="options-tip"
        >
          <div
            className={`w-[200px]  h-[200px] absolute mt-10  bg-gray-100 rounded p-2 z-50 ${
              optionsState ? "visible" : "hidden"
            }`}
            ref={optionsRef}
          >
            Options
          </div>
        </div>

        {/* <ReactTooltip id="options-tip" place="top" type="dark" effect="solid">
          Options
        </ReactTooltip> */}

        <div
          className="h-[2vh] w-[2vh] bg-green-500 hover:bg-green-600 rounded-full mr-2 cursor-pointer relative"
          onClick={openMenu}
          data-tip
          data-for="menu-tip"
        >
          <div
            className={`w-[150px]  absolute mt-10  bg-gray-100 rounded p-1 text-center z-50 ${
              menuState ? "visible" : "hidden"
            }`}
            ref={menuRef}
          >
            <div className="p-1 text-left">
              <div className="py-1 border-b-2 border-gray-300">
                <Link href="/">
                  <span>
                    <u>H</u>ome <br />
                  </span>
                </Link>
                <Link href="/about">
                  <span>
                    <u>A</u>bout <br />
                  </span>
                </Link>
              </div>
              <div className="py-1 border-b-2 border-gray-300">
                <Link href="/projects">
                  <span>
                    <u>Pr</u>ojects
                  </span>
                </Link>
              </div>
              <div className="py-1 ">
                <Link href="/contact">
                  <span>
                    <u>C</u>ontact
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <ReactTooltip id="menu-tip" place="top" type="dark" effect="solid">
          Menu
        </ReactTooltip> */}
      </div>
      <div className="mx-auto text-sm md:text-lg">Aniket Singh Rawat</div>
    </div>
  );
};
