import banner from './../../../assets/banner.jpg';

const Banner = () => {
    return (
        <div 
            className="h-screen flex flex-col justify-center items-start p-10 bg-cover bg-center" 
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="w-1/2">
                <p className="text-5xl font-semibold mb-4">
                    CAPTURE MEMORIES <span className="text-slate-400 font-thin">WITH</span> CREATIVITY <span className="text-slate-400 font-thin">AND</span> PASSION
                </p>
                <p className="text-md text-slate-700 mb-4">
                    Join our summer camp to explore the art of photography, guided by seasoned professionals. <br /> Learn, create, and share unforgettable moments.
                </p>
                <div className="mt-4">
                    <button className="mr-8 px-6 uppercase py-2 bg-black text-white hover:bg-slate-400 transition duration-300">
                        See Our Gallery
                    </button>
                    <button className="px-6 py-2 bg-transparent border-2 border-black hover:bg-slate-400 hover:text-white hover:border-none text-black transition duration-300">
                        PRICING
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
