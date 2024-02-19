import React, { FC } from "react";

interface IHeading {
  heading: string;
  type?: string;
  position?: string;
}

const Heading: FC<IHeading> = ({ heading, type = "h1", position }) => {
  const HeadingElement = type as keyof JSX.IntrinsicElements;

  return (
    <HeadingElement className={`inline-block w-full text-2xl ${position}`}>
      <span className="inline-block w-full">{heading}</span>
      <span className="inline-block w-50 border-b border-neutral-200 dark:border-neutral-700 my-1.5"></span>
    </HeadingElement>
  );
};

export default Heading;
