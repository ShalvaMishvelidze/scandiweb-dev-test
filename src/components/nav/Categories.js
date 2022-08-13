import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setActiveCategory } from '../../methods/setActiveCategory';

export default class Categories extends Component {
	render() {
		const categories = this.props.categories;

		return (
			<div className="categories">
				{categories &&
					categories.map((navCategory, index) => {
						return (
							<Link to={`/${navCategory.name}`} key={index}>
								<div
									className={
										categories && index === 0 ? 'link active' : 'link'
									}
									onClick={(e) => setActiveCategory(e)}
								>
									{navCategory.name}
								</div>
							</Link>
						);
					})}
			</div>
		);
	}
}
