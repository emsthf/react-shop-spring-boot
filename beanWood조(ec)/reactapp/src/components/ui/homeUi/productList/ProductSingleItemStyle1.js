/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToolTipTagItems from './ToolTipTagItems';
import styles from './ProductSingleItemStyle1.module.css';
import axios from 'axios';

function ProductSingleItemStyle1({ item, path, checkDir, refresh, setRefresh }) {
	const saveCartListUrl = "http://localhost:8080/cartList/save";
	const saveWishListUrl = "http://localhost:8080/wishList/save";
	const findProductImageByProductIdUrl = "http://localhost:8080/productImage/findByProductId/";
	const [addPath, setAddPath] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const handlePost = () => {
		axios.post(saveCartListUrl, {
			productId: item.id,
			quantity: 1
		}).then(Response => {
			if (Response.ok) alert("Success!");
			setRefresh(!refresh);
		});
	}

	const handlePostWish = () => {
		axios.post(saveWishListUrl, {
			productId: item.id
		}).then(Response => {
			if (Response.ok) alert("Success!");
			setRefresh(!refresh);
		});
	}

	useEffect(() => {
		axios.get(findProductImageByProductIdUrl + item.id).then(Response => {
			if (Response.data[0]) setImgUrl(Response.data[0].imageUrl);
		})
		if (checkDir) {
			setAddPath("../.")
		}
	}, [item.id, checkDir])

	return (
		<div className={path === "home" ? "col-sm-6 col-md-4 col-lg-3 mb-4" : path === "shop" ? "col-12" : path === "exclusive" ? "mx-3" : ""}>
			<div className="product-single-item-style-1 swiper-slide">
				<Link to={`/shop/detail/${item.id}`} className="image img-responsive">
					<img className="img-fluid" src={`${addPath}./assets/images/products/${imgUrl}`} alt="product" />
					<ToolTipTagItems sale={item.sale} />
				</Link>
				<div className="content">
					<div className="top">
						<span className="catagory">{item.categoryId === 1 ? "Men" : item.categoryId === 2 ? "Women" : item.categoryId === 3 ? "Kid" : item.categoryId === 4 ? "Others" : ""}</span>
						<h4 className="title"><Link to={`/shop/detail/${item.id}`}>{item.productName}</Link></h4>
						<span className="price">
							${((100 - item.sale) * 0.01) * item.price}
							{
								((100 - item.sale) * 0.01) * item.price === item.price ? '' : <del>${item.price}</del>
							}
						</span>
					</div>
					<div className="bottom">
						<ul className="review-star">
							{[...Array(item.star)].map((n, index) => {
								return (
									<div key={index}>
										<li className="fill"><span className="material-icons">star</span></li>
									</div>
								)
							})}

						</ul>
						<div className="product-event-items">
							<button className={styles.button} onClick={handlePost}>
								<Link to="/cart" className="btn cart-btn">Add to cart</Link>
							</button>
							<button onClick={handlePostWish}>
								<Link to="/wish" className="btn wishlist-btn"><span className="material-icons">favorite_border</span></Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default ProductSingleItemStyle1;