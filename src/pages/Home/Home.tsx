import AppNav from "../../components/AppNav/AppNav";
import AppLayout from "../../components/AppHero/AppLayout";
import WindowsLogo from "./../../assets/windows-logo.png";
import AppleLogo from "./../../assets/apple-logo.png";
import AppCard from "../../components/AppCard/AppCard";
import Hoodie1 from "./../../assets/hoodie-1.png";
import Hoodie2 from "./../../assets/hoodie-2.png";
import Hoodie3 from "./../../assets/hoodie-3.png";

const Home = (): JSX.Element => {
  return (
    <section className=" w-full h-screen bg-gradient-to-bl from-black to-blue-950 overflow-x-hidden">
      <AppNav />

      <AppLayout>
        <h2 className="p-5 md:text-4xl md:mx-auto text-left  md:text-center text-3xl lg:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500 ">
          Hi Everyone,
          <br className="block md:hidden" />I am learning tailwind
        </h2>

        <p className="text-slate-600 py-5 md:text-center md:py-8 md:mx-auto mx-5">
          This site contains components I built to test my skills on Tailwindcss
        </p>

        <h2 className="md:mx-auto mx-5 text-center text-2xl md:text-4xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500 my-12">
          Trending Hoodies 🚀
        </h2>

        <section className="all-components mx-auto">
          <section className="all-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <AppCard
              imageSrc={Hoodie1}
              cardHeader="Github Hoodie"
              cardPrice={50}
            >
              Take your love for Github to the next level
            </AppCard>

            <AppCard
              imageSrc={Hoodie2}
              cardHeader="Github Hoodie Pro Max"
              cardPrice={70}
            >
              Github hoodie but rainbow color, it is what it is 😆
            </AppCard>
            <AppCard
              imageSrc={Hoodie3}
              cardHeader="Github Nerdy Hoodie"
              cardPrice={30}
            >
              Github hoodie but for boring devs
            </AppCard>
          </section>
        </section>
      </AppLayout>
    </section>
  );
};

export default Home;
