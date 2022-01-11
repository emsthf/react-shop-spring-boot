import React from 'react';
import ContentBottom from './ContentBottom';
import ContentCenter from './ContentCenter';
import ContentTop from './ContentTop';

function GalleryContent() {
    return ( 
        <div className="col-xl-8 col-lg-7 offset-lg-1  ">
        <div className="row">
        
            <ContentTop/>
            <ContentCenter/>
            <ContentBottom/>
        
        </div>
    </div>
     );
}

export default GalleryContent;