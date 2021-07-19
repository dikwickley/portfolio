import Link from "next/link";
import Head from "next/head";

import { Nav } from "./Nav";

export function Layout({ children, title = "This is the default title" }) {
  return (
    <div className="bg-gray-200 h-[100vh] flex flex-row justify-center items-center">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="w-[80vw] h-[80vh] bg-black rounded-md rounded-t-lg">
        <Nav />
      </div>

      {/* <div className="main">{children}</div> */}
    </div>
  );
}
