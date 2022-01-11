import React from 'react';

function SubscribeLeft () {
    return ( 
        <div className="content content-left">
            <h4 className="title">Newsletter</h4>
            <p>Lorem Ipsum is simply dummy text of the printing.
                printing and typesetting industry.</p>
            <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
            </div>
            <div className="image-shape image-shape-left"><img className="img-fluid" src="assets/images/icons/newsletter-paper-plane.svg" width="119" height="74" loading="lazy" alt="newsletter-paper-plane" /></div>
        </div>
     );
}

export default SubscribeLeft;