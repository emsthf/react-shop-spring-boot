import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductVariables from './centerProductInfo/ProductVariables';


function ContentCenter() {

    let {productId} = useParams();

    const [product, setProduct] = useState({
        categoryId : '',
        productName : '',
        price : '',
        sale : '',
        star : ''
    })

    useEffect(() => {
        fetch(`http://localhost:3005/products/${productId}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProduct(data)
        })
    }, []);


    return ( 
        <div className="col-md-6 col-lg-12 col-xl-6">
            
        <div className="product-content">
            <span className="catagory">{product.categoryId}</span>
            <h2 className="title">{product.productName}</h2>
            <span className="author">Design: kakakoli Fashion</span>

            <div className="bottom">
                <ul className="review-star">
                    {[...Array(product.star)].map((n, index) => {
                        return (
                            <div>
                                <li className="fill"><span className="material-icons">star</span></li>
                            </div>
                        )
                    })}
                </ul>

                <a href="wishlist.html" className="wishlist">Add Wishlist</a>
            </div>

            <span className="price">{product.price}<del>{product.price + product.price * (product.sale / 100)}</del></span>
            

            <ProductVariables/>

        </div>
    </div>
     );
}

export default ContentCenter;