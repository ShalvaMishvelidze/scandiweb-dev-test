import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
	render() {
		const categories = this.props.categories;
		const setCategory = this.props.setCategory;
		const category = this.props.category;
		const app = this.props.app;

		return (
			<div className="categories">
				{categories &&
					categories.map((navCategory, index) => {
						return (
							<Link to={'/'}>
								<div
									className={
										index === category ? 'link active' : 'link'
									}
									onClick={() => {
										setCategory(index, app);
									}}
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
