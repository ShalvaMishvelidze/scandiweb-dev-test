import React, { Component } from 'react';
import Product from '../components/product/Product';
import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client';
import withRouter from '../methods/withRouter';
import { pdpQuerry } from '../querries/pdpQuerry';

class SingleProduct extends Component {
	render() {
		const { data } = this.props;

		const product = data?.product;
		const currency = this.props.currency;
		const cart = this.props.cart;
		const setCart = this.props.setCart;
		const app = this.props.app;

		return (
			<>
				<Product
					product={product}
					currency={currency}
					cart={cart}
					setCart={setCart}
					app={app}
				/>
			</>
		);
	}
}

export default withRouter(
	graphql(
		gql`
			${pdpQuerry}
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
