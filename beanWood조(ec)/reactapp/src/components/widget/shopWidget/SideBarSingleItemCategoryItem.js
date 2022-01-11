import React, { useState } from 'react';

function SideBarSingleItemCategoryItem({ item }) {
	const [check, setCheck] = useState(false);

	return (
		<li key={item.id}>
			<label className="checkbox-default" htmlFor="men">
				<input onChange={() => setCheck(!check)} type="checkbox" id={item.categoryName} checked={check} />
				<span>{item.categoryName}</span>
			</label>
		</li>
	);
}

export default SideBarSingleItemCategoryItem;