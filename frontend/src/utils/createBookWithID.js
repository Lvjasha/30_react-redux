import { v4 as uuid4 } from 'uuid';

const createBookWithID = (book) => {
    return {
        ...book,
        id: uuid4(),
        isFavorite: false,
    };
};
export default createBookWithID;
