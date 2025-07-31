import React from 'react';
import './Inai_life.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/portfolio/inai_post.jpg";
import img2 from "../../assets/portfolio/INAI_WORLD.jpg";

function Inai_life() {
  return (
    <>

      <section className="project-detail-section">
      {/* <h1 className="page-title">INAI LIFE</h1> */}
        <div className="project-grid">
          {/* Left Side - Image Slider */}
          <div className="image-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
              {/* Add more images if needed */}
            </Swiper>
          </div>

          {/* Right Side - Info */}
          <div className="project-info-box">
            <div className="project-info"><br/>
              <h2>Project information</h2>
              <p><strong>Category:</strong> AI virtual model</p>
              <p><strong>Model:</strong> CGI with Intelligence skills</p>
              <p>
                <strong>Project URL:</strong>{' '}
                <a href="https://www.instagram.com/inai_life/" target="_blank" rel="noopener noreferrer">
                  https://www.instagram.com/inai_life/
                </a>
              </p><br/>
            </div>

            <div className="project-description">
              <h3>What is INAI?</h3>
              <p>
                INAI is India’s own AI system where everyone can find their solutions. We are working on future tech like MLP and Gen-AI. We build developers and work with them. We just want to develop India’s first AI company like OpenAI and DeepMind. Join us and be part of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inai_life;
