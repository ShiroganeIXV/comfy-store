// global imports
import './src/toggleSidebar.js'; // import whole file with out any specific export
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
    const products = await fetchProducts();
    if (products){
        // add products to the store
        setupStore(products);
        const featured = store.filter((product) => product.featured === true);
        // display featured products
        display(featured,getElement('.featured-center')); // takes in data and a DOM element, and updates the DOM element to reflect the data.
    }

};

// fetch products once the page is loaded
window.addEventListener('DOMContentLoaded', init);