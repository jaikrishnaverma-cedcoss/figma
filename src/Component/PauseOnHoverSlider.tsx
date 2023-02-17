import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="wrapper">
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          {
            [5,5,5,55,5,5,5,5,5,5,55,].map(x=>
              <div className="slider__card">
              <img src="Image.png" className="slider__image" alt="" />
            <div className="slider__body">
              <p className="slider__brand">BRAND / TYPES</p>
              <p className="">Name and Characteristics</p>
              <h6>74.59$</h6>
              <span className="ratings">******</span>
            </div>
              </div>
              )
          }
        </Slider>
      </div>
    );
  }
}