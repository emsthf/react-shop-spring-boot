import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductSection({ ctgy }) {
    const [related, setRelated] = useState();
    const url = `http://localhost:3006/products?categoryId=${ctgy}`;

    axios.get(url)
    .then(Response => {
        setRelated(Response.data)
    })
    

    return ( 
        <div class="product-item-section  section-fluid-270 section-top-gap-100">
            <div class="box-wrapper">
                <div class="section-wrapper">
                    <div class="container-fluid">
                        <div class="row justify-content-between align-items-center flex-warp section-content-gap-60">
                            <div class="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-auto me-5">
                                <div class="section-content">
                                    <h2 class="section-title">Related Products</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="top-slider-buttons">
                                    
                                    <div class="slider-buttons">
                                        <div class="slider-button button-prev"><span class="material-icons">arrow_left</span></div>
                                        <div class="slider-button button-next"><span class="material-icons">arrow_right</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-item-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                            
                                <div class="product-slider-3grids-1row">
                                    <div class="swiper-container">
                                    
                                        <div class="swiper-wrapper">
                                            
                                            <div class="product-single-item-style-1 swiper-slide">
                                                <Link to="product-details-default.html" class="image img-responsive">
                                                    <img class="img-fluid" src="assets/images/products/default/product-default-style-1-img-5.webp" alt=""/>
                                                    <ul class="tooltip-tag-items">
                                                        <li class="color-yellow">15%</li>
                                                    </ul>
                                                </Link>
                                                <div class="content">
                                                    <div class="top">
                                                        <span class="catagory">WOMEN</span>
                                                        <h4 class="title"><Link to="product-details-default.html">Star Women pants</Link></h4>
                                                        <span class="price">$200.00 <del>$300.00</del></span>
                                                    </div>
                                                    <div class="bottom">
                                                        <ul class="review-star">
                                                            <li class="fill"><span class="material-icons">star</span></li>
                                                            <li class="fill"><span class="material-icons">star</span></li>
                                                            <li class="fill"><span class="material-icons">star</span></li>
                                                            <li class="fill"><span class="material-icons">star</span></li>
                                                            <li class="fill"><span class="material-icons">star_half</span></li>
                                                        </ul>
                                                        <div class="product-event-items">
                                                            <Link to="cart.html" class="btn cart-btn">Add to cart</Link>
                                                            <Link to="wishlist.html" class="btn wishlist-btn"><span class="material-icons">favorite_border</span></Link>
                                                        </div>
                                                    </div>
    
                                                </div>
    
                                            </div>
                                        
                                        </div>
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

export default ProductSection;