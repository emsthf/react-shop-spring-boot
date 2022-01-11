import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideBarSingleItemCategoryItem from './SideBarSingleItemCategoryItem';

function SideBarSingleItemCategory() {
	const url = "http://localhost:8080/category/findAll";
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios.get(url).then(Response => {
			setCategory(Response.data);
		})
	}, [])

	return (
		<div className="sidebar-single-widget">
			<h6 className="sidebar-title title-border">categories</h6>
			<div className="sidebar-content">
				<div className="filter-type-select">
					<ul>
						{
							category.map(item => (
								<SideBarSingleItemCategoryItem key={item.id} item={item} />
							))
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideBarSingleItemCategory;