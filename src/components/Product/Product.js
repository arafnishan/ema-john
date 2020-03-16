import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img, name, category, seller, wholePrice, priceFraction, stock, star, starCount} = props.product;
        return (

        <div className="flex items-center bg-gray-200 w-full">
            <div className="flex-shrink-0 w-1/2 sm:w-1/2 lg:w-1/3">
                <img className="w-full" src={img} alt=""/>
            </div>
            <div className=" px-4 py-2 m-2">
                <h2 className="text-gray-800 font-bold text-base">
                    {name}
                </h2>
                Category: {category}, By: {seller}, Price: {wholePrice +"."+ priceFraction}, Stock: {stock}
                <div className="block mt-3">
                    <button onClick={()=> props.handleProduct(props.product)}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />

                        <span>Add to Cart</span>
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Product;