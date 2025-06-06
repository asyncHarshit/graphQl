

import { products } from "../data/product.js";

const resolvers ={
    Query : {
        products: ()=> products,
        product:(_,{id})=>products.find((chacha)=> chacha.id === id)
    }
}

export {resolvers}