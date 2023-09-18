import React from "react";
import ThemeButton from "./UI/themeButton";
function NavBar() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[50%] flex justify-end items-center">
        <img
          src="https://raw.githubusercontent.com/thisisamandang/github-profile-markdown-generator/main/public/logo.png"
          alt="logo"
          className="w-24 h-24 mt-2"
        />
      </div>
      
      <div className="w-[50%] flex justify-end items-center mr-8">
        <ThemeButton />
      </div>
    </div>
  );
}

export default NavBar;
