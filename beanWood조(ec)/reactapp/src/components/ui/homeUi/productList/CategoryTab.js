import React from 'react';

function CategoryTab({ item, handleTab }) {
	return (
		<li className="nav-item" role="presentation">
			<button className="nav-link" data-bs-toggle="tab" data-bs-target={item.categoryName} type="button" key={item.id} value={item.id} onClick={handleTab}>{item.categoryName}<img src={`assets/images/icons/${item.image.imageUrl}`} alt={item.categoryName} /></button>
		</li>
	);
}

export default CategoryTab;