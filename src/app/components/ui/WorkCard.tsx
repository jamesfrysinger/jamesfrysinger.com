import Image from "next/image";

interface IWorkCard {
  brand: string;
  title: string;
  desc: string;
  image: string;
}
const WorkCard = ({ brand, title, desc, image }: IWorkCard) => {
  return (
    <div className="mb-8">
      <Image
        src={`/images/work/${image}`}
        width={1710}
        height={758}
        alt={`${title} for ${brand}`}
        className="rounded-md"
      />
      <div className="pt-4 pl-6 pr-6">
        <p className="text-[#A1B79C]">
          <span className="font-bold">{brand}</span>
          <br />
          <span className="text-[#8FAA88]">{title}</span>
          <br />

          {desc}
        </p>
      </div>
    </div>
  );
};
export default WorkCard;
