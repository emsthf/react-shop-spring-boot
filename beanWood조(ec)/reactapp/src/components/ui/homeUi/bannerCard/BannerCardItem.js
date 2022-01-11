import React from 'react';
import { Link } from 'react-router-dom';

function BannerCardItem({item}) {
    return ( 
        <div className="col-lg-4 col-md-6 mb-20">
            <div className="banner-card-single-item banner-animate--flash">
                <div className="image img-responsive">
                    <img src={`./assets/images/banner/${item.image.imageUrl}`} alt="test"/> 
                </div>
                <div className="content">
                    <p className="tag">{item.tag}</p>
                    <h4 className="title">{item.title}</h4>
                    <Link to="/shop" className="text-link white">GET IT NOW</Link>
                </div>
                <span className="banner-cad-note">{item.text}</span>
            </div>
        </div>
    );
}

export default BannerCardItem;