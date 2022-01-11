import React from 'react';

function ToolTipTagItems({sale}) {
    return (
        <ul className={sale === 0 ? "" : "tooltip-tag-items" }>
            <li className="color-green">{sale === 0 ? '' : `${sale}%` }</li>
        </ul>
    );
}

export default ToolTipTagItems;