import { useState } from "react";
import "../styles/globals.css";
import { ProcessContext } from "./../contexts/ProcessContext";

function MyApp({ Component, pageProps }) {
  const [process, setProcess] = useState([]);
  return (
    <ProcessContext.Provider value={{ process, setProcess }}>
      <Component {...pageProps} />
    </ProcessContext.Provider>
  );
}

export default MyApp;
