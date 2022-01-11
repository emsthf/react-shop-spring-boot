import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CategoryTab from '../../ui/homeUi/productList/CategoryTab';
import TabContent from '../../ui/homeUi/productList/TabContent';

function ProductTap({ refresh, setRefresh }) {

	const findAllProductUrl = "http://localhost:8080/product/findAll"
	const findAllCategoryUrl = "http://localhost:8080/category/findAll"
	const findProductByCategoryIdUrl = "http://localhost:8080/product/findByCategoryId/"
	const [list, setList] = useState([])
	const [categories, setCategories] = useState([])


	useEffect(() => {
		axios.get(findAllProductUrl).then(Response => { setList(Response.data) })
		axios.get(findAllCategoryUrl).then(Response => { setCategories(Response.data) })
	}, []);

	const handleTab = (e) => {
		axios.get(findProductByCategoryIdUrl + e.target.value).then(Response => { setList(Response.data) })
	}

	const handleTabAll = () => {
		axios.get(findAllProductUrl).then(Response => { setList(Response.data) })
	}

	return (
		<div className="product-tab-items-section section-fluid-270 section-top-gap-100">
			<div className="box-wrapper">
				<div className="section-wrapper">
					<div className="container-fluid">
						<div className="row justify-content-between align-items-center flex-warp">
							<div className="col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-auto me-5">
								<div className="section-content section-content-gap-60">
									<h2 className="section-title">Products</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="product-tab-item-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">

								<ul className="product-tab nav" role="tablist">
									<li className="nav-item" role="presentation">
										<button className="nav-link active" data-bs-toggle="tab" data-bs-target="all" type="button" onClick={handleTabAll}>All<img src="assets/images/icons/product-tab-icon-1.svg" alt="" /></button>
									</li>
									{
										categories.map(item => (
											<CategoryTab
												key={item.id}
												item={item}
												handleTab={handleTab}
											/>
										))

									}
								</ul>
								<TabContent list={list} refresh={refresh} setRefresh={setRefresh} />
								<div className="d-flex justify-content-center">
									<Link to="/shop" className="btn btn-md btn-default btn-section-bottom">View All Product</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductTap;