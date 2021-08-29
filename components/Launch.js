import React, { useContext, useState } from "react";
import Draggable from "react-draggable"; // The default
import { Resizable } from "react-resizable";
import { Rnd } from "react-rnd";

import Link from "next/link";

import { ProcessContext } from "../contexts/ProcessContext";

const ProcessNav = ({ project, kill }) => {
  return (
    <div className="h-[40px] w-[100%] cursor-move  bg-gray-300 flex flex-row p-1 px-2 rounded-t-md items-center relative">
      <div className="absolute flex flex-row items-center">
        <div
          onClick={(e) => {
            console.log("hi");
            kill(project);
          }}
          className="navbtn h-[20px] w-[20px] mr-2 bg-red-500 rounded-full cursor-pointer"
        ></div>
        <a target="_blank" rel="noreferrer" href={project.url}>
          <div className="navbtn h-[20px] w-[20px] mr-2 bg-green-500 rounded-full"></div>
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
    // <Draggable
    //   cancel=".navbtn, .resize-button"
    //   defaultPosition={{ x: index * 20, y: index * 20 }}
    // >
    <Rnd
      default={{
        x: window.innerWidth / 3 + (index + 1) * 20,
        y: window.innerHeight / 3 + (index + 1) * 20,
        width: 520,
        height: 300,
      }}
      className="absolute z-20 flex flex-col overflow-hidden bg-white rounded-md rounded-t-lg shadow-2xl"
    >
      <ProcessNav project={project} kill={kill} />
      <iframe src={project.url} className="w-[100%] h-[90%] " frameBorder={0} />
    </Rnd>
    // </Draggable>
  );
};
