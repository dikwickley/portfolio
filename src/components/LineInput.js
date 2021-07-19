import React from "react";
import Link from "next/link";

import Clock from "react-live-clock";
import { useRouter } from "next/router";

export const LineInput = ({ inputHandler }) => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-between m-2">
      <div className="flex flex-col md:flex-row ">
        <div>
          <span className="text-blue-400">aniket</span>:~/
          <Link href="/">
            <span className="cursor-pointer hover:text-red-600">home</span>
          </Link>
          {router.pathname == "/" ? "" : router.asPath} ${" "}
        </div>

        <input
          onKeyDown={inputHandler}
          type="text"
          className="ml-2 text-white bg-transparent outline-none "
        />
      </div>
      <div className="self-start text-yellow-300">
        <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Calcutta"} />
      </div>
    </div>
  );
};
