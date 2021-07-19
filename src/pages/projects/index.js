import Link from "next/dist/client/link";
import React from "react";
import { projects } from "../../data/projects";
import { Layout } from "../../components/Layout";
import { LineInput } from "../../components/LineInput";

export default function Projects() {
  const inputHandler = (e) => {
    console.log(e);
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
                  <div className="cursor-pointer hover:text-purple-600 ]">
                    {index + 1}&gt; {project.name}
                  </div>
                </Link>
                : <div className="text-green-500 cursor-pointer">view</div> /{" "}
                <div className="text-red-500 cursor-pointer">launch</div>
              </div>
            );
          })}
        </div>
      </div>
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
