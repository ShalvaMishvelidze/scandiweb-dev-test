import React, { Component } from 'react';
import OneProduct from './OneProduct';

export default class Products extends Component {
	render() {
		const category = this.props.category;
		const currency = this.props.currency;
		const setCart = this.props.setCart;
		const app = this.props.app;

		return (
			<>
				<p className="category-name">{category && category.name}</p>
				<div className="container">
					{category &&
						category.products.map((product) => {
							return (
								<div key={product.id}>
									<OneProduct
										currency={currency}
										setCart={setCart}
										app={app}
										product={product}
									/>
								</div>
							);
						})}
				</div>
			</>
		);
	}
}
