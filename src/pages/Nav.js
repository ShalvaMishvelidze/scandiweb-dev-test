import Logo from '../components/nav/Logo';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../components/nav/Categories';
import CurrencyContainer from '../components/nav/CurrencyContainer';
import CartOverlayContainer from '../components/nav/CartOverlayContainer';
import { getQuantity } from '../methods/getQuantity';
import { setDropdownFalse } from '../methods/setDropdownFalse';

export default class Nav extends Component {
	constructor() {
		super();
		this.state = {
			dropdown: false,
			cartDropdown: false,
		};
	}
	render() {
		const currency = this.props.currency;
		const setCurrency = this.props.setCurrency;
		const cart = this.props.cart;
		const categories = this.props.categories;
		const currencies = this.props.currencies;
		const app = this.props.app;
		const self = this;
		const quantity = getQuantity(cart);

		return (
			<nav onClick={() => setDropdownFalse(self)}>
				<div className="nav">
					<Categories categories={categories} app={app} />
					<Logo />
					<CurrencyContainer
						self={self}
						currencies={currencies}
						currency={currency}
						setCurrency={setCurrency}
						app={app}
					/>
					<CartOverlayContainer
						self={self}
						cart={cart}
						currency={currency}
						quantity={quantity}
						app={app}
						cartDropdown={this.state.cartDropdown}
					/>
				</div>
				<section>
					<Outlet />
				</section>
				<section
					className={
						this.state.cartDropdown
							? 'overlay-backdrop display-block'
							: 'overlay-backdrop'
					}
				></section>
			</nav>
		);
	}
}
