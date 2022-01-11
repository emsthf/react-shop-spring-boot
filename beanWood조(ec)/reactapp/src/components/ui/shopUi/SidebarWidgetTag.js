import React from 'react';
import { Link } from 'react-router-dom';

function SidebarWidgetTag() {
    return ( 
        <div className="sidebar-single-widget">
            <h6 className="sidebar-title title-border">Tags</h6>
            <div className="sidebar-content">
                <ul className="tag-link">
                    <li><Link to="/shop">Fabric</Link></li>
                    <li><Link to="/shop">Cloth</Link></li>
                    <li><Link to="/shop">Fashion</Link></li>
                    <li><Link to="/shop">kid</Link></li>
                    <li><Link to="/shop">Fakoli</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarWidgetTag;