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
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("title", event)}
        />
        <input
          placeholder="Name"
          type="text"
          className="border-b w-32 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handleDataChange("title", event)}
        />
      </div>
      <input
        placeholder="A Digital Craftsman😉"
        type="text"
        className="border-b pt-4 w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent mb-6"
        onChange={(event) => handleDataChange("subtitle", event)}
      />
      <div className="flex justify-start items-center w-full text-lg sm:text-lg mb-2">
        <input
          value={prefix.education}
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("education", event)}
        />
        <input
          placeholder="CS (Junior Year)"
          type="text"
          className="border-b w-32 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handleDataChange("education", event)}
        />
      </div>
      <div className="flex justify-start items-center w-full text-lg sm:text-lg mb-2">
        <input
          value={prefix.achievement}
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("achievement", event)}
        />
        <input
          placeholder="Show off!"
          type="text"
          className="border-b w-32 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handleDataChange("achievement", event)}
        />
      </div>
      <div className="flex justify-start items-center w-full text-lg sm:text-lg ">
        <input
          value={prefix.fact}
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("fact", event)}
        />
        <input
          placeholder="I'm a geek"
          type="text"
          className="border-b w-32 sm:w-40 py-1 px-2 mr-10 focus:border-pink-200 outline-none bg-transparent"
          onChange={(event) => handleDataChange("fact", event)}
        />
      </div>
    </div>
  );
}

export default Title;
