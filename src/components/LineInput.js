import React from "react";
import Link from "next/link";

import Clock from "react-live-clock";
import { useRouter } from "next/router";

export const LineInput = ({ inputHandler }) => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-between m-2">
      <div className="flex flex-row flex-grow">
        <div>
          Aniket:~/
          <Link href="/">
            <span className="cursor-pointer hover:text-red-600">home</span>
          </Link>
          {router.pathname == "/" ? "" : router.pathname} ${" "}
        </div>

        <input
          onKeyDown={inputHandler}
          type="text"
          className="flex-grow ml-2 text-white bg-transparent outline-none"
        />
      </div>
      <div>
        <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
      </div>
    </div>
  );
};
