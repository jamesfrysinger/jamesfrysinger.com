import { FC } from "react";
import Section from "./common/Section";

const Footer: FC = () => {
  return (
    <div className="text-sm text-neutral-400 dark:text-neutral-700 leading-6 mb-10">
      This website was designed and developed by James Frysinger using ReactJs,
      TypeScript and TailwindCSS.
    </div>
  );
};

export default Footer;
