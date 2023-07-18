import React from "react";

interface AppCardProps {
  className?: string;
  imageSrc: string;
  cardHeader: string;
  cardPrice: number;
  children: JSX.Element | JSX.Element[] | string;
  others?: React.Attributes;
}

const AppCard = ({
  className,
  imageSrc,
  cardHeader,
  cardPrice,
  children,
  others,
}: AppCardProps): JSX.Element => {
  return (
    <section
      className={`card-section border border-slate-600 rounded-lg mx-5 p-4 flex flex-col justify-center md:w-1/4 ${className} hover:border-violet-200 cursor-pointer transition-all duration-100`}
      {...others}
    >
      <section className="card-image mx-auto mb-3">
        <img src={imageSrc} alt={`Card image`} />
      </section>
      <section className="card-text">
        <h5 className="text-slate-200 font-semibold text-xl mt-3 capitalize">
          {cardHeader}
        </h5>
        <p className="capitalize text-slate-500 text-sm pt-2">{children}</p>
      </section>
      <section className="card-footer mt-3">
        <p className="capitalize text-slate-100 text-sm font-bold">
          <span className=" text-slate-100 px-1">$</span>
          {cardPrice}
        </p>
      </section>
    </section>
  );
};

export default AppCard;
