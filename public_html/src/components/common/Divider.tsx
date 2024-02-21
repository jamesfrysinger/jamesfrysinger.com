import { FC } from "react";

interface IDivider {
  orientation?: string;
}
const Divider: FC<IDivider> = ({ orientation }) => {
  return (
    <span className="inline-block w-[40px] border-b border-neutral-300 dark:border-neutral-700 my-1.5"></span>
  );
};

export default Divider;
