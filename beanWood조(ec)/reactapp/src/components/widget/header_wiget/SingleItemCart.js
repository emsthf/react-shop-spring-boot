import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SingleItemCart({ item, delCheck, setDelCheck, refresh, setRefresh }) {
	const deleteCartListUrl = "http://localhost:8080/cartList/delete/";
	const findProductImageByProductId = "http://localhost:8080/productImage/findByProductId/";
	const [product, setProduct] = useState({});

	const handleDelete = () => {
		if (window.confirm("Do you want to delete it from the cart?")) {
			axios.delete(deleteCartListUrl + item.id)
				.then(() => {
					setDelCheck(!delCheck);
					setRefresh(!refresh);
				})
		} else {
			window.alert("Cancel")
		}
	}

	useEffect(() => {
		axios.get(findProductImageByProductId + item.product.id)
			.then(Response => {
				setProduct(Response.data[0].imageUrl);
			})
	}, [item.product.id])

	return (
		<li className="single-item">
			<div className="box">
				<Link to={`/shop/detail/${item.product.id}`} className="image">
					<img src={`assets/images/products/${product}`} alt={item.product.productName} className="offcanvas-wishlist-image" />
				</Link>
				<div className="content">
					<Link to={`/shop/detail/${item.product.id}`} className="title">{item.product.productName}</Link>
					<div className="offcanvas-wishlist-item-details">
						<span className="offcanvas-wishlist-item-details-quantity">{item.quantity} x </span>
						<span className="offcanvas-wishlist-item-details-price">${item.product.price}</span>
					</div>
				</div>
			</div>
			<div className="item-delete text-right">
				<img onClick={handleDelete} src="assets/images/icons/icon-trash.svg" alt="" />
			</div>
		</li>
	);
}

export default SingleItemCart;