import linkedin from "../assets/images/social-icons/linkedin-icon.png";
import github from "../assets/images/social-icons/github-icon.png";
import cv from "../assets/images/social-icons/cv-icon.png";
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
        className="mr-5 opacity-70 dark:opacity-60 hover:opacity-80 transition-opacity duration-300"
      >
        <img
          src={icon}
          alt={alt}
          className="dark:filter dark:invert max-w-[32px] max-h-[32px]"
        />
      </a>
    );
  };
  return (
    <div className="mb-0">
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
          <div className="text-md text-neutral-500 border-l-[1px] border-neutral-200 dark:border-neutral-700 pl-5">
            Connect with me on LinkedIn, explore my GitHub or download my cv.
            {/* Website designed
            and developed by James Frysinger using ReactJs, TypeScript and
            Tailwind. */}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Socials;
