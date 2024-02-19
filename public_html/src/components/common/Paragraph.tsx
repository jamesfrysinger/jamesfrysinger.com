import { FC, ReactNode } from "react";

interface IParagraph {
  children: ReactNode;
}
const Paragraph: FC<IParagraph> = ({ children }) => {
  return <p className="leading-8 sm:leading-9 sm:text-lg">{children}</p>;
};

export default Paragraph;
