import { useState } from "react";
import "../styles/globals.css";
import { ProcessContext, FocusContext } from "../contexts";
import { projects } from "../data/projects";

function MyApp({ Component, pageProps }) {
  const [process, setProcess] = useState(new Array(projects.length).fill(null));
  const [focus, setFocus] = useState(0);

  return (
    <FocusContext.Provider value={{ focus, setFocus }}>
      <ProcessContext.Provider value={{ process, setProcess }}>
        <Component {...pageProps} />
      </ProcessContext.Provider>
    </FocusContext.Provider>
  );
}

export default MyApp;
