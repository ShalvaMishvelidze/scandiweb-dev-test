import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductLink extends Component {
	render() {
		const product = this.props.product;
		const currency = this.props.currency;
		const { id, gallery, name, prices, brand, inStock } = product;

		return (
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
		);
	}
}
