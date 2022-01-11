/* eslint-disable */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import HeaderSlider from 'react-slick'; // slick slide for react .. https://react-slick.neostack.com/ 참조 // 

import SliderSingleItem from '../../ui/homeUi/slider/SliderSingleItem';

function Slider() {
  const [sliderList, setSliderList] = useState([])
  const [isActive, setIsActive] = useState([true, false, false])

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    beforeChange: (current, next) => {
      setIsActive(isActive.map((active, idx) => idx === next));
    }
  };

  //data.json 에 slide리스트를 추가하였습니다.

  useEffect(()=>{
      const url = "http://localhost:8080/sliderList/findAll"

      axios.get(url)
      .then(Response=>{
          setSliderList(Response.data);
      })
  },[])

  return ( 
    <div className="hero-slider-section hero-slider-light section-fluid-270">
        <div className="box-wrapper">
            <div className="hero-slider-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                          <HeaderSlider {...settings} >
                            {
                              sliderList.map((item,idx)=>(
                                <SliderSingleItem
                                  key={item.id}
                                  productId={item.product.id}
                                  eventName={item.eventName}
                                  img={item.image.imageUrl}
                                  isActive={isActive}
                                  idx={idx}
                                />
                              ))
                            }
                          </HeaderSlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Slider;