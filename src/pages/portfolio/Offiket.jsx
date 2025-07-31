import React from 'react'
import './Inai_life.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/portfolio/offiket.png";
import img2 from "../../assets/portfolio/offiket_2.png";
import img3 from "../../assets/portfolio/offiket_3.png";
import img4 from "../../assets/portfolio/offiket_4.png";

const Offiket = () => {
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
                      <p><strong>Category : </strong> Office solutions</p>
                      <p><strong>Model : </strong> Buy and Sell solution with AI skills</p>
                      <p><strong>Project date : </strong> 30-12-2026</p>
                      {/* <p>
                        <strong>Project URL:</strong>{' '}
                        <a href="https://www.instagram.com/influketworld/" target="_blank" rel="noopener noreferrer">
                        https://www.instagram.com/influketworld/
                        </a>
                      </p> */}
                      <br/>
                    </div>
        
                    <div className="project-description">
                      <h3>What is OFFIKET ? </h3>
                      <p>
                      OFFIKET is project for buyer and seller. If anyone want to buy office or sell they can join this. There have also some features for other options. So in this project of INAI WORLDS PVT LTD office market will influence that’s why it’s called - OFFIKET
                      </p>
                    </div>
                  </div>
                </div>
              </section>

    
    </>
  )
}

export default Offiket