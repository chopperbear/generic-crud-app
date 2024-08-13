import { useState } from 'react';

function UpdateModal({ bookID, isUpdateModalVisible, handleUpdateModalToggle, handleBookListUpdate }) {
    const [bookName, setBookName] = useState('');
    const [updatedBook, setUpdatedBook] = useState({
        id: 0,
        title: ''
    });

    const handleClick = () => {
        console.log(`*** ${bookID} ***`);
        handleBookListUpdate({
            id: bookID,
            title: bookName
        });
        setBookName('');
    };

    const handleChange = (e) => {
        setBookName(e.target.value);
    };

    const toggleModalVisibility = (e) => {
        handleUpdateModalToggle();
    };

    return (
        <div data-id={bookID} className="update-modal" style={{ display: (isUpdateModalVisible ? 'flex' : 'none') }}>
            <div className="update-modal-inner">
                <a href="#" className="close" onClick={toggleModalVisibility}>X</a>
                <section id="book-update-form" className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h5 className="subtitle">Update book</h5>
                        </div>
                        <br />
                        <div className="level-item">
                            <div className="field has-addons">
                                <p className="control">
                                    <input value={bookName} onChange={handleChange} type="text" className="input" placeholder="Enter Book Title" />
                                </p>
                                <p className="control">
                                    <button onClick={handleClick} className="button">Update Book</button>
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