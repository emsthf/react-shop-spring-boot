/* eslint-disable */
import React from 'react';
import SideBarSingleItemCategory from './SideBarSingleItemCategory';
import SideBarSingleItemColor from './SideBarSingleItemColor';
import SideBarSingleItemSize from './SideBarSingleItemSize';

function Sidebar() {
	return (
		<div className="siderbar-section">
			<SideBarSingleItemCategory />
			<SideBarSingleItemColor />
			<SideBarSingleItemSize />
		</div>
	);
}

export default Sidebar;