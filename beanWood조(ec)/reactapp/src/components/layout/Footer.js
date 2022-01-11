import React from 'react';
import FooterBottom from '../ui/footer/FooterBottom';
import FooterCenter from '../ui/footer/FooterCenter';
import FooterTop from '../ui/footer/FooterTop';

function Footer() {
    return ( 
        <footer className="footer-section footer-section-style-1 section-top-gap-120">
            <div className="box-wrapper">
                <div className="footer-wrapper section-fluid-270">
                    <div className="container-fluid">
                        <FooterTop />
                        <FooterCenter />
                        <FooterBottom />
                    </div>
                </div>
            </div>
        </footer>
        
    );
}

export default Footer;