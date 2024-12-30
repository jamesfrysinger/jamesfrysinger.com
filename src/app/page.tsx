"use client";

import Contact from "@/app/components/sections/Contact";
import Header from "@/app/components/layout/Header";
import Profile from "@/app/components/sections/Profile";
import Technology from "@/app/components/sections/Technology";
import Work from "@/app/components/sections/Work";
import { useMemo, useRef, useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sectionsRef = useRef({
    work: null,
    profile: null,
    technology: null,
    contact: null,
  });

  const checkWindowSize = () => {
    if (window.innerWidth > 768) setIsOpen(false);
  };

  useMemo(() => {
    if (typeof window !== "undefined") {
      checkWindowSize();
      window.addEventListener("resize", checkWindowSize);
      return () => window.removeEventListener("resize", checkWindowSize);
    }
  }, []);

  useMemo(() => {
    if (typeof document !== "undefined") {
      const dom = document.querySelector("html");
      const className = "!overflow-hidden";
      isOpen ? dom?.classList.add(className) : dom?.classList.remove(className);
    }
  }, [isOpen]);

  return (
    <>
      <div className="mb-12">
        <Header
          sectionsRef={sectionsRef}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Work sectionsRef={sectionsRef} />
        <Profile sectionsRef={sectionsRef} />
        <Technology sectionsRef={sectionsRef} />
        <Contact sectionsRef={sectionsRef} />
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </>
  );
};

export default Home;
