import Link from "next/dist/client/link";
import React, { useContext, useState } from "react";

import { ProcessContext } from "../../contexts";

import { projects } from "../../data/projects";

import { Layout } from "../../components/Layout";
import { LineInput } from "../../components/LineInput";
import router from "next/router";

export default function Projects() {
  const { process, setProcess } = useContext(ProcessContext);

  const [inputError, setInputError] = useState(false);
  const hideError = setInterval(() => {
    setInputError(false);
  }, 2000);

  const inputHandler = (e) => {
    // console.log(e.key);
    // console.log(e.target.value);

    if (e.target.value === "cd" && e.key === "Enter") {
      router.push("/");
      return;
    }

    let projectNum = parseInt(e.target.value);
    if (e.key === "Enter")
      if (projectNum > projects.length) {
        setInputError(true);
        hideError;
      } else {
        router.push(`/projects/${projects[projectNum - 1].name}`);
      }
  };

  const launchProcess = (project) => {
    // console.log(project);

    let processes = [...process];
    for (let i = 0; i < process.length; i++) {
      if (processes[i] === null) {
        //also condition for if process already exists can be put here
        project.position = {
          x: window.innerWidth / 3 + (i + 1) * 20,
          y: window.innerHeight / 3 + (i + 1) * 20,
        };
        processes[i] = project;
        break;
      }
    }

    setProcess(processes);
    console.log({ process });
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
                <a target="_blank" rel="noreferrer" href={`${project.url}`}>
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
      {inputError && <div className="text-red-500">Wrong input!</div>}
    </Layout>
  );
}
