import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-8 md:gap-20">
          <img
            className="h-64 md:h-96 rounded-2xl border-4 border-gray-400"
            src={AboutImg}
            alt="About img"
          />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Web Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a dedicated Web Developer, I specialize in building dynamic and responsive user interfaces using technologies like HTML, CSS, and JavaScript. My goal is to create innovative and user-centric web solutions, such as contributing to educational platforms, while thriving in collaborative environments to drive organizational success.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Data Analytics
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  My expertise in Data Analytics lies in transforming raw data into actionable insights. Using tools like Python, SQL, and Power BI, I have experience in visualizing sales trends and developing predictive models, such as forecasting housing prices impacted by global events. My focus is always on building robust, data-driven solutions.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Blockchain Technology
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  With a strong interest in decentralized systems, I have hands-on experience in blockchain development, including the innovative creation of a personal cryptocurrency project. I am proficient with tools like Solidity, Ganache, and MetaMask and am passionate about leveraging blockchain to build secure and transparent solutions.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;