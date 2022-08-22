import React, { Component } from 'react';
import CartFooter from './CartFooter';
import ItemLeft from './ItemLeft';
import ItemRight from './ItemRight';

export default class Cart extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;
		const app = this.props.app;

		return (
			<div className="cart">
				<p className="cart-title">cart</p>
				<div className="underline"></div>
				<div className="cart-items">
					{cart.map((item, index) => {
						const { name, gallery, count } = item;
						return (
							<section key={index}>
								<div className="cart-items-container">
									<ItemLeft item={item} currency={currency} />
									<ItemRight
										name={name}
										gallery={gallery}
										count={count}
										app={app}
										item={item}
										index={index}
									/>
								</div>
								<div className="underline"></div>
							</section>
						);
					})}
				</div>
				{cart[0] && <CartFooter cart={cart} currency={currency} />}
			</div>
		);
	}
}
