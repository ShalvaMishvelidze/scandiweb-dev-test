import React, { Component } from 'react';
import SwatchAttribute from './SwatchAttribute';
import TextAttribute from './TextAttribute';

export default class Attributes extends Component {
	render() {
		const attribute = this.props.attribute;
		const setColor = this.props.setColor;
		const self = this.props.self;
		const color = this.props.color;
		const cartAttributes = this.props.cartAttributes;
		const setSelectedAttributes = this.props.setSelectedAttributes;
		const { id, name, type, items } = attribute;

		return (
			<>
				<h1 className="product-att-name">{name}:</h1>
				<div className="items-container">
					{type === 'swatch' && (
						<SwatchAttribute
							items={items}
							color={color}
							setColor={setColor}
							self={self}
						/>
					)}
					{type !== 'swatch' && (
						<TextAttribute
							items={items}
							cartAttributes={cartAttributes}
							setSelectedAttributes={setSelectedAttributes}
							self={self}
							id={id}
						/>
					)}
				</div>
			</>
		);
	}
}
