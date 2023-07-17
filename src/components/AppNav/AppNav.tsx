/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppNav: React.FC = (): JSX.Element => {
  const mobileLinksRef = useRef<HTMLElement>(null);
  const [navToggled, setNavToggled] = useState<boolean>(false);

  useEffect(() => {
    if (navToggled) {
      mobileLinksRef.current!.style.maxHeight = `${
        mobileLinksRef.current!.scrollHeight
      }px`;
    } else {
      mobileLinksRef.current!.style.maxHeight = "0";
    }
  }, [navToggled]);

  const handleHamburgerClick = () => {
    setNavToggled(!navToggled);
  };

  return (
    <nav className="w-screen flex items-center md:justify-start justify-between md:flex-row flex-col space-x-5 py-5">
      <h2 className="font-extrabold text-2xl text-slate-200 mx-5 md:block hidden">
        Tailwind
      </h2>

      <section className="hidden md:flex items-center justify-between w-60">
        <Link to="/" className="capitalize inline-block text-slate-100">
          home
        </Link>
        <Link to="about" className="capitalize inline-block text-slate-100">
          about
        </Link>
        <Link to="contact" className="capitalize inline-block text-slate-100">
          contact
        </Link>
      </section>

      <section className="md:hidden flex w-full flex-col">
        <section className="header flex w-full items-center justify-between">
          <h2 className="font-extrabold text-2xl text-slate-200 mx-5">
            Tailwind
          </h2>

          <section
            className={`hamburger mx-5 transform transition-transform duration-300 ease-in-out  ${
              navToggled ? "-rotate-90" : "rotate-0"
            }`}
            onClick={handleHamburgerClick}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-slate-100 font-bold"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
          </section>
        </section>

        <section
          ref={mobileLinksRef}
          className="mx-5 my-11 overflow-hidden transition-max-h duration-500 ease-in-out"
        >
          <Link to="/" className="capitalize block text-slate-100 my-6">
            home
          </Link>
          <Link to="about" className="capitalize block text-slate-100 my-6">
            about
          </Link>
          <Link to="contact" className="capitalize block text-slate-100 my-6">
            contact
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default AppNav;
