import AppNav from "../../components/AppNav/AppNav";
import AppLayout from "../../components/AppLayout/AppLayout";
import LinuxLogo from "./../../assets/linux-logo.png";
import AppCard from "../../components/AppCard/AppCard";

const Home = (): JSX.Element => {
  return (
    <section className=" w-full h-screen bg-gradient-to-bl from-black to-blue-950 overflow-x-hidden">
      <AppNav />

      <AppLayout>
        <h2 className="p-5 sm:text-5xl md:mx-auto text-left  md:text-center text-3xl md:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500 ">
          Hi Everyone,
          <br className="block md:hidden" />I am learning tailwind
        </h2>

        <p className="text-slate-600 py-5 md:text-center md:py-8 md:mx-auto mx-5">
          This site contains components I built to test my skills on Tailwindcss
        </p>

        <h2 className="md:mx-auto mx-5 text-center text-2xl md:text-4xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500 my-12">
          All components
        </h2>

        <section className="all-components">
          <AppCard
            imageSrc={LinuxLogo}
            cardHeader="Linux teddy bear"
            cardPrice={500}
          >
            linux is user friendly, he is just picky about the kind of friends
            he wants.
          </AppCard>
        </section>
      </AppLayout>
    </section>
  );
};

export default Home;
