import React from "react";

import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function Contact() {
  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <Layout title={"Contact"}>
      Contact <br />
      email:<span className="hover:text-red-500"> sprx077@gmail.com</span>{" "}
      <br />
      linkedIn:{" "}
      <a
        className="hover:text-red-500"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/dikwickley/"
      >
        https://www.linkedin.com/in/dikwickley/
      </a>{" "}
      <br />
      instagram:{" "}
      <a
        className="hover:text-red-500"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/aniket.singh.rawat/"
      >
        https://www.instagram.com/aniket.singh.rawat/
      </a>{" "}
      <br />
      <LineInput inputHandler={inputHandler} />
    </Layout>
  );
}
