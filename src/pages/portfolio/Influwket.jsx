import React from 'react'
import './Inai_life.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../../assets/portfolio/influwket.png";
import img2 from "../../assets/portfolio/influwket_1.png";
import img3 from "../../assets/portfolio/influwket_2.png";
import img4 from "../../assets/portfolio/influwket_4.png";

const Influwket = () => {
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
                  modules={[Pagination]} >
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
                  <p><strong>Category:</strong>Social media model</p>
                  <p><strong>Model:</strong>Gen AI tech with social media featured-services</p>
                  <p><strong>Project date:</strong>31-12-2025</p>
                  <p>
                    <strong>Project URL:</strong>{' '}
                    <a href="https://www.instagram.com/influketworld/" target="_blank" rel="noopener noreferrer">
                    https://www.instagram.com/influketworld/
                    </a>
                  </p><br/>
                </div>
    
                <div className="project-description">
                  <h3>What is Influwket?</h3>
                  <p>
                  INFLUWKET is one of the projects of INAI WORLDS PVT LTD. In this project we want to build India’s own social media app with using some AI elements. We ensure that after it social media market will influence high so that’s why we say it influence world of social market and it’s called - influwket.
                  </p>
                </div>
              </div>
            </div>
          </section>

    </>
  )
}

export default Influwket