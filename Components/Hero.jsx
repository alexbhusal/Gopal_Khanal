import React from "react";

const Hero = () => {
  return (
    <div className=" m-2 md:mt-5 flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 p-1 md:p-10 ">
        <p className="text-xl text-black font-semibold md:text-4xl md:font-bold mb-4 text-center md:text-justify ">
          Hi, I am <span className="text-red-500">Gopal Khanal</span>
        </p>
        <p className="text-xl font-serif  text-gray-600 md:text-8xl p-1 md:pt-5 text-left mb-2 md:mb-10">
          Empowering growth through strategic thinking and analytical precision.
        </p>
        <div className="flex justify-center md:justify-start ">
          <a
            href="https://wa.me/+9779857082504?text=hello%20Gopal%20Khanal"
            target="_blank"
            className="bg-green-500 hover:bg-indigo-700 text-white px-2 md:px-6 py-1 md:py-3 rounded-lg text-base md:text-2xl font-bold transition duration-300 "
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
        <img
          className="rounded-3xl max-h-[400px] md:max-h-[800px]  w-auto "
          src="https://res.cloudinary.com/dxdbrqanq/image/upload/v1747903466/be9zrowd2oxznqv3figv.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
