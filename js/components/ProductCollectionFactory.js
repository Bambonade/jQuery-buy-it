import products from "../data/products.js";

export default class ProductCollectionFactory{
    createFactory(product, productList){
       return product.forEach(product => productList.addItem(product));
    }
}