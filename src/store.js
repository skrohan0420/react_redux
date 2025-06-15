import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import { loadState, saveState } from './utils/localStorage';

const preloadedState = {
    cart: loadState() || {
        cartItems: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
};

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
    preloadedState,
});


// Save to localStorage on every state change
store.subscribe(() => {
    saveState(store.getState().cart);
});