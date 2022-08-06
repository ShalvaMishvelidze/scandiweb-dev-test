import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Error from './Error';
import CartOverlay from '../components/CartOverlay';

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
		const setCategory = this.props.setCategory;
		const cart = this.props.cart;
		const error = this.props.error;
		const loading = this.props.loading;
		const categories = this.props.categories;
		const currencies = this.props.currencies;
		const category = this.props.category;
		const increaseCount = this.props.increaseCount;
		const decreaseCount = this.props.decreaseCount;
		const removeFromCart = this.props.removeFromCart;

		const quantity = cart.reduce((acc, item) => {
			return acc + item.count;
		}, 0);

		return (
			<nav
				onClick={() => {
					if (this.state.dropdown || this.state.cartDropdown) {
						this.setState({
							dropdown: false,
							// cartDropdown: false,
						});
					}
				}}
			>
				<div className="nav">
					<div className="categories">
						{categories &&
							categories.map((navCategory, index) => {
								return (
									<Link to={'/'}>
										<div
											className={
												index === category ? 'link active' : 'link'
											}
											onClick={() => {
												setCategory(index);
											}}
										>
											{navCategory.name}
										</div>
									</Link>
								);
							})}
					</div>
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
					<div className="currency-container">
						<button
							className="currency-changer"
							onClick={() => {
								if (this.state.dropdown) {
									this.setState({
										dropdown: false,
									});
								} else {
									this.setState({
										dropdown: true,
									});
								}
							}}
						>
							{currencies && currencies[currency].symbol}
						</button>
						<div
							className={
								this.state.dropdown
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
												setCurrency(index);
												this.setState({
													dropdown: false,
												});
											}}
										>
											{productCurrency.symbol}{' '}
											{productCurrency.label}
											<span></span>
										</button>
									);
								})}
						</div>
					</div>
					<div className="cart-overlay-container">
						<button
							className="cart-overlay-btn"
							onClick={() => {
								if (this.state.cartDropdown) {
									this.setState({
										cartDropdown: false,
									});
								} else {
									this.setState({
										cartDropdown: true,
									});
								}
							}}
						>
							<div className="cart-overlay-icon-container">
								<div
									className={
										quantity > 0
											? 'cart-items-count display-cart-items-count'
											: 'cart-items-count'
									}
								>
									<span>{quantity}</span>
								</div>
								<div className="cart-overlay-icon">
									<img src="./images/cart.png" alt="cart" />
								</div>
								<div className="cart-overlay-wheels-container">
									<img
										src="./images/cart-wheel.png"
										alt="cart wheel"
									/>
									<img
										src="./images/cart-wheel.png"
										alt="cart wheel"
									/>
								</div>
							</div>
						</button>
						<div
							className={
								this.state.cartDropdown
									? 'cart-overlay show-overlay'
									: 'cart-overlay'
							}
						>
							<CartOverlay
								cart={cart}
								currency={currency}
								increaseCount={increaseCount}
								decreaseCount={decreaseCount}
								removeFromCart={removeFromCart}
							/>
						</div>
					</div>
				</div>
				<section
					className={this.state.cartDropdown ? 'overlay-backdrop' : null}
				>
					<Outlet />
				</section>
				{error && <Error />}

				{loading && <p>Loading...</p>}
			</nav>
		);
	}
}
