import React, { useState } from 'react';

function SideBarSingleItemColorItem({ item }) {
	const [check, setCheck] = useState(false);

	return (
		<li key={item.id}>
			<label className="checkbox-default" htmlFor="men">
				<input onChange={() => setCheck(!check)} type="checkbox" id={item.colorName} checked={check} />
				<span>{item.colorName}</span>
			</label>
		</li>
	);
}

export default SideBarSingleItemColorItem;