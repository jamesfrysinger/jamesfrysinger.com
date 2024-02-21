import { FC } from "react";
interface IBrandLogo {
  logo: string;
  height?: string;
}
const BrandLogo: FC<IBrandLogo> = ({ logo, height }) => {
  return (
    <div className="flex justify-center w-1/2 sm:w-1/4 py-5">
      <img
        src={logo}
        alt=""
        className={`dark:filter dark:invert dark:opacity-90`}
        style={{ height }}
      />
    </div>
  );
};

export default BrandLogo;
