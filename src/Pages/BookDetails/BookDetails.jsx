import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContextProvider';

const BookDetails = () => {
    const { id } = useParams();
    // console.log(id, "params found");

    const books = useLoaderData();
    // console.log(books);

    const expectedBook = books.find((book) => book.bookId == id);
    // console.log(expectedBook);

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = expectedBook;


    const { handleMarkAsRead, handleWishList } = useContext(BookContext);
    console.log(handleMarkAsRead, "book context");



    return (
        <div className="w-10/12 mx-auto my-8">
            <div className="flex flex-col lg:flex-row gap-8 bg-base-100 p-6 rounded-xl">

                {/* 🖼️ Image - 40% */}
                <div className="lg:w-2/5 w-full flex items-center justify-center bg-base-200 rounded-xl p-6">
                    <img
                        src={image}
                        alt={bookName}
                        className="max-h-100 object-contain rounded-lg"
                    />
                </div>

                {/* 📄 Details - 60% */}
                <div className="lg:w-3/5 w-full space-y-4">

                    {/* Title */}
                    <h2 className="text-4xl font-bold">{bookName}</h2>

                    {/* Author */}
                    <p className="text-gray-500 font-semibold">
                        By: {author}
                    </p>

                    {/* Category */}
                    <div className="border-t border-b py-2 border-gray-400">
                        {category}
                    </div>


                    {/* Review */}
                    <p className="text-gray-600">
                        <span className="font-semibold text-black">Review: </span>
                        {review}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2border-b py-2 border-gray-400"> Tags:
                        {tags.map((tag, index) => (
                            <span key={index} className="badge rounded-xl bg-base-200 text-green-500">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                        <p><span className="font-semibold">Pages:</span> {totalPages}</p>
                        <p><span className="font-semibold">Rating:</span> {rating}</p>
                        <p><span className="font-semibold">Publisher:</span> {publisher}</p>
                        <p><span className="font-semibold">Year:</span> {yearOfPublishing}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="btn btn-outline" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
                        <button className="btn btn-info text-white" onClick={() => handleWishList(expectedBook)}>Add to Wishlist</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;