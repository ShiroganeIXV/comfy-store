import { getElement } from '../utils.js';

//select elements
const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart ');

// add event listeners
toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});

closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});

// when add item to cart
export const openCart = () => {
    cartOverlay.classList.add('show');
};
