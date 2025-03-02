import './BookForm.css';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/slices/booksSlice';
import createBookWithID from '../../utils/createBookWithID';
import booksData from '../../data/books.json';

export const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            const book = createBookWithID({ title, author });
            dispatch(addBook(book));
            setTitle('');
            setAuthor('');
        }
    };

    const handleAddRandomBookViaAPI = async () => {
        try {
            const res = await axios.get('http://localhost:4000/random-book');
            if (res?.data?.title && res?.data?.author) {
                dispatch(addBook(createBookWithID(res.data)));
            }
        } catch (error) {
            console.log('Error fetching random book', error);
        }
    };

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];

        const randomBookWithID = createBookWithID(randomBook);
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
                    <button type="button" onClick={handleAddRandomBookViaAPI}>
                        Add random via API
                    </button>
                </div>
            </form>
        </div>
    );
};
export default BookForm;
