import { useState } from 'react';

function UpdateModal({ id, isVisible, handleBookUpdate }) {
    const [updatedBook, setUpdatedBook] = useState({
        id: id,
        title: ''
    });

    console.log('UpdateModal fired');

    const handleChange = (e) => {
        // do change
    };

    const handleClick = (e) => {
        // submit new title 
        //handleBookUpdate();
    };

    return (
        <div className="update-modal">
            <div className="update-modal-inner">
                <section id="book-update-form" className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h5 className="subtitle">Update book</h5>
                        </div>
                        <br />
                        <div className="level-item">
                            <div className="field has-addons">
                                <p className="control">
                                    <input value={updatedBook.title} onChange={handleChange} type="text" className="input" placeholder="Enter Book Title" />
                                </p>
                                <p className="control">
                                    <button onClick={handleClick} className="button">Add Book</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default UpdateModal;