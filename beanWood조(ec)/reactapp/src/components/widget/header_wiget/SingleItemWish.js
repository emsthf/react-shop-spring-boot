import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SingleItemWish({ item, delCheck, setDelCheck }) {
	const wishListDelUrl = "http://localhost:8080/wishList/delete/";
	const productImageUrl = "http://localhost:8080/productImage/findByProductId/";
	const [imageUrl, setImageUrl] = useState("");

	const handleDelete = () => {
		if (window.confirm("Do you want to delete it from the wish list?")) {
			axios.delete(wishListDelUrl + item.id)
				.then(setDelCheck(!delCheck))
		} else {
			window.alert("Cancel")
		}
	}

	useEffect(() => {
		axios.get(productImageUrl + item.product.id).then(Response => {
			setImageUrl(Response.data[0].imageUrl);
		});
	})

	return (
		<li className="single-item">
			<div className="box">
				<Link to={`/shop/detail/${item.product.id}`} className="image">
					<img src={`assets/images/products/${imageUrl}`} alt={item.product.productName} className="offcanvas-wishlist-image" />
				</Link>
				<div className="content">
					<Link to={`/shop/detail/${item.product.id}`} className="title">{item.product.productName}</Link>
					<div className="offcanvas-wishlist-item-details">
						<span className="offcanvas-wishlist-item-details-quantity">1 x </span>
						<span className="offcanvas-wishlist-item-details-price">${item.product.price}</span>
					</div>
				</div>
			</div>
			<div className="item-delete text-right">
				<Link to=""><img onClick={handleDelete} src="assets/images/icons/icon-trash.svg" alt="" /></Link>
			</div>
		</li>
	);
}

export default SingleItemWish;