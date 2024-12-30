import Logo from "@/app/components/ui/Logo";
import Button from "../ui/Button";
import { FC } from "react";
import { IIsOpen, ISections, ISectionsProps } from "@/app/types/Types";
import Hamburger from "./HeaderHamburger";

const Header: FC<ISectionsProps & IIsOpen> = ({
  sectionsRef,
  isOpen,
  setIsOpen,
}) => {
  const scrollToSection = (sectionKey: keyof ISections) => {
    const section = sectionsRef.current[sectionKey];
    if (section) {
      setIsOpen(false);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`max-w-[1100px] ml-auto mr-auto pl-8 pr-8 pt-12 box-content peer ${
        isOpen ? `open` : ``
      }`}
    >
      <div className="flex md:items-center">
        <div className="grow z-10">
          <Logo />
        </div>
        <nav>
          <div
            id="nav-menu"
            className={`
              ${
                isOpen ? "flex" : "hidden"
              } fixed items-center top-0 left-0 w-screen h-screen bg-white pl-8 pr-8 
              md:flex md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent`}
          >
            <div className="flex flex-wrap md:space-x-8">
              <Button
                text="Work"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base"
                onclick={() => scrollToSection("work")}
              />
              <Button
                text="Profile"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base"
                onclick={() => scrollToSection("profile")}
              />
              <Button
                text="Technology"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base"
                onclick={() => scrollToSection("technology")}
              />
              <Button
                text="Contact"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base"
                onclick={() => scrollToSection("contact")}
              />
            </div>
          </div>
        </nav>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="mt-[3rem] md:mt-[4rem]">
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
