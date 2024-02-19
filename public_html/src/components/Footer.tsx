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
          className="dark:filter dark:invert max-w-[30px] max-h-[30px] min-w-[30px] min-h-[30px]"
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
            href="https://www.linkedin.com/in/james-frysinger-7b56134b/"
            alt="LinkedIn Alt Text"
          />
          <SocialButtons
            icon={github}
            href="https://github.com/jimmyfrysinger"
            alt="LinkedIn Alt Text"
          />
          <SocialButtons
            icon={cv}
            href="http://googasdle.com"
            alt="LinkedIn Alt Text"
          />
          <div className="text-xs text-neutral-500 border-l-[1px] border-neutral-200 dark:border-neutral-700 pl-3 leading-4">
            Find me on LinkedIn and GitHub or download my cv. <br />
            This website was designged and developed by James Frysinger using
            ReactJs, TypeScript and Tailwind CSS.
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
