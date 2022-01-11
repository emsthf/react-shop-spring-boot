/* eslint-disable */
import React, { useState } from 'react';
import AddProduct from './AddProduct';
import AddProductInfo from './AddProductInfo';
import EditProduct from './EditProduct';
import EditProductList from './EditProductList';

function AdminMenu() {
	const [editId, setEditId] = useState();
	const [showMenu, setShowMenu] = useState(0);
	const [refresh, setRefresh] = useState(false);

	return (
		<div className="account-dashboard section-fluid-270 section-top-gap-100">
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-3 col-lg-3">
						<div className="dashboard_tab_button">
							<ul role="tablist" className="nav flex-column dashboard-list">
								<li>
									<a
										onClick={() => setShowMenu(1)}
										className={`nav-link btn btn-sm btn-default-outline ${showMenu === 1 ? "active" : ""}`}
									>
										Add Product
									</a>
								</li>
								<li>
									<a
										onClick={() => setShowMenu(2)}
										className={`nav-link btn btn-sm btn-default-outline ${showMenu === 2 ? "active" : ""}`}
									>
										Edit Product
									</a>
								</li><li>
									<a
										onClick={() => setShowMenu(4)}
										className={`nav-link btn btn-sm btn-default-outline ${showMenu === 4 ? "active" : ""}`}
									>
										ProductInfo
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-sm-12 col-md-9 col-lg-9">
						<div className="tab-content dashboard_content">
							<div className={showMenu === 0 ? "tab-pane fade show active" : "tab-pane fade"} id="addProduct">
								<div className='text-center mt-5'>
									<h2>Admin Page</h2>
								</div>
							</div>
							<AddProduct showMenu={showMenu} refresh={refresh} setRefresh={setRefresh} />
							<EditProductList showMenu={showMenu} setShowMenu={setShowMenu} setEditId={setEditId} refresh={refresh} setRefresh={setRefresh} />
							<EditProduct showMenu={showMenu} setShowMenu={setShowMenu} editId={editId} refresh={refresh} setRefresh={setRefresh} />
							<AddProductInfo showMenu={showMenu} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminMenu;
