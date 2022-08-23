import React, { Component } from 'react';
import SwatchAtt from './SwatchAtt';
import TextAtt from './TextAtt';

export default class ItemLeft extends Component {
	render() {
		const item = this.props.item;
		const currency = this.props.currency;

		const { name, attributes, prices, brand, color, selectedAttributes } =
			item;

		return (
			<div className="item-left">
				<h1 className="cart-item-title">
					<span>{brand}</span> {name}
				</h1>
				<p className="cart-price">
					{prices[currency].currency.symbol}
					{prices[currency].amount}
				</p>
				{attributes.map((attribute) => {
					const { id, name, type, items } = attribute;
					return (
						<div key={id} className="attribute-container">
							<h1 className="cart-att-name">{name}:</h1>
							<div className="cart-att-container">
								<SwatchAtt items={items} type={type} color={color} />
								<TextAtt
									items={items}
									type={type}
									selectedAttributes={selectedAttributes}
									id={id}
								/>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
