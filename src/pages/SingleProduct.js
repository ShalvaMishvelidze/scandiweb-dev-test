import React, { Component } from 'react';
import Product from '../components/Product';
import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client';
import withRouter from '../components/withRouter';
import Error from './Error';

class SingleProduct extends Component {
	render() {
		const currency = this.props.currency;
		const cart = this.props.cart;
		const setCart = this.props.setCart;

		const { data } = this.props;
		const { loading, error } = data;

		const product = data?.product;

		return (
			<>
				<Product
					product={product}
					currency={currency}
					cart={cart}
					setCart={setCart}
				/>
				{error && <Error />}
				{loading && <p>Loading...</p>}
			</>
		);
	}
}

export default withRouter(
	graphql(
		gql`
			query GET_PRODUCT($productId: String!) {
				product(id: $productId) {
					id
					__typename @skip(if: true)
					name
					inStock
					gallery
					description
					category
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
		`,
		{
			options: (props) => ({
				variables: {
					productId: props.params.productId,
				},
			}),
		}
	)(SingleProduct)
);
