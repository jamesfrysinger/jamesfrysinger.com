import { FC } from "react";
import logo from "../assets/images/jamesfrysinger-logo.svg";

const Header: FC = () => {
  return (
    <header className="mb-10">
      <img src={logo} alt="" className="w-[100px] dark:filter dark:invert" />
    </header>
  );
};

export default Header;
