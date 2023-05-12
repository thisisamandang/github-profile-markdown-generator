import React, { useState } from "react";
import { icons, categorizedSkills } from "@/constants/skills";

function Skills(props) {
  const { skills, handleSkillsChange } = props;
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(undefined);
  const inputRef = React.createRef();
  const createSkill = (skill) => (
    <div className="w-1/3 sm:w-1/4 my-6" key={skill}>
      <label
        htmlFor={skill}
        className="checkbox-label flex items-center justify-start"
      >
        <input
          id={skill}
          type="checkbox"
          className="checkbox-label__input"
          checked={skills[skill]}
          onChange={() => handleSkillsChange(skill)}
        />
        <span className="checkbox-label__control" />
        <img
          className="ml-4 w-8 h-8 sm:w-10 sm:h-10 peer"
          src={icons[skill]}
          alt={skill}
        />
        <p className="invisible peer-hover:visible text-sm ml-4 bg-slate-400 text-black rounded-md p-1 text-transform: capitalize ">
          {skill}
        </p>
      </label>
    </div>
  );
  const onSearchChange = (value) => {
    const callback = () => {
      setSearch(value);
    };
    clearTimeout(debounce);
    setDebounce(setTimeout(callback, 50));
  };

  return (
    <div className="flex justify-start flex-col items-start w-full px-2 sm:px-6 mb-10">
      <div className="text-3xl sm:text-2xl font-title mt-2 mb-6">
        <div className="text-3xl sm:text-2xl font-bold font-title mt-2 ">
          Skills
        </div>
        <div className="relative flex justify-end">
          <input
            type="text"
            onChange={(e) => onSearchChange(e.target.value)}
            className=" outline-none text-xs my-0 py-1 px-2 pr-8 sm:text-xl border-2 border-slate-900 text-black  placeholder-gray-700"
            placeholder="Search Skills"
            ref={inputRef}
          />
        </div>
        {Object.keys(categorizedSkills)
          .filter((key) => {
            const filtered = categorizedSkills[key].skills.filter((skill) =>
              skill.includes(search.toLowerCase())
            );
            return filtered.length !== 0;
          })
          .map((key) => (
            <div key={key} className="divide-y divide-gray-500">
              <div className="text-sm sm:text-xl text-white text-left py-1">
                {categorizedSkills[key].title}
              </div>
              <div className="flex justify-start items-center flex-wrap w-full mb-6 pl-4 sm:pl-10">
                {categorizedSkills[key].skills
                  .filter((skill) => skill.includes(search.toLowerCase()))
                  .map((skill) => createSkill(skill))}
              </div>
            </div>
          ))}
        <span className="flex justify-center text-white">
          {Object.keys(categorizedSkills).filter((key) => {
            const filtered = categorizedSkills[key].skills.filter((skill) =>
              skill.includes(search.toLowerCase())
            );
            return filtered.length !== 0;
          }).length === 0
            ? "No Results Found"
            : ""}
        </span>
      </div>
    </div>
  );
}

export default Skills;
