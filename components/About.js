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
import Socials from "./helpers/Socials";
import NextButton from "./UI/NextButton";
import Stats from "./Stats";
function About({ back }) {
  const [isShown, setIsShown] = useState(false);
  function onNext() {
    setIsShown(true);
  }
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

  const handleSocialChange = (field) => {
    const change = { ...social };
    change[field] = e.target.value;
    setSocial(change);
  };

  return (
    <>
      {isShown ? (
        <Stats />
      ) : (
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
          <Socials social={social} handleSocialChange={handleSocialChange} />
          <NextButton onNext={onNext} />
        </div>
      )}
    </>
  );
}

export default About;
