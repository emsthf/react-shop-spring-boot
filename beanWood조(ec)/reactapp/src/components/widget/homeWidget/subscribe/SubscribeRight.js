import React from 'react';
import { Link } from 'react-router-dom';


function SubscribeRight() {
    return ( 
        <div className="content content-right">
            <h4 className="title">Download App</h4>
            <p>Lorem Ipsum is simply dummy text of the printing.
                printing and typesetting industry.</p>

            <div className="apps-btn">
                <Link to="/"><img className="img-fluid" src="assets/images/icons/iphone-app-button.png" width="128" height="45" loading="lazy" alt="iphone-app-button"/></Link>
                <Link to="/"><img className="img-fluid" src="assets/images/icons/googleplay-app-button.png" width="135" height="4545" loading="lazy" alt="googleplay-app-button"/></Link>
            </div>
            <div className="image-shape image-shape-right"><img className="img-fluid" src="assets/images/icons/newsletter-cloud-computing.svg" width="94" height="81" loading="lazy" alt="newsletter-cloud-computing"/></div>
        </div>
    );
}

export default SubscribeRight;