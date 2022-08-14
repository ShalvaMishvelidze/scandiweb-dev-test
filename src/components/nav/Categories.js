import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Categories extends Component {
	render() {
		const categories = this.props.categories;

		return (
			<div className="categories">
				{categories &&
					categories.map((navCategory, index) => {
						return (
							<NavLink
								to={index === 0 ? `/` : `/${navCategory.name}`}
								key={index}
							>
								{({ isActive }) => (
									<div className={isActive ? 'link active' : 'link'}>
										{navCategory.name}
									</div>
								)}
							</NavLink>
						);
					})}
			</div>
		);
	}
}
