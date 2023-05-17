import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { icons, skills as SKILLS, skillWebsites } from "../constants/skills";
import { githubstats } from "./Stats";
import MarkdownPreview from "./MarkdownPreview";
//   const [support, setSupport] = useState(DEF_SUPPORT);

const Title = (props) => {
  const { prefix, title } = props;
  if (prefix && title) {
    return (
      <>
        {`<h1 align="center">${`${prefix} ${title}`}</h1>`}
        <hr />
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
        <hr />
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
function isSocial(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      return true; // Found a non-empty key
    }
  }
  return false;
}
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
      {`<hr/><p align="left">${listChosenSkills.join(" ")}</p>
       <hr/>`}
      <br />
      <br />
    </>
  ) : (
    ""
  );
};
const DisplayStats = () => {
  return (
    <>
      <SectionTitle label="Github Stats:" />
      {githubstats};
    </>
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
        <img align="left" src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" height="25" width="120" alt="${support.buyMeACoffee}" /></a>`}
      {support.kofi &&
        `<a href="https://ko-fi.com/${support.kofi}">
        <img align="left" src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" height="25" width="120" alt="${support.kofi}" /></a>`}
      {support.paypal &&
        `<a href="https://paypal.com/${support.paypal}">
        <img align="left" src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" height="25" width="120" alt="${support.paypal}" /></a>`}
      {support.patreon &&
        `<a href="https://patreon.com/${support.patreon}">
        <img align="left" src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" height="25" width="120" alt="${support.patreon}" /></a>`}
      {"</p><br><br>"}
      <br />
      <br />
    </div>
  ) : (
    ""
  );
};

function Markdown({ back, skills, prefix, data, link, social, USER, support }) {
  const [preview, setIsPreview] = useState(false);
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
  function onCopy() {
    const range = document.createRange();
    range.selectNode(document.getElementById("content"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    copied();
  }
  const onDownload = () => {
    const content = document.getElementById("content");
    const tempElement = document.createElement("a");
    tempElement.setAttribute(
      "href",
      `data:text/markdown;charset=utf-8,${encodeURIComponent(
        content.innerText
      )}`
    );
    tempElement.setAttribute("download", "Readme.md");
    tempElement.style.display = "none";
    document.body.appendChild(tempElement);
    tempElement.click();
    document.body.removeChild(tempElement);

    downloaded();
  };
  const downloaded = () => toast("Download Initiated!");
  const copied = () => toast("Copied Succesfully!");

  console.log(social);
  const iconBaseURL =
    "https://raw.githubusercontent.com/thisisamandang/github-profile-markdown-generator/main/icons/Social/";
  return (
    <div className="fade-on-appear">
      <button
        className="left-0 m-10 hover:text-pink-300 transition-all duration-300 ease-in-out outline-none"
        onClick={back}
      >
        {"<"} Back {"/>"}
      </button>
      <h1 className="text-center text-2xl md:mb-6">Here You Go Chief!</h1>
      <div className="flex  justify-center items-center ">
        <div className="border mt-4 rounded-md p-6 mb-7 order-slate-200 hover:border-slate-500 transition-all ease-in-out duration-200">
          <button
            className="left-0 mx-4 hover:text-pink-300 transition-all duration-300 ease-in-out outline-none"
            onClick={(e) => {
              setIsPreview(!preview);
            }}
          >
            {"<"} Preview {"/>"}
          </button>
          <button
            className="left-0 mx-4 hover:text-pink-300 transition-all duration-300 ease-in-out outline-none"
            onClick={onCopy}
          >
            {"<"} Copy {"/>"}
          </button>
          <button
            className="left-0 mx-4  hover:text-pink-300 transition-all duration-300 ease-in-out outline-none"
            onClick={onDownload}
          >
            {"<"} Download {"/>"}
          </button>
        </div>
      </div>
      <div className="break-words w-full flex flex-col items-center md:flex-row">
        <div
          id="content"
          className="border border-slate-200  hover:border-slate-500 transition-all ease-in-out duration-200 fade-on-appear select-none md:w-1/3 rounded-xl w-5/6 flex-grow  ml-4 mr-4 mb-6 md:mb-0 p-4"
        >
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
            <DisplayWork
              prefix={prefix.achievement}
              project={data.achievement}
            />
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
            <DisplayWork prefix={prefix.learning} project={data.learning} />
          </>
          <>
            <DisplayWork prefix={prefix.contact} project={data.contact} />
          </>
          <>
            <DisplaySkills skills={skills} />
          </>
          {isSocial(social) ? (
            <>
              <SectionTitle label="Connect with me:" />
              {'<p align="left">'}
            </>
          ) : (
            ""
          )}
          <br />
          <>
            <DisplaySocial
              base="https://twitter.com"
              icon={`${iconBaseURL}twitter.svg`}
              username={social.twitter}
            />
          </>
          <>
            <DisplaySocial
              base="https://codepen.io"
              icon={`${iconBaseURL}codepen.svg`}
              username={social.codepen}
            />
          </>
          <>
            <DisplaySocial
              base="https://linkedin.com/in"
              icon={`${iconBaseURL}linked-in-alt.svg`}
              username={social.linkedin}
            />
          </>
          <>
            <DisplaySocial
              base="https://instagram.com"
              icon={`${iconBaseURL}instagram.svg`}
              username={social.instagram}
            />
          </>
          <>
            <DisplaySocial
              base="https://hashnode.com"
              icon={`${iconBaseURL}hashnode.svg`}
              username={social.hashnode}
            />
          </>
          <>
            <DisplaySocial
              base="https://medium.com"
              icon={`${iconBaseURL}medium.svg`}
              username={social.medium}
            />
          </>
          <>
            <DisplaySocial
              base="https://www.youtube.com/c"
              icon={`${iconBaseURL}youtube.svg`}
              username={social.youtube}
            />
          </>
          <>
            <DisplaySocial
              base="https://www.codechef.com/users"
              icon="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
              username={social.codechef}
            />
          </>
          <>
            <DisplaySocial
              base="https://www.leetcode.com"
              icon={`${iconBaseURL}leet-code.svg`}
              username={social.leetcode}
            />
          </>
          <>
            <DisplaySocial
              base="https://dev.to"
              icon={`${iconBaseURL}devto.svg`}
              username={social.dev}
            />
          </>
          {isSocial(social) ? (
            <>
              {"</p>"}

              <br />
              {"<hr />"}
              <br />
            </>
          ) : (
            ""
          )}
          <>
            <DisplayStats />
          </>
          <>
            <DisplaySupport support={support} />
          </>
        </div>
        {preview ? (
          <>
            <div className="border border-slate-200 hover:border-slate-500 transition-all ease-in-out duration-200  md:w-1/3 fade-on-appear w-5/6 flex-grow rounded-xl ml-4 mr-4  p-4">
              <MarkdownPreview
                prefix={prefix}
                data={data}
                link={link}
                social={social}
                USER={USER}
                skills={skills}
                support={support}
              />{" "}
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div className="text-sm text-center mt-6">
        *This is an Open Source project. Feel Free to contribute and add more
        useful features*
      </div>
    </div>
  );
}

export default Markdown;
