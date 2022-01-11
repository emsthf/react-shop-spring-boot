import React from 'react';
import { Link } from 'react-router-dom';

function FooterBottom() {
    return ( 
        <div className="footer-bottom">
            <p className="copyright-text copyright-text--light">&copy; 2021 Mart Up. Made with <span className="material-icons">favorite</span> by <Link to="https://hasthemes.com/" target="_blank" rel="noopener noreferrer">Codecarnival</Link></p>
            <Link to="index.html" className="payment-logo"><img className="img-fluid" src="assets/images/company-logo/payment-logo.png" alt="" /></Link>
        </div>
    );
}

export default FooterBottom;