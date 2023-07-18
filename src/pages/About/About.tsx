import AppNav from "../../components/AppNav/AppNav";
import AppLayout from "../../components/AppHero/AppLayout";

const Home = (): JSX.Element => {
  return (
    <section className=" w-full h-screen bg-gradient-to-bl from-black to-blue-950 overflow-x-hidden">
      <AppNav />

      <AppLayout>
        <h2 className="text-center text-3xl mx:mx-auto  mx-5 md:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500 ">
          Why tailwindcss ?
        </h2>

        <p className="text-slate-600 py-5 md:text-center md:py-8 md:mx-auto mx-5">
          I learnt tailwind so I can build my frontend projects faster and
          <br className="hidden md:block" />
          collaborate with other developers. Most of them use tailwindcss
        </p>

        <h2 className="text-left md:text-center text-2xl mx:mx-auto  mx-5 md:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500  mt-5">
          How fast ?
        </h2>

        <p className="text-slate-600 py-5 md:text-center md:py-8 md:mx-auto mx-5">
          I learnt tailwindcss and MUI (Material UI) in a day. The second day, I
          created this
          <br className="hidden md:block" />
          site to document my journey. I guess having some bootstrap exprience
          helped.
        </p>

        <h2 className="text-left text-2xl md:text-center mx:mx-auto  mx-5 md:text-6xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-violet-500  mt-5">
          What's next ?
        </h2>

        <p className="text-slate-600 py-5 md:text-center md:py-8 md:mx-auto mx-5">
          Collaboration (o o) I can now collaborate
          <br className="hidden md:block" />
          with my friends and build awesome projects.
        </p>
      </AppLayout>
    </section>
  );
};

export default Home;
