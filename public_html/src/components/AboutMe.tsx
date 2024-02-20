import { FC } from "react";
import photoDT from "../assets/images/jamesfrysinger-picture-dt-2.jpg";
import photoMO from "../assets/images/jamesfrysinger-picture-mo-2.jpg";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Section from "./common/Section";

const AboutMe: FC = () => {
  return (
    <Section>
      <Heading heading="About Me" />
      <Paragraph>
        <picture>
          <source media="(max-width: 639px)" srcSet={photoMO} />
          <source media="(min-width: 640px)" srcSet={photoDT} />
          <img
            src={photoDT}
            alt=""
            className="float-right w-full sm:w-1/2 min-w-[350px] sm:pl-10 py-2"
          />
        </picture>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam
        fermentum lectus at fringilla. Sed ut blandit quam. Suspendisse lacinia
        sed lacus non tincidunt. Donec bibendum faucibus felis. Aenean lectus
        leo, facilisis a condimentum id, dapibus et condimentum id, dapibus et
        condimentum id, dapibus et nulla. Donec bibendum faucibus felis. Aenean
        lectus leo, facilisis a condimentum id, dapibus et condimentum id,
        dapibus et condimentum id, dapibus et nulla.
      </Paragraph>
    </Section>
  );
};

export default AboutMe;
