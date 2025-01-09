"use client";

import Contact from "@/app/components/sections/Contact";
import Header from "@/app/components/layout/Header";
import Profile from "@/app/components/sections/Profile";
import Technology from "@/app/components/sections/Technology";
import Work from "@/app/components/sections/Work";
import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkWindowSize();
      window.addEventListener("resize", checkWindowSize);
      return () => window.removeEventListener("resize", checkWindowSize);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const dom = document.querySelector("html");
      if (isOpen) {
        dom?.classList.add("!overflow-hidden");
        dom?.classList.add("open");
      } else {
        dom?.classList.remove("!overflow-hidden");
        dom?.classList.remove("open");
      }
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
      <div className="wave active">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
