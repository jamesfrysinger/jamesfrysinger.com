"use client";

import Container from "@/app/components/ui/Container";
import Button from "../ui/Button";
import React, { FC } from "react";
import { ISectionsProps } from "@/app/types/Types";

const Contact: FC<ISectionsProps> = ({ sectionsRef }) => {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/jamesfrysinger/", "_blank");
  };
  const handleEmail = () => {
    const username = "jimmyfrysinger";
    const domain = "icloud.com";
    const email = `${username}@${domain}`;
    window.location.href = `mailto:${email}`;
  };
  return (
    <section
      ref={(el) => {
        sectionsRef.current.contact = el;
      }}
    >
      <Container className="mt-[5rem] md:mt-[8rem] ">
        <h2 className="text-[3rem] md:text-[3.75rem] leading-[100%] font-light">
          Contact
        </h2>
        <div className="pt-6">
          <Button
            text="LinkedIn"
            title="Connect with me on LinkedIn"
            onclick={handleLinkedIn}
            className="font-bold underline mb-2"
          />
          <br />
          <Button
            text="Email"
            title="Send me an email"
            onclick={handleEmail}
            className="font-bold underline mb-2"
          />
        </div>
      </Container>
    </section>
  );
};
export default Contact;
