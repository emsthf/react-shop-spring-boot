import React, { useState, useEffect } from "react";
import axios from 'axios';
import WishTableLine from './WishTableLine';

function WishTable({ refresh, setRefresh }) {
	const findAllWishListUrl = "http://localhost:8080/wishList/findAll"
	const [wish, setWish] = useState([]);
	const [delCheck, setDelCheck] = useState(false);

	useEffect(() => {
		axios.get(findAllWishListUrl)
			.then(Response => {
				setWish(Response.data);
			})
	}, [delCheck, refresh])

	return (
		<div className="wishlist-section section-fluid-270 section-top-gap-100">
			<div className="wishlish-table-wrapper">
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
												<th className="product_stock">Stock Status</th>
												<th className="product_addcart">Add To Cart</th>
											</tr>
										</thead>
										<tbody>
											{
												wish.map(item => (
													<WishTableLine
														key={item.id}
														item={item}
														delCheck={delCheck}
														setDelCheck={setDelCheck}
														refresh={refresh} setRefresh={setRefresh}
													/>
												))
											}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WishTable;
