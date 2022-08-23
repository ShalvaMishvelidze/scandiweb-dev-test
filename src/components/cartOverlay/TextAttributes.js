import React, { Component } from 'react';
import { selectedAttribute } from '../../methods/selectedAttribute';

export default class TextAttributes extends Component {
	render() {
		const items = this.props.items;
		const selectedAttributes = this.props.selectedAttributes;
		const id = this.props.id;

		return (
			<div className="overlay-text-att">
				{items.map((item) => {
					const { value } = item;
					return (
						<div key={value}>
							<div
								className={
									selectedAttribute(selectedAttributes, id, value)
										? 'overlay-text-att-container overlay-text-att-active'
										: 'overlay-text-att-container'
								}
							>
								{value}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
