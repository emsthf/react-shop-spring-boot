import React from 'react';

function ShopInfo({mount, productList}) {
    return ( 
        <ul className="product-shop-filter-info">
            <li className="prduct-item-traking"><span>total {mount} of {productList.length}</span></li>
            <li className="prduct-item-filter">
                <select name="choice" className="nice-select" tapindex="0">
                    <option value="first">New Arrival</option>
                    <option value="second" defaultValue>Featured</option>
                    <option value="third">Popular</option>
                </select>
            </li>
        </ul>
    );
}

export default ShopInfo;