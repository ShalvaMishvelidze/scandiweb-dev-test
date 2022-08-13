import React, { Component } from 'react';

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
					{prices[currency].amount}
					{prices[currency].currency.symbol}
				</p>
				{attributes.map((attribute) => {
					const { id, name, type, items } = attribute;
					return (
						<div key={id} className="attribute-container">
							<h1 className="cart-att-name">{name}:</h1>
							<div className="cart-att-container">
								{type === 'swatch' &&
									items.map((item) => {
										const { value, id } = item;
										return (
											<div
												key={id}
												className={
													id === color
														? 'color-wrapper wrapper-border'
														: 'color-wrapper'
												}
											>
												<div
													className="color-container"
													style={{
														backgroundColor: `${value}`,
													}}
												></div>
											</div>
										);
									})}
								{type !== 'swatch' &&
									items.map((item) => {
										const { value } = item;
										const selectedAttribute = selectedAttributes.some(
											(element) => {
												return (
													element.id === id &&
													element.value === value
												);
											}
										);
										return (
											<div key={value}>
												<div
													className={
														selectedAttribute
															? 'text-att-container text-att-active'
															: 'text-att-container'
													}
												>
													{value}
												</div>
											</div>
										);
									})}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
