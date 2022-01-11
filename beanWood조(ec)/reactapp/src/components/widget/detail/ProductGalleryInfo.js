/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDescriptionsection from './productsection/ProductDescriptionsection';
import axios from 'axios';

function ProductGalleryInfo({ product }) {
	const productImageUrl = "http://localhost:8080/productImage/findByProductId/";
	const colorId = 0;
	const [proMainImg, setProMainImg] = useState("");
	const [mainImgUrl, setMainImgUrl] = useState("");
	const size = useRef('');
	let [quantitynumber, setQuantitynumber] = useState(1);
	let goCart = useNavigate();
	let goWish = useNavigate();

	useEffect(() => {
		axios.get(productImageUrl + product.id)
			.then(Response => {
				setProMainImg(Response.data);
				setMainImgUrl(Response.data[0].imageUrl);
			})
	}, [product.id]);

	const addCart = (e) => {
		e.preventDefault();
		const url = "http://localhost:3005/cartLists"

		if (colorId === 0) {
			window.alert("Select color.")
		} else {
			axios.post(url, {
				productId: product.id,
				quantity: quantitynumber,
				color: colorId,
				size: size.current.value,
				itemTotal: quantitynumber * product.price,
				itemImg: proMainImg
			}).then(goCart("/cart"))
		}

	}

	const handleCount = (count) => {
		if (count <= 0)
			return alert("You have to choose at least one.")
		setQuantitynumber(count)
	}

	const handlePostWish = () => {

		if (colorId === 0) {
			window.alert("Select color.")

		} else {
			axios.post("http://localhost:3005/wishLists", {
				productId: parseInt(product.id),
				quantity: quantitynumber,
				color: parseInt(colorId),
				size: size.current.value,
				itemTotal: quantitynumber * product.price,
				itemImg: proMainImg
			})
				.then(goWish("/wish"))
		}
	}

	const changeMainImage = (e) => {
		setMainImgUrl(e.target.alt);
	}

	return (
		<>
			<div className="product-gallery-info-section section-fluid-270 section-top-gap-100">
				<div className="box-wrapper">
					<div className="product-gallery-info-wrapper">
						<div className="container-fluid">
							<div className="row">
								<div className="col-xxl-8 col-lg-6">
									<div className="product-gallery product-gallery--style-tab">
										<div className="row flex-md-row flex-column-reverse">
											<div className="col-md-3">
												<ul className="product-thumbnail-image nav">
													{
														proMainImg && proMainImg.map(image => (
															<li key={image.id} className="nav-item">
																<button className="nav-link active" data-bs-toggle="tab" type="button" onClick={changeMainImage}>
																	<span className="thumb">
																		<img className="img-fluid" src={`../../assets/images/products/${image.imageUrl}`} alt={image.imageUrl} />
																	</span>
																</button>
															</li>
														))
													}
												</ul>
											</div>
											<div className="col-md-9">
												<div className="product-large-image tab-content">
													<div className="tab-pane fade show active" role="tabpanel">
														<div className="image">
															<img className="img-fluid" src={`../../assets/images/products/${mainImgUrl}`} alt={mainImgUrl} />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>


								</div>

								<div className="col-xxl-4 col-lg-6">
									<form onSubmit={addCart}>
										<div className="product-content">
											<span className="catagory">{product.categoryId === 1 ? "Men" : product.categoryId === 2 ? "Women" : product.categoryId === 3 ? "Kid" : product.categoryId === 4 ? "Others" : ""}</span>
											<h2 className="title">{product.productName}</h2>
											<span className="author">Design: kakakoli Fashion</span>
											<div className="bottom">
												<ul className="review-star">
													{[...Array(product.star)].map((n, index) => {
														return (
															<div key={index}>
																<li className="fill"><span className="material-icons">star</span></li>
															</div>
														)
													})}
												</ul>
												<button type="button" onClick={handlePostWish} className="wishlist">Add Wishlist</button>
											</div>

											<span className="price">${((100 - product.sale) * 0.01) * product.price}
												{
													((100 - product.sale) * 0.01) * product.price === product.price ? '' : <del>${product.price}</del>
												}
											</span>

											<div className="product-variables">
												<div className="product-variable-color">
													<h6 className="title">Color</h6>
													<ul className="color-select">
														{/* {
															product.color.map(item => (
																<li key={item.id}>
																	<label class="checkbox-default" for="color-red">
																		<input type="radio" name="color" id={item.id} value={item.colorName} onChange={getColor} />
																		<span>
																			{
																				item ==== 1 ? "Red" : item ==== 2 ? "Green" : item ==== 3 ? "Blue" : item ==== 4 ? "Black" : ""
																			}
																		</span>
																	</label>
																</li>
															))
														} */}

													</ul>
												</div>


												<ul className="variable-items">
													<li className="variable-single-items type-select">
														<select className="nice-select" tabIndex="0" ref={size}>
															<option value="S" defaultValue>Size: S</option>
															<option value="M">Size: M</option>
															<option value="L">Size: L</option>
															<option value="XL">Size: XL</option>
															<option value="XXl">Size: XXL</option>
														</select>
													</li>

													<li className="variable-single-items">
														<div className="num-block skin-2">
															<div className="num-in">
																<span className="minus" onClick={() => { handleCount(--quantitynumber) }}></span>
																<input type="text" className="in-num" value={quantitynumber} readOnly />
																<span className="plus" onClick={() => { handleCount(++quantitynumber) }}></span>
															</div>
														</div>
													</li>

													<li className="variable-single-items">
														<button type="submit" className="btn btn-sm btn-default">Add To Cart</button>
													</li>
												</ul>
											</div>
										</div>
									</form>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			<ProductDescriptionsection product={product} />

		</>
	);
}

export default ProductGalleryInfo;
