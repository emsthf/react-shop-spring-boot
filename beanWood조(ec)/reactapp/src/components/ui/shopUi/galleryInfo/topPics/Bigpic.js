import React from 'react';

function BigPic() {
    return ( 
        
            <div className="product-large-image tab-content">
                <div className="tab-pane fade show active" id="img-1" role="tabpanel">
                    <div className="image">
                        <img className="img-fluid" src="assets/images/products/product-details/product-large-1.webp" alt="" />
                    </div>
                </div>
                <div className="tab-pane fade" id="img-2" role="tabpanel">
                    <div className="image">
                        <img className="img-fluid" src="assets/images/products/product-details/product-large-2.webp" alt="" />
                    </div>
                </div>
                <div className="tab-pane fade" id="img-3" role="tabpanel">
                    <div className="image">
                        <img className="img-fluid" src="assets/images/products/product-details/product-large-3.webp" alt="" />
                    </div>
                </div>
            </div>
            

     );
}

export default BigPic;