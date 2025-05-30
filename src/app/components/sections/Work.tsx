import WorkCard from "../ui/WorkCard";
import { workData as data } from "@/app/data/WorkData";
import Container from "../ui/Container";
import { FC } from "react";
import { ISectionsProps } from "@/app/types/Types";

const Work: FC<ISectionsProps> = ({ sectionsRef }) => {
  return (
    <section
      id="work"
      aria-labelledby="selected-works-heading"
      ref={(el) => {
        sectionsRef.current.work = el;
      }}
      role="region"
    >
      <Container className="mt-[4rem] mb-[4rem]">
        <h2
          id="selected-works-heading"
          className="text-[3rem] md:text-[3.75rem] leading-[100%] font-light"
        >
          Selected
          <br />
          Works
        </h2>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 pl-5 pr-5">
        {data.map((item, index) => (
          <WorkCard
            brand={item.brand}
            title={item.title}
            desc={item.desc}
            image={item.image}
            index={index}
            key={item.id}
            aria-label={`Work item ${index + 1}: ${item.title}`}
          />
        ))}
      </div>
    </section>
  );
};
export default Work;
