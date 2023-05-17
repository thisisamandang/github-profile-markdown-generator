import React from "react";
import { icons, skills as SKILLS, skillWebsites } from "@/constants/skills";
import { statsLink, streaksLink, topLangLink, profileViewsLink } from "./Stats";
import {
  DEF_SUPPORT,
  DEF_DATA,
  DEF_PREFIX,
  DEF_SOCIAL,
} from "@/constants/defaults";
export const TitlePreview = (props) => {
  const { prefix, title } = props;
  if (prefix && title) {
    return (
      <>
        <h1 className="text-center text-xl font-bold">{`${prefix} ${title}`}</h1>
        <hr />
      </>
    );
  }
  return null;
};
export const SubTitlePreview = (props) => {
  const { subtitle } = props;
  if (subtitle) {
    return <h3 className="text-center font-medium">{subtitle}</h3>;
  }
  return null;
};
export const SectionTitle = (props) => {
  const { visible, label } = props;
  if (!visible) return null;
  if (label) {
    return <h3 className="w-full text-lg sm:text-xl mb-2">{label}</h3>;
  }
  return null;
};

export const DisplayWork = (props) => {
  const { prefix, project, link } = props;
  if (prefix && project) {
    if (link) {
      return (
        <div className="my-2">
          {`${prefix} `}
          <a href={link} className="no-underline text-blue-700" target="blank">
            {project}
          </a>
        </div>
      );
    }
    return (
      <div className="my-2">
        {`${prefix} `}
        <b>{project}</b>
      </div>
    );
  }
  if (prefix && link) {
    return (
      <div className="my-2">
        {`${prefix} `}
        <a href={link} className="no-underline text-blue-700" target="blank">
          {link}
        </a>
      </div>
    );
  }
  return null;
};

export const WorkPreview = (props) => {
  const { work } = props;
  const { prefix, data, link } = work;
  return (
    <>
      <DisplayWork
        prefix={prefix.currentWork}
        project={data.currentWork}
        link={link.currentWork}
      />
      <DisplayWork prefix={prefix.currentLearn} project={data.currentLearn} />
      <DisplayWork
        prefix={prefix.helpWith}
        project={data.helpWith}
        link={link.helpWith}
      />
      <DisplayWork
        prefix={prefix.collaborateOn}
        project={data.collaborateOn}
        link={link.collaborateOn}
      />
      <DisplayWork prefix={prefix.ama} project={data.ama} />
      <DisplayWork prefix={prefix.portfolio} link={link.portfolio} />
      <DisplayWork prefix={prefix.blog} link={link.blog} />
      <DisplayWork prefix={prefix.resume} link={link.resume} />
      <DisplayWork prefix={prefix.contact} project={data.contact} />
      <DisplayWork prefix={prefix.funFact} project={data.funFact} />
    </>
  );
};

export const DisplaySocial = (props) => {
  const { username, base, icon } = props;
  if (username) {
    return (
      <a
        className="no-underline text-blue-700 m-2"
        href={`${base}/${username}`}
        target="blank"
      >
        <img className="w-6 h-6" src={icon} alt="username" />
      </a>
    );
  }
  return null;
};
export const SocialPreview = ({ social }) => {
  let viewSocial = false;
  const iconBaseUrl =
    "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/";
  Object.keys(social).forEach((key) => {
    if (social[key] && key !== "github") viewSocial = true;
  });
  return (
    <div className="flex justify-start items-end flex-wrap">
      <SectionTitle label="Connect with me:" visible={viewSocial} />
      <>
        <DisplaySocial
          base="https://twitter.com"
          icon={`${iconBaseUrl}twitter.svg`}
          username={social.twitter}
        />
      </>
      <>
        <DisplaySocial
          base="https://codepen.io"
          icon={`${iconBaseUrl}codepen.svg`}
          username={social.codepen}
        />
      </>
      <>
        <DisplaySocial
          base="https://linkedin.com/in"
          icon={`${iconBaseUrl}linked-in-alt.svg`}
          username={social.linkedin}
        />
      </>
      <>
        <DisplaySocial
          base="https://dev.to"
          icon={`${iconBaseUrl}devto.svg`}
          username={social.dev}
        />
      </>

      <>
        <DisplaySocial
          base="https://instagram.com"
          icon={`${iconBaseUrl}instagram.svg`}
          username={social.instagram}
        />
      </>

      <>
        <DisplaySocial
          base="https://hashnode.com"
          icon={`${iconBaseUrl}hashnode.svg`}
          username={social.hashnode}
        />
      </>
      <>
        <DisplaySocial
          base="https://medium.com"
          icon={`${iconBaseUrl}medium.svg`}
          username={social.medium}
        />
      </>
      <>
        <DisplaySocial
          base="https://www.youtube.com/c"
          icon={`${iconBaseUrl}youtube.svg`}
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
          icon={`${iconBaseUrl}leet-code.svg`}
          username={social.leetcode}
        />
      </>
    </div>
  );
};
export const SkillsPreview = (props) => {
  const { skills } = props;
  const listSkills = [];
  SKILLS.forEach((skill) => {
    if (skills[skill]) {
      listSkills.push(
        <a
          href={skillWebsites[skill]}
          key={skill}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="mb-4 mr-4 h-6 w-6 sm:h-10 sm:w-10"
            src={icons[skill]}
            alt={skill}
          />
        </a>
      );
    }
  });
  return listSkills.length > 0 ? (
    <div className="flex flex-wrap justify-start items-center">
      <SectionTitle label="Skills:" visible />
      {listSkills}
    </div>
  ) : (
    ""
  );
};

export const SupportPreview = (props) => {
  const { support } = props;
  let viewSupport = false;
  Object.keys(support).forEach((key) => {
    if (support[key]) {
      viewSupport = true;
    }
  });
  return support.buyMeACoffee ||
    support.kofi ||
    support.paypal ||
    support.patreon ? (
    <div className="flex flex-wrap justify-start items-center">
      <SectionTitle label="Support Me:" visible={viewSupport} />
      {support.buyMeACoffee && (
        <a
          href={`https://www.buymeacoffee.com/${support.buyMeACoffee}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="mb-4 mr-4 w-28 h-6 sm:w-32 sm:h-8 mt-2"
          />
        </a>
      )}
      {support.kofi && (
        <a
          href={`https://ko-fi.com/${support.kofi}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white"
            alt="Buy Me A Ko-fi"
            className="mb-4 mr-4 w-28 h-6 sm:w-32 sm:h-8 mt-2"
          />
        </a>
      )}
      {support.paypal && (
        <a
          href={`https://paypal.com/${support.paypal}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white"
            alt="Buy Me A Ko-fi"
            className="mb-4 mr-4 w-28 h-6 sm:w-32 sm:h-8 mt-2"
          />
        </a>
      )}
      {support.patreon && (
        <a
          href={`https://patreon.com/${support.patreon}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white"
            alt="Buy Me A Ko-fi"
            className="mb-4 mr-4 w-28 h-6 sm:w-32 sm:h-8 mt-2"
          />
        </a>
      )}
    </div>
  ) : (
    ""
  );
};
export const StatsPreview = () => {
  return (
    <>
      <SectionTitle label="Github Stats:" visible={true} />
      <div className="text-center mx-4 mt-2 mb-4">
        <img src={statsLink} />
      </div>
      <div className="text-center mx-4 mt-2 mb-4">
        <img src={streaksLink} />
      </div>
      <div className="text-center mx-4 mt-2 mb-4">
        <img src={topLangLink} />
      </div>
      <div className="text-center mx-4 mt-2 mb-4">
        <img src={profileViewsLink} />
      </div>
    </>
  );
};
function MarkdownPreview(props) {
  const { prefix, data, social, skills, support } = props;
  return (
    <div>
      <TitlePreview prefix={prefix.title} title={data.title} />
      <SubTitlePreview subtitle={data.subtitle} />
      <WorkPreview work={props} />
      <SkillsPreview skills={skills} />
      <SocialPreview social={social} />
      <StatsPreview />
      <SupportPreview support={support} />
    </div>
  );
}

MarkdownPreview.defaultProps = {
  prefix: DEF_PREFIX,
  data: DEF_DATA,
  social: DEF_SOCIAL,
  support: DEF_SUPPORT,
  skills: [],
};
export default MarkdownPreview;
