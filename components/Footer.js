import React from "react";
import { GITHUB_SVG, LINKEDIN_SVG, TWITTER_SVG } from "../icons/socialsvg";
function Footer() {
  return (
    <div className="flex flex-col w-full  justify-center items-center  ">
      <div className="flex flex-row flex-wrap  space-x-2">
        {/* Twitter */}
        <a
          className="  mt-3 hover:bg-slate-700 font-semibold uppercase  text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-200 flex items-center w-max aspect-square"
          href="https://twitter.com/0xamandang?t=H5rfSUbpx5aje8CPj9Jqvg&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TWITTER_SVG size={4} />
        </a>
        {/* GitHub */}
        <a
          className="  mt-3 hover:bg-slate-700 font-semibold uppercase  text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 flex items-center w-max aspect-square"
          href="https://github.com/thisisamandang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GITHUB_SVG size={4} />
        </a>

        <a
          className="  mt-3 hover:bg-slate-700 font-semibold uppercase  text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 flex items-center w-max aspect-square"
          href="https://www.linkedin.com/in/thisisamandang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LINKEDIN_SVG size={4} />
        </a>
      </div>
      <div className="w-full flex justify-center items-center ">
        <p className="uppercase text-lg">{"</>"} in India</p>
      </div>
      <p className="uppercase text-xs">
        {" "}
        Inspired by many open-sourced projects
      </p>
    </div>
  );
}

export default Footer;
