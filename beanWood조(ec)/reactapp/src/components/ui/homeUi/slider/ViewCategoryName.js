import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewCategoryName({categoryId}) {

    const [ categoryName, setCategoryName ] = useState({})

    const url = `http://localhost:3005/categories/${categoryId}`
    
    useEffect(()=>{
        axios.get(url)
        .then(Response=>{
            // setCategoryName(Response.data)
            console.log(Response.data)
        })
    },[url])


    return ( 
        <span className="title-tag">{categoryName}</span>
     );
}

export default ViewCategoryName;