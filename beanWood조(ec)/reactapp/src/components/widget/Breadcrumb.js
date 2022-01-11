import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb() {
    return ( 
        <div className="breadcrumb-section">
            <div className="box-wrapper">
                <div className="breadcrumb-wrapper breadcrumb-wrapper--style-1 pos-relative">
                    <div className="breadcrumb-bg">
                        <img src="assets/images/breadcrumb/breadcrumb-img-shop-page.webp" alt="" />
                    </div>
                    <div className="breadcrumb-content section-fluid-270">
                        <div className="breadcrumb-wrapper">
                            <div className="content">
                                <span className="title-tag">BEST DEAL FOREVER</span>
                                <h2 className="title"><span className="text-mark">Hurry!</span> <br /> Get your product now</h2>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/shop">Shop</Link></li>
                                <li> Shop Page Left Sidebar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;