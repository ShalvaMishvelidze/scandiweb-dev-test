import React, { Component } from 'react';
import { setImage } from './methods/setImage';

export default class ImageContainer extends Component {
	render() {
		const product = this.props.product;
		const self = this.props.self;

		return (
			<div className="image-container">
				{product.gallery.map((image, index) => {
					return (
						<button
							key={index}
							className="img-btn"
							onClick={() => setImage(self, index)}
						>
							<img key={image} src={image} alt={product.name} />
						</button>
					);
				})}
			</div>
		);
	}
}
