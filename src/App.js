import { useState } from 'react';
import BookCreateForm from './Components/BookCreateForm';
import BookList from './Components/BookList';
import UpdateModal from './Components/UpdateModal.js';
import { addBook } from './api/api.js'
import 'bulma/css/bulma.min.css';
import './App.css';

/*
Flow: 

- App 
  - BookCreate (create)
  - BookList (read)
    - Book
      - BookEdit (update, delete)
*/
function App() {
  // set initial book state, and modal visibility state
  const [books, setBooks] = useState([]);
  const [isUpdateModalVisible, setUpdateModalVisibility] = useState(false);
  const [bookIDToUpdate, setBookToUpdate] = useState(0);

  const handleSubmit = (bookObj) => {
    const currentBookList = [
      ...books,
      bookObj
    ];
    setBooks(currentBookList);
  };

  const handleUpdateModalToggle = () => {
    // toggles the update modal overlay
    const modalVisibleBool = !isUpdateModalVisible;
    setUpdateModalVisibility(modalVisibleBool);
  };

  // this is triggered by clicking edit on a book tile
  // or its triggered by clicking "Update Book"
  const handleBookListUpdate = (bookObj) => {
    const updatedBookList = books;

    // if modal is open we need to update the book
    // else we need to save the Book ID because we've clicked "edit"
    if (isUpdateModalVisible) {
      updatedBookList.forEach((book, index) => {
        console.log(book.id, Number(bookObj.id));
        if (book.id === Number(bookObj.id)) {
          book.title = bookObj.title;
        }
      });
    } else {
      const bookID = bookObj.id;
      setBookToUpdate(bookID);
    }

    handleUpdateModalToggle();
  };

  const handleDelete = (bookObj) => {
    const updatedBookList = [];

    books.forEach((book, index) => {
      if (book.id !== Number(bookObj.id)) {
        updatedBookList.push(book);
      }
    });

    setBooks(updatedBookList);
  };

  return (
    <div className="App">
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <h1 className="title"></h1>
          </div>
        </section>
        <BookCreateForm onSubmit={handleSubmit} />
        <BookList books={books} handleBookListUpdate={handleBookListUpdate} handleBookListDelete={handleDelete} />
      </div>
      <UpdateModal bookID={bookIDToUpdate} isUpdateModalVisible={isUpdateModalVisible} handleBookListUpdate={handleBookListUpdate} handleUpdateModalToggle={handleUpdateModalToggle} />
    </div>
  );
}

export default App;
