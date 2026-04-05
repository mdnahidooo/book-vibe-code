import React, { use } from 'react';
import BookCard from '../shared/UI/BookCard';


const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books);

    return (
        <div className='w-10/12 mx-auto my-12'>
            <h2 className='font-bold text-center text-3xl mb-6'>All Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    books.map((book, index) => {
                        return (
                            <BookCard key={index} book={book}></BookCard>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;