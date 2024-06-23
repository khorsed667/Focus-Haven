import React from "react";

const Gallery = () => {
  const imageArray = [
    {
      image:
        "https://img.freepik.com/free-photo/mesmerizing-view-silhouette-tree-savanna-plains-sunset_181624-18108.jpg?t=st=1716384609~exp=1716388209~hmac=ada2f29f21dcdaf3d15408cfa3173fc4f51118e5e7ac71a3100baa34eee8b5e8&w=996",
      info: "Stunning sunrise over the mountains.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/waterfall-nature-thailand_335224-989.jpg?t=st=1716384596~exp=1716388196~hmac=0ebefda802cae125ae7caa57ff4b5b110f4744c01314ae778280d99675de8d00&w=996",
      info: "A serene lake reflecting autumn colors.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?t=st=1716384581~exp=1716388181~hmac=d775ef69bad91305af067bfaf0571401d37f54eed0a110ec54cc8d259b7ebe25&w=996",
      info: "A close-up of a vibrant flower in bloom.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?t=st=1716384573~exp=1716388173~hmac=d6735352b6810ea6a89a75b8a6184aed63ced2f9d340106e61cc9d49697651d8&w=996",
      info: "Cityscape at night with dazzling lights.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/closeup-exotic-forest-animal_60438-3549.jpg?t=st=1716384560~exp=1716388160~hmac=299ad64d2e75a71215268a27caf61d7d0c379a4ed3e98501c2ec92df9403a6e1&w=1060",
      info: "A majestic eagle soaring in the sky.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?t=st=1716384518~exp=1716388118~hmac=8b184d9a48c5b4099c92a949d439f5796a253bb12f75fd421c09978cd7e797ba&w=996",
      info: "Calm beach with crystal-clear waters.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?t=st=1716384497~exp=1716388097~hmac=0d7b4355f61f05f9a5db41996fd0fbc6b9dbd5064cb1c4ed60b799577b0356c5&w=996",
      info: "Forest path leading into the mist.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?t=st=1716384483~exp=1716388083~hmac=c8765dc3fd5d5f84abad3f4bd01b81d2d36214abe48e783865636d39b6e46397&w=996",
      info: "A bustling market scene full of life.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?t=st=1716384457~exp=1716388057~hmac=98a61d2c8561e772e7007bb7882ae7c173b7f3f1a20a8cf5e96ae7bd8babdf66&w=996",
      info: "Snow-capped mountains under a clear blue sky.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto my-16">
      <div className="w-1/2 mx-auto text-center">
        <p className="text-2xl text-slate-500 font-sans font-semibold">Our Gallery</p>
        <p className="text-3xl my-5">Witness clicks of this year.</p>
      </div>
      <div className="grid grid-cols-3 gap-5 w-full mt-7">
        {imageArray.map((item, index) => (
          <div key={index} className="relative z-0 overflow-hidden cursor-pointer group hover:border-black hover:border-2">
            <img
              src={item.image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-[10000ms] group-hover:scale-150"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 transition-opacity duration-[3000ms] group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-end justify-center text-white text-center p-4 opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
              {item.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;