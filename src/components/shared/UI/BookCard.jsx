import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <div>
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
                <figure className='p-6'>
                    <img
                        src={book.image}
                        alt="Picture of Book"
                        className='h-60 rounded-xl'
                    />

                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-4'>
                        {
                            book.tags.map((tag, index) => (<div key={index} className="badge badge-soft badge-success">{tag}</div>))
                        }
                    </div>
                    <h2 className="card-title font-bold">
                        {book.bookName}
                    </h2>
                    <p className='text-gray-500 font-semibold pb-2'>By: {book.author}</p>

                    <div className="border-t border-dashed pt-4 border-gray-500 card-actions justify-between text-gray-500 font-semibold">
                        <div className="">{book.category}</div>

                        <div className="flex justify-between items-center gap-2">{book.rating} <CiStar />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;