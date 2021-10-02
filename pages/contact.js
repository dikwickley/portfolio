import React, { useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function Contact() {
  const router = useRouter();

  const [inputError, setInputError] = useState(false);

  const hideError = setInterval(() => {
    setInputError(false);
  }, 20000);

  const inputHandler = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      if (e.target.value === "cd") {
        router.push("/");
      } else {
        setInputError(true);
        hideError;
      }
    }
  };

  return (
    <Layout title={"Contact"}>
      Contact <br />
      email:<span className="hover:text-red-500">
        {" "}
        aniket.txt@gmail.com
      </span>{" "}
      <br />
      linkedIn:{" "}
      <a
        className="break-words hover:text-red-500"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/dikwickley/"
      >
        https://www.linkedin.com/in/dikwickley
      </a>{" "}
      <br />
      instagram:{" "}
      <a
        className="break-words hover:text-red-500"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/aniket.singh.rawat/"
      >
        https://www.instagram.com/aniket.singh.rawat/
      </a>{" "}
      <br />
      <LineInput inputHandler={inputHandler} />
      {inputError && <div className="text-red-500">Wrong input!</div>}
    </Layout>
  );
}
