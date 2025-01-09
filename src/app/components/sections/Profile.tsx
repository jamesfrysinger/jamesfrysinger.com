import Container from "@/app/components/ui/Container";
import { experienceData as data } from "@/app/data/ExperienceData";
import { ISectionsProps } from "@/app/types/Types";
import { FC } from "react";
import Button from "../ui/Button";

const Profile: FC<ISectionsProps> = ({ sectionsRef }) => {
  const handleDownload = () => {
    window.open("/downloads/jamesfrysinger-resume.pdf", "_blank");
  };
  return (
    <section
      aria-labelledby="profile-heading"
      ref={(el) => {
        sectionsRef.current.profile = el;
      }}
    >
      <Container className="mt-[4rem] md:mt-[7rem]">
        <h2
          id="profile-heading"
          className="text-[3rem] md:text-[3.75rem] leading-[100%] font-light"
        >
          Profile
        </h2>
        <p className="text-[1.5rem] md:text-[2rem] leading-[150%] pt-6 font-light">
          Senior Front-End Web and Software Developer based in New York with
          over 15 years of development experience and leadership qualities. I’ve
          worked with high-profile brands, developing complex and engaging
          experiences with a passion for both form and function. Since 2006,
          I’ve developed interfaces for high-value, high-traffic websites and
          software for brands such as Nike, Foot Locker, Calvin Klein, Tommy
          Hilfiger, Speedo, Champs Sports, Wolters Kluwer, and others. My
          approach focuses on understanding customer and business needs, then
          developing scalable, clean, and performant code while utilizing the
          latest tech.
        </p>
        <div className="md:flex pt-6">
          <h3 className="font-bold w-1/4 pt-3 pb-4">Experience</h3>
          <div>
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
              <Button
                text="Download Résumé"
                title="Connect with me on LinkedIn"
                onclick={handleDownload}
                className="font-bold underline mb-2"
              />
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Profile;
