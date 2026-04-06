import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();



const BookContextProvider = ({ children }) => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        // 1.store book id
        console.log(currentBook, "current book");

        const isExistBook = readList.find((book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error('The book is already exist in read list');
        }
        else {
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`)
        }
        console.log(readList, "stored book");
    }

    const handleWishList = (currentBook) => {
        // 1.store book id
        // console.log(currentBook, "current book");

        const isExistReadList = readList.find((book) => book.bookId === currentBook.bookId);
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
        readList,
        setReadList,
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