import React from "react";

import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function Contact() {
  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <Layout title={"Contact"}>
      email: sprx077@gmail.com
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
