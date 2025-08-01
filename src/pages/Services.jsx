import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
// import CTA from '../components/CTA';
import './Services.css';
import "../components/Header.css"
import EthicalWebScraping from "../assets/services/Ethical_Web_Scraping.png";
import DataStructuring from "../assets/services/Data_Structuring.png";
import ModelTraining from "../assets/services/Model_Training.png";
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseINAISection from '../components/WhyChooseINAISection';
import CTA_service from '../components/CTA_service';


const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <Hero
        tagline="Welcome to INAI Worlds – Building the Future with Data and AI"
        title="Our Core Services"
        
        isShort={true}
        
      />

      {/* 🔀 Manual Zigzag Section with 50/50 layout */}
      <div className="container mx-auto px-4 py-20 space-y-32">

        {/* Section 1 - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
          {/* Image 50% */}
          <div className="w-full md:w-1/2">
            <img
              src={EthicalWebScraping}
              alt="Web Scraping"
              className="w-full h-[300px] object-cover rounded-2xl shadow-md ser_img"
            />
          </div>

          {/* Content 50% */}
          <div className="w-full md:w-1/2 sec_con">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 inline-block px-5 py-2 rounded-full shadow" style={{color: "white"}}>
              🔹 Web Scraping That Powers Projects
            </h2><br/>
            <p className="text-gray-700 leading-relaxed mb-4" style={{color: "white"}}>
              From scraping web data to real-time feeds, our web scraping solutions feed both model training and internal learning. It’s all about data, accuracy data.
            </p><br/>
            <a href="service1" className="btn-get-in-touch">Read More</a>
          </div>
        </div>

        {/* Section 2 - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 sec_com">
          {/* Content 50% */}
          <div className="w-full md:w-1/2 sec_con">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 inline-block px-5 py-2 rounded-full shadow" style={{color: "white"}}>
              🔹 Data Manipulation
            </h2><br/>
            <p className="text-gray-700 leading-relaxed mb-4 pt-5" style={{color: "white"}}>
              Before training, it is cleaning, shaping and refining. Our dedicated team transforms raw data into meaningful, machine-related datasets with technique, pipelines and good practices.
            </p><br/>
            <a href="service2" className="btn-get-in-touch">Read More</a>
          </div>

          {/* Image 50% */}
          <div className="w-full md:w-1/2">
            <img
              src={DataStructuring}
              alt="Data Manipulation"
              className="w-full h-[300px] object-cover rounded-2xl shadow-md ser_img"
            />
          </div>

        </div>

        {/* Section 3 - Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
          {/* Image 50% */}
          <div className="w-full md:w-1/2 ">
            <img
              src={ModelTraining}
              alt="Model Training"
              className="w-full h-[300px] object-cover rounded-2xl shadow-md ser_img"
            />
          </div>

          {/* Content 50% */}
          <div className="w-full md:w-1/2 sec_con">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 inline-block px-5 py-2 rounded-full shadow" style={{color: "white"}}>
            🔹 Model Training
            </h2><br/>
            <p className="text-gray-700 leading-relaxed mb-4" style={{color: "white"}}>
              We build models, in-house, for real-world uses. And we open the doors to that to learners. The interns collaborate to create, test and study the workflow of real AI engineering. It is not theory, it’s practical experience.
            </p><br/>
            <a href="service3" className="btn-get-in-touch">Read More</a>
          </div>
        </div>
      </div>

      <IndustriesSection />
      {/* Other Sections */}
      {/* <DataServicesSection /> */}
      {/* <ArchitectsSection /> */}
      {/* <FAQ /> */}
      <WhyChooseINAISection />
      <CTA_service />
    </div>
  );
};

export default Services;
