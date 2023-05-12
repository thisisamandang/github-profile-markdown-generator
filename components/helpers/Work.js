import React from "react";

function Work({
  prefix,
  data,
  handlePrefixChange,
  handleDataChange,
  handleLinkChange,
}) {
  return (
    <div className="flex justify-start flex-col items-start w-full px-2 sm:px-6 mb-10">
      <div className="text-3xl sm:text-2xl font-bold font-title mt-2 mb-6">
        Work
      </div>
      <div className="flex justify-start items-center w-full text-lg sm:text-lg ">
        <input
          value={prefix.currentWork}
          type="text"
          className="border-b w-24 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("currentWork", event)}
        />
        <input
          placeholder="Project"
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handleDataChange("currentWork", event)}
        />
        <input
          placeholder="Link"
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handleLinkChange("currentWork", event)}
        />
      </div>

      <div className="flex mt-14 justify-start items-center w-full text-lg sm:text-lg ">
        <input
          value={prefix.collab}
          type="text"
          className="border-b w-24 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("collab", event)}
        />
        <input
          placeholder="Project"
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handleDataChange("collab", event)}
        />
        <input
          placeholder="Link"
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handleLinkChange("collab", event)}
        />
      </div>

      <div className="flex mt-14 justify-start items-center w-full text-lg sm:text-lg ">
        <input
          value={prefix.learning}
          type="text"
          className="border-b w-24 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("learning", event)}
        />
        <input
          placeholder="React / Java / Python"
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handleDataChange("learning", event)}
        />
      </div>

      <div className="flex mt-14 justify-start items-center w-full text-lg sm:text-lg ">
        <input
          value={prefix.contact}
          type="text"
          className="border-b w-24 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handlePrefixChange("contact", event)}
        />
        <input
          placeholder="janedoe@gmail.com"
          type="text"
          className="border-b w-28 sm:w-40 py-1 px-2 mr-10 focus:border-pink-300 outline-none bg-transparent"
          onChange={(event) => handleDataChange("contact", event)}
        />
      </div>
    </div>
  );
}

export default Work;
