import React, { useContext } from "react";
import Draggable from "react-draggable"; // The default
import Link from "next/link";

import { ProcessContext } from "../contexts/ProcessContext";

const ProcessNav = ({ project, kill }) => {
  return (
    <div className="h-[4vh] cursor-move  bg-gray-300 flex flex-row p-1 px-2 rounded-t-md items-center relative">
      <div className="absolute flex flex-row items-center">
        <div
          onClick={(e) => {
            e.stopPropagation()
            console.log("hi");
            kill(project);
          }}
          className="h-[2vh] w-[2vh] mr-2 bg-red-500 rounded-full cursor-pointer"
        ></div>
        <a target="_blank" rel="noreferrer" href={project.url}>
          <div className="h-[2vh] w-[2vh] mr-2 bg-green-500 rounded-full"></div>
        </a>
      </div>
      <div className="mx-auto">{project.name}</div>
    </div>
  );
};

export const Launch = ({ project, index }) => {
  const { process, setProcess } = useContext(ProcessContext);
  const kill = (project) => {
    let processes = [...process];
    processes.splice(process.indexOf(project), 1);
    setProcess(processes);
  };
  return (
    <Draggable defaultPosition={{ x: index * 20, y: index * 20 }}>
      <div className="w-[35vh] h-[25vh]  md:w-[30vw] md:h-[30vh] bg-white absolute z-20 rounded-md rounded-t-lg shadow-2xl flex flex-col overflow-hidden">
        <ProcessNav project={project} kill={kill} />
        <div className="flex-grow">
          <iframe
            src={project.url}
            className="w-[100%] h-[100%] "
            frameBorder={0}
          />
        </div>
      </div>
    </Draggable>
  );
};
