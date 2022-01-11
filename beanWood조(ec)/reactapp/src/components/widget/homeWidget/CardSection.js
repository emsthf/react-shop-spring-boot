import React from 'react';
import { Link } from 'react-router-dom';

function CardSection() {
    return (
        <div className="banner-card-section section-fluid-270 section-top-gap-100">
        <div className="box-wrapper">
            <div className="banner-car-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/shop" className="d-block banner-animate--wave">
                                <img className="img-fluid" src="assets/images/banner/banner-wide-1.jpg" width="1355" height="350" loading="lazy" alt="banner-wide-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CardSection;