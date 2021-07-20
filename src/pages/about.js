import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";

export default function About() {
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
    <Layout title={"About"}>
      About <br />
      I am a webdeveloper.
      <LineInput inputHandler={inputHandler} />
      {inputError && <div className="text-red-500">Wrong input!</div>}
    </Layout>
  );
}
