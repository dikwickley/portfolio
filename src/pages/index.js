import { useState } from "react";
import { Layout } from "../components/Layout";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [option, setOption] = useState(0);

  return (
    <Layout title={"Home"}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(150)
            .typeString("Hello! ")
            .pauseFor(500)
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
      {showText && (
        <div>
          <br /> <br />
          Consectetur eu anim minim sunt nulla minim labore cupidatat pariatur
          officia eu eu pariatur amet. Incididunt nisi proident occaecat minim
          nulla reprehenderit sint irure laboris. Eiusmod et esse excepteur
          minim do ea velit in do dolor sint officia. Laborum non tempor aute
          magna sunt officia. Velit commodo non sunt exercitation dolore
          adipisicing irure id velit sit. Commodo occaecat id sit non ipsum
          pariatur qui.
          <br /> <br />
          Consectetur eu anim minim sunt nulla minim labore cupidatat pariatur
          officia eu eu pariatur amet. Incididunt nisi proident occaecat minim
          nulla reprehenderit sint irure laboris. Eiusmod et esse excepteur
          minim do ea velit in do dolor sint officia. Laborum non tempor aute
          magna sunt officia. Velit commodo non sunt exercitation dolore
          adipisicing irure id velit sit. Commodo occaecat id sit non ipsum
          pariatur qui.
          <br /> <br />
          Consectetur eu anim minim sunt nulla minim labore cupidatat pariatur
          officia eu eu pariatur amet. Incididunt nisi proident occaecat minim
          nulla reprehenderit sint irure laboris. Eiusmod et esse excepteur
          minim do ea velit in do dolor sint officia. Laborum non tempor aute
          magna sunt officia. Velit commodo non sunt exercitation dolore
          adipisicing irure id velit sit. Commodo occaecat id sit non ipsum
          pariatur qui.
          <br /> <br />
          Consectetur eu anim minim sunt nulla minim labore cupidatat pariatur
          officia eu eu pariatur amet. Incididunt nisi proident occaecat minim
          nulla reprehenderit sint irure laboris. Eiusmod et esse excepteur
          minim do ea velit in do dolor sint officia. Laborum non tempor aute
          magna sunt officia. Velit commodo non sunt exercitation dolore
          adipisicing irure id velit sit. Commodo occaecat id sit non ipsum
          pariatur qui.
        </div>
      )}
    </Layout>
  );
}
