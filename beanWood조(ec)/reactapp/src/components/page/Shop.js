import React, { useEffect } from 'react';
import Breadcrumb from '../widget/Breadcrumb';
import List from '../widget/shopWidget/List';

import '../../css/vendor/bootstrap.min.css'
import '../../css/vendor/material-icons.css'
import '../../css/plugins/swiper-bundle.min.css'

function ShopList({setHeaderClass}) {
    useEffect(() =>{
        setHeaderClass(false)
    },[setHeaderClass])
    
    return ( 
        <>
            <Breadcrumb />
            <List />
        </>
    );
}

export default ShopList;