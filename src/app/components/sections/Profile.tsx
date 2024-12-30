import Container from "@/app/components/ui/Container";
import { experienceData as data } from "@/app/data/ExperienceData";
import { ISectionsProps } from "@/app/types/Types";
import { FC } from "react";

const Profile: FC<ISectionsProps> = ({ sectionsRef }) => {
  return (
    <section
      ref={(el) => {
        sectionsRef.current.profile = el;
      }}
    >
      <Container className="mt-[2rem] md:mt-[4rem]">
        <h2 className="text-[3rem] md:text-[3.75rem] leading-[100%] font-light">
          Profile
        </h2>
        <p className="text-[1.6rem] md:text-[1.75rem] leading-[150%] pt-6">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Mus placerat cras
          tellus parturient tempor sagittis. Semper placerat vitae faucibus
          accumsan tellus curabitur fusce facilisi. Aliquam quis rhoncus
          vulputate convallis congue mauris. Orci potenti vulputate lacus
          scelerisque fermentum luctus. Gravida ornare ex augue aliquam conubia
          risus eget diam. Quisque sed tellus integer ornare congue fermentum
          sed tempor. Gravida sem cursus per nec primis. Lorem ipsum odor amet,
          consectetuer adipiscing elit. Mus placerat cras tellus parturient
          tempor sagittis. Semper placerat vitae faucibus accumsan tellus
          curabitur fusce facilisi. Aliquam quis rhoncus vulputate convallis
          congue mauris. Semper placerat vitae faucibus.
        </p>
        <div className="md:flex pt-6">
          <h3 className="font-bold w-1/4 pt-3 pb-4">Experience</h3>
          <div>
            {data.map((item, index) => {
              return (
                <p className="pt-3 pb-3" key={index}>
                  {item.period}
                  <br />
                  <span className="font-bold">{item.title}</span>
                  <br />
                  {item.brand}
                </p>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Profile;
