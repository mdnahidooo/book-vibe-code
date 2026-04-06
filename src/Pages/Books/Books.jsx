import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContextProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {

    const { readList, wishList } = useContext(BookContext);
    console.log(readList, wishList, 'Stored books and wish list');

    return (
        <div className='max-w-10/12 mx-auto my-10'>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;