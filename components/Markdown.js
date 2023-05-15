import React, { useEffect, useState } from "react";
import { DEF_SUPPORT, DEF_DATA, DEF_PREFIX } from "@/constants/defaults";
import { icons, skills as SKILLS, skillWebsites } from "../constants/skills";
import { githubstats } from "./Stats";
//   const [support, setSupport] = useState(DEF_SUPPORT);

const Title = (props) => {
  const { prefix, title } = props;
  if (prefix && title) {
    return (
      <>
        {`<h1 align="center">${`${prefix} ${title}`}</h1>`}
        <br />
      </>
    );
  }
  return "";
};
const SubTitle = (props) => {
  const { subtitle } = props;
  if (subtitle) {
    return (
      <>
        {`<h3 align="center">${subtitle}</h3>`}
        <br />
        <br />
      </>
    );
  }
  return "";
};
const SectionTitle = (props) => {
  const { label } = props;
  if (label) {
    return (
      <>
        {`<h3 align="left">${label}</h3>`}
        <br />
      </>
    );
  }
  return "";
};
const DisplayWork = (props) => {
  const { prefix, project, link } = props;
  if (prefix && project) {
    if (link) {
      return (
        <>
          {`- ${prefix} [${project}](${link})`}
          <br />
          <br />
        </>
      );
    }
    return (
      <>
        {`- ${prefix} **${project}**`}
        <br />
        <br />
      </>
    );
  }
  if (prefix && link) {
    return (
      <>
        {`- ${prefix} [${link}](${link})`}
        <br />
        <br />
      </>
    );
  }
  return "";
};
const DisplaySocial = (props) => {
  const { username, base, icon } = props;
  if (username) {
    return (
      <>
        {`<a href="${base}/${username}" target="blank"><img align="center" src="${icon}" alt="${username}" height="30" width="40" /></a>`}
        <br />
      </>
    );
  }
  return "";
};
const VisitorsBadge = (props) => {
  const { github, badgeOptions, show } = props;
  const link = `https://komarev.com/ghpvc/?username=${github}&label=${badgeOptions.badgeLabel}&color=${badgeOptions.badgeColor}&style=${badgeOptions.badgeStyle}`;
  if (show) {
    return (
      <>
        {`<p align="left"> <img src="${link}" alt="${github}" /> </p>`}
        <br />
        <br />
      </>
    );
  }
  return "";
};
const TwitterBadge = (props) => {
  const { twitter, show, base } = props;
  const link = `https://img.shields.io/twitter/follow/${twitter}?logo=twitter&style=for-the-badge`;
  if (show) {
    return (
      <>
        {`<p align="left"> <a href="${base}/${twitter}" target="blank"><img src="${link}" alt="${twitter}" /></a> </p>`}
        <br />
        <br />
      </>
    );
  }
  return "";
};
const isSocial = (social) => {
  let status = false;
  const SOCIAL_KEYS = Object.keys(DEFAULT_SOCIAL);
  Object.keys(social).forEach((key) => {
    if (SOCIAL_KEYS.includes(key)) {
      status = true;
    }
  });
  return status;
};
const DisplaySkills = (props) => {
  const { skills } = props;
  const listChosenSkills = [];
  SKILLS.forEach((skill) => {
    if (skills[skill]) {
      listChosenSkills.push(
        `
          <a href="${skillWebsites[skill]}" target="_blank" rel="noreferrer">
          <img src="${icons[skill]}" alt="${skill}" width="40" height="40"/>
          </a>
          `
      );
    }
  });
  return listChosenSkills.length > 0 ? (
    <>
      <SectionTitle label="Languages and Tools:" />
      {`<p align="left">${listChosenSkills.join(" ")}</p>`}
      <br />
      <br />
    </>
  ) : (
    ""
  );
};
const DisplaySupport = (props) => {
  const { support } = props;
  let viewSupport = false;
  Object.keys(support).forEach((key) => {
    if (support[key]) {
      viewSupport = true;
    }
  });
  return viewSupport ? (
    <div>
      <SectionTitle label="Support:" />
      {"<p>"}
      {support.buyMeACoffee &&
        `<a href="https://www.buymeacoffee.com/${support.buyMeACoffee}">
        <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="${support.buyMeACoffee}" /></a>`}
      {support.kofi &&
        `<a href="https://ko-fi.com/${support.buyMeAKofi}">
        <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="${support.buyMeAKofi}" /></a>`}
      {support.paypal &&
        `<a href="https://ko-fi.com/${support.buyMeAKofi}">
        <img align="left" src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" height="50" width="210" alt="${support.buyMeAKofi}" /></a>`}
      {"</p><br><br>"}
      <br />
      <br />
    </div>
  ) : (
    ""
  );
};
function reloadTab() {
  location.reload();
}

function Markdown({ back, skills, prefix, data, link, social, USER, support }) {
  var md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    quotes: "“”‘’",
    highlight: function (/*str, lang*/) {
      return "";
    },
  });
  const iconbaseURL =
    "https://raw.githubusercontent.com/thisisamandang/github-profile-markdown-generator/main/icons/Social/";
  return (
    <div className="fade-on-appear">
      <button
        className="left-0  m-10  hover:text-pink-300 transition-all duration-300 ease-in-out outline-none"
        onClick={back}
      >
        {"<"} Back {"/>"}
      </button>
      <div id="content" className="break-words">
        <>
          <Title prefix={prefix.title} title={data.title} />
        </>
        <>
          <SubTitle subtitle={data.subtitle} />
        </>
        <>
          <TwitterBadge base="https://twitter.com" twitter={social.twitter} />
        </>
        <>
          <DisplayWork prefix={prefix.education} project={data.education} />
          <DisplayWork prefix={prefix.achievement} project={data.achievement} />
          <DisplayWork prefix={prefix.funfact} project={data.funfact} />
        </>
        <>
          <DisplayWork
            prefix={prefix.currentWork}
            project={data.currentWork}
            link={link.currentWork}
          />
        </>
        <>
          <DisplayWork
            prefix={prefix.collab}
            project={data.collab}
            link={link.collab}
          />
        </>
        <>
          <DisplayWork
            prefix={prefix.learning}
            project={data.learning}
            link={link.learning}
          />
        </>
        <>
          <DisplayWork
            prefix={prefix.contact}
            project={data.contact}
            link={link.contact}
          />
        </>
        <>
          <DisplaySkills skills={skills} />
        </>
      </div>
      <div></div>
    </div>
  );
}

export default Markdown;
