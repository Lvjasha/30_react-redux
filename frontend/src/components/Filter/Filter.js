import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
    selectAuthorFilter,
    setAuthorFilter,
    resetFilters,
} from '../../redux/slices/filterSlice';
import './Filter.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);

    const handleTitleFilterChange = (e) => {
        //отправляем в redux store ->
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleResetFilter = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="app-block filter">
            <div className="filter-group">
                <div className="filter-group">
                    <input
                        type="text"
                        value={titleFilter}
                        placeholder="Filter by title.."
                        onChange={handleTitleFilterChange}
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        value={authorFilter}
                        placeholder="Filter by author.."
                        onChange={handleAuthorFilterChange}
                    />
                </div>
                <button type="button" onClick={handleResetFilter}>
                    Reset
                </button>
            </div>
        </div>
    );
};
export default Filter;
