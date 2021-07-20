import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

import { useRouter } from "next/router";

import { nameart } from "./../data/nameart";
import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function Home() {
  const router = useRouter();

  const [showText, setShowText] = useState(false);
  const [option, setOption] = useState(0);
  const [ascii, setAscii] = useState(
    Math.floor(Math.random() * nameart.length)
  );

  const [inputError, setInputError] = useState(false);
  const hideError = setInterval(() => {
    setInputError(false);
  }, 20000);

  const inputHandler = (e) => {
    // console.log(e.key);
    // console.log(e.target.value);

    if (e.key === "Enter")
      switch (e.target.value) {
        case "1":
          router.push("/projects");
          break;
        case "2":
          router.push("/about");
          break;
        case "3":
          router.push("/contact");
          break;
        default:
          setInputError(true);
          hideError;
      }
  };

  return (
    <Layout title={"Home"}>
      <pre
        className="cursor-pointer"
        onClick={(e) => {
          setAscii(Math.floor(Math.random() * nameart.length));
        }}
      >
        {nameart[ascii]}
      </pre>
      {!showText && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeCursor("▉")
              .changeDelay(10)
              .typeString("Hello! ")
              .typeString("<br />")
              .pauseFor(20)
              .typeString("Welcome to my portfolio.")
              .pauseFor(100)
              .typeString(
                "<br /><br />Click or input a choice:<br /> 1> Projects "
              )
              .pauseFor(20)
              .typeString("<br /> 2> About ")
              .pauseFor(20)
              .typeString("<br /> 3> Contact ")
              .pauseFor(500)
              .callFunction((state) => {
                setShowText(true);
                state.elements.cursor.style.animation = "none";
                state.elements.cursor.style.display = "none";
              })
              .start();
          }}
        />
      )}

      {showText && (
        <div>
          <div>
            Hello! <br /> Welcome to my portfolio.
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
            <Link href="/contact">
              <div className="cursor-pointer hover:text-green-600">
                3&gt; Contact
              </div>
            </Link>
          </div>
        </div>
      )}

      {showText && <div></div>}

      <LineInput inputHandler={inputHandler} />
      {inputError && <div className="text-red-500">Wrong input!</div>}
    </Layout>
  );
}
