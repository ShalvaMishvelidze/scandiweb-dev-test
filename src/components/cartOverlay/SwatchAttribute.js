import React, { Component } from 'react';

export default class SwatchAttribute extends Component {
	render() {
		const items = this.props.items;
		const color = this.props.color;

		return (
			<div className="overlay-swatch-att">
				{items.map((item) => {
					const { value, id } = item;
					return (
						<div
							key={id}
							className={
								id === color
									? 'overlay-color-container overlay-active-color'
									: 'overlay-color-container'
							}
							style={{
								backgroundColor: `${value}`,
							}}
						></div>
					);
				})}
			</div>
		);
	}
}
