import linkedin from "../assets/images/social-icons/linkedin-icon.svg";
import github from "../assets/images/social-icons/github-icon.svg";
import cv from "../assets/images/social-icons/cv-icon.svg";
import { FC } from "react";
import Section from "./common/Section";

const Socials: FC = () => {
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
        className="mr-5 opacity-80 hover:opacity-100 transition-opacity duration-300"
      >
        <img
          src={icon}
          alt={alt}
          className="dark:filter dark:invert w-[32px] h-[32px]"
        />
      </a>
    );
  };
  return (
    <Section>
      <div className="flex items-center">
        <SocialButtons
          icon={linkedin}
          href="https://www.linkedin.com/in/james-frysinger-7b56134b/"
          alt="LinkedIn Alt Text"
        />
        <SocialButtons
          icon={github}
          href="https://github.com/jamesfrysinger"
          alt="LinkedIn Alt Text"
        />
        <SocialButtons icon={cv} href="#" alt="LinkedIn Alt Text" />
        <div className="text-md border-l-[1px] border-neutral-200 dark:border-neutral-700 pl-5">
          Connect with me on LinkedIn, explore my GitHub or get my cv.
        </div>
      </div>
    </Section>
  );
};

export default Socials;
