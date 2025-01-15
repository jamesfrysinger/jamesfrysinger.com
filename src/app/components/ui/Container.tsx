const Container = ({
  className = "",
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`max-w-[1160px] ml-auto mr-auto pl-10 pr-10 box-content ${className}`}
      role="group"
      aria-labelledby="container-heading"
    >
      <h2 id="container-heading" className="sr-only">
        Content Container
      </h2>
      {children}
    </div>
  );
};
export default Container;
