import React from 'react';
import { Link } from 'react-router-dom';

function ListPagination() {
    return ( 
        <div className="d-flex justify-content-center">
            <ul className="page-pagination">
                <li className="icon-direction icon-direction--prev"><Link to="index.html"><span className="material-icons-outlined">arrow_left</span></Link></li>
                <li><Link to="index.html">1</Link></li>
                <li><Link to="index.html">2</Link></li>
                <li><Link to="index.html">3</Link></li>
                <li>...</li>
                <li><Link to="index.html">10</Link></li>
                <li className="icon-direction icon-direction--next"><Link to="index.html"><span className="material-icons-outlined">arrow_right</span></Link></li>
            </ul>
        </div>
    );
}

export default ListPagination;