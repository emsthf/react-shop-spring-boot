/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ProductSingleItemStyle1 from '../../ui/homeUi/productList/ProductSingleItemStyle1';
import axios from 'axios';
import Slider from 'react-slick';

function ExclusiveCollection({checkDir}) {
	const url = "http://localhost:8080/product/findAll"
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(Response => {
            setProductList(Response.data);
        })
    }, [])

    // const list = productList.map(item => (
    //     <ProductSingleItemStyle1 key={item.id} id={item.productId} />
    // )).slice(0, mount)

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

    return (
        <div className="product-item-section  section-fluid-270 section-top-gap-100">
        <div className="box-wrapper">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-between align-items-center flex-warp section-content-gap-60">
                        <div className="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-auto me-5">
                            <div className="section-content">
                                <h2 className="section-title">Exclusive Collection</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="product-item-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings}>
                                {
                                    productList.map(item => (
                                        <ProductSingleItemStyle1 key={item.id} item={item} path="exclusive" checkDir={checkDir} />
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ExclusiveCollection;