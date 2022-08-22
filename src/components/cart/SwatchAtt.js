import React, { Component } from 'react';

export default class SwatchAtt extends Component {
	render() {
		const type = this.props.type;
		const items = this.props.items;
		const color = this.props.color;
		return (
			<>
				{type === 'swatch' &&
					items.map((item) => {
						const { value, id } = item;
						return (
							<div
								key={id}
								className={
									id === color
										? 'color-container selected-color'
										: 'color-container'
								}
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
