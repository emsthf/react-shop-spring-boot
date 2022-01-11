import React from 'react';
import SubscribeLeft from './homeWidget/subscribe/SubscribeLeft';
import SubscribeRight from './homeWidget/subscribe/SubscribeRight' 

function SubscribeContents () {
    return ( 

    
        <div className="newsletter-section section-fluid-270 section-top-gap-100">
            <div className="box-wrapper">
                <div className="newsletter-wrapper">
                    <div className="container-fluid">
                        <div className="col-12">
                            <div className="newsletter-area newsletter-area-style-1">

                                    <SubscribeLeft/>
                                    <SubscribeRight/>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SubscribeContents;