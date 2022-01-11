import React from 'react';

function SmallPics() {
    return ( 

        <>                
            <ul className="product-thumbnail-image nav">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="index.html" type="button">
                        <span className="thumb">
                            <img className="img-fluid" src="assets/images/products/product-details/product-thumb-1.webp" alt="" />
                        </span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="index.html" type="button">
                        <span className="thumb">
                            <img className="img-fluid" src="assets/images/products/product-details/product-thumb-2.webp" alt="" />
                        </span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="index.html" type="button">
                        <span className="thumb">
                            <img className="img-fluid" src="assets/images/products/product-details/product-thumb-3.webp" alt="" />
                        </span>
                    </button>
                </li>
            </ul>
        </>

     );
}

export default SmallPics;