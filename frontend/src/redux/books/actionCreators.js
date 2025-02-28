import * as a from './actionsTypes';

export const addBook = (newBook) => {
    return {
        type: a.ADD_BOOK,
        payload: newBook,
    };
};
