import { FC } from "react";
import photoDT from "../assets/images/jamesfrysinger-picture-dt-3.jpg";
import photoMO from "../assets/images/jamesfrysinger-picture-mo-3.jpg";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Section from "./common/Section";

const AboutMe: FC = () => {
  return (
    <Section>
      <Heading heading="About Me" type="h2" />
      <Paragraph>
        <picture>
          <source media="(max-width: 639px)" srcSet={photoMO} />
          <source media="(min-width: 640px)" srcSet={photoDT} />
          <img
            src={photoDT}
            alt=""
            className="float-right w-full sm:w-1/2 min-w-[350px] sm:pl-10 py-2 opacity-95"
          />
        </picture>
        James Frysinger, a software and e-commerce development engineer based in
        the New York Metropolitan area. With a proven track record, I specialize
        in crafting sleek UI/UX interfaces for esteemed brands and enterprises.
        My expertise lies in employing clean, industry-standard coding practices
        to deliver engaging experiences that seamlessly bridge brands with their
        customers. Committed to staying ahead of the curve, I continuously
        refine my skills to ensure the solutions I deliver prioritize
        user-centric design, enhancing ease of use.
      </Paragraph>
    </Section>
  );
};

export default AboutMe;
