"use client";

import { IIsOpen } from "@/app/types/Types";
import { FC, MouseEvent } from "react";

const Hamburger: FC<IIsOpen> = ({ isOpen, setIsOpen }) => {
  const handleHamburger = (e: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      id="hamburger-menu"
      className="md:hidden z-10"
      onClick={(e) => handleHamburger(e)}
    ></button>
  );
};
export default Hamburger;
