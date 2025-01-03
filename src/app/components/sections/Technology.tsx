import Container from "@/app/components/ui/Container";
import { technologyData as data } from "@/app/data/TechnologyData";
import { ISectionsProps } from "@/app/types/Types";
import { FC } from "react";

const Technology: FC<ISectionsProps> = ({ sectionsRef }) => {
  return (
    <section
      ref={(el) => {
        sectionsRef.current.technology = el;
      }}
    >
      <Container className="mt-[5rem] md:mt-[8rem]">
        <h2 className="text-[3rem] md:text-[3.75rem] leading-[100%] font-light">
          Technology
        </h2>

        {data.map((item, index) => {
          const groupSize = Math.ceil(item.details.length / 3);

          const groups = [];
          for (let i = 0; i < item.details.length; i += groupSize) {
            groups.push(item.details.slice(i, i + groupSize));
          }

          return (
            <article className="w-full md:flex pt-6" key={index}>
              <h3 className="font-bold md:w-1/4 pt-3 pr-6">{item.title}</h3>
              <div className="flex w-full md:w-3/4">
                {groups.map((group, groupIndex) => (
                  <div key={groupIndex} className="w-1/3 pt-3 pr-4">
                    {group.map((detail, detailIndex) => (
                      <p className="pb-3" key={detailIndex}>
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </Container>
    </section>
  );
};

export default Technology;
