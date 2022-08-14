import React, { Component } from 'react';
import { activeAtt } from './methods/activeAtt';

export default class TextAttribute extends Component {
	render() {
		const items = this.props.items;
		const setSelectedAttributes = this.props.setSelectedAttributes;
		const self = this.props.self;
		const id = this.props.id;
		const cartAttributes = this.props.cartAttributes;

		return (
			<>
				{items.map((item) => {
					const { value } = item;
					return (
						<div
							key={value}
							className={`${
								activeAtt(cartAttributes, id, value) === -1
									? ''
									: 'text-att-active'
							} text-att-container`}
							onClick={() => setSelectedAttributes(id, value, self)}
						>
							{value}
						</div>
					);
				})}
			</>
		);
	}
}
