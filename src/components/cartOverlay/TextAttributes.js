import React, { Component } from 'react';

export default class TextAttributes extends Component {
	render() {
		const items = this.props.items;
		const selectedAttributes = this.props.selectedAttributes;
		const id = this.props.id;

		return (
			<div className="overlay-text-att">
				{items.map((item) => {
					const { value } = item;
					const selectedAttribute = selectedAttributes.some((element) => {
						return element.id === id && element.value === value;
					});
					return (
						<div key={value}>
							<div
								className={
									selectedAttribute
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
