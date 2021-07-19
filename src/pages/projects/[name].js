import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import { projects } from "../../data/projects";

import { ProcessContext } from "./../../contexts/ProcessContext";

import { Layout } from "../../components/Layout";
import { LineInput } from "../../components/LineInput";

export default function ProjectPage({ project }) {
  const router = useRouter();

  const { process, setProcess } = useContext(ProcessContext);

  useEffect(() => {}, []);

  const inputHandler = (e) => {
    console.log(e);
  };

  const launchProcess = (project) => {
    setProcess([...process, project]);
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
      <div className="flex flex-row">
        Name :{" "}
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

      <div className="flex flex-row">
        Github :{" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .changeCursor("▉")
              .changeDelay(10)
              .typeString(
                `<a target="_blank" rel="noreferrer" href="${project.github}">${project.github}</a>`
              )
              .callFunction((state) => {
                state.elements.cursor.style.animation = "none";
                state.elements.cursor.style.display = "none";
              });
          }}
        />
      </div>
      <div className="flex flex-row">
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
