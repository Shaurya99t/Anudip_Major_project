import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-wrap justify-around bg-[#465697] text-white p-10 md:p-12 items-start"
    >
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
        <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal mt-2">
          Feel free to reach out!
        </h3>
        <ul className="text-sm md:text-lg space-y-3 mt-6">
          <li className="flex gap-3 items-center">
            <MdOutlineEmail size={22} />
            <a href="mailto:shauryaseth68@gmail.com" className="hover:underline">
              shauryaseth68@gmail.com
            </a>
          </li>
          <li className="flex gap-3 items-center">
            <CiLinkedin size={22} />
            <a
              href="https://www.linkedin.com/in/shaurya-seth-59949b240"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/shaurya-seth
            </a>
          </li>
          <li className="flex gap-3 items-center">
            <FaGithub size={22} />
            <a
              href="https://github.com/Shaurya99t"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Shaurya99t
            </a>
          </li>
          <li className="flex gap-3 items-center">
            <FaPhone size={20} />
            <a href="tel:8931910986" className="hover:underline">
              8931910986
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <form
          action="https://formspree.io/f/xnngbawo"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gray-800 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;