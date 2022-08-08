import React, { Component } from 'react';

export default class TextAttribute extends Component {
	render() {
		const items = this.props.items;
		const setSelectedAttributes = this.props.setSelectedAttributes;
		const self = this.props.self;
		const id = this.props.id;

		return (
			<>
				{items.map((item) => {
					const { value } = item;
					return (
						<div key={value}>
							<div
								className="text-att-container"
								onClick={() => setSelectedAttributes(id, value, self)}
							>
								{value}
							</div>
						</div>
					);
				})}
			</>
		);
	}
}
