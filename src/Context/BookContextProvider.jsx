import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();



const BookContextProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        // 1.store book id
        console.log(currentBook, "current book");

        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error('The book is already exist in read list');
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`)
        }
        console.log(storedBooks, "stored book");
    }

    const handleWishList = (currentBook) => {
        // 1.store book id
        // console.log(currentBook, "current book");

        const isExistReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (isExistReadList) {
            toast.error("This book is already in read list.");
            return;
        }


        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error('The book is already exist in wish list');
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
        console.log(wishList, "wish list book");
    }


    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookContextProvider;