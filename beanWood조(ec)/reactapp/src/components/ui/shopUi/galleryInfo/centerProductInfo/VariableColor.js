import React from 'react';

function VariableColor() {
    return ( 

        <div className="product-variable-color">
            <h6 className="title">Color</h6>
            <ul className="color-select">
                <li>
                    <label className="checkbox-default" for="color-red">
                        <input type="checkbox" id="color-red" />
                        <span>Red</span>
                    </label>
                </li>
                <li>
                    <label className="checkbox-default" for="color-green">
                        <input type="checkbox" id="color-green" />
                        <span>Green</span>
                    </label>
                </li>
                <li>
                    <label className="checkbox-default" for="color-blue">
                        <input type="checkbox" id="color-blue" />
                        <span>Blue</span>
                    </label>
                </li>
                <li>
                    <label className="checkbox-default" for="color-black">
                        <input type="checkbox" id="color-black" />
                        <span>Black</span>
                    </label>
                </li>
            </ul>
        </div>

     );
}

export default VariableColor;