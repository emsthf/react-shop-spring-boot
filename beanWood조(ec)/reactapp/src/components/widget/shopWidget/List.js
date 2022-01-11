/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ProductSingleItemStyle1 from '../../ui/homeUi/productList/ProductSingleItemStyle1';
import ListPagenation from '../../ui/shopUi/ListPagination'
import ShopInfo from '../../ui/shopUi/ShopInfo';
import axios from 'axios';

function List() {
	const url = "http://localhost:8080/product/findAll";
	const [productList, setProductList] = useState([]);
	const mount = 6;

	useEffect(() => {
		axios.get(url)
			.then(Response => {
				setProductList(Response.data);
			})
	}, []);


	return (
		<div className="shop-list-section section-fluid-270 section-top-gap-100">
			<div className="box-wrapper">
				<div className="shop-list-wrapper">
					<div className="container-fluid">
						<div className="row flex-column-reverse flex-lg-row">
							<div className="col-xl-3 col-lg-3">
								<Sidebar />
							</div>
							<div className="col-xl-8 offset-xl-1 col-lg-9">
								<ShopInfo mount={mount} productList={productList} />

								<div className="product-shop-list-items">
									<div className="row mb-n25">
										{
											productList.map(item => (
												<div key={item.id} className="col-md-6 col-12 mb-25">
													<ProductSingleItemStyle1
														item={item}
														path="shop"
													/>
												</div>
											)).slice(0, mount)
										}
									</div>
								</div>

								<ListPagenation />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default List;