const Container = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`max-w-[1100px] ml-auto mr-auto pl-8 pr-8 box-content ${className}`}
    >
      {children}
    </div>
  );
};
export default Container;
