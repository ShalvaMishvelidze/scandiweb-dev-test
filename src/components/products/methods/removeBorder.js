export const removeBorder = (e, index) => {
	e.currentTarget.classList.remove('products-hover');
	const addToCart = Array.from(document.querySelectorAll('.add-to-cart'));
	addToCart[index].classList.remove('display-add-to-cart');
};
