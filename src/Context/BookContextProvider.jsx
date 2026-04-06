import React, { Children, createContext, useState } from 'react';


export const BookContext = createContext();



const BookContextProvider = ({ children }) => {
    
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        // 1.store book id
        console.log(currentBook, "current book");

        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            alert('The book is already exist');
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to list`)
        }
        console.log(storedBooks, "stored book");
    }


    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookContextProvider;