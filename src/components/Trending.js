import React from 'react'
import Slider from "react-slick";
import './trending.css'

const Trending = () => {
    const settings = {
        dots:false,
        autoplay:true,
        infinite: true,
        speed: 700,
        autoplaySpeed:5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        <>
        <div className="container-fluid shadow-lg mt-4 mb-3 py-5">
            <Slider {...settings}>
          <div>
          <img src="./images/d.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/cp1.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/cp3.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/cp4.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/b.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/a.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/c.jpeg" className="img-fluid custom-slide" alt=""/>
          </div>
          <div>
          <img src="./images/e.jpg" className="img-fluid custom-slide" alt=""/>
          </div>
        </Slider>
        </div>
            
        </>
    )
}

export default Trending
