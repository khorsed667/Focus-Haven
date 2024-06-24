import banner from "./../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="xsm:h-[400px] md:h-screen flex flex-col justify-center items-start xsm:p-3 sm:p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-full md:w-3/4 lg:w-1/2">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          CAPTURE MEMORIES{" "}
          <span className="text-slate-400 font-thin">WITH</span> CREATIVITY{" "}
          <span className="text-slate-400 font-thin">AND</span> PASSION
        </p>
        <p className="text-sm sm:text-md md:text-lg text-slate-700 mb-4">
          Join our summer camp to explore the art of photography, guided by
          seasoned professionals. <br /> Learn, create, and share unforgettable
          moments.
        </p>
        <div className="mt-4">
          <a href="#gallery">
            <button className="mr-8 px-4 sm:px-6 uppercase py-2 bg-black text-white hover:bg-slate-400 transition duration-300">
              See Our Gallery
            </button>
          </a>
          <button className="px-4 sm:px-6 py-2 bg-transparent border-2 border-black hover:bg-slate-400 hover:text-white hover:border-none text-black transition duration-300">
            PRICING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
