import React from 'react';
import Breadcrumb from '../widget/Breadcrumb';
import WishTable from '../widget/wishWidget/WishTable';

function Wish({ refresh, setRefresh }) {
	return (
		<>
			<Breadcrumb />
			<WishTable refresh={refresh} setRefresh={setRefresh} />
		</>
	);
}

export default Wish;