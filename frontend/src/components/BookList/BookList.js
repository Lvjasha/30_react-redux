import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import './BookList.css';
import { deleteBook } from '../../redux/books/actionCreators';
import { BookForm } from '../BookForm/BookForm';

const BookList = () => {
    const books = useSelector((state) => state.books);

    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        deleteBook(id);
        dispatch(deleteBook(id));
    };

    const isHFavorite = (id) => {
        favoriteBook(id);
        dispatch(favoriteBook(books.isFavorite));
    };

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                {book.isFavorite ? (
                                    <BsBookmarkStarFill className="star-icon" />
                                ) : (
                                    <BsBookmarkStar className="star-icon" />
                                )}
                                <button
                                    type="submit"
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    Delete book
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default BookList;
