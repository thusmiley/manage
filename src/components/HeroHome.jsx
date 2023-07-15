import heroImage from '../assets/hero-desktop.png'
const HeroHome = () => {
  return (
    <section
      id="hero"
      className="flexCenter flex-col flex-1  pt-[111px] lg:pt-[220px] pb-2 mx-auto hero-bg overflow-visible"
    >
      <div className="lg:w-container lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-10">
        <div className=" w-container lg:w-[50%] sm:min-h-[286px] mx-auto">
          <img
            src={heroImage}
            alt="hero image"
            className="w-full"
          />
        </div>
        <div className="text-center lg:text-left w-container mx-auto lg:w-[50%] mt-5">
          <h1 className="heading1 lg:w-[14ch]">
            Bring everyone together to build better products.
          </h1>
          <p className="paragraph mt-2 lg:mt-4 mb-7 lg:mb-10 lg:w-[40ch]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
