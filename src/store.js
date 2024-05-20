import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => { 
    store = products.map((product)=>{
        const {id, fields} = product;
        const {name, price,featured,company, colors, image:img} = fields;
        const image = img[0].thumbnails.large.url;
        return {id,featured,name,price,company,colors,image};
    })
    setStorageItem('store',store);
};
console.log(store);
const findProduct = () => {};

export {store, setupStore, findProduct};
