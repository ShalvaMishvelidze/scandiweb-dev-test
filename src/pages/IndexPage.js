import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import Error from './Error';
import Products from '../components/products/Products';
import withRouter from '../methods/withRouter';

class IndexPage extends Component {
	render() {
		const currency = this.props.currency;
		const cart = this.props.cart;
		const setCart = this.props.setCart;
		const app = this.props.app;

		const { data } = this.props;
		const { error, loading } = data;

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
				{error && <Error />}
				{loading && <p>Loading...</p>}
			</main>
		);
	}
}

export default withRouter(
	graphql(
		gql`
			query GET_CATEGORY($categoryName: String!) {
				category(input: { title: $categoryName }) {
					name
					__typename @skip(if: true)
					products {
						id
						__typename @skip(if: true)
						name
						inStock
						gallery
						attributes {
							id
							__typename @skip(if: true)
							name
							type
							items {
								displayValue
								__typename @skip(if: true)
								value
								id
							}
						}
						prices {
							currency {
								label
								symbol
							}
							amount
						}
						brand
					}
				}
			}
		`,
		{
			options: (props) => ({
				variables: {
					categoryName: 'all',
				},
			}),
		}
	)(IndexPage)
);
