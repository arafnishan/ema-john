import React, {useState} from 'react';
import fakeData from "../../fakeData";
import Product from "../Product/Product";
const Shop = () => {
    const [products, setProducts] = useState(fakeData);
    const handleProduct = (product) => {
        console.log('product handled', product)
    }
    return (
        <div>
            <h1>{products.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            { products.map(pd => <Product
                handleProduct = {handleProduct}
                product={pd}
            />) }
            </div>
        </div>
    );
};

export default Shop;