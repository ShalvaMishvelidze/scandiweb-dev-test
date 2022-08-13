import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import Cart from './pages/CartPage';
import IndexPage from './pages/IndexPage';
import Nav from './pages/Nav';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import './App.css';
import { setCart } from './methods/setCart';
import { setCurrency } from './methods/setCurrency';
import { increaseCount } from './methods/increaseCount';
import { decreaseCount } from './methods/decreaseCount';
import { removeFromCart } from './methods/removeFromCart';
import CategoriesPage from './pages/CategoriesPage';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currency: 0,
			cart: [],
		};
	}

	render() {
		const { data } = this.props;
		const { error, loading } = data;

		const app = this;

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
								setCurrency={setCurrency}
								cart={this.state.cart}
								increaseCount={increaseCount}
								decreaseCount={decreaseCount}
								removeFromCart={removeFromCart}
								app={app}
							/>
						}
					>
						<Route
							index
							element={
								<IndexPage
									currency={this.state.currency}
									cart={this.state.cart}
									setCart={setCart}
									app={app}
								/>
							}
						/>
						<Route
							path="/:categoryName"
							element={
								<CategoriesPage
									currency={this.state.currency}
									cart={this.state.cart}
									setCart={setCart}
									app={app}
								/>
							}
						/>
						<Route
							path="/products/:productId"
							element={
								<SingleProduct
									currency={this.state.currency}
									cart={this.state.cart}
									setCart={setCart}
									app={app}
								/>
							}
						/>
						<Route
							path="/cart"
							element={
								<Cart
									cart={this.state.cart}
									currency={this.state.currency}
									increaseCount={increaseCount}
									decreaseCount={decreaseCount}
									removeFromCart={removeFromCart}
									app={app}
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
