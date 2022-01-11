import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import CartTableLine from './CartTableLine';
import axios from 'axios';

function CartTable({ setCheck, check, refresh, setRefresh }) {
	const findAllCartListUrl = "http://localhost:8080/cartList/findAll";
	const [cart, setCart] = useState([]);
	const [delCheck, setDelCheck] = useState(false);

	useEffect(() => {
		axios.get(findAllCartListUrl).then(Response => { setCart(Response.data) });
	}, [delCheck, refresh])

	return (
		<div className="cart-table-wrapper">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="table_desc">
							<div className="table_page table-responsive">
								<table>

									<thead>
										<tr>
											<th className="product_remove">Delete</th>
											<th className="product_thumb">Image</th>
											<th className="product_name">Product</th>
											<th className="product-price">Price</th>
											<th className="product_quantity">Quantity</th>
											<th className="product_total">Total</th>
										</tr>
									</thead>
									<tbody>
										{
											cart.map(item => (
												<CartTableLine
													key={item.id}
													item={item}
													setCheck={setCheck}
													check={check}
													delCheck={delCheck}
													setDelCheck={setDelCheck}
													refresh={refresh}
													setRefresh={setRefresh}
												/>
											))
										}

									</tbody>
								</table>
							</div>
							<div className="cart_submit">
								<button className="btn btn-sm btn-radius btn-default" type="submit">update cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartTable;