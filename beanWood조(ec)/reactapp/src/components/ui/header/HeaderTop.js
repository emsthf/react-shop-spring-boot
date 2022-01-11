/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HeaderTop({ headerClass, checkDir, refresh }) {
	const cartListUrl = "http://localhost:8080/cartList/findAll";
	const wishListUrl = "http://localhost:8080/wishList/findAll";
	const isTrue = headerClass
	const [cntCart, setCntCart] = useState()
	const [cntWish, setCntWish] = useState()
	const [addPath, setAddPath] = useState("")

	useEffect(() => {
		axios.get(cartListUrl)
			.then(Response => {
				setCntCart(Response.data.length)
			})
		axios.get(wishListUrl)
			.then(Response => {
				setCntWish(Response.data.length)
			})
		if (checkDir) {
			setAddPath("../.")
		}
	}, [checkDir, refresh])

	return (
		<header className={isTrue ? "header-section @@pos_absolute pos-relative light-bg sticky-header d-none d-lg-block section-fluid-270" : "header-section pos_absolute pos-relative dark-bg sticky-header d-none d-lg-block section-fluid-270"}>
			<div className="header-wrapper pos-relative">
				<div className="container-fluid">
					<div className="row justify-content-between align-items-center">
						<div className="col-auto">

							<Link to="/" className="header-logo">
								<img className="img-fluid" src={`${addPath}./assets/images/logo/logo-light-theme.png`} alt="" />
							</Link>

						</div>
						<div className="col-auto d-flex align-items-center">
							<div className="header-event">

								<div className="menu-event dropdown">
									<button className="main-menu-event dropdown-toggle" data-bs-toggle="dropdown" >
										<img src={`${addPath}./assets/images/icons/icon-open-menu.svg`} alt="" />
										<span>Menu</span>
										<img src={`${addPath}./assets/images/icons/icon-arrow-drop-down.svg`} alt="" />
									</button>
									<ul className="mainmenu-nav dropdown-menu">
										<li className="menu-items">
											<Link to="shop">Men <span className="material-icons">arrow_right</span></Link>
											<div className="has-dropdown megamenu">
												<div className="menu-content">
													<h6 className="title">New</h6>
													<ul className="submenu">
														<li><Link to="shop">Outer</Link></li>
														<li><Link to="shop-grid-sidebar-right.html">Top</Link></li>
														<li><Link to="shop-grid-sidebar-full-width-3-column.html">Pants</Link></li>
													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Bag</h6>
													<ul className="submenu">
														<li><Link to="shop">Crossbag</Link></li>
														<li><Link to="shop">Backpack</Link></li>
														<li><Link to="shop">beltbag</Link></li>
													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Clothes</h6>
													<ul className="submenu">
														<li><Link to="shop">Outer</Link></li>
														<li><Link to="shop">Top</Link></li>
														<li><Link to="shop">Pants</Link></li>
														<li><Link to="shop">Onepiece</Link></li>
														<li><Link to="shop">Skirt</Link></li>

													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Accessory</h6>
													<ul className="submenu">
														<li><Link to="shop">Watch</Link></li>
														<li><Link to="shop">Wallet</Link></li>
														<li><Link to="shop">Strap</Link></li>
													</ul>
												</div>
											</div>
										</li>
										<li className="menu-items">
											<Link to="shop">Women <span className="material-icons">arrow_right</span></Link>
											<div className="has-dropdown megamenu">
												<div className="menu-content">
													<h6 className="title">New</h6>
													<ul className="submenu">
														<li><Link to="shop">Outer</Link></li>
														<li><Link to="shop-grid-sidebar-right.html">Top</Link></li>
														<li><Link to="shop-grid-sidebar-full-width-3-column.html">Pants</Link></li>
													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Bag</h6>
													<ul className="submenu">
														<li><Link to="shop">Crossbag</Link></li>
														<li><Link to="shop">Backpack</Link></li>
														<li><Link to="shop">beltbag</Link></li>
													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Clothes</h6>
													<ul className="submenu">
														<li><Link to="shop">Outer</Link></li>
														<li><Link to="shop">Top</Link></li>
														<li><Link to="shop">Pants</Link></li>
														<li><Link to="shop">Onepiece</Link></li>
														<li><Link to="shop">Skirt</Link></li>

													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Accessory</h6>
													<ul className="submenu">
														<li><Link to="shop">Watch</Link></li>
														<li><Link to="shop">Wallet</Link></li>
														<li><Link to="shop">Strap</Link></li>
													</ul>
												</div>
											</div>
										</li><li className="menu-items">
											<Link to="shop">Kid <span className="material-icons">arrow_right</span></Link>
											<div className="has-dropdown megamenu">
												<div className="menu-content">
													<h6 className="title">New</h6>
													<ul className="submenu">
														<li><Link to="shop">Outer</Link></li>
														<li><Link to="shop">Top</Link></li>
														<li><Link to="shop">Pants</Link></li>
													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Bag</h6>
													<ul className="submenu">
														<li><Link to="shop">Crossbag</Link></li>
														<li><Link to="shop">Backpack</Link></li>
														<li><Link to="shop">beltbag</Link></li>
													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Clothes</h6>
													<ul className="submenu">
														<li><Link to="shop">Outer</Link></li>
														<li><Link to="shop">Top</Link></li>
														<li><Link to="shop">Pants</Link></li>
														<li><Link to="shop">Onepiece</Link></li>
														<li><Link to="shop">Skirt</Link></li>

													</ul>
												</div>
												<div className="menu-content">
													<h6 className="title">Accessory</h6>
													<ul className="submenu">
														<li><Link to="shop">Watch</Link></li>
														<li><Link to="shop">Wallet</Link></li>
														<li><Link to="shop">Strap</Link></li>
													</ul>
												</div>
											</div>
										</li>
										<li className="menu-items">
											<Link to="shop">Others<span className="material-icons">arrow_right</span></Link>
											<div className="has-dropdown">
												<div className="menu-content">
													<h6 className="title">Inner Pages</h6>
													<ul className="submenu">
														<li><Link to="about.html">About Us</Link></li>
														<li><Link to="faq.html">FAQ</Link></li>
														<li><Link to="error.html">404-Error</Link></li>
													</ul>
												</div>
											</div>
										</li>
										<li className="menu-items"><Link to="contact.html">Contact Us</Link></li>
									</ul>
								</div>

								<div className="search-event">
									<input className="header-search" type="search" placeholder="Search" />
									<button className="header-search-btn" type="submit"><img src={`${addPath}./assets/images/icons/icon-search.svg`} alt="" /></button>
								</div>

							</div>
						</div>
						<div className="col-auto" style={{ display: "block" }}>
							<div className="header-action">
								<button className="header-action-item header-action-wishlist" data-bs-toggle="offcanvas" data-bs-target="#wishlistOffcanvas"><img src={`${addPath}./assets/images/icons/icon-heart-dark.svg`} alt="" /><span className="count-tag">0{cntWish}</span></button>
								<button className="header-action-item header-action-wishlist" data-bs-toggle="offcanvas" data-bs-target="#addcartOffcanvas"><img src={`${addPath}./assets/images/icons/icon-shopping-bag-dark.svg`} alt="" /><span className="item-count item-count--light">{cntCart} ITEMS</span></button>
							</div>
						</div>
						<div className="col-auto" style={{ display: "block" }}>
							<div className="header-action">
								<Link className="header-action-item header-action-wishlist" to={"/login"}>
									<i className="fas fa-key iconSize15 iconColor"></i>
									<span className="ms-1">Login</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default HeaderTop;
