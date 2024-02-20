import { FC, ReactNode } from "react";

interface IListStyle {
  children: ReactNode;
}
const ListStyle: FC<IListStyle> = ({ children }) => {
  return (
    <li className="leading-7 sm:leading-9 sm:text-lg py-1 sm:py-0 flex">
      <span className="block pr-2 text-neutral-400 dark:text-neutral-500">
        +
      </span>
      <p className="block ">{children}</p>
    </li>
  );
};

export default ListStyle;
