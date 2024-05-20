import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products,element) => {
    console.log(products,element);
    element.innerHTML = products.map((product) => {
        const {id,name,price,image} = product;
        return `
        <article class="product">
          <div class="product-container">
            <img src="${image}" alt="product image" class="product-img img">
            
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
            </div>
          
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>

          </footer>
        </article>
        `
        
    }).join(''); // join() method joins the elements of an array (of products) into a string, and returns the string.
};

export default display;
