import React, { Component } from 'react';
import { setCurrencies } from './methods/setCurrencies';
import { setDropdown } from './methods/setDropdown';

export default class CurrencyContainer extends Component {
	render() {
		const self = this.props.self;
		const currencies = this.props.currencies;
		const currency = this.props.currency;
		const setCurrency = this.props.setCurrency;
		const app = this.props.app;

		return (
			<div className="currency-container">
				<button
					className="currency-changer"
					onClick={() => setDropdown(self)}
				>
					{currencies && currencies[currency].symbol}{' '}
					<img
						className="currency-arrow"
						src={
							self.state.dropdown
								? './images/arrow-up.png'
								: './images/arrow-down.png'
						}
						alt="arrow"
					/>
				</button>
				<div
					className={
						self.state.dropdown
							? `dropdown-menu display-block`
							: `dropdown-menu`
					}
				>
					{currencies &&
						currencies.map((productCurrency, index) => {
							return (
								<button
									className="currency-btn"
									key={index}
									onClick={() =>
										setCurrencies(self, setCurrency, index, app)
									}
								>
									<span>{productCurrency.symbol}</span>{' '}
									{productCurrency.label}
								</button>
							);
						})}
				</div>
			</div>
		);
	}
}
