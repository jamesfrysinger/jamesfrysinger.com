import linkedin from "../assets/images/social-icons/linkedin-icon.png";
import github from "../assets/images/social-icons/github-icon.png";
import cv from "../assets/images/social-icons/cv-icon.png";
import { FC } from "react";
import Section from "./common/Section";

const Footer: FC = () => {
  const SocialButtons: FC<{ icon: string; href: string; alt: string }> = ({
    icon,
    href,
    alt,
  }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mr-4 opacity-30 hover:opacity-80 transition-opacity duration-300"
      >
        <img
          src={icon}
          alt={alt}
          className="dark:filter dark:invert w-[30px] h-[30px]"
        />
      </a>
    );
  };
  return (
    <div className="mb-10">
      <Section>
        <div className="flex items-center">
          <SocialButtons
            icon={linkedin}
            href="http://google.com"
            alt="LinkedIn Alt Text"
          />
          <SocialButtons
            icon={github}
            href="http://goffffffogle.com"
            alt="LinkedIn Alt Text"
          />
          <SocialButtons
            icon={cv}
            href="http://googasdle.com"
            alt="LinkedIn Alt Text"
          />
          <div className="text-xs text-stone-500 border-l-[1px] border-stone-200 dark:border-stone-700 pl-3">
            Find me on LinkedIn and GitHub or download my cv.
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
