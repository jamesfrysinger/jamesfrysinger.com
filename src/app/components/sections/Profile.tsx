import Container from "@/app/components/ui/Container";
import { experienceData as data } from "@/app/data/ExperienceData";

const Profile = () => {
  return (
    <section>
      <Container>
        <h1 className="text-[60px] leading-[100%] font-light">Profile</h1>
      </Container>
      <Container>
        <p className="text-[1.75rem] leading-[150%]">
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
          <div className="font-bold w-1/4 pt-3">Experience</div>
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
