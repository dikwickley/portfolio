import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import { projects } from "../../data/projects";

import { ProcessContext } from "./../../contexts/index";

import { Layout } from "../../components/Layout";
import { LineInput } from "../../components/LineInput";

export default function ProjectPage({ project }) {
  const router = useRouter();
  console.log(router);
  const { process, setProcess } = useContext(ProcessContext);

  useEffect(() => {}, []);

  const [inputError, setInputError] = useState(false);
  const hideError = setInterval(() => {
    setInputError(false);
  }, 20000);
  const inputHandler = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      if (e.target.value === "cd") {
        router.push("/projects");
      } else {
        setInputError(true);
        hideError;
      }
    }
  };

  const launchProcess = (project) => {
    // console.log(project);

    let processes = [...process];
    //check if process already running
    for (let i = 0; i < process.length; i++) {
      if (process[i] !== null && process[i].name == project.name) {
        setFocus(i);
        return;
      }
    }

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
  };

  return (
    <Layout title={`Project | ${project.name} `}>
      <div className="flex">
        <a target="_blank" rel="noreferrer" href={`${project.url}`}>
          <div className="text-green-500 cursor-pointer">view</div>
        </a>
        /
        <div
          onClick={() => {
            launchProcess(project);
          }}
          className="text-red-500 cursor-pointer"
        >
          launch
        </div>
      </div>
      <br />
      <div className="flex flex-col break-words">
        Name :
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .changeCursor("▉")
              .changeDelay(10)
              .typeString(project.name)
              .callFunction((state) => {
                state.elements.cursor.style.animation = "none";
                state.elements.cursor.style.display = "none";
              });
          }}
        />
      </div>

      <div className="flex flex-col break-words">
        Github :{" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .changeCursor("▉")
              .changeDelay(10)
              .typeString(
                `<a target="_blank"  rel="noreferrer" href="${project.github}">${project.github}</a>`
              )
              .callFunction((state) => {
                state.elements.cursor.style.animation = "none";
                state.elements.cursor.style.display = "none";
              });
          }}
        />
      </div>
      <div className="flex flex-col break-words">
        About :{" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .changeCursor("▉")
              .changeDelay(10)
              .typeString(project.about)
              .callFunction((state) => {
                state.elements.cursor.style.animation = "none";
                state.elements.cursor.style.display = "none";
              });
          }}
        />
      </div>
      <LineInput inputHandler={inputHandler} />
      {inputError && <div className="text-red-500">Wrong input!</div>}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.params;
  let props = {};
  for (let i = 0; i < projects.length; i += 1) {
    if (name == projects[i].name) {
      props["project"] = projects[i];
      break;
    }
  }

  return {
    props,
  };
}
