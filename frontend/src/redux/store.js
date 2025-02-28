import { configureStore } from '@reduxjs/toolkit';
import bookReduser from './books/reducer';

const store = configureStore({
    reducer: {
        books: bookReduser,
    },
});
export default store;
