import React, { FC } from "react";
import Divider from "./Divider";

interface IHeading {
  heading: string;
  type?: string;
}

const Heading: FC<IHeading> = ({ heading, type = "h1" }) => {
  const HeadingElement = type as keyof JSX.IntrinsicElements;

  return (
    <HeadingElement className={`inline-block w-full text-2xl`}>
      <span className="inline-block w-full">{heading}</span>
      <Divider />
    </HeadingElement>
  );
};

export default Heading;
