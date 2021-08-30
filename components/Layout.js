import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { ProcessContext } from "./../contexts/ProcessContext";

import { Nav } from "./Nav";
import { Launch } from "./Launch";

export function Layout({ children, title = "This is the default title" }) {
  const { process, setProcess } = useContext(ProcessContext);
  const [focus, setFocus] = useState(0);

  useEffect(() => {}, [process]);

  return (
    <div className="bg-gray-200 h-[100vh] flex flex-col justify-center items-center max-w-full overflow-x-hidden main-div">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="theme-color" content="#e5e7eb" />
        <meta name="msapplication-navbutton-color" content="#e5e7eb" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#e5e7eb" />
      </Head>

      {process.map((project, index) => {
        return (
          <Launch
            project={project}
            index={index}
            key={index}
            changeFocus={() => {
              setFocus(index);
            }}
            focus={focus}
          />
        );
      })}

      <div className="w-[90vw] md:w-[70vw] h-[80vh] bg-black rounded-md rounded-t-lg shadow-2xl">
        <Nav />
        <div className="max-h-[90%] p-2 md:p-4 overflow-auto font-mono text-white main overflow-x-hidden  sm:text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
