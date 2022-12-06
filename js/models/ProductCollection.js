export default class ProductCollection {
    // Private members are prefixed with an underscore.
    // This is by convention only. Everything is still public! 😱
    _products = []; // 👍

    // We can make things truly private with a # prefix:
    // #products = []; // 👎
    // but all of this data will be lost of if the
    // object is cloned or converted to JSON. ☹️

    addItem(item){
        this._products.push(item);
    }

    removeItem(item){
        if(this._products.includes(item)) {
            this._products.splice(this._products.indexOf(item), 1);
        }
    }

    get items(){
        return [...this._products]; // return "read-only" copy of the array
    }
}


