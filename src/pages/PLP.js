import { graphql } from '@apollo/client/react/hoc';
import React, { Component } from 'react';
import { gql } from '@apollo/client/core';
import withRouter from '../methods/withRouter';
import Products from '../components/products/Products';
import { plpQuerry } from '../querries/plpQuerry';

class CategoriesPage extends Component {
	render() {
		const currency = this.props.currency;
		const cart = this.props.cart;
		const setCart = this.props.setCart;
		const app = this.props.app;
		const { data } = this.props;
		const category = data?.category;

		return (
			<main className="main">
				<Products
					category={category}
					currency={currency}
					cart={cart}
					setCart={setCart}
					app={app}
				/>
			</main>
		);
	}
}

export default withRouter(
	graphql(
		gql`
			${plpQuerry}
		`,
		{
			options: (props) => ({
				variables: {
					categoryName: props.params.categoryName,
				},
			}),
		}
	)(CategoriesPage)
);
