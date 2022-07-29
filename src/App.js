import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Nav from './pages/Nav';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currency: 0,
			category: 0,
			cart: [],
		};
	}

	setCurrency = (index) => {
		this.setState({
			currency: index,
		});
	};

	setCategory = (index) => {
		this.setState({
			category: index,
		});
	};

	setCart = (item) => {
		const checkItemInCart = this.state.cart.some((element) => {
			return (
				element.id === item.id &&
				element.color === item.color &&
				JSON.stringify(element.selectedAttributes) ===
					JSON.stringify(item.selectedAttributes)
			);
		});
		const itemIndex = this.state.cart.findIndex((cartItem) => {
			return (
				cartItem.id === item.id &&
				cartItem.color === item.color &&
				JSON.stringify(cartItem.selectedAttributes) ===
					JSON.stringify(item.selectedAttributes)
			);
		});
		if (!checkItemInCart) {
			this.setState({
				cart: [...this.state.cart, item],
			});
		} else {
			this.setState((prevState) => ({
				cart: prevState.cart.map((cartItem) => {
					return cartItem.name === item.name
						? { ...cartItem, count: this.state.cart[itemIndex].count + 1 }
						: cartItem;
				}),
			}));
		}
	};
	increaseCount = (item, itemIndex) => {
		this.setState((prevState) => ({
			cart: prevState.cart.map((cartItem) => {
				return cartItem.name === item.name
					? { ...cartItem, count: this.state.cart[itemIndex].count + 1 }
					: cartItem;
			}),
		}));
	};
	decreaseCount = (item, itemIndex) => {
		this.setState((prevState) => ({
			cart: prevState.cart.map((cartItem) => {
				return cartItem.name === item.name
					? { ...cartItem, count: this.state.cart[itemIndex].count - 1 }
					: cartItem;
			}),
		}));
	};
	removeFromCart = (itemIndex) => {
		this.state.cart.splice(itemIndex, 1);
	};

	render() {
		const { data } = this.props;
		const { error, loading } = data;

		const categories = data?.categories;
		const currencies = data?.currencies;
		return (
			<>
				<Routes>
					<Route
						path="/"
						element={
							<Nav
								key={categories?.name}
								currency={this.state.currency}
								currencies={currencies}
								categories={categories}
								error={error}
								loading={loading}
								setCurrency={this.setCurrency}
								setCategory={this.setCategory}
								cart={this.state.cart}
								category={this.state.category}
							/>
						}
					>
						<Route
							index
							element={
								<Categories
									currency={this.state.currency}
									category={this.state.category}
									cart={this.state.cart}
									setCart={this.setCart}
								/>
							}
						/>
						<Route
							path="/products/:productId"
							element={
								<SingleProduct
									currency={this.state.currency}
									cart={this.state.cart}
									setCart={this.setCart}
								/>
							}
						/>
						<Route
							path="/cart"
							element={
								<Cart
									cart={this.state.cart}
									currency={this.state.currency}
									increaseCount={this.increaseCount}
									decreaseCount={this.decreaseCount}
									removeFromCart={this.removeFromCart}
								/>
							}
						/>
						<Route path="*" element={<Error />} />
					</Route>
				</Routes>
			</>
		);
	}
}

export default graphql(
	gql`
		query {
			categories {
				name
			}
			currencies {
				label
				symbol
			}
		}
	`
)(App);
