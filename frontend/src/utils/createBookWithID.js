import { v4 as uuid4 } from 'uuid';

const createBookWithID = (book, source) => {
    return {
        ...book,
        source,
        id: uuid4(),
        isFavorite: false,
    };
};
export default createBookWithID;
