import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Error from './Error';
import Categories from '../components/nav/Categories';
import CurrencyContainer from '../components/nav/CurrencyContainer';
import CartOverlayContainer from '../components/nav/CartOverlayContainer';

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
		const error = this.props.error;
		const loading = this.props.loading;
		const categories = this.props.categories;
		const currencies = this.props.currencies;
		const increaseCount = this.props.increaseCount;
		const decreaseCount = this.props.decreaseCount;
		const removeFromCart = this.props.removeFromCart;
		const app = this.props.app;

		const self = this;

		const quantity = cart.reduce((acc, item) => {
			return acc + item.count;
		}, 0);

		return (
			<nav
				onClick={() => {
					if (this.state.dropdown || this.state.cartDropdown) {
						this.setState({
							dropdown: false,
						});
					}
				}}
			>
				<div className="nav">
					<Categories categories={categories} app={app} />
					<div className="logo">
						<img
							src="./images/svg 2.png"
							alt="logo-back"
							className="logo-back"
						/>
						<img
							src="./images/svg 3.png"
							alt="logo-front"
							className="logo-front"
						/>
						<img
							src="./images/svg 19.png"
							alt="logo-front-semi-circle"
							className="logo-front-semi-circle"
						/>
						<img
							src="./images/svg 21.png"
							alt="logo-front-arrow-up"
							className="logo-front-arrow-up"
						/>
					</div>
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
						increaseCount={increaseCount}
						decreaseCount={decreaseCount}
						removeFromCart={removeFromCart}
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

				{error && <Error />}

				{loading && <p>Loading...</p>}
			</nav>
		);
	}
}
