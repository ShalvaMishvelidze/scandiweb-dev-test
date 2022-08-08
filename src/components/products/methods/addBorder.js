export const addBorder = (e, index, inStock) => {
	e.currentTarget.classList.add('products-hover');
	const addToCart = Array.from(document.querySelectorAll('.add-to-cart'));
	addToCart[index].classList.add(
		inStock ? 'display-add-to-cart' : 'add-to-cart'
	);
};
