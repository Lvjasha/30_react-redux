import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import './BookList.css';
import {
    deleteBook,
    toggleFavorite,
    selectBooks,
} from '../../redux/slices/booksSlice';
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilters,
} from '../../redux/slices/filterSlice';

const BookList = () => {
    const books = useSelector(selectBooks);
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilters);

    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    const filteredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());

        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;

        return matchesTitle && matchesAuthor && matchesFavorite;
    });

    const highlightMatch = (text, filter) => {
        if (!filter) return text;
        const regex = new RegExp(`(${filter})`, 'gi');
        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {substring}
                    </span>
                );
            }
            return substring;
        });
    };

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {filteredBooks.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {highlightMatch(book.title, titleFilter)}{' '}
                                by{' '}
                                <strong>
                                    {highlightMatch(book.author, authorFilter)}
                                </strong>
                            </div>
                            <div className="book-actions">
                                <span
                                    onClick={() =>
                                        handleToggleFavorite(book.id)
                                    }
                                >
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkStar className="star-icon" />
                                    )}
                                </span>
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
