import React, { Component } from 'react';

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
					onClick={() => {
						if (self.state.dropdown) {
							self.setState({
								dropdown: false,
							});
						} else {
							self.setState({
								dropdown: true,
							});
						}
					}}
				>
					{currencies && currencies[currency].symbol}
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
									onClick={() => {
										setCurrency(index, app);
										self.setState({
											dropdown: false,
										});
									}}
								>
									{productCurrency.symbol} {productCurrency.label}
									<span></span>
								</button>
							);
						})}
				</div>
			</div>
		);
	}
}
