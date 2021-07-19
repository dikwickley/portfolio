import React from "react";

import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function Contact() {
  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <Layout title={"Contact"}>
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
