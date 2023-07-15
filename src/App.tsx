import LinuxLogo from "./assets/linux-logo.png";
import "./App.css";

const App = () => {
  return (
    <section className="App w-full h-screen bg-gradient-to-bl from-black to-blue-950  ">
      <section className="w-full flex items-center justify-center flex-col ">
        <h1 className="text-3xl md:text-4xl  capitalize bg-clip-text text-transparent bg-gradient-to-l from-sky-500 to-slate-100 font-bold p-5 text-center md:p-4 my-5">
          revolutionzing shopping exprience using blockchain
        </h1>
        
        <section className="my-5">
          <img src={LinuxLogo} alt="linux logo" />
        </section>
      </section>
    </section>
  );
};
export default App;
