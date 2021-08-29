import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { LineInput } from "../components/LineInput";
import Image from "next/image";

export default function About() {
  const router = useRouter();

  const [inputError, setInputError] = useState(false);
  const [resumeToggle, setResumeToggle] = useState(false);

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
      I am a webdeveloper. <br />
      {/* <a href="/Aniket_resume20210827.pdf" download >portfolio</a> */}
      Resume -{" "}
      <span
        className={`cursor-pointer hover:${
          !resumeToggle ? "text-green-600" : "text-red-600"
        }`}
        onClick={() => setResumeToggle(!resumeToggle)}
      >
        {!resumeToggle ? "View" : "Hide"}
      </span>{" "}
      |{" "}
      <span className="cursor-pointer hover:text-blue-600 ">
        <a href="/Aniket_resume20210827.pdf" download>
          Download
        </a>
      </span>
      {resumeToggle && (
        <img
          src="https://aniketsinghrawat.vercel.app/Aniket_resume20210827.jpg"
          alt="resume"
        />
      )}
      <LineInput inputHandler={inputHandler} />
      {inputError && <div className="text-red-500">Wrong input!</div>}
    </Layout>
  );
}
