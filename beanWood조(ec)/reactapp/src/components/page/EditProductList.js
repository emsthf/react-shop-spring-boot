/* eslint-disable */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditProductListItem from './EditProductListItem';

function EditProductList({ showMenu, setShowMenu, setEditId, refresh, setRefresh }) {
	const findAllProductUrl = "http://localhost:8080/product/findAll";
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get(findAllProductUrl).then(Response => setProducts(Response.data));
	}, [refresh])

	return (
		<div className={showMenu === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="editProduct">
			<h4>Edit Product List</h4>
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
												<th className="product_addcart">Edit</th>
											</tr>
										</thead>
										<tbody>
											{
												products.map(product => (
													<EditProductListItem key={product.id} product={product} setShowMenu={setShowMenu} setEditId={setEditId} refresh={refresh} setRefresh={setRefresh} />
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

export default EditProductList;