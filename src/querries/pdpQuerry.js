export const pdpQuerry = `query GET_PRODUCT($productId: String!) {
				product(id: $productId) {
					id
					__typename @skip(if: true)
					name
					inStock
					gallery
					description
					category
					attributes {
						id
						__typename @skip(if: true)
						name
						type
						items {
							displayValue
							__typename @skip(if: true)
							value
							id
						}
					}
					prices {
						currency {
							label
							symbol
						}
						amount
					}
					brand
				}
			}`;
