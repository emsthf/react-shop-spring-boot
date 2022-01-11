import React, { useEffect, useState } from 'react';
import CompanySlider from 'react-slick';
import axios from 'axios';

import CompanySwiperItem from '../../ui/homeUi/companySwiper/CompanySwiperItem';

function CompanyLogo() {

	const settings = {

		dots: true,
		infinite: false,
		speed: 500,
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


	const [brandList, setBrandList] = useState([])

	useEffect(() => {
		const url = "http://localhost:8080/brand/findAll"

		axios.get(url)
			.then(Response => {
				setBrandList(Response.data)
			})
	}, [])

	return (
		<div className="company-logo-section section-fluid-270 section-top-gap-100">
			<div className="box-wrapper">
				<div className="company-logo-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<CompanySlider {...settings}>
									{
										brandList.map(brand => (
											<CompanySwiperItem
												key={brand.id}
												brand={brand}
											/>
										))
									}
								</CompanySlider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CompanyLogo;