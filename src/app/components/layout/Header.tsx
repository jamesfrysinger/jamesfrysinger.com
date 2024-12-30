import Image from "next/image";
import Logo from "@/../public/images/logo.svg";
import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="max-w-[1100px] ml-auto mr-auto pl-12 pr-12 pt-12 box-content">
      <div className="flex items-center">
        <div className="grow">
          <Image src={Logo} alt="James Frysinger" className="h-[140px]" />
        </div>
        <div>
          <nav className="flex space-x-8">
            <Button text="Work" />
            <Button text="Profile" />
            <Button text="Technology" />
            <Button text="Contact" />
          </nav>
        </div>
      </div>
      <div className="mt-[80px]">
        <h1>
          James Frysinger
          <br />
          Front-End Web & Software Development
        </h1>
      </div>
    </div>
  );
};
export default Header;
