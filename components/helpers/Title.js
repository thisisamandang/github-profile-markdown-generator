import React from "react";

function Title({ prefix, data, handlePrefixChange, handleDataChange }) {
  return (
    <div className="flex justify-start flex-col items-start w-full px-2 sm:px-6 mb-10">
      <div className="text-3xl sm:text-2xl font-bold font-title mt-2 mb-6">
        About You
      </div>
      <div className="flex justify-start items-center w-full text-lg sm:text-lg ">
        <input
          value={prefix.title}
          type="text"
          className="border-b w-24 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("title", event)}
        />
        <input
          placeholder="Name"
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handleDataChange("title", event)}
        />
      </div>
      <input
        placeholder="A Digital Craftsman😉"
        type="text"
        className="border-b pt-4 w-24 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
        onChange={(event) => handleDataChange("subtitle", event)}
      />
    </div>
  );
}

export default Title;
