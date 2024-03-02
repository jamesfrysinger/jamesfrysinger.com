import linkedin from "../assets/images/social-icons/linkedin-icon.svg";
import github from "../assets/images/social-icons/github-icon.svg";
import cv from "../assets/images/social-icons/cv-icon.svg";
import { FC } from "react";
import Section from "./common/Section";

export const SocialButtons: FC<{
  icon: string;
  href: string;
  alt: string;
  download?: boolean;
}> = ({ icon, href, alt, download }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mr-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
      download={download}
    >
      <img
        src={icon}
        alt={alt}
        className="dark:filter dark:invert min-w-[34px] min-h-[34px] w-[34px] h-[34px]"
      />
    </a>
  );
};

const Socials: FC = () => {
  return (
    <Section small>
      <div className="flex items-center">
        <SocialButtons
          icon={linkedin}
          href="https://www.linkedin.com/in/james-frysinger"
          alt="LinkedIn Alt Text"
        />
        <SocialButtons
          icon={github}
          href="https://github.com/jamesfrysinger"
          alt="LinkedIn Alt Text"
        />
        <SocialButtons
          icon={cv}
          href="/assets/downloads/resume/James-Frysinger-Resume-2024-02-21.pdf"
          alt="LinkedIn Alt Text"
          download
        />
        <div className="sm:text-lg border-l-[1px] border-neutral-300 dark:border-neutral-700 pl-6 w-auto sm:w-2/3">
          Connect with me on LinkedIn, browse my GitHub, or download my CV.
        </div>
      </div>
    </Section>
  );
};

export default Socials;
