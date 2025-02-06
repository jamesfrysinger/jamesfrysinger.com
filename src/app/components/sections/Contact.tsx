"use client";

import Container from "@/app/components/ui/Container";
import Button from "../ui/Button";
import React, { FC } from "react";
import { ISectionsProps } from "@/app/types/Types";

const Contact: FC<ISectionsProps> = ({ sectionsRef }) => {
  const handleEmail = () => {
    const username = "james";
    const domain = "jamesfrysinger.com";
    const email = `${username}@${domain}`;
    window.location.href = `mailto:${email}`;
  };
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      ref={(el) => {
        sectionsRef.current.contact = el;
      }}
      role="region"
    >
      <Container className="mt-[5rem] md:mt-[8rem] ">
        <h2
          id="contact-heading"
          className="text-[3rem] md:text-[3.75rem] leading-[100%] font-light"
        >
          Contact
        </h2>
        <div className="pt-6">
          <Button
            text="Email"
            title="Send me an email"
            onclick={handleEmail}
            className="font-bold underline mb-2"
            aria-label="Send me an email"
          />
          <br />
          <a
            title="Connect with me on LinkedIn"
            href="http://www.linkedin.com/in/jamesfrysinger"
            target="_blank"
            className="font-bold underline mb-2 inline-block"
            aria-label="Connect with me on LinkedIn"
          >
            LinkedIn
          </a>
          <br />
          <a
            title="View my GitHub"
            href="http://www.github.com/jamesfrysinger"
            target="_blank"
            className="font-bold underline mb-2 inline-block"
            aria-label="View my GitHub"
          >
            GitHub
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
