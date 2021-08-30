import React, { useContext, useState } from "react";
import Draggable from "react-draggable"; // The default
import { Resizable } from "react-resizable";
import { Rnd } from "react-rnd";

import Link from "next/link";

import { ProcessContext } from "../contexts/ProcessContext";

const ProcessNav = ({ project, kill, changeFocus, focus }) => {
  return (
    <div
      // onClick={changeFocus}
      onMouseDown={changeFocus}
      className={`h-[40px] w-[100%] cursor-move  ${
        focus ? "bg-gray-300" : "bg-gray-200"
      } flex flex-row p-1 px-2 rounded-t-md items-center relative`}
    >
      <div className="absolute flex flex-row items-center">
        <div
          onClick={(e) => {
            console.log("hi");
            kill(project);
          }}
          className={`navbtn h-[20px] w-[20px] mr-2 ${
            focus ? "bg-red-500" : "bg-red-400"
          } rounded-full cursor-pointer`}
        ></div>
        <a target="_blank" rel="noreferrer" href={project.url}>
          <div
            className={`navbtn h-[20px] w-[20px] mr-2 ${
              focus ? "bg-green-500" : "bg-green-400"
            } rounded-full`}
          ></div>
        </a>
      </div>
      <div className="mx-auto">{project.name}</div>
    </div>
  );
};

export const Launch = ({ project, index, changeFocus, focus }) => {
  const { process, setProcess } = useContext(ProcessContext);

  const kill = (project) => {
    let processes = [...process];
    processes.splice(process.indexOf(project), 1);
    setProcess(processes);
  };

  return (
    <Rnd
      default={{
        x: window.innerWidth / 3 + (index + 1) * 20,
        y: window.innerHeight / 3 + (index + 1) * 20,
        width:
          window.innerHeight > window.innerWidth
            ? window.innerHeight / 3
            : window.innerWidth / 4,
        height:
          window.innerHeight > window.innerWidth
            ? window.innerWidth / 2
            : window.innerHeight / 4,
      }}
      className={`absolute flex flex-col overflow-hidden bg-white rounded-md rounded-t-lg shadow-2xl ${
        focus === index ? "z-50" : "z-20"
      }`}
      cancel=".navbtn"
      bounds=".main-div"
      onMouseDown={changeFocus}
    >
      <ProcessNav
        project={project}
        kill={kill}
        changeFocus={changeFocus}
        focus={focus === index}
      />
      <iframe src={project.url} className="w-[100%] h-[90%] " frameBorder={0} />
    </Rnd>
  );
};
