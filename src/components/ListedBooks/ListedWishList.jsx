import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContextProvider';
import BookCard from '../shared/UI/BookCard';

const ListedWishList = () => {

    const {  wishList } = useContext(BookContext);
    console.log(wishList, 'wish list');
    
    if (wishList.length === 0) {
        return (
            <div className=" flex flex-col justify-center items-center text-center space-y-4 bg-base-200 py-10 rounded-xl mt-8">

                {/* Icon */}
                <div className="text-6xl">📚</div>

                {/* Title */}
                <h2 className="card-title text-2xl">
                    No Books Found
                </h2>

                {/* Description */}
                <p className="text-gray-500">
                    Looks like there are no books available right now.
                </p>

            </div>
        ) 
        
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
                {
                    wishList.map((book, index) => <BookCard key={index} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default ListedWishList;