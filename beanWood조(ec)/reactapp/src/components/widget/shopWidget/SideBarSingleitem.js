import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import SideBarSingleList from './SideBarSingleList';

function SideBarSingleitem({ title, checkLists, setCheckLists }) {

	const [sideData, setSideData] = useState([])


	useEffect(() => {

		axios.get(`http://localhost:8080/${title}/findAll`)
			.then(Response => {
				setSideData(Response.data);
			})
	}, [title])
	return (
		<div className="sidebar-single-widget">
			<h6 className="sidebar-title title-border">{title}</h6>
			<div className="sidebar-content">
				<div className="filter-type-select">
					<ul>
						{
							sideData.map(item => (
								<SideBarSingleList
									key={item.id}
									item={item}
									setCheckLists={setCheckLists}
									checkLists={checkLists}
								/>
							))
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideBarSingleitem;