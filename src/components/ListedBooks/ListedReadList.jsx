import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContextProvider';
import BookCard from '../shared/UI/BookCard';

const ListedReadList = ({ sortingType }) => {

    const { readList } = useContext(BookContext);
    // console.log(readList, 'Stored books');
    const [filteredReadList, setFilteredReadList] = useState(readList);



    useEffect(() => {
        if (sortingType) {
            if (sortingType === 'pages') {
                const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sortedData);

                setFilteredReadList(sortedData);
            }
            else if (sortingType === 'rating') {
                const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
                console.log(sortedData);

                setFilteredReadList(sortedData);
            }
        }
    }, [sortingType, readList]);



    if (filteredReadList.length === 0) {
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
                    filteredReadList.map((book, index) => <BookCard key={index} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default ListedReadList;