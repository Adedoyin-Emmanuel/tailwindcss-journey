import React from "react";

interface AppHeroProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  others?: React.Attributes;
}
const AppHero = ({
  className,
  children,
  others,
}: AppHeroProps): JSX.Element => {
  return (
    <section className={`w-full md:mx-auto md:my-12 ${className}`} {...others}>
      {children}
    </section>
  );
};

export default AppHero;
