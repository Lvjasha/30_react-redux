import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
