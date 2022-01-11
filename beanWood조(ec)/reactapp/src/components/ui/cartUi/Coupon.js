import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function Coupon() {
    const [match, setMatch] = useState(3);
    const couponRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3005/coupon?code=${couponRef.current.value}`)
        .then(Response => {
            setMatch(Response.data.length)
            console.log(Response.data.length);
        })
    }

    useEffect(()=>{
        if(match===1) {
            window.alert("Success!")
        } else if (match===0) {
            window.alert("Check your coupon.")
        }
    },[match])

    return (
        <div className="col-lg-6 col-md-6">
            <form onSubmit={handleSubmit}>
            <div className="coupon_code left">
                <h3>Coupon</h3>
                <div className="coupon_inner">
                    <p>Enter your coupon code if you have one.</p>
                    <input className="mb-2" placeholder="Coupon code" type="text" ref={couponRef} />
                    <button type="submit" className="btn btn-sm btn-radius btn-default">Apply coupon</button>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Coupon;