import { FC } from "react";
import logo from "../assets/images/jamesfrysinger-logo.svg";

const Header: FC = () => {
  return (
    <header className="App-header pb-10">
      <img src={logo} alt="" className="w-100 dark:filter dark:invert" />
    </header>
  );
};

export default Header;
