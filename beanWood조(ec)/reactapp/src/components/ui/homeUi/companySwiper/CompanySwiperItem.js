/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

function CompanySwiperItem({ brand }) {
	return (
		<Link to="/shop">
			<div className="image" style={{ "width": "60%", "margin": "auto" }}>
				<img className="img-fluid" src={`./assets/images/brand/${brand.image.imageUrl}`} alt={brand.name} />
			</div>
		</Link>
	);
}

export default CompanySwiperItem;