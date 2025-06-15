import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
    { id: 1, name: 'Book', price: 100 },
    { id: 2, name: 'Pen', price: 20 },
    { id: 3, name: 'Notebook', price: 50 },
];

function ProductList() {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id} style={{ marginBottom: '1rem' }}>
                    <strong>{product.name}</strong> - ₹{product.price}
                    <button onClick={() => dispatch(addToCart(product))} style={{ marginLeft: '1rem' }}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
