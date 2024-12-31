import { IWorkCard } from "@/app/types/Types";
import Image from "next/image";

const WorkCard = ({ brand, title, desc, image }: IWorkCard) => {
  return (
    <div className="mb-2 md:mb-6">
      <Image
        src={`/images/work/${image}`}
        width={1710}
        height={758}
        alt={`${title} for ${brand}`}
        className="rounded-md"
        unoptimized
      />
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
