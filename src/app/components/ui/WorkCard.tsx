import { IWorkCard } from "@/app/types/Types";
import Image from "next/image";

const WorkCard = ({ brand, title, desc, image }: IWorkCard) => {
  return (
    <div className="mb-12">
      <Image
        src={`/images/work/${image}`}
        width={1710}
        height={758}
        alt={`${title} for ${brand}`}
        className="rounded-md"
      />
      <div className="p-4 pl-2 pr-2">
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
