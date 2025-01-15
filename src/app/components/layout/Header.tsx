import Logo from "@/app/components/ui/Logo";
import Button from "../ui/Button";
import { FC } from "react";
import { IIsOpen, ISections, ISectionsProps } from "@/app/types/Types";
import Hamburger from "./HeaderHamburger";
import Container from "../ui/Container";

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
    <Container
      className={`max-w-[1100px] ml-auto mr-auto pl-10 pr-10 pt-12 box-content`}
    >
      <div className="flex md:items-center">
        <div className="grow z-10">
          <Logo />
        </div>
        <nav aria-label="Main Navigation" className="md:ml-auto md:mr-0">
          <div
            id="nav-menu"
            role="navigation"
            aria-hidden={!isOpen}
            className={`
              ${
                isOpen ? "flex" : "hidden"
              } fixed items-center top-0 left-0 w-screen h-screen bg-[var(--background)] pl-10 pr-10
              md:flex md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent`}
          >
            <div className="flex flex-wrap md:space-x-8 space-y-6 md:space-y-0">
              <a
                href="#"
                title="Work"
                aria-label="Navigate to Work section"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base font-light md:font-normal"
                onClick={() => scrollToSection("work")}
              >
                Work
              </a>
              <a
                href="#"
                title="Profile"
                aria-label="Navigate to Profile section"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base font-light md:font-normal"
                onClick={() => scrollToSection("profile")}
              >
                Profile
              </a>
              <a
                href="#"
                title="Technology"
                aria-label="Navigate to Technology section"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base font-light md:font-normal"
                onClick={() => scrollToSection("technology")}
              >
                Technology
              </a>
              <a
                href="#"
                title="Contact"
                aria-label="Navigate to Contact section"
                className="hover:underline w-full md:w-auto text-left text-[3rem] md:text-base font-light md:font-normal"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="mt-[5rem] md:mt-[6rem]">
        <h1>
          James Frysinger
          <br />
          Web & Software Development
        </h1>
      </div>
    </Container>
  );
};
export default Header;
