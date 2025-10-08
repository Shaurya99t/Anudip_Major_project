import React from "react";
import ProjectCard from "./ProjectCard";
import houseImg from "../../assets/image (4).png";
import salesImg from "../../assets/image (2).png";
import priceImg from "../../assets/image (3).png";
import educationImg from "../../assets/image (5).png";
import cryptoImg from "../../assets/image (6).png";
import storeImg from "../../assets/image (2).png";

const Projects = () => {
  const projectData = [
    {
      title: "House Price Prediction",
      main: "Analyzed how COVID-19 impacted housing prices and developed predictive models for forecasting.",
      sourceUrl: "https://github.com/Shaurya99t/intenship",
      imageUrl: houseImg,
    },
    {
      title: "Annual Sales Trend Analysis",
      main: "Visualized and analyzed sales data to identify patterns and provide actionable insights for companies.",
      sourceUrl: "https://github.com/Shaurya99t/data_analytics",
      imageUrl: salesImg,
    },
    {
      title: "Product Price Recommendation",
      main: "A web-based tool developed to track and recommend real-time product prices.",
      sourceUrl: "https://github.com/Shaurya99t/mini_project",
      imageUrl: priceImg,
    },
    {
      title: "Free Education Platform",
      main: "A hackathon project made with HTML, CSS, and JS to provide a free education platform.",
      sourceUrl: "https://github.com/Shaurya99t/hackathon_2.0_new",
      imageUrl: educationImg,
    },
    {
      title: "Personal Cryptocurrency Dev",
      main: "Created a prototype for a cryptocurrency with a fully functional blockchain.",
      sourceUrl: "https://github.com/Shaurya99t/mini_project",
      imageUrl: cryptoImg,
    },
    {
      title: "Store Management System",
      main: "Designed a mini project for managing inventory and sales for a local store.",
      sourceUrl: "https://github.com/Shaurya99t/vishakha",
      imageUrl: storeImg,
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8 text-center">
        My Projects
      </h1>
      <div className="flex flex-wrap items-stretch justify-center gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            sourceUrl={project.sourceUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;