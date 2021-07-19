import React from "react";

import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function Projects() {
  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <Layout title={"Projects"}>
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
