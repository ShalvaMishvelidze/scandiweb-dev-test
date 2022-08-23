import React, { Component } from 'react';
import { selectedAttribute } from '../../methods/selectedAttribute';

export default class TextAtt extends Component {
	render() {
		const type = this.props.type;
		const items = this.props.items;
		const selectedAttributes = this.props.selectedAttributes;
		const id = this.props.id;
		return (
			<>
				{type !== 'swatch' &&
					items.map((item) => {
						const { value } = item;

						return (
							<div key={value}>
								<div
									className={
										selectedAttribute(selectedAttributes, id, value)
											? 'text-att-container text-att-active'
											: 'text-att-container'
									}
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
