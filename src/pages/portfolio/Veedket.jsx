import React from 'react'
import './Inai_life.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/portfolio/veedket.png";
import img2 from "../../assets/portfolio/VEEDKET_2.png";
import img3 from "../../assets/portfolio/VEEDKET_3.png";
import img4 from "../../assets/portfolio/VEEDKET_4.png";
const Veedket = () => {
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
                  <SwiperSlide><img src={img3} alt="Slide 2" /></SwiperSlide>
                  <SwiperSlide><img src={img4} alt="Slide 2" /></SwiperSlide>
                  {/* Add more images if needed */}
                </Swiper>
              </div>
    
              {/* Right Side - Info */}
              <div className="project-info-box">
                <div className="project-info"><br/>
                  <h2>Project information</h2>
                  <p><strong>Category : </strong> GEN-AI creation</p>
                  <p><strong>Model : </strong> Contain creation with AI</p>
                  <p>
                    <strong>Project URL:</strong>{' '}
                    <a href="https://www.instagram.com/veedketworld/" target="_blank" rel="noopener noreferrer">
                    https://www.instagram.com/veedketworld/
                    </a>
                  </p><br/>
                </div>
    
                <div className="project-description">
                  <h3>What is VEEDKET ? </h3>
                  <p>
                  VEEDKET means video exhibition with explore and development market. This is project for contain creators and also for educators. If you are in technical field than it will also help you. With this you can convert your imagination in graphical foam.
                  </p>
                </div>
              </div>
            </div>
          </section>

    </>
  )
}

export default Veedket