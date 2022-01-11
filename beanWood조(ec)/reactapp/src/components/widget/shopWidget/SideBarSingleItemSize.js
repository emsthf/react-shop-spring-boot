import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideBarSingleItemSizeItem from './SideBarSingleItemSizeItem';

function SideBarSingleItemSize() {
	const url = "http://localhost:8080/size/findAll";
	const [size, setSize] = useState([]);

	useEffect(() => {
		axios.get(url).then(Response => {
			setSize(Response.data);
		})
	}, [])

	return (
		<div className="sidebar-single-widget">
			<h6 className="sidebar-title title-border">sizes</h6>
			<div className="sidebar-content">
				<div className="filter-type-select">
					<ul>
						{
							size.map(item => (
								<SideBarSingleItemSizeItem key={item.id} item={item} />
							))
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideBarSingleItemSize;