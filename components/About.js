import React, { useState, useEffect } from "react";
import { initialSkillState } from "@/constants/skills";
import {
  DEF_PREFIX,
  DEF_DATA,
  DEF_LINK,
  DEF_SOCIAL,
  DEF_SUPPORT,
} from "../constants/defaults";
import Title from "./helpers/Title";
import Work from "./helpers/Work";
import Skills from "./helpers/Skills";
import Social from "./helpers/Social";
function About({ back }) {
  const DEF_SKILLS = initialSkillState;
  const KeepCacheUpdated = ({
    prefix,
    data,
    link,
    social,
    skills,
    support,
  }) => {
    useEffect(() => {
      localStorage.setItem(
        "cache",
        JSON.stringify({
          prefix,
          data,
          link,
          social,
          skills,
          support,
        })
      );
    }, [prefix, data, link, social, skills, support]);
  };
  const [prefix, setPrefix] = useState(DEF_PREFIX);
  const [data, setData] = useState(DEF_DATA);
  const [link, setLink] = useState(DEF_LINK);
  const [social, setSocial] = useState(DEF_SOCIAL);
  const [support, setSupport] = useState(DEF_SUPPORT);
  const [skills, setSkills] = useState(DEF_SKILLS);

  const handleDataChange = (field, e) => {
    const change = { ...data };
    change[field] = e.target.value;
    setData(change);
  };

  const handlePrefixChange = (field, e) => {
    const change = { ...prefix };
    change[field] = e.target.value;
    setPrefix(change);
  };

  const handleLinkChange = (field, e) => {
    const change = { ...link };
    change[field] = e.target.value;
    setLink(change);
  };

  const handleSkillsChange = (field) => {
    const change = { ...skills };
    change[field] = !change[field];
    setSkills(change);
  };
  return (
    <div className="m-4 sm:p-4">
      <Title
        data={data}
        prefix={prefix}
        handleDataChange={handleDataChange}
        handlePrefixChange={handlePrefixChange}
      />
      <Work
        data={data}
        prefix={prefix}
        handleDataChange={handleDataChange}
        handlePrefixChange={handlePrefixChange}
        handleLinkChange={handleLinkChange}
      />
      <Skills skills={skills} handleSkillsChange={handleSkillsChange} />
      <Social />
    </div>
  );
}

export default About;
