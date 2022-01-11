import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Purchase() {
	const findAllCartListUrl = "http://localhost:8080/cartList/findAll";
	const findUserUrl = "http://localhost:8080/user/find/";
	const purchaseUrl = "http://localhost:8080/purchase/purchase";

	const userId = useRef();
	const userAddress = useRef();
	const userName = useRef();
	const userNumber = useRef();

	const [cartLists, setCartLists] = useState([]);
	const [user, setUser] = useState({});
	const [amount, setAmount] = useState(0);
	const flatRate = 7;

	useEffect(() => {
		let amount = 0;
		axios.get(findAllCartListUrl).then(Response => {
			setCartLists(Response.data);
			Response.data.map(cartList => amount = amount + cartList.product.price * cartList.quantity)
		}).then(() => setAmount(amount));;

		axios.get(findUserUrl + "1").then(Response => {
			setUser(Response.data);
			userId.current.value = Response.data.userName;
			userName.current.value = Response.data.name;
			userAddress.current.value = Response.data.userAddress;
			userNumber.current.value = Response.data.userNumber;
		});
	}, [])

	const goPurchase = (e) => {
		e.preventDefault();
		if (window.confirm("구매를 진행하시겠습니까?")) {
			console.log({
				cartLists: cartLists,
				userId: user.id
			});
			axios.post(purchaseUrl, {
				userId: user.id,
				cartLists: cartLists
			});
		}
	}

	return (
		<main>
			<section className="checkout-area pb-70">
				<div className="container">
					<form onSubmit={goPurchase}>
						<div className="row">
							<div className="col-lg-6">
								<div className="checkbox-form">
									<h3>Customer Info</h3>
									<div className="row">
										<div className="col-md-12">

										</div>
										<div className="col-md-12">
											<div className="checkout-form-list">
												<label>이름<span className="required">*</span></label>
												<input type="text" placeholder="sasaf" ref={userId} />

											</div>
										</div>

										<div className="col-md-12">
											<div className="checkout-form-list">
												<label>ID</label>
												<input type="text" placeholder="" ref={userName} />
											</div>
										</div>

										<div className="col-md-12">
											<div className="checkout-form-list">
												<label>주소 <span className="required">*</span></label>
												<input type="text" placeholder="" ref={userAddress} />
											</div>
										</div>

										<div className="col-md-12">
											<div className="checkout-form-list">
												<label>연락처 <span className="required">*</span></label>
												<input type="text" placeholder="" ref={userNumber} />
											</div>
										</div>
										<div className="col-md-12">
										</div>
									</div>
									<div className="different-address">
										<div className="order-notes">
											<div className="checkout-form-list">
												<label>배송메모</label>
												<textarea id="checkout-mess" cols="30" rows="10" placeholder="상품 배송 시, 전달할 내용을 작성해주세요."></textarea>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="your-order mb-30 ">
									<h3>Your order</h3>
									<div className="your-order-table table-responsive">
										<table>
											<thead>
												<tr>
													<th className="product-name">Product</th>
													<th className="product-total">Total</th>
												</tr>
											</thead>
											<tbody>
												{
													cartLists.map(cartList => (
														<tr className="cart_item">
															<td className="product-name">
																{cartList.product.productName} <strong className="product-quantity"> × {cartList.quantity}</strong>
															</td>
															<td className="product-total">
																<span className="amount">${cartList.product.price * cartList.quantity}</span>
															</td>
														</tr>
													))
												}
											</tbody>
											<tfoot>
												<tr className="cart-subtotal">
													<th>Cart Subtotal</th>
													<td><span className="amount">${amount}</span></td>
												</tr>
												<tr className="shipping">
													<th>Shipping</th>
													<td>
														<ul>
															<li>
																<input type="radio" />
																<label>
																	Flat Rate: <span className="amount">${flatRate}</span>
																</label>
															</li>
															<li>
																<input type="radio" />
																<label>Free Shipping:</label>
															</li>
															<li></li>
														</ul>
													</td>
												</tr>
												<tr className="order-total">
													<th>Order Total</th>
													<td><strong><span className="amount">${amount + flatRate}</span></strong>
													</td>
												</tr>
											</tfoot>
										</table>
									</div>

									<div className="payment-method">
										<div className="accordion" id="accordionExample">
											<div className="card">
												<div className="card-header" id="headingOne">
													<h5 className="mb-0">
														<button className="btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
															aria-expanded="true" aria-controls="collapseOne">
															Direct Bank Transfer
														</button>
													</h5>
												</div>

												<div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
													data-parent="#accordionExample">
													<div className="card-body">
														Make your payment directly into our bank account. Please use your Order ID
														as the payment
														reference. Your order won’t be
														shipped until the funds have cleared in our account.
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingTwo">
													<h5 className="mb-0">
														<button className="btn-link collapsed" type="button" data-toggle="collapse"
															data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
															Cheque Payment
														</button>
													</h5>
												</div>
												<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
													<div className="card-body">
														Please send your cheque to Store Name, Store Street, Store Town, Store
														State / County, Store
														Postcode.
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingThree">
													<h5 className="mb-0">
														<button className="btn-link collapsed" type="button" data-toggle="collapse"
															data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
															PayPal
														</button>
													</h5>
												</div>
												<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
													<div className="card-body">
														Pay via PayPal; you can pay with your credit card if you don’t have a
														PayPal account.
													</div>
												</div>
											</div>
										</div>
										<div className="order-button-payment mt-20">
											<button type="submit" className="btn theme-btn">Place order</button>
										</div>
									</div>

								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}

export default Purchase;