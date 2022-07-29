import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import Error from './Error';
import Products from '../components/Products';

class Categories extends Component {
	render() {
		const currency = this.props.currency;
		const category = this.props.category;
		const cart = this.props.cart;
		const setCart = this.props.setCart;

		const { data } = this.props;
		const { error, loading } = data;

		const categories = data?.categories;

		return (
			<main className="main">
				<Products
					categories={categories}
					currency={currency}
					category={category}
					cart={cart}
					setCart={setCart}
				/>
				{error && <Error />}
				{loading && <p>Loading...</p>}
			</main>
		);
	}
}

export default graphql(
	gql`
		query {
			categories {
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
	`
)(Categories);
