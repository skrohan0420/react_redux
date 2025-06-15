import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

function Cart() {
    const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div style={{ marginTop: '2rem' }}>
            <h2>Cart</h2>
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
            {cartItems.map((item) => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    {item.name} x {item.quantity} = ₹{item.price * item.quantity}
                    <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        style={{ marginLeft: '1rem' }}
                    >
                        Remove
                    </button>
                </div>
            ))}
            {cartItems.length > 0 && (
                <>
                    <p>Total Items: {totalQuantity}</p>
                    <p>Total Price: ₹{totalPrice}</p>
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </>
            )}
        </div>
    );
}

export default Cart;
