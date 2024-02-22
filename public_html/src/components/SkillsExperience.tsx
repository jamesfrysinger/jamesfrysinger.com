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
        James Frysinger has a multifaceted skill set that covers front-end
        development and design. With a blend of technical expertise, leadership
        qualities, and entrepreneurial spirit, he adeptly steers projects,
        propelling them forward while nurturing collaboration and creating an
        environment conducive to team cohesion.
      </Paragraph>
      <div className="flex flex-wrap pt-3">
        <ul className="w-full sm:w-1/2 sm:pr-6">
          <ListStyle>
            ReactJS, TypeScript, JavaScript, HTML, CSS, jQuery, MySQL, PHP
          </ListStyle>
          <ListStyle>
            E-commerce platforms: SalesForce, IBM WebSphere, Shopify, Wordpress
          </ListStyle>
          <ListStyle>Responsive design, Cross-browser compatibility</ListStyle>
          <ListStyle>Accessibility and SEO best practices</ListStyle>
        </ul>
        <ul className="w-full sm:w-1/2 sm:pl-6">
          <ListStyle>
            Development tools: NVM/NPM, GIT, Jenkins, VSCode
          </ListStyle>
          <ListStyle>Design tools: Figma, Sketch, Photoshop</ListStyle>
          <ListStyle>A/B Testing: Adobe Target, Monetate</ListStyle>
          <ListStyle>Tag management: TealiumIQ, Google Tag Manager</ListStyle>
        </ul>
      </div>
    </Section>
  );
};

export default SkillsExperience;
