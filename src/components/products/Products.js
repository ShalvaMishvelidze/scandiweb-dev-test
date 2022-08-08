import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addBorder } from './methods/addBorder';
import { removeBorder } from './methods/removeBorder';
import AddToCart from './AddToCart';

export default class Products extends Component {
	render() {
		const categories = this.props.categories;
		const currency = this.props.currency;
		const category = this.props.category;
		const setCart = this.props.setCart;
		const app = this.props.app;

		return (
			<>
				<p className="category-name">
					{categories && categories[category].name}
				</p>
				<div className="container">
					{categories &&
						categories[category].products.map((product, index) => {
							const { id, gallery, name, prices, brand, inStock } =
								product;

							return (
								<div
									className={
										!inStock
											? 'products out-of-stock-products'
											: 'products'
									}
									key={id}
									onMouseEnter={(e) => addBorder(e, index, inStock)}
									onMouseLeave={(e) => removeBorder(e, index)}
								>
									<Link to={`/products/${id}`}>
										<img src={gallery[0]} alt={name} />
										<div>
											<p className="name">
												{brand} {name}
											</p>
											<p className="price">
												{prices[currency].amount}
												{prices[currency].currency.symbol}
											</p>
										</div>
										<div
											className={
												!inStock
													? 'out-of-stock display-out-of-stock'
													: 'out-of-stock'
											}
										>
											out of stock
										</div>
									</Link>
									<AddToCart
										product={product}
										setCart={setCart}
										app={app}
									/>
								</div>
							);
						})}
				</div>
			</>
		);
	}
}
