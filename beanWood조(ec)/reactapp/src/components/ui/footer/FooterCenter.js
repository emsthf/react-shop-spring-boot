import React from 'react';
import { Link } from 'react-router-dom';

function FooterCenter() {
    return ( 
        <div className="footer-center">
            <div className="footer-widgets-items">
            
                <div className="footer-widgets-single-item footer-widgets-single-item--light">
                    <h5 className="title">Product</h5>
                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-1">Product</h5>
                    <div id="dividerId-1" className="widget-collapse-body collapse">
                        <ul className="footer-nav">
                            <li><Link to="contact.html">Shop Vendor</Link></li>
                            <li><Link to="contact.html">Product House</Link></li>
                            <li><Link to="contact.html">Categories</Link></li>
                            <li><Link to="contact.html">Delivery Areas</Link></li>
                            <li><Link to="contact.html">Delivery Cost</Link></li>
                        </ul>
                    </div>
                </div>
            
                <div className="footer-widgets-single-item footer-widgets-single-item--light">
                    <h5 className="title">Offer</h5>
                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-2">Offer</h5>
                    <div id="dividerId-2" className="widget-collapse-body collapse">
                        <ul className="footer-nav">
                            <li><Link to="contact.html">Shop Vendor</Link></li>
                            <li><Link to="contact.html">Product House</Link></li>
                            <li><Link to="contact.html">Categories</Link></li>
                            <li><Link to="contact.html">Delivery Areas</Link></li>
                            <li><Link to="contact.html">Delivery Cost</Link></li>
                        </ul>
                    </div>
                </div>
            
                <div className="footer-widgets-single-item footer-widgets-single-item--light">
                    <h5 className="title">Information</h5>
                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-3">Information</h5>
                    <div id="dividerId-3" className="widget-collapse-body collapse">
                        <ul className="footer-nav">
                            <li><Link to="contact.html">Shop Vendor</Link></li>
                            <li><Link to="contact.html">Product House</Link></li>
                            <li><Link to="contact.html">Categories</Link></li>
                            <li><Link to="contact.html">Delivery Areas</Link></li>
                            <li><Link to="contact.html">Delivery Cost</Link></li>
                        </ul>
                    </div>
                </div>
            
                <div className="footer-widgets-single-item footer-widgets-single-item--light">
                    <h5 className="title">About</h5>
                    <h5 className="collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-4">About</h5>
                    <div id="dividerId-4" className="widget-collapse-body collapse">
                        <ul className="footer-nav">
                            <li><Link to="contact.html">Shop Vendor</Link></li>
                            <li><Link to="contact.html">Product House</Link></li>
                            <li><Link to="contact.html">Categories</Link></li>
                            <li><Link to="contact.html">Delivery Areas</Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default FooterCenter;