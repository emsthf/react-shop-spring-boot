import React from 'react';

function VariableItem() {
    return ( 
        <>
        <ul className="variable-items">
            <li className="variable-single-items type-select">
                <select>
                    <option value="S">Size: S</option>
                    <option value="M">Size: M</option>
                    <option value="L">Size: L</option>
                    <option value="XL" selected>Size: XL</option>
                    <option value="XXl">Size: XXL</option>
                </select>
            </li>
            <li className="variable-single-items">
                <div className="num-block skin-2">
                    <div className="num-in">
                        <span className="minus dis"></span>
                        <input type="text" className="in-num" value="1" readonly="" />
                        <span className="plus"></span>
                    </div>
                </div>
            </li>
            <li className="variable-single-items">
                <a href="cart.html" className="btn btn-sm btn-default">Add To Cart</a>
            </li>
        </ul>
        </>
     );
}

export default VariableItem;