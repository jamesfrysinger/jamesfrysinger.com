import { FC } from "react";
import logo from "../assets/images/jamesfrysinger-logo.svg";

const Header: FC = () => {
  return (
    <header className="mb-4 sm:mb-6">
      <img src={logo} alt="" className="w-[100px] dark:filter dark:invert" />
    </header>
  );
};

export default Header;
