import Image from "next/image";

interface IWorkCard {
  brand: string;
  title: string;
  desc: string;
  image: string;
}
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
      <div className="pt-4 pl-6 pr-6">
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
