"use client";

import { IIsOpen } from "@/app/types/Types";
import { FC } from "react";

const Hamburger: FC<IIsOpen> = ({ isOpen, setIsOpen }) => {
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      id="hamburger-menu"
      className="md:hidden z-10"
      onClick={handleHamburger}
    ></button>
  );
};
export default Hamburger;
