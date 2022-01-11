/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

function CartTableLine({ item, setCheck, check, delCheck, setDelCheck, refresh, setRefresh }) {
	const updateCartListUrl = "http://localhost:8080/cartList/update";
	const deleteCartListUrl = "http://localhost:8080/cartList/delete/";
	const findProductByIdUrl = "http://localhost:8080/product/find/";
	const findProductImageByProductId = "http://localhost:8080/productImage/findByProductId/";
	const qty = useRef();
	const [intQty, setIntQty] = useState(item.quantity);
	const [product, setProduct] = useState({});
	const [productImg, setProductImg] = useState([]);

	const handleQuantity = () => {
		setCheck(true)
		setIntQty(parseInt(qty.current.value))
		axios.put(updateCartListUrl, {
			...item,
			id: item.id,
			productId: product.id,
			quantity: parseInt(qty.current.value)
		}).then(() => setRefresh(!refresh));
	}

	const handleDelete = () => {
		if (window.confirm("Do you want to delete from the cart?")) {
			axios.delete(deleteCartListUrl + item.id)
				.then(() => {
					setDelCheck(!delCheck);
					setRefresh(!refresh);
				})
		} else {
			window.alert("Cacel")
		}
	}


	useEffect(() => {
		axios.get(findProductByIdUrl + item.product.id)
			.then(Response => {
				setProduct(Response.data);
			});
		axios.get(findProductImageByProductId + item.product.id)
			.then(Response => {
				setProductImg(Response.data[0].imageUrl);
			});
	}, [item.product.id]);

	return (
		<tr>
			<td className="product_remove"><Link to="/cart"><img onClick={handleDelete} src="assets/images/icons/icon-trash.svg" alt="" /></Link></td>
			<td className="product_thumb"><Link to={`/shop/detail/${product.id}`}><img src={`assets/images/products/${productImg}`} alt={product.productName} /></Link></td>
			<td className="product_name">
				<Link to={`/shop/detail/${product.id}`}>{product.productName} {item.color === 1 ? "Red" : item.color === 2 ? "Green" : item.color === 3 ? "Blue" : item.color === 4 ? "Black" : ""} {item.size}</Link>
			</td>
			<td className="product-price">${product.price}</td>
			<td className="product_quantity"><label>Quantity</label> <input defaultValue={item.quantity} min="1" onChange={handleQuantity} ref={qty} type="number" /></td>
			<td className="product_total">${intQty * product.price}</td>
		</tr>
	);
}

export default CartTableLine;