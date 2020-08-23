import React from "react"
import Slider from "react-slick";
import NewsCard from "./NewsCard"
import "./News.css"
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  }
const NewsSlider = ({topheadlines}) => {
    return (
        <div className="outer-slider">
          <Slider {...settings}>
            { topheadlines.map((topheadline) => {
              return <NewsCard topheadline={topheadline}/>
            })}
          </Slider>
        </div>
      );
}

export default NewsSlider