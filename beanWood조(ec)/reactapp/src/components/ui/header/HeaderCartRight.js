/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SingleItemCart from '../../widget/header_wiget/SingleItemCart';

function HeaderCartRight({ refresh, setRefresh }) {
	const url = "http://localhost:8080/cartList/findAll"
	const [cart, setCart] = useState([]);
	const [delCheck, setDelCheck] = useState(false);

	useEffect(() => {
		axios.get(url)
			.then(Response => {
				setCart(Response.data);
			})
	}, [delCheck, refresh])

	return (
		<div className="offcanvas offcanvas-end" tabIndex="-1" id="addcartOffcanvas">
			<div className="offcanvas-header">
				<h5 className="offcanvas-title">Add Cart</h5>
				<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">
				<ul className="offcanvas-products-list">
					{
						cart.map(item => (
							<SingleItemCart
								key={item.id}
								item={item}
								delCheck={delCheck}
								setDelCheck={setDelCheck}
								refresh={refresh}
								setRefresh={setRefresh}
							/>
						))
					}
				</ul>
				<div className="offcanvas-action-link">
					<Link to="/cart" className="btn" type="button" data-bs-dismiss="offcanvas" aria-label="Close">View Cart</Link>
					<Link to="/purchase" className="btn" type="button" data-bs-dismiss="offcanvas" aria-label="Close">Checkout</Link>
				</div>
			</div>
		</div>

	);
}

export default HeaderCartRight;