import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from "./components/layout/Header";
import Cart from './components/page/Cart';
import Home from "./components/page/Home";
import Wish from './components/page/Wish';
import Shop from './components/page/Shop';
import TopScroll from './components/widget/TopScroll';
import Detail from './components/page/Detail';
import './App.css'
import './css/style.css';
import Login from './components/page/Login';
import AddProductInfo from './components/page/AddProductInfo';
import AdminMenu from './components/page/AdminMenu';
import SignUp from './components/page/SignUp';
import Purchase from './components/page/Purchase';

function App() {
	const [headerClass, setHeaderClass] = useState(true);
	const [refresh, setRefresh] = useState(true);

	return (
		<BrowserRouter>
			<div className="App">
				<Header headerClass={headerClass} refresh={refresh} setRefresh={setRefresh} />
				<TopScroll />
				<Routes>
					<Route path="/" element={<Home setHeaderClass={setHeaderClass} refresh={refresh} setRefresh={setRefresh} />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					<Route path="/shop" element={<Shop setHeaderClass={setHeaderClass} />} />
					<Route path="/cart" element={<Cart setHeaderClass={setHeaderClass} refresh={refresh} setRefresh={setRefresh} />} />
					<Route path="/wish" element={<Wish setHeaderClass={setHeaderClass} refresh={refresh} setRefresh={setRefresh} />} />
					<Route path="/detail" element={<Detail setHeaderClass={setHeaderClass} />} />
					<Route path="/shop/detail/:id" element={<Detail setHeaderClass={setHeaderClass} />} />
					<Route path="/addproductinfo/" element={<AddProductInfo />} />
					<Route path="/admin" element={<AdminMenu />} />
					<Route path="/purchase" element={<Purchase />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
