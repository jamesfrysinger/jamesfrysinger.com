import Container from "@/app/components/ui/Container";
import { experienceData as data } from "@/app/data/ExperienceData";
import { ISectionsProps } from "@/app/types/Types";
import { FC } from "react";

const Profile: FC<ISectionsProps> = ({ sectionsRef }) => {
  return (
    <section
      id="profile"
      aria-labelledby="profile-heading"
      ref={(el) => {
        sectionsRef.current.profile = el;
      }}
      role="region"
    >
      <Container className="mt-[4rem] md:mt-[7rem]">
        <h2
          id="profile-heading"
          className="text-[3rem] md:text-[3.75rem] leading-[100%] font-light"
        >
          Profile
        </h2>
        <p className="text-[1.5rem] md:text-[2rem] leading-[150%] pt-6 font-light">
          Senior Software and Web Developer with over 15 years of experience in
          front-end technologies including React, TypeScript, and JavaScript.
          Proven track record of building e-commerce front ends and software
          UI’s, enhancing e-commerce performance through A/B testing and
          targeted feature development, contributing to substantial conversion
          rate improvements. Strong expertise in UI/UX principles and Agile
          methodologies, consistently delivering high-quality, accessible web
          solutions. Ready to leverage unique skills to drive impactful results
          and optimize user experiences for forward-thinking organizations.
        </p>
        <div className="md:flex pt-6">
          <h3 className="font-bold w-1/4 pt-3 pb-4" id="experience-heading">
            Experience
          </h3>
          <div aria-labelledby="experience-heading">
            {data.map((item) => {
              return (
                <p className="pt-3 pb-3" key={item.id}>
                  {item.period}
                  <br />
                  <span className="font-bold">{item.title}</span>
                  <br />
                  {item.brand}
                </p>
              );
            })}
            <p className="pt-3 pb-3">
              <span style={{ fontSize: ".9rem", marginRight: "4px" }}>⬇</span>
              <a
                title="Download my résumé"
                href="/downloads/james-frysinger-resume-2026.pdf"
                target="_blank"
                className="underline mb-2 inline-block"
                aria-label="Download my résumé"
              >
                Download Full Resume (pdf)
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Profile;
