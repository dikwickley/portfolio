import React from "react";

import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function About() {
  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <Layout title={"About"}>
      I am a webdeveloper.
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
