import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    const response = await fetch(allProductsUrl)
    .catch((error) => console.log(error));
    if(response){
        return response.json();
    }
    // need to handle the error
    return response;
    
};

export default fetchProducts;
