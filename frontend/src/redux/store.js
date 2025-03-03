import { configureStore } from '@reduxjs/toolkit';
import bookReduser from './slices/booksSlice';
import filterReducer from './slices/filterSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    books: bookReduser,
    filter: filterReducer,
    error: errorReducer,
  },
});
export default store;
