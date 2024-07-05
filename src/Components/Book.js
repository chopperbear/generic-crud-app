function Book({ title, image, author, genre }) {
    return (
        <div className="book cell">
            <div className="">
                <p className="book-action-container">
                    <a onClick="#" title="edit" className="book-action">
                        <span className="book-action-text">edit</span>
                    </a>
                    &nbsp;
                    <a onClick="#" title="delete" className="book-action">
                        <span className="book-action-text">x</span>
                    </a>
                </p>
                <figure class="book-image image is-128x128">
                    <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
                </figure>
                <p className="book-text book-title">title</p>
                <p className="book-text book-author">author</p>
                <p className="book-text book-genre">genre</p>
            </div>
        </div>
    );
};

export default Book;