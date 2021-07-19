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
              .pauseFor(50)
              .typeString("I am Aniket.")
              .typeString("<br />")
              .pauseFor(500)
              .typeString("Welcome to my portfolio.")
              .pauseFor(1000)
              .callFunction(() => {
                setShowText(true);
              })
              .start();
          }}
        />
      )}

      {showText && (
        <div>
          Hello! I am Aniket. <br /> Welcome to my portfolio.
        </div>
      )}

      {showText && <div></div>}
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
