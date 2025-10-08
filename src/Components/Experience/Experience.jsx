import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiPowerbi, SiPandas } from "react-icons/si";
import { IoAnalyticsSharp, IoSchool } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">
        Skills & Experience
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPowerbi color="#F2C811" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPandas color="#130654" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGitAlt color="#F05032" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <IoAnalyticsSharp color="#A3A3A3" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Data Analytics Intern, Froyo Technology
              </h2>
              <p className="text-sm leading-tight font-thin">
                One-Month Internship
              </p>
              <ul className="text-sm p-2">
                <li>- Gained practical experience in Data Analytics using Python.</li>
                <li>- Applied data processing and visualization techniques.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <GiArtificialIntelligence color="#A3A3A3" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                AI & Machine Learning Trainee, Softpro Company
              </h2>
              <p className="text-sm leading-tight font-thin">
                One-Month Virtual Training
              </p>
              <ul className="text-sm p-2">
                <li>- Completed intensive training in AI and Machine Learning.</li>
                <li>- Explored various ML models and foundational algorithms.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <IoSchool color="#A3A3A3" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Data Analytics Trainee, Shape My Skills
              </h2>
              <p className="text-sm leading-tight font-thin">
                One-Month College Training
              </p>
              <ul className="text-sm p-2">
                <li>
                  - Underwent college-led training focused on Data Analytics.
                </li>
                <li>- Strengthened skills in data manipulation and analysis.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;