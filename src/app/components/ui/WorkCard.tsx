import { IWorkCard } from "@/app/types/Types";

const WorkCard = ({ brand, title, desc, image }: IWorkCard) => {
  return (
    <div className="mb-2 md:mb-6">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`/images/work/${image}_mo.webp`}
        />
        <source
          media="(min-width: 769px)"
          srcSet={`/images/work/${image}.webp`}
        />
        <img
          src={`/images/work/${image}.webp`}
          alt={`${title} for ${brand}`}
          className="rounded-md"
          width="1710"
          height="758"
          loading="lazy"
        />
      </picture>

      <div className="p-4 pl-4 pr-4">
        <p>
          <span className="font-bold">{brand}</span>
          <br />
          {title}
          <br />
          {desc}
        </p>
      </div>
    </div>
  );
};
export default WorkCard;
