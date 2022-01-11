import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideBarSingleItemColorItem from './SideBarSingleItemColorItem';

function SideBarSingleItemColor() {
	const url = "http://localhost:8080/color/findAll";
	const [color, setColor] = useState([]);

	useEffect(() => {
		axios.get(url).then(Response => {
			setColor(Response.data);
		})
	}, [])

	return (
		<div className="sidebar-single-widget">
			<h6 className="sidebar-title title-border">colors</h6>
			<div className="sidebar-content">
				<div className="filter-type-select">
					<ul>
						{
							color.map(item => (
								<SideBarSingleItemColorItem key={item.id} item={item} />
							))
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideBarSingleItemColor;