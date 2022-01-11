import React, { useState } from 'react';

function SideBarSingleItemSizeItem({ item }) {
	const [check, setCheck] = useState(false);

	return (
		<li key={item.id}>
			<label className="checkbox-default" htmlFor="men">
				<input onChange={() => setCheck(!check)} type="checkbox" id={item.sizeName} checked={check} />
				<span>{item.sizeName}</span>
			</label>
		</li>
	);
}

export default SideBarSingleItemSizeItem;