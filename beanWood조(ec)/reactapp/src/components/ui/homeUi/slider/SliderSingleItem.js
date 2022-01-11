/* eslint-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function SliderSingleItem({ productId, eventName, img, isActive, idx }) {

	const [data, setData] = useState({})
	const [slideText, setSlideText] = useState("")

	const url = `http://localhost:8080/product/find/`

	useEffect(() => {
		axios.get(url + productId)
			.then(Response => {
				setData(Response.data);
				setSlideText((Response.data.description).substring(0, 100));
			})
	}, [url, productId])



	return (

		<div className="hero-slider">
			<div className="swiper-container">
				<div className="swiper-wrapper">
					<div className={isActive[idx] ? "hero-slider-single-item--style-1 swiper-slide hero-bg swiper-slide-active" : "hero-slider-single-item--style-1 swiper-slide hero-bg"}>
						<div className="image">
							<img className="img-fluid" src={`assets/images/hero-slider/${img}`} width="469" height="760" loading="lazy" alt="hero-1" />
						</div>
						<div className="image-shape"></div>
						<div className="content-box">
							<div className="row">
								<div className="col-xl-5 offset-xl-1 col-lg-5 col-md-8 offset-md-1 col-10 ">
									<div className="content">
										<span className="title-tag">{eventName}</span>
										<h2 className="title">{data.productName}</h2>
										<p>{slideText}...</p>
										<Link to="/shop" className="btn btn-lg btn-default">GET IT NOW</Link>
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
	);
}



export default SliderSingleItem;

