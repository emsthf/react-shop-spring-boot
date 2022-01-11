import React from 'react';
import Sidebar from '../widget/shopWidget/Sidebar';
import GalleryContent from './shopUi/galleryInfo/GalleryContent';

function ProductGalleryInfo() {
	return (
		<div className="product-gallery-info-section section-fluid-270 section-top-gap-100">
			<div className="box-wrapper">
				<div className="product-gallery-info-wrapper">
					<div className="container-fluid">
						<div className="row flex-column-reverse flex-lg-row">
							<div class="col-xl-3 col-lg-4">
								<Sidebar />
							</div>
							<GalleryContent />
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default ProductGalleryInfo;
