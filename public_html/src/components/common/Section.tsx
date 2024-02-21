import { FC, ReactNode } from "react";

interface ISection {
  children: ReactNode;
  small?: boolean;
}
const Section: FC<ISection> = ({ children, small = false }) => {
  return (
    <section
      className={`w-full inline-flex flex-wrap ${
        small ? "my-4 sm:my-6" : "my-10"
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
