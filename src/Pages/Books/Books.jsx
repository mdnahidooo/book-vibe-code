import React, { useState } from 'react';
import { BookContext } from '../../Context/BookContextProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {

    const [sortingType, setSortingType] = useState("");
    console.log(sortingType, 'sorting type');

    return (
        <div className='max-w-10/12 mx-auto my-10'>
            <div className='flex justify-center mt-1 mb-3'>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sortingType}  ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
                        <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>


            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;