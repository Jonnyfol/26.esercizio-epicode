import React, { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Myfooter from "./components/Myfooter";
import Myalert from "./components/Myalert";
import AllTheBooks from "./components/AllTheBooks";
import CommentArea from "./components/Commentarea";
import SingleBook from "./components/singlebook";

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <NavbarComponent
          searchText={searchText}
          onSearchChange={handleSearchChange}
        />
        <Myalert />
        <div className="row">
          <div className="col-md-6">
            <AllTheBooks
              searchText={searchText}
              onBookSelect={handleBookSelect}
            />
          </div>
          <div className="col-md-6">
            {/* Verifica se selectedBook è definito prima di renderizzare CommentArea */}
            {selectedBook && (
              <CommentArea book={selectedBook} selected={true} />
            )}
          </div>
        </div>
      </div>
      <Myfooter />
    </div>
  );
}

export default App;
