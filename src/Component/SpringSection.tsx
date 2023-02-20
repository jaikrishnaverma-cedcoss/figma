import React from 'react'
import Slider from 'react-slick'

const SpringSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    variableWidth: true
  };
  return (
    <div className="wrapper wrapper--sparing">
        <h2 className="wrapper__h2">SPRING/SUMMER 2021</h2>
        <div className='spring__slide'>
          {
            [{img:'spring.png',width:'10'},
            {img:'spring1.png',width:'8'},
            {img:'spring1.png',width:'8'},
            {img:'spring.png',width:'10'}
          ].map(x=>
              <div className="spring__card" style={{width:x.width}}>
              <img src={x.img} className="slider__image" alt="" />
              <i className="card__like bi bi-heart"></i> 
              <span className="card__eco">ECO</span>
              <span className='card__discount'>- 42% OFF</span>
            <div className="slider__body">
              <p className="slider__brand">BRAND / TYPES</p>
              <p className="slider__characterstics">Name and Characteristics</p>
              <div className="slider__colorpallet">
              <span style={{backgroundColor:'#FFA724'}}></span>
              <span style={{backgroundColor:'#952AFF'}}></span>
              <span style={{backgroundColor:'#FF2A6A'}}></span>
              <span style={{backgroundColor:'#003DFF'}}></span>
              <span style={{backgroundColor:'#06AF87'}}></span>
             </div>
              <h6 className="slider__price">74.59€
              <del className="price__del">121.00€</del></h6>
              <span className="ratings">{['','','','',''].map(x=><i className="bi bi-star-fill"></i>)}{" "}(45)</span>
            </div>
              </div>
              )
          }
        </div>
      </div>
  )
}

export default SpringSection