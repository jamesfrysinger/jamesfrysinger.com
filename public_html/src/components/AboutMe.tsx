import photo from "../assets/images/jamesfrysinger-picture.jpg";
import Heading from "./common/Heading";
import Paragraph from "./common/Paragraph";
import Section from "./common/Section";
const AboutMe = () => {
  return (
    <Section>
      <Heading heading="About Me" />
      <Paragraph>
        <img
          src={photo}
          alt=""
          className="float-right w-1/2 min-w-[350px] pl-10 py-2"
        />
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
