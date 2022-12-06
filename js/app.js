import ProductCollection from "./models/ProductCollection.js";
import TShirt from './models/TShirt.js';
import Shoes from "./models/Shoes.js";
import Pants from "./models/Pants.js";
import Cart from "./models/Cart.js";
import Product from "./models/Product.js";
import Socks from "./models/Socks.js";
import StorePage from "./components/StorePage.js";
import Hat from "./models/Hat.js";
import products from "./data/products.js";
import ProductCollectionFactory from "./components/ProductCollectionFactory.js";
import product from "./models/Product.js";





// create product collection
// check this out for simple class syntax
// and aggregation example
let productList = new ProductCollection();
let productFactory = new ProductCollectionFactory();
//
// // create some products
// let redShirt = new Product(new TShirt({name: 'Red Shirt', size: 'M', color: 'red'}), 9.99);
// let whiteShoes = new Product(new Shoes({name: 'White Shoes', size: '10', style: 'casual'}), 49.99);
// let blueJeans = new Product(new Pants({name: 'Blue Jeans', size: 'W32 L32', color: 'blue', style: 'jeans'}), 29.99);
// let blackSocks = new Product(new Socks({name: 'Black Socks', color: 'black', height: 'crew', gender: 'male'}), 4.99);
// let sombreroHat = new Product(new Hat({name: 'Sombrero', size: 'XL', color: 'fiesta', material: 'straw', floats: true}), 13.99);
//
// // put products in a list
// productList.addItem(redShirt);
// productList.addItem(whiteShoes);
// productList.addItem(blueJeans);
// productList.addItem(blackSocks);
// productList.addItem(sombreroHat);

productFactory.createFactory(products, productList);

//products.createFactory();
// create/output page
const cart = new Cart();
const page = new StorePage(cart, '#products');
//const page = new CheckoutPage(cart);
//page.outputProducts(productList.items);
page.outputProducts(productList.items);







/**
 DEMO 1 (30min):
 * Turn product inheritance into aggregates


 LAB 1 (30min) with a partner:
 * Finish refactoring Product List and Cart to use aggregates
 * Create "Socks" model with: color, height (e.g. no-show, ankle, crew, knee), and gender
 * Import "Socks" model into app
 * Add some socks to the collection/store


 DEMO 2 (60min):
 * Fun Facts
 * Dependency Injection and Factory Methods:
 * * Dependency Injection to reduce coupling and increase portability
 * * Factories for long methods (https://refactoring.guru/smells/long-method)


 LAB 2 (30min) with a partner:
 * Add wishlist functionality using the same cart model (but not the same cart object)
    1. Create the wishlist in the app using the cart model
    2. Pass the wishlist to the Page
    3. Create addToWishlist(), removeFromWishlist(), outputWishlist() modeled after the existing cart code
    4. Add click event to the "Buy It Later" button


 DEMO 3 (30min):
 * Command pattern (JS version and Java-ish version)


 LAB 3 (30min) with a partner:
 * Refactor outputCart() and outputWishlist() into one method to reduce repetitive code
 * https://refactoring.guru/smells/duplicate-code
 * https://refactoring.guru/form-template-method
    1. Create an outputCartItems() method with all the common code and add needed parameters
    2. Have both outputCart() and outputWishlist() call the outputCartItems() method with needed arguments


 HOMEWORK:
   1. Finish labs if not already complete.
   2. Create additional model for Hat (which is in the data).
   3. Import data from products.js using:
      import products from './data/products.js';
   4. Create ProductFactory (or ProductCollectionFactory) to import data from json file
      into a ProductCollection (replace the existing manual product collection).
        - DO NOT modify the products.js file.
        - If you are using a types map, store it in a separate file and import it like products.
   5. Create additional factory methods for other HTML elements (table, table row, button, etc).
      You may want to explore the Builder pattern as well.


 */
