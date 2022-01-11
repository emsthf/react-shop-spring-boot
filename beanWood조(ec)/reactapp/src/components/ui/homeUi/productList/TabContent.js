import React from 'react';
import ProductSingleItemStyle1 from './ProductSingleItemStyle1';

function TabContent({ list, refresh, setRefresh }) {

	return (
		<div className="tab-content">
			<div className="tab-pane tab-animate show active">
				<div className="row">
					{
						list.map(item => (
							<ProductSingleItemStyle1 key={item.id} item={item} path="home" refresh={refresh} setRefresh={setRefresh} />
						)).slice(0, 8)
					}
				</div>
			</div>
		</div>
	);
}

export default TabContent;