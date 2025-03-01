import { configureStore } from '@reduxjs/toolkit';
import bookReduser from './books/reducer';
import filterReducer from './slices/filterSlice';

const store = configureStore({
    reducer: {
        books: bookReduser,
        filter: filterReducer,
    },
});
export default store;
