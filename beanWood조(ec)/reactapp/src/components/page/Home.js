import React, { useEffect } from 'react';

import Shipping from '../widget/homeWidget/Shipping';
import ProductTap from '../widget/homeWidget/ProductTap';
import Slider from '../widget/homeWidget/Slider';
import BannerCard from '../widget/homeWidget/BannerCard';
import CompanyLogo from '../widget/homeWidget/CompanyLogo';
import CardSection from '../widget/homeWidget/CardSection';
import ExclusiveCollection from '../widget/homeWidget/ExclusiveCollection';
import SubscribeContents from '../widget/SubscribeContents';

function Home({ setHeaderClass, refresh, setRefresh }) {

	useEffect(() => {
		setHeaderClass(true)
	}, [setHeaderClass])

	return (
		<>
			<Slider />
			<Shipping />
			<BannerCard />
			<CompanyLogo />
			<ProductTap refresh={refresh} setRefresh={setRefresh} />
			<CardSection />
			<ExclusiveCollection />
			<SubscribeContents />
		</>
	);
}

export default Home;