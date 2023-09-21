import patternImg from "../assets/pattern.svg";

const GetStarted = () => {
  return (
    <section id="getstarted" className="mt-10 bg-primary relative">
      <div className="w-container mx-auto text-white flexCenter flex-col py-16 text-center lg:flex-row lg:justify-between lg:items-center">
        <h2 className="heading2 mb-8 lg:mb-0 lg:w-[20ch] lg:text-left">Simplify how your team works today.</h2>
        <button className="bg-white text-primary hover:text-primary/50 hover:bg-white cursor-pointer z-10">Get Started</button>
        <img src={patternImg} alt="pattern" className="w-[100%] h-[100%] absolute mix-blend-overlay left-[-280px] top-[30px] md:hidden" />
      </div>
    </section>
  );
};

export default GetStarted;
