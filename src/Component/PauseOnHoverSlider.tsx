import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PauseOnHover = ({ title }: { title: string }) => {
  const ArrowRight = (props: any) => (
    <button {...props} className={"next next--button"}>
      {" "}
      <img src="Vector.png" alt="" />{" "}
    </button>
  );
  const ArrowLeft = (props: any) => <></>;
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    variableWidth: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };
  return (
    <div className="wrapper wrapper--slider">
      <h2 className="wrapper__h2">{title}</h2>
      <Slider {...settings}>
        {[5, 5, 5, 55, 5, 5, 5, 5, 5, 5, 55].map((x) => (
          <div className="slider__card">
            <img src="Image.png" className="slider__image" alt="" />
            <i className="card__like bi bi-heart"></i>
            <span className="card__discount card--trading">- 42% OFF</span>
            <div className="slider__body">
              <p className="slider__brand">BRAND / TYPES</p>
              <p className="slider__characterstics">Name and Characteristics</p>
          
              <h6 className="slider__price">
                74.59€
                <del className="price__del">121.00€</del>
              </h6>
              <span className="ratings">
                {["", "", "", "", ""].map((x) => (
                  <i className="bi bi-star-fill"></i>
                ))}{" "}
                (45)
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default PauseOnHover;
