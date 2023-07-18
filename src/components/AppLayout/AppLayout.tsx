import React from "react";

interface AppLayoutProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  others?: React.Attributes;
}
const AppLayout = ({
  className,
  children,
  others,
}: AppLayoutProps): JSX.Element => {
  return (
    <section className={`w-full md:mx-auto md:my-12 ${className}`} {...others}>
      {children}
    </section>
  );
};

export default AppLayout;
