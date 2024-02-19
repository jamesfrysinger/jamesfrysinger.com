import { FC } from "react";
interface IBrandLogo {
  logo: string;
}
const BrandLogo: FC<IBrandLogo> = ({ logo }) => {
  return (
    <div className="w-1/2 sm:w-1/4 p-2 py-5">
      <img
        src={logo}
        alt=""
        className="mx-auto dark:filter dark:invert dark:opacity-90"
      />
    </div>
  );
};

export default BrandLogo;
