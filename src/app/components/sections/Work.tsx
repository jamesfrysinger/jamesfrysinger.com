import WorkCard from "../ui/WorkCard";
import { workData as data } from "@/app/data/WorkData";
import Container from "../ui/Container";

const Work = () => {
  return (
    <section>
      <Container>
        <h1 className="text-[60px] leading-[100%] font-light">
          Selected
          <br />
          Works
        </h1>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 pl-2 pr-2">
        {data.map((item, index) => (
          <WorkCard
            brand={item.brand}
            title={item.title}
            desc={item.desc}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
export default Work;
