import Book from './Book';

function BookList({ books, handleBookListUpdate, handleBookListDelete }) {
    const bookList = [];

    console.log('books');
    console.log(books);

    books.forEach((item, index) => {
        bookList.push(
            <Book key={index} book={item} handleBookListUpdate={handleBookListUpdate} handleBookListDelete={handleBookListDelete} />
        );
    });

    console.log(bookList);

    return (
        <div className="grid">
            {bookList}
        </div >
    );
};

export default BookList;