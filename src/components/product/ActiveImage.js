import React, { Component } from 'react';
export class ActiveImage extends Component {
	render() {
		const self = this.props.self;
		const product = this.props.product;
		return (
			<div className={product.inStock ? null : 'PDP-active-image'}>
				<img
					className="product-image"
					src={product.gallery[self.state.image]}
					alt={product.name}
				/>
				<div
					className={product.inStock ? 'display-none' : 'out-of-stock-PDP'}
				>
					out of stock
				</div>
			</div>
		);
	}
}
