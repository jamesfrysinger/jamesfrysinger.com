import { FC, ReactNode } from "react";

interface IListStyle {
  children: ReactNode;
}
const ListStyle: FC<IListStyle> = ({ children }) => {
  return (
    <li className="text-lg leading-9 flex">
      <span className="block pr-3">+</span>
      <p className="block">{children}</p>
    </li>
  );
};

export default ListStyle;
