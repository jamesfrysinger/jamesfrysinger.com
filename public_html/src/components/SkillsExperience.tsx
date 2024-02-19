import { FC } from "react";
import Heading from "./common/Heading";
import ListStyle from "./common/ListStyle";
import Paragraph from "./common/Paragraph";
import Section from "./common/Section";

const SkillsExperience: FC = () => {
  return (
    <Section>
      <Heading heading="Skills and Experience" type="h2" />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam
        fermentum lectus at fringilla. Sed ut blandit quam. Suspendisse lacinia
        sed lacus non tincidunt. Donec bibendum faucibus felis. Aenean lectus
        leo, facilisis a condimentum id, dapibus et condimentum id, dapibus et
        condimentum id, dapibus et nulla.
      </Paragraph>
      <div className="flex pt-4">
        <ul className="max-w-1/2 pr-6">
          <ListStyle>Strategy & Consulting</ListStyle>
          <ListStyle>E-commerce & Brand Websites</ListStyle>
          <ListStyle>Search Engine Optimization</ListStyle>
          <ListStyle>Mobile, Tablet & Desktop Responsive</ListStyle>
          <ListStyle>Cross-device Compatibility</ListStyle>
        </ul>
        <ul className="max-w-1/2 pl-6">
          <ListStyle>Strategy & Consulting</ListStyle>
          <ListStyle>E-commerce & Brand Websites</ListStyle>
          <ListStyle>Search Engine Optimization</ListStyle>
          <ListStyle>Mobile, Tablet & Desktop Responsive</ListStyle>
          <ListStyle>Cross-device Compatibility</ListStyle>
        </ul>
      </div>
    </Section>
  );
};

export default SkillsExperience;
