import React from 'react';
import { Link } from 'react-router-dom';

function MobileHeader() {
    return ( 
        <div className="mobile-header d-block d-lg-none">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="mobile-logo">
                            <Link to="/"><img src="assets/images/logo/logo-light-theme.png" alt=""/></Link>
                        </div>
                    </div>

                    <div className="col-auto">
                        <div className="mobile-action-link text-end d-flex ">
                            <button data-bs-toggle="offcanvas" data-bs-target="#toggleMenu"><span className="material-icons">menu</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default MobileHeader;