import React, { useEffect, useState } from 'react';
import BannerCardItem from '../../ui/homeUi/bannerCard/BannerCardItem';
import axios from 'axios';

function BannerCard() {
	const url = "http://localhost:8080/bannerCard/findAll";
    const [cardItem, setCardItem] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(Response => {
            setCardItem(Response.data);
        })
    }, []);

    return ( 
        <div className="banner-card-section section-fluid-270 section-top-gap-100">
            <div className="box-wrapper">
                <div className="banner-card-wrapper">
                    <div className="container-fluid">
                        <div className="row mb-n20">
                            {
                                cardItem.map(item => (
                                    <BannerCardItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerCard;