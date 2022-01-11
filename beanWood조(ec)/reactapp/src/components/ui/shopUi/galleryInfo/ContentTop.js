import React from 'react';
import BigPic from './topPics/Bigpic';
import SmallPics from './topPics/SmallPics';

function ContentTop () {
    return ( 
        <div className="col-md-6 col-lg-12 col-xl-6">
            <div className="product-gallery product-gallery--style-thumbnail-bottom">
                <div className="row flex-column-reverse">
                    
                        <SmallPics/>
                    
                    
                        <BigPic/>
                    

                </div>
            </div>
        </div>
     );
}

export default ContentTop;