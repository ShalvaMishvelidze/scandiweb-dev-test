import { ProductFooter } from './ProductFooter';
import { ActiveImage } from './ActiveImage';
import React, { Component } from 'react';
import ImageContainer from './ImageContainer';
import { addToCart } from './methods/addToCart';
import { setSelectedAttributes } from './methods/setSelectedAttributes';
import { setColor } from './methods/setColor';
import { cartProduct } from './methods/cartProduct';
import Attributes from './Attributes';

export default class product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: 0,
			cartAttributes: [],
			color: '',
		};
	}

	render() {
		const product = this.props.product;
		const currency = this.props.currency;
		const setCart = this.props.setCart;
		const app = this.props.app;

		const self = this;

		return (
			<>
				{product && (
					<div className="product">
						<ImageContainer product={product} self={self} />
						<ActiveImage product={product} self={self} />
						<div className="product-content">
							<h1 className="product-name">
								<span>{product.brand}</span> {product.name}
							</h1>
							{product?.attributes &&
								product.attributes.map((attribute) => {
									return (
										<div
											key={attribute.id}
											className="attribute-container"
											ref={this.setAttRef}
										>
											<Attributes
												attribute={attribute}
												setColor={setColor}
												color={this.state.color}
												self={self}
												cartAttributes={this.state.cartAttributes}
												setSelectedAttributes={
													setSelectedAttributes
												}
											/>
										</div>
									);
								})}
							<ProductFooter
								addToCart={addToCart}
								product={product}
								setCart={setCart}
								cartProduct={cartProduct}
								self={self}
								app={app}
								currency={currency}
							/>
						</div>
					</div>
				)}
			</>
		);
	}
}
