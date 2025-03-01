import './BookForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
import { v4 as uuid4 } from 'uuid';
import booksData from '../../data/books.json';

export const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            const book = {
                title,
                author,
                id: uuid4(),
                isFavorite: false,
            };
            dispatch(addBook(book));
            setTitle('');
            setAuthor('');
        }
    };

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];

        const randomBookWithID = {
            ...randomBook,
            id: uuid4(),
            isFavorite: false,
        };
        dispatch(addBook(randomBookWithID));
    };

    return (
        <div className="app-block book-form">
            <h2>Add a new Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <button type="submit">Add Book</button>
                    <button type="button" onClick={handleAddRandomBook}>
                        Add random book
                    </button>
                </div>
            </form>
        </div>
    );
};
export default BookForm;
