import React from "react";
import { SiLeetcode, SiCodechef, SiHashnode } from "react-icons/si";
import {
  FaDev,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { AiFillMediumSquare, AiFillCodepenCircle } from "react-icons/ai";

function Socials({ social, handleSocialChange }) {
  return (
    <div className="px-2 sm:px-6 mb-4">
      <div className="text-xl sm:text-2xl font-bold font-title mt-2 mb-2">
        Social
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-1/2  flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <FaTwitterSquare
            alt="twitter"
            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4 "
          />
          <input
            id="twitter"
            placeholder="Twitter Username"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 bg-transparent border-b border-white focus:border-pink-200 px-2"
            value={social.twitter}
            onChange={(event) => handleSocialChange("twitter", event)}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <AiFillCodepenCircle
            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
            alt="codepen"
          />
          <input
            id="codepen"
            placeholder="Codepen Username"
            className="outline-none  placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.codepen}
            onChange={(event) => handleSocialChange("codepen", event)}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <FaLinkedin
            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
            alt="linkedin"
          />
          <input
            id="linkedin"
            placeholder="LinkedIn Username"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.linkedin}
            onChange={(event) => handleSocialChange("linkedin", event)}
          />
        </div>

        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <FaInstagram
            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
            alt="instagram"
          />
          <input
            id="instagram"
            placeholder="Instagram Username"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.instagram}
            onChange={(event) => handleSocialChange("instagram", event)}
          />
        </div>

        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <SiHashnode className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" />
          <input
            id="hashnode"
            placeholder="Hashnode (with @)"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.hashnode}
            onChange={(event) => handleSocialChange("hashnode", event)}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <AiFillMediumSquare className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" />
          <input
            id="medium"
            placeholder="Medium  (with @)"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.medium}
            onChange={(event) => handleSocialChange("medium", event)}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <FaYoutube className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" />
          <input
            id="youtube"
            placeholder="Youtube Channel Name"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.youtube}
            onChange={(event) => handleSocialChange("youtube", event)}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <SiCodechef className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" />
          <input
            id="codechef"
            placeholder="Codechef Username"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.codechef}
            onChange={(event) => handleSocialChange("codechef", event)}
          />
        </div>

        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <SiLeetcode className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" />

          <input
            id="leetcode"
            placeholder="Leetcode Username"
            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.leetcode}
            onChange={(event) => handleSocialChange("leetcode", event)}
          />
        </div>
        <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
          <FaDev className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4" />
          <input
            id="dev"
            placeholder="Dev.to username"
            className="outline-none  placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid  py-1 px-2 focus:border-pink-200 bg-transparent border-b border-white"
            value={social.dev}
            onChange={(event) => handleSocialChange("dev", event)}
          />
        </div>
      </div>
    </div>
  );
}

export default Socials;
