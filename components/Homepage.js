import React, { useState } from "react";
import {
  RocketLaunchIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import About from "./About";
import { USER } from "../constants/defaults";

function Homepage() {
  const [isShown, setIsShown] = useState(false);
  const [input, setInput] = useState(USER);
  function onNext() {
    if (input != "") {
      USER.github = input;
      setIsShown(true);
    }
  }

  return (
    <>
      {isShown ? (
        <About back={() => setIsShown(false)} />
      ) : (
        <div>
          <div className="flex flex-col w-full text-center justify-center">
            <p className="text-3xl lg:mt-8 sm:text-5xl md:text-7xl 2xl:text-8xl p-4 mt-8">
              Github Profile Markdown Generator
            </p>
            <p className="px-4 py-4 sm:text-lg text-lg">
              Make Your Github Profile More Appealing in Just a Few Minutes{" "}
              <RocketLaunchIcon className="inline h-4 w-4 " />
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-12 md:mb-52 mb-60 2xl:mb-52 2xl:mt-24 lg:mb-36 lg:mt-16 items-center sm:mb-52 ">
            <form className="w-full text-center" onSubmit={onNext}>
              <input
                type="text"
                // value={input}
                required={true}
                onChange={(e) => setInput(e.target.value)}
                autoFocus={true}
                className="border-b text-center  bg-transparent mb-40  sm:w-11/12 md:w-8/12 lg:w-3/12 text-lg sm:text-lg md:text-lg lg:text-xl 2xl:text-3xl  outline-none focus:border-b-2 focus:border-pink-200 mr-4"
                placeholder="Enter Your GitHub Username"
              />
              <button type="Submit">
                <ArrowRightCircleIcon className="transition-all hover:ml-2 hover:text-pink-200 duration-100 ease-linear inline h-8 mb-1 w-8" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
