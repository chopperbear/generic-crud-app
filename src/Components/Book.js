function Book({ book, handleBookListUpdate, handleBookListDelete }) {

    const handleBookEdit = (e) => {
        // handle click of the edit anchor here
        const bookEditObj = {
            id: e.target.attributes.bookid.value,
            title: e.target.attributes.booktitle.value,
        };
        handleBookListUpdate(bookEditObj);
    };

    const handleBookDelete = (e) => {
        // handle click of the delete anchor here
        const bookDelObj = {
            id: e.target.attributes.bookid.value,
            title: e.target.attributes.booktitle.value,
        };
        handleBookListDelete(bookDelObj);
    };

    return (
        <div className="book cell">
            <div className="">
                <p className="book-action-container">
                    <a bookid={book.id} booktitle={book.title} onClick={handleBookEdit} title="Edit" className="book-action book-action-update book-action-text">
                        Edit
                    </a>
                    &nbsp;
                    <a bookid={book.id} booktitle={book.title} onClick={handleBookDelete} title="Delete" className="book-action book-action-delete book-action-text">
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