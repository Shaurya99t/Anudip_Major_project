import React from "react";
import avatarImg from "../../assets/photo_2024-06-21_21-29-44.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I'm a passionate developer and data analyst specializing in transforming complex data into actionable insights and building dynamic web applications. With expertise in Python, SQL, and JavaScript, my goal is to leverage my problem-solving skills to create impactful, data-driven solutions.
        </p>
        <a
          href="#Footer"
          className="mt-5 md:md-10 text-white inline-block py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </a>
      </div>
      <div>
        <img
          className="w-64 md:w-96 rounded-full border-4 border-gray-400"
          src={avatarImg}
          alt="Shaurya Seth"
        />
      </div>
    </div>
  );
};

export default Home;