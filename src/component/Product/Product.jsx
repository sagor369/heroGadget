import React from 'react';

const Product = ({product}) => {
    console.log(product)
    const {name,price, picture,category,id } = product
    return (
        <div className='p-6 rounded-lg border shadow-lg bg-gray-100'>
            <div>
                <img className='img-cover' src={picture} alt="" />
            </div>
            <div>
                <h1 className='font-bold sm:text-2xl text-xl mb-2'>{name}</h1>
                <p className='text-gray-700 '>Category : {category}</p>
                <p className='text-gray-700 font-bold'>Price: {price}$</p>
                <div>
                    <button className='btn-primary'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;