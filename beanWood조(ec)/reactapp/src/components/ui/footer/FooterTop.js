/* eslint-disable */
import React from 'react';

function FooterTop() {
    return ( 
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-contact-items">
                    <a className="icon-left" href="tel:+12345678910"><img className="icon-svg" src="assets/images/icons/icon-ios-call-dark.svg" alt="" />123 4567 8910</a>
                    <a className="icon-left" href="mailto:demo@example.com"><img className="icon-svg" src="assets/images/icons/icon-mail-open-dark.svg" alt="" />demo@example.com</a>
                </div>
            </div>
            <div className="footer-top-right">
                <div className="footer-social">
                    <a href="https://www.facebook.com/"  rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-facebook-f-dark.svg" alt="" /></a>
                    <a href="https://twitter.com/"  rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-twitter-dark.svg" alt="" /></a>
                    <a href="https://www.pinterest.com/"  rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-pinterest-p-dark.svg" alt="" /></a>
                    <a href="https://dribbble.com/"  rel="noopener"><img className="icon-svg" src="assets/images/icons/icon-dribbble-dark.svg" alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;