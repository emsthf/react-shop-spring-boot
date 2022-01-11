import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';


function Breadcrumb ({checkDir}) {
    const [addPath, setAddPath] = useState("")
    
    useEffect(()=>{
        if(checkDir) {
            setAddPath("../.")
        }
    },[checkDir])

    return ( 
        <div className="breadcrumb-section">
            <div className="box-wrapper">
                <div className="breadcrumb-wrapper breadcrumb-wrapper--style-1 pos-relative">
                    <div className="breadcrumb-bg">
                        <img src={`${addPath}./assets/images/breadcrumb/breadcrumb-img-product-details-page.webp`} alt="" />
                    </div>
                    <div className="breadcrumb-content section-fluid-270">
                        <div className="breadcrumb-wrapper">
                            <div className="content">
                                <span className="title-tag">BEST DEAL FOREVER</span>
                                <h2 className="title"><span className="text-mark">The future of</span> fasion.</h2>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/shop">Shop</Link></li>
                                <li>Product Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;