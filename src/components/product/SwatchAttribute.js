import React, { Component } from 'react';

export default class SwatchAttribute extends Component {
	render() {
		const items = this.props.items;
		const color = this.props.color;
		const setColor = this.props.setColor;
		const self = this.props.self;

		return (
			<>
				{items.map((item) => {
					const { value, id } = item;
					return (
						<div
							key={id}
							className={`${
								color !== id ? '' : 'selected-color'
							} color-container`}
							onClick={(e) => setColor(id, self)}
							style={{
								backgroundColor: `${value}`,
							}}
						></div>
					);
				})}
			</>
		);
	}
}
