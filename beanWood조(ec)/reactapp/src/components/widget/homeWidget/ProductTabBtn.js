import React from 'react';

function ProductTabBtn({name, handleTab, value}) {
    return ( 
        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#all" type="button" value={value} onClick={(e) => {handleTab(e.currentTarget.value)}}>{name}<img src="assets/images/icons/product-tab-icon-1.svg" alt="" /></button>
    );
}

export default ProductTabBtn;