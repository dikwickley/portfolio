import Link from "next/dist/client/link";
import React from "react";
import data from "../../data/projects.json";
import { Layout } from "../../components/Layout";
import { LineInput } from "../../components/LineInput";

export default function Projects() {
  const inputHandler = (e) => {
    console.log(e);
  };
  console.log("hi");
  console.log(data);

  return (
    <Layout title={"Projects"}>
      <div>
        Hello! I am Aniket. <br /> Welcome to my portfolio.
      </div>
      <br />
      <div>
        <div>Click or input a choice:</div>
        <Link href="/projects">
          <div className="cursor-pointer hover:text-green-600">
            1&gt; Projects
          </div>
        </Link>
        <Link href="/about">
          <div className="cursor-pointer hover:text-green-600">2&gt; About</div>
        </Link>
        <Link href="/contact">
          <div className="cursor-pointer hover:text-green-600">
            3&gt; Contact
          </div>
        </Link>
      </div>
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
