import React, { useState, useEffect } from "react";
import { DEF_DATA, USER } from "../constants/defaults";
import NextButton from "./UI/NextButton";
import Homepage from "./Homepage";
function Stats() {
  const [isShown, setIsShown] = useState(false);
  const [theme, setTheme] = useState(DEF_DATA.stats.theme);
  const [border, setBorder] = useState(DEF_DATA.stats.border);
  const [privates, setPrivates] = useState(DEF_DATA.stats.private);
  const [lifetime, setLifetime] = useState(DEF_DATA.stats.lifetime);
  const [profileViews, setProfileViews] = useState(DEF_DATA.stats.profileViews);

  function onNext() {
    githubstats = `# 📊 Github Statistics:
  ![](${document.getElementById("stats").getAttribute("src")})<br/>
  ![](${document.getElementById("streak").getAttribute("src")})<br/>
  ![](${document.getElementById("langs").getAttribute("src")})<br/>
  ![](${document.getElementById("profileViews").getAttribute("src")})
  `;
    setIsShown(true);
  }

  useEffect(() => {
    DEF_DATA.theme = theme;
    console.log(theme);
    DEF_DATA.lifetime = lifetime;
    DEF_DATA.private = privates;
    DEF_DATA.profileViews = profileViews;
  });
  return (
    <>
      {isShown ? (
        <Homepage></Homepage>
      ) : (
        <div className="flex flex-col items-center">
          <button>back</button>
          <p className="w-full text-center text-3xl my-10 mt-20">
            Github Statistics
          </p>
          <div className="flex flex-wrap justify-center border rounded-md p-6 items-center border-slate-200 hover:border-slate-500 transition-all ease-in-out duration-200">
            <span>Theme:</span>
            <select
              id="theme"
              onChange={() => setTheme(document.getElementById("theme").value)}
              // value={DEF_DATA.stats.theme}
              className="mx-2 bg-transparent p-2 outline-none w-24 border border-slate-100 hover:border-slate-500 transition-all ease-in-out duration-200 rounded-lg"
            >
              {themes.map((item) => {
                return (
                  <option
                    key={item}
                    className="bg-slate-400 text-black"
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
            <button
              className={
                privates
                  ? "p-2 px-4 bg-slate-700 text-white active:scale-95 transition-all ease-in-out duration-300 md:ml-3 m-2 md:m-0 rounded-lg text-base"
                  : "p-2 px-4  bg-slate-200 text-black active:scale-95 transition-all ease-in-out duration-300 md:ml-3 m-2 md:m-0 rounded-lg text-base"
              }
              onClick={() => setPrivates(!privates)}
            >
              Private Commits
            </button>
            <button
              className={
                lifetime
                  ? "p-2 px-4 bg-slate-700 text-white active:scale-95 transition-all ease-in-out duration-300 md:ml-3 m-2 md:m-0 rounded-lg text-base"
                  : "p-2 px-4  bg-slate-200 text-black active:scale-95 transition-all ease-in-out duration-300 md:ml-3 m-2 md:m-0 rounded-lg text-base"
              }
              onClick={() => setLifetime(!lifetime)}
            >
              Lifetime Commits
            </button>
            <button
              className={
                profileViews
                  ? "p-2 px-4 bg-slate-700 text-white active:scale-95 transition-all ease-in-out duration-300 md:ml-3 m-2 md:m-0 rounded-lg text-base"
                  : "p-2 px-4  bg-slate-200 text-black active:scale-95 transition-all ease-in-out duration-300 md:ml-3 m-2 md:m-0 rounded-lg text-base"
              }
              onClick={() => setProfileViews(!profileViews)}
            >
              Profile Views
            </button>
          </div>

          <p className="text-center mt-4 text-slate-400 pointer-events-none text-sm">
            Any changes made may take a few seconds.
          </p>
          {profileViews ? (
            <img
              id="profileViews"
              src={`https://komarev.com/ghpvc/?username=${USER.github}`}
              alt="profile-visitors-count"
              className="mt-4"
            />
          ) : (
            <p className="mt-4"></p>
          )}
          <div className="w-full pt-4 md:w-8/12 justify-center flex flex-col flex-wrap md:my-4">
            <img
              className="m-2 select-none pointer-events-none"
              id="stats"
              src={`https://github-readme-stats.vercel.app/api?username=${
                USER.github
              }&theme=${theme}&hide_border=${!border}&include_all_commits=${lifetime}&count_private=${privates}`}
              alt=""
            />
            <img
              className="m-2 select-none pointer-events-none"
              id="streak"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${
                USER.github
              }&theme=${theme}&hide_border=${!border}`}
              alt=""
            />
            <img
              className="m-2 select-none pointer-events-none"
              id="langs"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
                USER.github
              }&theme=${theme}&hide_border=${!border}&include_all_commits=${lifetime}&count_private=${privates}&layout=compact`}
              alt=""
            />
          </div>
          <NextButton onNext={onNext} />
        </div>
      )}
    </>
  );
}

const themes = [
  "dark",
  "default",
  "monokai",
  "radical",
  "nightowl",
  "onedark",
  "dracula",
];

export default Stats;
export var githubstats = ``;
