import { useDispatch, useSelector } from 'react-redux';
import {
    setTitleFilter,
    selectTitleFilter,
} from '../../redux/slices/filterSlice';
import './Filter.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);

    const handleTitleFilterChange = (e) => {
        //отправляем в redux store ->
        dispatch(setTitleFilter(e.target.value));
    };

    return (
        <div className="app-block filter">
            <div className="filter-group">
                <input
                    type="text"
                    value={titleFilter}
                    placeholder="Filter by title.."
                    onChange={handleTitleFilterChange}
                />
                {/* <button type="button" onClick={handleTitleFilterChange}>
                    Filter
                </button> */}
            </div>
        </div>
    );
};
export default Filter;
