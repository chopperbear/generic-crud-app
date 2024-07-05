import BookCreateForm from './Components/BookCreateForm';
import BookList from './Components/BookList';
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
  return (
    <div className="App">
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <h1 className="title">React CRUD App</h1>
          </div>
        </section>
        <BookCreateForm />
        <BookList />
      </div>
    </div>
  );
}

export default App;
