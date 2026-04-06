import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContextProvider';

const Books = () => {

    const { storedBooks } = useContext(BookContext);
    console.log(storedBooks, 'Stored books');
    
    return (
        <div>
            <h2>Listed Books</h2>
        </div>
    );
};

export default Books;