import { useState } from 'react';
import BookCreateForm from './Components/BookCreateForm';
import BookList from './Components/BookList';
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


  const handleSubmit = (bookObj) => {
    const currentBookList = [
      ...books,
      bookObj
    ];
    setBooks(currentBookList);
  };

  const handleUpdateModalToggle = () => {
    // toggles the update modal overlay
    setUpdateModalVisibility(!isUpdateModalVisible);
  };

  const handleBookListUpdate = (id) => {
    // open the update modal that allows you to enter an updated title for the current book ID 
    // 
    console.log('handleUpdate fired');
    handleUpdateModalToggle();
  };

  const handleDelete = (id) => {
    const updatedBookList = [];

    books.forEach((book, index) => {
      if (book.id !== Number(id)) {
        updatedBookList.push(book);
      }
    });

    setBooks(updatedBookList);

    console.log('handleDelete fired');
  };

  return (
    <div className="App">
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <h1 className="title">Book CRUD</h1>
          </div>
        </section>
        <BookCreateForm onSubmit={handleSubmit} />
        <BookList books={books} handleBookListUpdate={handleBookListUpdate} handleBookListDelete={handleDelete} />
      </div>

    </div>
  );
}

export default App;
