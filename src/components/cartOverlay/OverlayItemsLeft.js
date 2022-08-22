import React, { Component } from 'react';
import SwatchAttribute from './SwatchAttribute';
import TextAttributes from './TextAttributes';
export class OverlayItemsLeft extends Component {
	render() {
		const item = this.props.item;
		const currency = this.props.currency;
		const { name, attributes, prices, brand, color, selectedAttributes } =
			item;
		return (
			<div className="overlay-item-left">
				<h1 className="cart-overlay-item-title">
					{brand} {name}
				</h1>
				<p className="overlay-price">
					{prices[currency].amount}
					{prices[currency].currency.symbol}
				</p>
				{attributes.map((attribute) => {
					const { id, name, type, items } = attribute;
					return (
						<div key={id} className="overlay-attribute-container">
							<h1 className="overlay-att-name">{name}:</h1>
							<div className="overlay-items-container">
								{type === 'swatch' && (
									<SwatchAttribute items={items} color={color} />
								)}
								{type !== 'swatch' && (
									<TextAttributes
										items={items}
										selectedAttributes={selectedAttributes}
										id={id}
									/>
								)}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
