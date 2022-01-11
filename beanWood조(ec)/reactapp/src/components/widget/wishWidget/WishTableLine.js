/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function WishTableLine({ item, delCheck, setDelCheck, refresh, setRefresh }) {
	const findProductImageByProductId = "http://localhost:8080/productImage/findByProductId/";
	const deleteWishListUrl = "http://localhost:8080/wishList/delete/";
	const saveCartListUrl = "http://localhost:8080/cartList/save";
	const [imgUrl, setImgUrl] = useState("");

	useEffect(() => {
		axios.get(findProductImageByProductId + item.product.id).then(Response => setImgUrl(Response.data[0].imageUrl))
	}, [findProductImageByProductId, item.product.id])

	const handleDelete = () => {
		if (window.confirm("Do you want to delete it from the wish list?")) {
			axios.delete(deleteWishListUrl + item.id).then(() => {
				setDelCheck(!delCheck);
				setRefresh(!refresh);
			})
		} else {
			window.alert("Cancel")
		}
	}

	const handlePost = () => {
		axios.post(saveCartListUrl, {
			productId: item.product.id,
			quantity: 1
		})
			.then(Response => {
				if (Response.ok) alert("Success!")
			})
	}

	return (
		<tr>
			<td className="product_remove"><Link to=""><img onClick={handleDelete} src="assets/images/icons/icon-trash.svg" alt="" /></Link></td>
			<td className="product_thumb"><Link to={`/shop/detail/${item.product.id}`}><img src={`assets/images/products/${imgUrl}`} alt={item.product.productName} /></Link></td>
			<td className="product_name"><Link to={`/shop/detail/${item.product.id}`}>{item.product.productName}</Link></td>
			<td className="product-price">${item.product.price}</td>
			<td className="product_stock">In Stock</td>
			<td className="product_addcart">
				<button onClick={handlePost}>
					<Link to="/cart" className="btn btn-sm btn-radius btn-default">Add To Cart</Link>
				</button>
			</td>
		</tr>
	);
}

export default WishTableLine;