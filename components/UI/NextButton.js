import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
function NextButton({ onNext }) {
  return (
    <div className="flex justify-center items-center mt-16 mb-16">
      <button
        onClick={onNext}
        className="bg-white font-semibold rounded-md p-2  hover:bg-pink-300 transition duration-300 ease-in-out text-black"
      >
        <ArrowRightIcon className="h-8 w-10" />
      </button>
    </div>
  );
}

export default NextButton;
