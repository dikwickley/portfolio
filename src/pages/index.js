import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";

import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [option, setOption] = useState(0);

  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <Layout title={"Home"}>
      {!showText && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeCursor("▉")
              .changeDelay(10)
              .typeString("Hello! ")
              .typeString("I am Aniket.")
              .typeString("<br />")
              .pauseFor(20)
              .typeString("Welcome to my portfolio.")
              .pauseFor(500)
              .typeString(
                "<br /><br />Click or input a choice:<br /> 1> Projects "
              )
              .pauseFor(20)
              .typeString("<br /> 2> About ")
              .pauseFor(20)
              .typeString("<br /> 3> Contact ")
              .pauseFor(500)
              .callFunction(() => {
                setShowText(true);
              })
              .start();
          }}
        />
      )}

      {showText && (
        <div>
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
              <div className="cursor-pointer hover:text-green-600">
                2&gt; About
              </div>
            </Link>
            <div className="cursor-pointer hover:text-green-600">
              3&gt; Contact
            </div>
          </div>
        </div>
      )}

      {showText && <div></div>}
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
