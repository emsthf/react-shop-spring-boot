/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HeaderToggleMenuRight() {
	const cartListUrl = "http://localhost:8080/cartList/findAll";
	const wishListUrl = "http://localhost:8080/wishList/findAll";
	const [cntCart, setCntCart] = useState();
	const [cntWish, setCntWish] = useState();

	useEffect(() => {
		axios.get(cartListUrl).then(Response => { setCntCart(Response.data.length) })

		axios.get(wishListUrl).then(Response => { setCntWish(Response.data.length) })
	}, [])

	return (
		<div className="offcanvas offcanvas-start" tabIndex="-1" id="toggleMenu">
			<div className="offcanvas-header">
				<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">
				<div className="d-flex justify-content-center ">
					<Link to="wishlist.html" className="header-action-item header-action-wishlist"><img src="assets/images/icons/icon-heart-dark.svg" alt="" /><span className="count-tag">0{cntWish}</span></Link>
					<Link to="cart.html" className="header-action-item header-action-wishlist"><img src="assets/images/icons/icon-shopping-bag-dark.svg" alt="" /><span className="item-count item-count--light">{cntCart} ITEMS</span></Link>
				</div>

				<div className="header-event mobile-search my-5">
					<div className="search-event">
						<input className="header-search" type="search" />
						<button className="header-search-btn" type="submit"><img src="assets/images/icons/icon-search.svg" alt="" /></button>
					</div>
				</div>


				<div className="offcanvas-mobile-menu-wrapper">

					<div className="mobile-menu-bottom">

						<div className="offcanvas-menu">
							<ul>
								<li>
									<Link to="shop"><span>Men</span></Link>
									<ul className="mobile-sub-menu">
										<li><Link to="/">New</Link></li>
										<ul className="mobile-sub-menu">
											<li><Link to="shop-grid-sidebar-left.html">Outer</Link></li>
											<li><Link to="shop-grid-sidebar-right.html">Top</Link></li>
											<li><Link to="shop-grid-sidebar-full-width-3-column.html">Pants</Link></li>
										</ul>
										<li><Link to="/">Bag</Link></li>
										<li><Link to="/">Cloth</Link></li>
										<li><Link to="/">Accessory</Link></li>
									</ul>
								</li>
								<li>
									<Link to=""><span>Women</span></Link>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">New</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="shop-grid-sidebar-left.html">Outer</Link></li>
												<li><Link to="shop-grid-sidebar-right.html">Top</Link></li>
												<li><Link to="shop-grid-sidebar-full-width-3-column.html">Pants</Link></li>
											</ul>
										</li>
									</ul>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">Bag</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="product-details-default.html">Crossbag</Link></li>
												<li><Link to="product-details-group.html">Backpack</Link></li>
												<li><Link to="product-details-left-sidebar.html">beltbag</Link></li>
											</ul>
										</li>
									</ul>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">Cloth</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="cart.html">Outer</Link></li>
												<li><Link to="wishlist.html">Top</Link></li>
												<li><Link to="compare.html">Pants</Link></li>
												<li><Link to="checkout.html">Onepiece</Link></li>
												<li><Link to="login.html">Skirt</Link></li>
											</ul>
										</li>
									</ul>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">Accessory</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="cart.html">Watch</Link></li>
												<li><Link to="wishlist.html">Wallet</Link></li>
												<li><Link to="compare.html">Strap</Link></li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<Link to=""><span>Kid</span></Link>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">New</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="shop-grid-sidebar-left.html">Outer</Link></li>
												<li><Link to="shop-grid-sidebar-right.html">Top</Link></li>
												<li><Link to="shop-grid-sidebar-full-width-3-column.html">Pants</Link></li>
											</ul>
										</li>
									</ul>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">Bag</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="product-details-default.html">Crossbag</Link></li>
												<li><Link to="product-details-group.html">Backpack</Link></li>
												<li><Link to="product-details-left-sidebar.html">beltbag</Link></li>
											</ul>
										</li>
									</ul>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">Cloth</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="cart.html">Outer</Link></li>
												<li><Link to="wishlist.html">Top</Link></li>
												<li><Link to="compare.html">Pants</Link></li>
												<li><Link to="checkout.html">Onepiece</Link></li>
												<li><Link to="login.html">Skirt</Link></li>
											</ul>
										</li>
									</ul>
									<ul className="mobile-sub-menu">
										<li>
											<Link to="">Accessory</Link>
											<ul className="mobile-sub-menu">
												<li><Link to="cart.html">Watch</Link></li>
												<li><Link to="wishlist.html">Wallet</Link></li>
												<li><Link to="compare.html">Strap</Link></li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<Link to=""><span>Others</span></Link>
									<ul className="mobile-sub-menu">
										<li><Link to="about.html"><span>About Us</span></Link></li>
										<li><Link to="faq.html">FAQ</Link></li>
										<li><Link to="error.html">404 Page</Link></li>
									</ul>
								</li>
								<li>
									<Link to="contact.html"><span>Contact</span></Link>
								</li>
							</ul>
						</div>
					</div>


					<div className="mobile-contact-info text-center">
						<ul className="social-link">
							<li><Link to="https://www.facebook.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-facebook-f-dark.svg" alt="" /></Link>
							</li>
							<li><Link to="https://twitter.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-twitter-dark.svg" alt="" /></Link>
							</li>
							<li><Link to="https://www.pinterest.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-pinterest-p-dark.svg" alt="" /></Link></li>
							<li><Link to="https://dribbble.com/" target="_blank" rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-dribbble-dark.svg" alt="" /></Link></li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	);
}

export default HeaderToggleMenuRight;