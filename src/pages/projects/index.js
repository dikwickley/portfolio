import Link from "next/dist/client/link";
import React, { useContext, useEffect } from "react";

import { ProcessContext } from "./../../contexts/ProcessContext";

import { projects } from "../../data/projects";

import { Layout } from "../../components/Layout";
import { LineInput } from "../../components/LineInput";

export default function Projects() {
  const { process, setProcess } = useContext(ProcessContext);

  const inputHandler = (e) => {
    console.log(e);
  };

  const launchProcess = (project) => {
    setProcess([...process, project]);
  };

  return (
    <Layout title={"Projects"}>
      <div>These are some of my projects</div>
      <br />
      <div>
        <div>Click or input a choice:</div>

        <div>
          {projects.map((project, index) => {
            return (
              <div className="flex flex-row " key={index}>
                <Link href={`/projects/${project.name}`}>
                  <div className="cursor-pointer hover:text-purple-600 w-[200px]">
                    {index + 1}&gt; {project.name}:
                  </div>
                </Link>
                <a target="_blank" href={`${project.url}`}>
                  <div className="text-green-500 cursor-pointer">view</div>
                </a>{" "}
                /{" "}
                <div
                  onClick={() => {
                    launchProcess(project);
                  }}
                  className="text-red-500 cursor-pointer"
                >
                  launch
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
