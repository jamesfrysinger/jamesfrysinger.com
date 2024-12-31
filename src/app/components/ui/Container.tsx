const Container = ({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`max-w-[1160px] ml-auto mr-auto pl-10 pr-10 box-content ${className}`}
    >
      {children}
    </div>
  );
};
export default Container;
