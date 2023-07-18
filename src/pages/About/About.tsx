import AppNav from "../../components/AppNav/AppNav";
import AppHero from "../../components/AppHero/AppHero";

const Home = (): JSX.Element => {
  return (
    <section className=" w-full h-screen bg-gradient-to-bl from-black to-blue-950 overflow-x-hidden">
      <AppNav />

      <AppHero>
        <h2 className="text-center text-3xl mx:mx-auto  mx-5 md:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500 ">
          Why tailwind ?
        </h2>

        <p className="text-slate-600 py-5 md:text-center md:py-8 md:mx-auto mx-5">
          This site contains components I built to test my skills on Tailwindcss
        </p>
      </AppHero>
    </section>
  );
};

export default Home;
