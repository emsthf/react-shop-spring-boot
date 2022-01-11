import axios from 'axios';
import { useEffect, useState } from 'react';

import SliderSingleItem from '../../ui/homeUi/slider/SliderSingleItem';

function SliderBackup() {

    const [sliderList, setSliderList] = useState([])

    useEffect(()=>{
        const url = "http://localhost:3005/sliderList"

        axios.get(url)
        .then(Response=>{
            setSliderList(Response.data)
            console.log(Response.data)
        })
    },[])

    return ( 
        
        <div className="hero-slider-section hero-slider-light section-fluid-270">
            <div className="box-wrapper">
                <div className="hero-slider-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-slider">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="hero-slider-single-item--style-1 swiper-slide hero-bg swiper-slide-active">
                                                <div className="image">
                                                    <img className="img-fluid" src="assets/images/hero-slider/hero-slider-style-1-img-1.png" width="469" height="760" loading="lazy" alt="hero-1" />
                                                </div>
                                                <div className="image-shape"></div>
                                                <div className="content-box">
                                                    <div className="row">
                                                        <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-8 offset-md-1 col-10 ">
                                                            <div className="content">
                                                                <span className="title-tag">{data.categoryId}</span>
                                                                <h2 className="title">{data.productName}</h2>
                                                                <p>{data.description}...</p>
                                                                <Link to="product-details-default.html" className="btn btn-lg btn-default">GET IT NOW</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hero-slider-shape hero-slider-top-shape"><img className="img-fluid" src="assets/images/icons/hero-slider-top-shape.svg" width="113" height="107" loading="lazy" alt="hero-shape-1" /></div>
                                                <div className="hero-slider-shape hero-slider-bottom-shape"><img className="img-fluid" src="assets/images/icons/hero-slider-bottom-shape.svg" width="221" height="234" loading="lazy" alt="hero-shape-1" /></div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderBackup;