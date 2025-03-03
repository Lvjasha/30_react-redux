import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createBookWithID from '../../utils/createBookWithID';
import axios from 'axios';

const initialState = [];

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:4000/random-book');
  console.log(res.data);
  return res.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // return [...state, action.id];
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      // то же самое, но много текста
      // const index = state.findIndex((book)=>
      // book.id ===action.payload)
      // if (index !== -1){
      //     state.splice(index,1)
      // }
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      //можно мутировать state так:
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
      // return state.map((book) =>
      //     book.id === action.payload
      //         ? { ...book, isFavorite: !book.isFavorite }
      //         : book
      // );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload, 'API'));
      }
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
