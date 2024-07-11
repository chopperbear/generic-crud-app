function Book({ book, handleBookListUpdate, handleBookListDelete }) {

    console.log('book');
    console.log(book);

    const handleBookEdit = (e) => {
        // handle click of the edit anchor here
        console.log('handleBookEdit');
        console.log(e.target.attributes.bookid.value);
        handleBookListUpdate(e.target.attributes.bookid.value);
    };

    const handleBookDelete = (e) => {
        // handle click of the delete anchor here
        console.log('handleBookDelete');
        console.log(e.target.attributes.bookid);
        handleBookListDelete(e.target.attributes.bookid.value);
    };

    return (
        <div className="book cell">
            <div className="">
                <p className="book-action-container">
                    <a bookid={book.id} onClick={handleBookEdit} title="Edit" className="book-action book-action-update book-action-text">
                        Edit
                    </a>
                    &nbsp;
                    <a bookid={book.id} onClick={handleBookDelete} title="Delete" className="book-action book-action-delete book-action-text">
                        X
                    </a>
                </p>
                <figure className="book-image image is-128x128">
                    <img alt={book.title} src="https://bulma.io/assets/images/placeholders/128x128.png" />
                </figure>
                <p className="book-text book-title">Title: <span className="book-title-text">{book.title}</span></p>
                <p className="book-text book-author">Author: <span className="book-author-text">{book.author}</span></p>
                <p className="book-text book-genre">Genre: <span className="book-genre-text">{book.genre}</span></p>
            </div>
        </div>
    );
};

export default Book;