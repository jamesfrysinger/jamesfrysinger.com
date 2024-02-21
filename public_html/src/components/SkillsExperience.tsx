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
        James Frysinger possesses a multifaceted skill set covering front-end
        development and design. With a blend of technical expertise, leadership
        qualities, and entrepreneurial spirit, he adeptly steers projects,
        propelling them forward while nurturing collaboration and creating an
        environment conducive to team cohesion.
      </Paragraph>
      <div className="flex pt-1">
        <ul className="w-1/2 pr-6">
          <ListStyle>
            ReactJS, JavaScript, HTML, CSS3, TypeScript, jQuery, MySQL, PHP
          </ListStyle>
          <ListStyle>
            E-commerce platforms: SalesForce, IBM WebSphere, Shopify, Wordpress
          </ListStyle>
          <ListStyle>Responsive design, Cross-browser compatibility</ListStyle>
          <ListStyle>Accessibility and SEO best practices</ListStyle>
          <ListStyle>Design tools: Figma, Sketch, Photoshop</ListStyle>
        </ul>
        <ul className="w-1/2 pl-6">
          <ListStyle>
            Development tools: NVM/NPM, GIT, Jenkins, VSCode
          </ListStyle>
          <ListStyle>Asset optimization</ListStyle>
          <ListStyle>A/B Testing: Adobe Target, Monetate</ListStyle>
          <ListStyle>Tag management: TealiumIQ, Google Tag Manager</ListStyle>
          <ListStyle>HTML Email Development</ListStyle>
        </ul>
      </div>
    </Section>
  );
};

export default SkillsExperience;
