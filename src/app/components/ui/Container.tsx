import { ReactElement, ReactNode } from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-[1100px] mt-[80px] mb-[80px] ml-auto mr-auto pl-12 pr-12 box-content">
      {children}
    </div>
  );
};
export default Container;
