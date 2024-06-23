import React from 'react';

const StorySection = () => {
  return (
    <section className="bg-white py-16 px-4 max-w-screen-xl mx-auto text-center bg-gradient-to-r from-white to-slate-100 border-2 my-5 border-black rounded-3xl p-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-slate-500 ">FocusHaven's Story:</span> Get to know us
          </h2>
      <div className="max-w-5xl mx-auto flex from-slate-200 flex-col lg:flex-row items-center overflow-hidden">
        <div className="lg:w-1/2">
          <img 
            src="https://img.freepik.com/free-photo/man-working-his-photography-studio_23-2149033342.jpg?t=st=1716458291~exp=1716461891~hmac=55e132b98f08de19842e86ecd158a4f91f7afd637c24a0a3963460c373f62237&w=996" 
            alt="Team" 
            className="w-full h-full object-cover border-2 border-black rounded-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-8">
          <p className="text-gray-600 mb-4">
            FocusHaven is more than just a photography camp; It Led by a team of passionate photographers and artists, we aim to inspire and nurture budding photographers of all ages. Our camp offers hands-on experiences, expert guidance, and a community of like-minded individuals.
          </p>
          <p className="text-gray-600 mb-4">
            Join us to explore the art of photography, from the basics to advanced techniques. With a variety of workshops, photo walks, and editing sessions, FocusHaven provides a comprehensive and enriching experience.
          </p>
          <a 
            href="/about" 
            className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-slate-500 transition duration-300"
          >
            Learn more about us
          </a>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
