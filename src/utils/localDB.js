
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');
    // console.log(allReadList, 'Read list from local DB');

    if (allReadList) return JSON.parse(allReadList);

    return [];
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();

    const isBookAlreadyExist = allBooks.find((item) => item.bookId === book.bookId);

    if (!isBookAlreadyExist) {
        //
        //ei data ta local DB te add korte chai.
        allBooks.push(book);
        localStorage.setItem('readList', JSON.stringify(allBooks))
    }

}

export { getAllReadListFromLocalDB, addReadListToLocalDB };