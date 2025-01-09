import { IWorkCard } from "@/app/types/Types";

const WorkCard = ({ brand, title, desc, image, index }: IWorkCard) => {
  return (
    <div className="mb-6 md:mb-6">
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
          {...(index >= 2 && { loading: "lazy" })}
          decoding="async"
        />
      </picture>

      <div className="p-4">
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
