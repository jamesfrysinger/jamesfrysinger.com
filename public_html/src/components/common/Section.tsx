import { FC, ReactNode } from "react";

interface ISection {
  children: ReactNode;
}
const Section: FC<ISection> = ({ children }) => {
  return (
    <section className="section inline-flex flex-wrap my-10 sm:my-12">
      {children}
    </section>
  );
};

export default Section;
