import { FC, ReactNode } from "react";

interface IParagraph {
  children: ReactNode;
}
const Paragraph: FC<IParagraph> = ({ children }) => {
  return <p className="leading-9 text-lg">{children}</p>;
};

export default Paragraph;
