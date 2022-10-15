import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Lucy Heartfilia',
    review:'Lorem ipsum jddjd djdjdioj iojoskok wsid hot dsko ksdxcot s cute si9sdio hot soasko kodoskqwojqwdi djduiwdhqwdwd wizrd.'
  }, 
  {
    avatar:AVTR2,
    name:'Stan Lee',
    review:'Lorem ipsum jddjd djdjdioj iojoskok wsid hot dsko ksdxcot s cute si9sdio hot soasko kodoskqwojqwdi djduiwdhqwdwd wizrd.'
  },
   {
    avatar:AVTR3,
    name:'Robert Pettison',
    review:'Lorem ipsum jddjd djdjdioj iojoskok wsid hot dsko ksdxcot s cute si9sdio hot soasko kodoskqwojqwdi djduiwdhqwdwd wizrd.'
  },
   {
    avatar:AVTR4,
    name:'Anos Verdigoad',
    review:'Lorem ipsum jddjd djdjdioj iojoskok wsid hot dsko ksdxcot s cute si9sdio hot soasko kodoskqwojqwdi djduiwdhqwdwd wizrd.'
  },
]

const testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container"
      // install Swiper modules
      modules={[ Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review},index)=> {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          </SwiperSlide>
            )
          })
        }
     </Swiper>
    </section>
  )
}

export default testimonial
