import { FC } from "react";
import logo from "../assets/images/jamesfrysinger-logo.svg";

const Header: FC = () => {
  return (
    <header className="mb-6 sm:mb-10">
      <h1 style={{ margin: 0, padding: 0, display: "block" }}>
        <img
          src={logo}
          alt="James Frysinger Software and E-Commerce Engineer"
          className="w-[100px] dark:filter dark:invert"
        />
      </h1>
    </header>
  );
};

export default Header;
