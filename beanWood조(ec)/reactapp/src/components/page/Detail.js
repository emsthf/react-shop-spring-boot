/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Breadcrumb from '../ui/Breadcrumb';
import ProductGalleryInfo from '../widget/detail/ProductGalleryInfo';
import ExclusiveCollection from '../widget/homeWidget/ExclusiveCollection';

function Detail({ setHeaderClass }) {
	const url = "http://localhost:8080/product/find/";
	const dir = useLocation()
	const [checkDir, setCheckDir] = useState(false);
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		if (dir) setCheckDir(true)
		setHeaderClass(false)

		fetch(url + id)
			.then(res => {
				return res.json()
			})
			.then(data => {
				setProduct(data)
			})
	}, [id, setHeaderClass, dir]);

	return (
		<>
			<Breadcrumb
				checkDir={checkDir}
			/>
			<ProductGalleryInfo product={product} />
			<ExclusiveCollection checkDir={checkDir} />
		</>
	);
}

export default Detail;


