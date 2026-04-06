import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContextProvider';

const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);
    console.log(storedBooks, wishList, 'Stored books and wish list');

    return (
        <div>
            <h2>Listed Books</h2>
        </div>
    );
};

export default Books;