/* eslint-disable */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function AddProduct({ showMenu, refresh, setRefresh }) {
	const productUrl = "http://localhost:8080/product/save";
	const categoryUrl = "http://localhost:8080/category/findAll";
	const colorUrl = "http://localhost:8080/color/findAll";
	const sizeUrl = "http://localhost:8080/size/findAll";
	const productName = useRef();
	const productPrice = useRef();
	const productSale = useRef();
	const productDescription = useRef();
	const productImage = useRef();
	const [category, setCategory] = useState([]);
	const [productCategory, setProductCategory] = useState();
	const [color, setColor] = useState([]);
	const [productColor, setProductColor] = useState([]);
	const [size, setSize] = useState([]);
	const [productSize, setProductSize] = useState([]);
	const [productImages, setProductImages] = useState([]);

	const addProduct = (e) => {
		e.preventDefault();
		if (window.confirm("상품을 등록하시겠습니까?")) {
			axios.post(productUrl, {
				productName: productName.current.value,
				price: productPrice.current.value,
				sale: productSale.current.value,
				description: productDescription.current.value,
				categoryId: productCategory,
				star: 5,
				new: true,
				images: productImages,
				colorIds: productColor,
				sizeIds: productSize
			}).then(() => {
				setRefresh(!refresh);
				productName.current.value = "";
				productPrice.current.value = "";
				productSale.current.value = "";
				productDescription.current.value = "";
				productImage.current.value = "";
				setProductImages([]);
				setProductCategory(null);
				setProductColor([]);
				setProductSize([]);
				category.map(item =>
					document.getElementById(`radioCategory${item.id}`).checked = false
				)
				color.map(item =>
					document.getElementById(`checkColor${item.id}`).checked = false
				)
				size.map(item =>
					document.getElementById(`checkSize${item.id}`).checked = false
				)
			})
		}
	}

	useEffect(() => {
		axios.get(categoryUrl).then(Response => setCategory(Response.data));
		axios.get(colorUrl).then(Response => setColor(Response.data));
		axios.get(sizeUrl).then(Response => setSize(Response.data));
	}, []);

	const selectCategory = (e) => setProductCategory(e.target.value)

	const selectColor = (e) => {
		if (e.target.checked) {
			setProductColor([
				...productColor,
				e.target.value
			]);
		} else {
			setProductColor(productColor.filter(item => item !== e.target.value));
		}
	}

	const selectSize = (e) => {
		if (e.target.checked) {
			setProductSize([
				...productSize,
				e.target.value
			]);
		} else {
			setProductSize(productSize.filter(item => item !== e.target.value));
		}
	}

	const uploadImg = () => {
		if (productImage.current.value.substr("C:\\fakepath\\".length) !== "" && !productImages.includes(productImage.current.value.substr("C:\\fakepath\\".length))) {
			setProductImages([
				...productImages,
				productImage.current.value.substr("C:\\fakepath\\".length)
			]);
		}
	}

	const delImg = (item) => {
		if (confirm("사진을 삭제하시겠습니까?")) {
			setProductImages(productImages.filter(image => image !== item));
		}
	}

	return (
		<div className={showMenu === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="addProduct">
			<h4>Add Product</h4>
			<form onSubmit={addProduct}>
				<div className="col-12">
					<label htmlFor="name" className="form-label">name</label>
					<input type="text" className="form-control" id="name" placeholder="상품명" required="" ref={productName} />
				</div>

				<div className="col-12">
					<label htmlFor="price" className="form-label">price</label>
					<input type="text" className="form-control" id="price" placeholder="상품 가격" required="" ref={productPrice} />
				</div>

				<div className="col-12">
					<label htmlFor="sale" className="form-label">sale</label>
					<input type="text" className="form-control" id="sale" placeholder="할인율" required="" ref={productSale} />
				</div>

				<div className="col-12">
					<label htmlFor="description" className="form-label">description</label>
					<textarea type="text" className="form-control text-box" id="description" placeholder="상품 상세 설명" required="" ref={productDescription} />
				</div>
				<div className="col-12">
					<label htmlFor="categories" className="form-label">category</label>
					<div>
						{
							category.map(item => (
								<div className="form-check form-check-inline" key={item.id}>
									<input className="form-check-input" type="radio" name="categories" id={`radioCategory${item.id}`} value={item.id} onChange={selectCategory} />
									<label className="form-check-label" htmlFor={item.id}>{item.categoryName}</label>
								</div>
							))
						}
					</div>
				</div>

				<div className="col-12">
					<label htmlFor="color" className="form-label">color</label>
					<div>
						{
							color.map(item => (
								<div className="form-check form-check-inline" key={item.id}>
									<input className="form-check-input" type="checkbox" name='colors' id={`checkColor${item.id}`} value={item.id} onChange={selectColor} />
									<label className="form-check-label" htmlFor={item.id}>{item.colorName}</label>
								</div>
							))
						}
					</div>
				</div>

				<div className="col-12">
					<label htmlFor="size" className="form-label">size</label>
					<div>
						{
							size.map(item => (
								<div className="form-check form-check-inline" key={item.id}>
									<input className="form-check-input" type="checkbox" name='sizes' id={`checkSize${item.id}`} value={item.id} onChange={selectSize} />
									<label className="form-check-label" htmlFor={item.id}>{item.sizeName}</label>
								</div>
							))
						}
					</div>
				</div>

				<div className="col-12">
					<label htmlFor="image" className="form-label">image</label>
					<div className="container">
						<div className="row">
							{
								productImages.map(item => (
									<img key={item} className="col-6 col-md-4 img-fluid singlePostImg" src={`assets/images/products/${item}`} onClick={() => delImg(item)} />
								))
							}
						</div>
					</div>
					<div className='d-flex'>
						<input className="form-control" type="file" id="image" ref={productImage} />
						<button type="button" className="btn btn-secondary" onClick={uploadImg} >upload</button>
					</div>
				</div>
				<div className='text-center mt-5'>
					<button type="submit" className="btn btn-primary">Add Product</button>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;