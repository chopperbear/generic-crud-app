import { useState } from "react";

function BookCreateForm({ onSubmit }) {
    const [bookName, setBookName] = useState('');

    const handleClick = () => {
        onSubmit({
            id: Math.floor((Math.random() * 1000000)),
            title: bookName
        });
        setBookName('');
    };

    const handleChange = (e) => {
        setBookName(e.target.value);
    };

    return (
        <section id="book-form" className="level">
            <div className="level-left">
                <div className="level-item">
                    <h5 className="subtitle">Create book listing</h5>
                </div>
                <div className="level-item">
                    <div className="field has-addons">
                        <p className="control">
                            <input value={bookName} onChange={handleChange} type="text" className="input" placeholder="Enter Book Title" />
                        </p>
                        <p className="control">
                            <button onClick={handleClick} className="button">Add Book</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookCreateForm; 