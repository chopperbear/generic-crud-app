import Book from './Book';

function BookList({ books, handleBookListUpdate, handleBookListDelete }) {
    const bookList = [];

    books.forEach((item, index) => {
        bookList.push(
            <Book key={index} book={item} handleBookListUpdate={handleBookListUpdate} handleBookListDelete={handleBookListDelete} />
        );
    });

    return (
        <div className="grid">
            {bookList}
        </div >
    );
};

export default BookList;